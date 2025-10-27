import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import logger from "@/lib/logger";

// --- Simplified Logic for Debugging File Existence ---

// Function to scan a directory and check for metadata.ts existence
async function checkMetadataExistence(
  dirPath: string,
  categoryName: string,
): Promise<void> {
  // Changed return type
  const fullDirPath = path.join(process.cwd(), dirPath);
  logger.debug(
    {
      module: "posts-api",
      directory: fullDirPath,
      category: categoryName,
    },
    "Scanning directory for metadata files",
  );

  try {
    const entries = await fs.readdir(fullDirPath, { withFileTypes: true });
    logger.debug(
      {
        module: "posts-api",
        directory: dirPath,
        entryCount: entries.length,
      },
      "Found directory entries",
    );

    for (const entry of entries) {
      if (entry.isDirectory()) {
        const slug = entry.name;
        logger.debug(
          {
            module: "posts-api",
            slug,
          },
          "Processing directory entry",
        );
        if (slug.endsWith("-requirements") || slug.endsWith("-application")) {
          logger.debug(
            {
              module: "posts-api",
              slug,
            },
            "Skipping auxiliary directory",
          );
          continue;
        }

        const metadataPath = path.join(fullDirPath, slug, "metadata.ts");
        try {
          await fs.access(metadataPath, fs.constants.F_OK); // Check if file exists and is accessible
          logger.info(
            {
              module: "posts-api",
              slug,
              category: categoryName,
            },
            "Found metadata.ts file",
          );
        } catch (accessError) {
          // Log only if it's not a 'Not Found' error, or specifically log 'Not Found'
          if (
            accessError instanceof Error &&
            (accessError as NodeJS.ErrnoException).code === "ENOENT"
          ) {
            logger.warn(
              {
                module: "posts-api",
                slug,
                category: categoryName,
                path: metadataPath,
              },
              "Metadata.ts not found",
            );
          } else {
            logger.error(
              {
                module: "posts-api",
                slug,
                category: categoryName,
                error: accessError,
              },
              "Error accessing metadata.ts",
            );
          }
        }
      } else {
        logger.debug(
          {
            module: "posts-api",
            entry: entry.name,
          },
          "Skipping non-directory entry",
        );
      }
    }
  } catch (error) {
    logger.error(
      {
        module: "posts-api",
        directory: fullDirPath,
        error,
      },
      "Error reading directory",
    );
  }
  logger.debug(
    {
      module: "posts-api",
      directory: dirPath,
    },
    "Finished scanning directory",
  );
}

export async function GET() {
  try {
    logger.info(
      {
        module: "posts-api",
      },
      "Posts API route called - checking metadata existence",
    );

    // Run checks but don't collect posts for now
    await checkMetadataExistence("app/personal-finance", "Personal Finance");
    await checkMetadataExistence(
      "app/financial-solutions",
      "Financial Solutions",
    );

    // Return an empty array for now to prevent frontend errors,
    // focus is on checking the server logs for the existence messages.
    logger.debug(
      {
        module: "posts-api",
      },
      "Finished checks, returning empty array",
    );
    return NextResponse.json([]);
  } catch (error) {
    logger.error(
      {
        module: "posts-api",
        error,
      },
      "Failed to get posts",
    );
    return NextResponse.json(
      { error: "Failed to load posts" },
      { status: 500 },
    );
  }
}
