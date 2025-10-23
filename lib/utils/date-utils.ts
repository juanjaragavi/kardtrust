/**
 * Date Utilities for Post Sorting
 * Provides consistent date parsing and sorting functionality across all pages
 */

// Month name to number mapping (0-indexed for JavaScript Date)
const MONTHS: Record<string, number> = {
  january: 0,
  february: 1,
  march: 2,
  april: 3,
  may: 4,
  june: 5,
  july: 6,
  august: 7,
  september: 8,
  october: 9,
  november: 10,
  december: 11,
};

/**
 * Parse various date formats into timestamps for sorting
 * Supports:
 * - ISO format (YYYY-MM-DD or YYYY-MM-DDTHH:MM:SS)
 * - "DD Month YYYY" format (e.g., "23 October 2025")
 * - Any format parseable by Date.parse()
 *
 * @param value - Date string to parse
 * @returns Timestamp in milliseconds, or 0 if parsing fails
 */
export function parseDate(value?: string): number {
  if (!value) return 0;

  // ISO quick path
  if (/^\d{4}-\d{2}-\d{2}/.test(value) || value.includes("T")) {
    const t = Date.parse(value);
    return isNaN(t) ? 0 : t;
  }

  // "DD Month YYYY" (e.g., "3 April 2025" or "23 October 2025")
  const m = value.trim().match(/^(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})$/);
  if (m) {
    const day = parseInt(m[1], 10);
    const monthName = m[2].toLowerCase();
    const year = parseInt(m[3], 10);
    const month = MONTHS[monthName];
    if (month != null) {
      return Date.UTC(year, month, day);
    }
  }

  // Fallback to standard Date.parse
  const t = Date.parse(value);
  return isNaN(t) ? 0 : t;
}

/**
 * Sort posts by date in descending order (newest first)
 * Works with any array of objects that have a 'date' property
 *
 * @param posts - Array of post objects with optional date property
 * @returns New array sorted by date (newest first)
 */
export function sortPostsByDate<T extends { date?: string }>(posts: T[]): T[] {
  return [...posts].sort((a, b) => parseDate(b.date) - parseDate(a.date));
}

/**
 * Get the latest post from an array of posts
 *
 * @param posts - Array of post objects with optional date property
 * @returns The post with the most recent date, or undefined if array is empty
 */
export function getLatestPost<T extends { date?: string }>(
  posts: T[],
): T | undefined {
  if (posts.length === 0) return undefined;
  return sortPostsByDate(posts)[0];
}

/**
 * Get the N most recent posts from an array
 *
 * @param posts - Array of post objects with optional date property
 * @param count - Number of recent posts to return
 * @returns Array of the N most recent posts
 */
export function getRecentPosts<T extends { date?: string }>(
  posts: T[],
  count: number,
): T[] {
  return sortPostsByDate(posts).slice(0, count);
}
