#!/usr/bin/env node

/**
 * Product Extraction Script
 *
 * Automatically extracts financial product data from /app/financial-solutions/
 * directory by parsing each product's page.tsx file and extracting metadata.
 *
 * This script:
 * 1. Scans the financial-solutions directory for product folders
 * 2. Reads each page.tsx file
 * 3. Extracts metadata (title, description, keywords)
 * 4. Infers product type (traditional/fintech/neobank)
 * 5. Generates a complete products array
 * 6. Outputs to JSON file for injection script
 */

const fs = require("fs");
const path = require("path");

// ANSI color codes
const colors = {
  reset: "\x1b[0m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[36m",
  red: "\x1b[31m",
  bold: "\x1b[1m",
};

// Logger
const log = {
  info: (msg) => console.log(`${colors.blue}ℹ${colors.reset} ${msg}`),
  success: (msg) => console.log(`${colors.green}✓${colors.reset} ${msg}`),
  warning: (msg) => console.log(`${colors.yellow}⚠${colors.reset} ${msg}`),
  error: (msg) => console.log(`${colors.red}✗${colors.reset} ${msg}`),
  title: (msg) =>
    console.log(`\n${colors.bold}${colors.blue}${msg}${colors.reset}\n`),
};

// Product type classification based on keywords and patterns
const PRODUCT_TYPE_PATTERNS = {
  traditional: [
    "american express",
    "amex",
    "chase",
    "bank of america",
    "wells fargo",
    "citi",
    "citibank",
    "us bank",
    "capital one",
  ],
  neobank: ["chime", "varo", "step", "current", "aspiration", "n26"],
  fintech: [
    "affirm",
    "klarna",
    "upgrade",
    "sofi",
    "tilt",
    "mission lane",
    "avant",
    "self",
    "siren",
    "yotta",
    "robinhood",
    "tomo",
  ],
};

/**
 * Determine product type based on title/slug
 */
function inferProductType(slug, title) {
  const searchText = `${slug} ${title}`.toLowerCase();

  // Check traditional banks first
  if (
    PRODUCT_TYPE_PATTERNS.traditional.some((pattern) =>
      searchText.includes(pattern),
    )
  ) {
    return "traditional";
  }

  // Check neobanks
  if (
    PRODUCT_TYPE_PATTERNS.neobank.some((pattern) =>
      searchText.includes(pattern),
    )
  ) {
    return "neobank";
  }

  // Check fintech
  if (
    PRODUCT_TYPE_PATTERNS.fintech.some((pattern) =>
      searchText.includes(pattern),
    )
  ) {
    return "fintech";
  }

  // Default to fintech for unclassified
  return "fintech";
}

/**
 * Extract metadata from page.tsx content
 */
