import { NextResponse } from "next/server";
import authors from "@/lib/data/authors.json";
import logger from "@/lib/logger";

/**
 * API route to retrieve authors data
 *
 * Used by the AIContentDisclaimer component to randomly select an author
 * for attribution in AI-generated content
 */
export async function GET() {
  try {
    return NextResponse.json(authors);
  } catch (error) {
    logger.error(
      {
        module: "authors-api",
        error,
      },
      "Error fetching authors data",
    );
    return NextResponse.json(
      { error: "Failed to load authors data" },
      { status: 500 },
    );
  }
}
