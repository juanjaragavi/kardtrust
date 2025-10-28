#!/usr/bin/env node

/**
 * Filter extracted products to only main product pages
 * (excludes -requirements and -benefits variants)
 */

const fs = require("fs");
const path = require("path");

const inputPath = path.join(__dirname, "extracted-products.json");
const data = JSON.parse(fs.readFileSync(inputPath, "utf8"));

// Filter to only main product pages
const mainProducts = data.products.filter((product) => {
  return (
    !product.slug.includes("-requirements") &&
    !product.slug.includes("-benefits")
  );
});

console.log(`Total products extracted: ${data.products.length}`);
console.log(`Main products (filtered): ${mainProducts.length}\n`);

console.log("Main Products List:");
mainProducts.forEach((product, index) => {
  console.log(`${index + 1}. ${product.slug} (${product.type})`);
});

// Save filtered list
const output = {
  generated: new Date().toISOString(),
  count: mainProducts.length,
  products: mainProducts,
};

const outputPath = path.join(__dirname, "main-products-filtered.json");
fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));

console.log(`\n✓ Saved ${mainProducts.length} main products to: ${outputPath}`);

// Generate TypeScript array for injection
const tsLines = ["const MIGRATED_PRODUCTS = ["];

mainProducts.forEach((product, index) => {
  tsLines.push("  {");
  tsLines.push(`    title: "${product.title.replace(/"/g, '\\"')}",`);
  tsLines.push(`    slug: "${product.slug}",`);
  tsLines.push(
    `    description: "${product.description.replace(/"/g, '\\"')}",`,
  );
  tsLines.push(`    image: "${product.image}",`);
  tsLines.push(`    category: "${product.category}",`);
  tsLines.push(`    categoryPath: "${product.categoryPath}",`);
  tsLines.push(`    date: "${product.date}",`);
  tsLines.push(`    type: "${product.type}"`);
  tsLines.push(index === mainProducts.length - 1 ? "  }" : "  },");
});

tsLines.push("];");

const tsCode = tsLines.join("\n");
const tsPath = path.join(__dirname, "main-products.ts.txt");
fs.writeFileSync(tsPath, tsCode);

console.log(`✓ Generated TypeScript array: ${tsPath}`);

// Product type breakdown
const typeCount = mainProducts.reduce((acc, p) => {
  acc[p.type] = (acc[p.type] || 0) + 1;
  return acc;
}, {});

console.log("\nProduct Type Breakdown:");
Object.entries(typeCount).forEach(([type, count]) => {
  console.log(`  ${type}: ${count}`);
});