function extractMetadata(content, slug) {
  const metadata = {
    slug,
    title: null,
    description: null,
    keywords: null,
  };

  // Extract title from generateMetadata function
  const titleMatch = content.match(/title:\s*["'`]([^"'`]+)["'`]/);
  if (titleMatch) {
    // Clean up the title - remove " - KardTrust" suffix
    metadata.title = titleMatch[1].replace(/\s*-\s*KardTrust\s*$/, "").trim();
  }

  // Extract description
  const descriptionMatch = content.match(/description:\s*["'`]([^"'`]+)["'`]/);
  if (descriptionMatch) {
    metadata.description = descriptionMatch[1].trim();
  }

  // Extract keywords
  const keywordsMatch = content.match(/keywords:\s*["'`]([^"'`]+)["'`]/);
  if (keywordsMatch) {
    metadata.keywords = keywordsMatch[1].trim();
  }

  // Also try to extract from h1 if title is missing
  if (!metadata.title) {
    const h1Match = content.match(/<h1[^>]*>([^<]+)<\/h1>/);
    if (h1Match) {
      metadata.title = h1Match[1].trim();
    }
  }

  return metadata;
}

/**
 * Generate image URL from slug
 */
function generateImageUrl(slug) {
  return `https://media.topfinanzas.com/images/kardtrust/${slug}.webp`;
}

/**
 * Convert slug to title format (if metadata extraction fails)
 */
function slugToTitle(slug) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Extract products from financial-solutions directory
 */
function extractProducts() {
  log.title("🔍 Financial Products Extraction");

  const financialSolutionsDir = path.join(
    process.cwd(),
    "app",
    "financial-solutions",
  );

  if (!fs.existsSync(financialSolutionsDir)) {
    log.error(`Directory not found: ${financialSolutionsDir}`);
    process.exit(1);
  }

  log.info(`Scanning directory: ${financialSolutionsDir}`);

  // Read all directories
  const entries = fs.readdirSync(financialSolutionsDir, {
    withFileTypes: true,
  });

  // Filter to only directories (exclude files like metadata.ts, page.tsx)
  const productDirs = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((name) => !name.startsWith(".") && !name.startsWith("_"));

  log.info(`Found ${productDirs.length} product directories`);

  const products = [];
  const errors = [];

  // Process each product directory
  for (const dirName of productDirs) {
    const pagePath = path.join(financialSolutionsDir, dirName, "page.tsx");

    if (!fs.existsSync(pagePath)) {
      log.warning(`No page.tsx found in ${dirName}`);
      errors.push({ dir: dirName, error: "No page.tsx" });
      continue;
    }

    try {
      const content = fs.readFileSync(pagePath, "utf8");
      const metadata = extractMetadata(content, dirName);

      // Validate we have required data
      if (!metadata.title || !metadata.description) {
        log.warning(`Incomplete metadata for ${dirName}`);
        errors.push({
          dir: dirName,
          error: "Missing title or description",
          metadata,
        });

        // Try to use fallback data
        if (!metadata.title) {
          metadata.title = slugToTitle(dirName);
        }
        if (!metadata.description) {
          metadata.description = `Discover the ${slugToTitle(dirName)} and its benefits.`;
        }
      }

      // Build product object
      const product = {
        title: `${metadata.title} | KardTrust`,
        slug: metadata.slug,
        description: metadata.description,
        image: generateImageUrl(metadata.slug),
        category: "Financial Solutions",
        categoryPath: "/financial-solutions",
        date: "28 October 2025", // Current date
        type: inferProductType(metadata.slug, metadata.title),
      };

      products.push(product);
      log.success(`Extracted: ${metadata.title}`);
    } catch (error) {
      log.error(`Error processing ${dirName}: ${error.message}`);
      errors.push({ dir: dirName, error: error.message });
    }
  }

  return { products, errors };
}

/**
 * Save products to JSON file
 */
function saveProducts(products) {
  const outputPath = path.join(
    process.cwd(),
    "scripts",
    "extracted-products.json",
  );

  const output = {
    generated: new Date().toISOString(),
    count: products.length,
    products: products,
  };

  fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));
  log.success(`Saved ${products.length} products to: ${outputPath}`);

  return outputPath;
}

/**
 * Generate TypeScript array code
 */
function generateTypeScriptArray(products) {
  const lines = ["const MIGRATED_PRODUCTS = ["];

  products.forEach((product, index) => {
    lines.push("  {");
    lines.push(`    title: "${product.title.replace(/"/g, '\\"')}",`);
    lines.push(`    slug: "${product.slug}",`);
    lines.push(
      `    description: "${product.description.replace(/"/g, '\\"')}",`,
    );
    lines.push(`    image: "${product.image}",`);
    lines.push(`    category: "${product.category}",`);
    lines.push(`    categoryPath: "${product.categoryPath}",`);
    lines.push(`    date: "${product.date}",`);
    lines.push(`    type: "${product.type}"`);
    lines.push(index === products.length - 1 ? "  }" : "  },");
  });

  lines.push("];");

  return lines.join("\n");
}

/**
 * Main execution
 */
function main() {
  const { products, errors } = extractProducts();

  // Summary
  log.title("📊 Extraction Summary");
  console.log(
    `${colors.green}Successfully extracted:${colors.reset} ${products.length} products`,
  );
  console.log(
    `${colors.yellow}Errors/Warnings:${colors.reset} ${errors.length}`,
  );

  if (errors.length > 0) {
    console.log("\n" + colors.yellow + "Issues encountered:" + colors.reset);
    errors.forEach((err) => {
      console.log(`  - ${err.dir}: ${err.error}`);
    });
  }

  // Product type breakdown
  const typeCount = products.reduce((acc, p) => {
    acc[p.type] = (acc[p.type] || 0) + 1;
    return acc;
  }, {});

  console.log("\n" + colors.bold + "Product Type Breakdown:" + colors.reset);
  Object.entries(typeCount).forEach(([type, count]) => {
    console.log(`  ${type}: ${colors.green}${count}${colors.reset}`);
  });

  // Save to JSON
  const jsonPath = saveProducts(products);

  // Generate TypeScript array code
  const tsCode = generateTypeScriptArray(products);
  const tsPath = path.join(
    process.cwd(),
    "scripts",
    "migrated-products.ts.txt",
  );
  fs.writeFileSync(tsPath, tsCode);
  log.success(`Generated TypeScript array: ${tsPath}`);

  // Output for copying
  console.log(
    "\n" +
      colors.bold +
      colors.blue +
      "📋 TypeScript Array (ready to copy):" +
      colors.reset,
  );
  console.log(colors.yellow + "─".repeat(80) + colors.reset);
  console.log(tsCode);
  console.log(colors.yellow + "─".repeat(80) + colors.reset);

  log.title("✨ Extraction Complete!");
  console.log("Next steps:");
  console.log("1. Review the extracted data above");
  console.log(
    "2. Update inject-migrated-products.js with the MIGRATED_PRODUCTS array",
  );
  console.log("3. Run: node ./scripts/inject-migrated-products.js");
  console.log("\nOr run the combined script:");
  console.log("  node ./scripts/extract-and-inject.js");
}

// Run the script
main();
