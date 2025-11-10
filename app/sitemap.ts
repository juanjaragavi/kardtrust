import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kardtrust.com";

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/credit-card-recommender-p1`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/credit-card-recommender-p2`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/credit-card-recommender-p3`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/credit-cards`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/personal-loans`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/personal-finance`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/financial-solutions`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookie-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Dynamically get Personal Finance articles
  const personalFinancePages = getDynamicPages(
    "personal-finance",
    0.8,
    "weekly",
  );

  // Dynamically get Financial Solutions pages
  const financialSolutionsPages = getDynamicPages(
    "financial-solutions",
    0.7,
    "weekly",
  );

  return [...staticPages, ...personalFinancePages, ...financialSolutionsPages];
}

/**
 * Dynamically discovers pages in a directory
 */
function getDynamicPages(
  directory: string,
  priority: number,
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never",
): MetadataRoute.Sitemap {
  const baseUrl = "https://kardtrust.com";
  const pages: MetadataRoute.Sitemap = [];

  try {
    const directoryPath = path.join(process.cwd(), "app", directory);

    if (!fs.existsSync(directoryPath)) {
      return pages;
    }

    const entries = fs.readdirSync(directoryPath, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.isDirectory()) {
        const pagePath = path.join(directoryPath, entry.name, "page.tsx");

        // Check if it's a valid page (has page.tsx)
        if (fs.existsSync(pagePath)) {
          let lastModified = new Date();

          // Try to get last modified date from file stats
          try {
            const stats = fs.statSync(pagePath);
            lastModified = stats.mtime;
          } catch {
            // Use current date if stat fails
          }

          pages.push({
            url: `${baseUrl}/${directory}/${entry.name}`,
            lastModified,
            changeFrequency,
            priority,
          });
        }
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${directory}:`, error);
  }

  return pages;
}
