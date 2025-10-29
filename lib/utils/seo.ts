/**
 * SEO Utilities
 * Helper functions and utilities for SEO optimization
 */

import { Metadata } from "next";

const baseUrl = "https://kardtrust.com";

/**
 * Generates canonical URL metadata
 */
export function generateCanonicalUrl(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${baseUrl}/${cleanPath}`;
}

/**
 * Generates complete page metadata with SEO best practices
 */
export function generatePageMetadata({
  title,
  description,
  path,
  keywords,
  image,
  type = "website",
  publishedTime,
  modifiedTime,
  author,
  noIndex = false,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  noIndex?: boolean;
}): Metadata {
  const canonicalUrl = generateCanonicalUrl(path);
  const ogImage = image || "https://media.topfinanzas.com/images/kardtrust/kardtrust-og-image.webp";

  const metadata: Metadata = {
    title,
    description,
    ...(keywords && { keywords }),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "KardTrust",
      images: [
        {
          url: ogImage,
          width: 900,
          height: 600,
          alt: title,
        },
      ],
      locale: "en_US",
      type,
      ...(type === "article" && {
        publishedTime,
        modifiedTime,
        authors: author ? [author] : ["KardTrust Editorial Team"],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };

  return metadata;
}

/**
 * Generates metadata for blog articles
 */
export function generateArticleMetadata({
  title,
  description,
  slug,
  category,
  keywords,
  image,
  publishedDate,
  modifiedDate,
  author,
}: {
  title: string;
  description: string;
  slug: string;
  category: "personal-finance" | "financial-solutions";
  keywords?: string;
  image?: string;
  publishedDate?: string;
  modifiedDate?: string;
  author?: string;
}): Metadata {
  const path = `${category}/${slug}`;

  return generatePageMetadata({
    title: `${title} - KardTrust`,
    description,
    path,
    keywords,
    image,
    type: "article",
    publishedTime: publishedDate,
    modifiedTime: modifiedDate,
    author,
  });
}

/**
 * Cleans and formats title strings
 */
export function cleanTitle(title: string): string {
  if (!title) return "Untitled";
  return title.split("|")[0].split(":")[0].split(" - ")[0].trim();
}

/**
 * Generates a slug from a title
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/**
 * Truncates text to a specific length for meta descriptions
 */
export function truncateDescription(text: string, maxLength: number = 160): string {
  if (text.length <= maxLength) return text;

  // Find the last space before the max length
  const truncated = text.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");

  return lastSpace > 0 ? `${truncated.slice(0, lastSpace)}...` : `${truncated}...`;
}

/**
 * Validates and sanitizes alt text for images
 */
export function generateAltText(context: string, descriptor?: string): string {
  if (descriptor) {
    return `${descriptor} - ${context}`;
  }
  return context;
}

/**
 * Gets the current date in ISO format for structured data
 */
export function getCurrentISODate(): string {
  return new Date().toISOString();
}

/**
 * Formats a date string to ISO format
 */
export function formatDateToISO(dateString: string): string {
  try {
    return new Date(dateString).toISOString();
  } catch {
    return getCurrentISODate();
  }
}
