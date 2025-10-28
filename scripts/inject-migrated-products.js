#!/usr/bin/env node

/**
 * Script to inject 32 migrated financial products into allPosts arrays
 * across multiple page.tsx files in the Next.js application.
 *
 * This script:
 * 1. Defines the 32 migrated products from BudgetBee
 * 2. Identifies target page.tsx files with allPosts arrays
 * 3. Parses and injects products while maintaining data structure consistency
 * 4. Creates backups before modifying files
 */

const fs = require("fs");
const path = require("path");

// ANSI color codes for terminal output
const colors = {
  reset: "\x1b[0m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[36m",
  red: "\x1b[31m",
  bold: "\x1b[1m",
};

// Helper function to log with colors
const log = {
  info: (msg) => console.log(`${colors.blue}ℹ${colors.reset} ${msg}`),
  success: (msg) => console.log(`${colors.green}✓${colors.reset} ${msg}`),
  warning: (msg) => console.log(`${colors.yellow}⚠${colors.reset} ${msg}`),
  error: (msg) => console.log(`${colors.red}✗${colors.reset} ${msg}`),
  title: (msg) =>
    console.log(`\n${colors.bold}${colors.blue}${msg}${colors.reset}\n`),
};

// 20 Migrated Financial Products (Automatically Extracted from /app/financial-solutions/)
const MIGRATED_PRODUCTS = [
  {
    title: "Affirm Card: Pay Over Time with Flexible Payment Plans | KardTrust",
    slug: "affirm-card",
    description:
      "Discover the Affirm Card—a Visa debit card with pay-over-time flexibility. No annual fees, no hidden charges, 0%-36% APR payment plans, and no credit impact to apply. Split purchases after checkout or plan ahead.",
    image: "https://media.topfinanzas.com/images/kardtrust/affirm-card.webp",
    category: "Financial Solutions",
    categoryPath: "/financial-solutions",
    date: "28 October 2025",
    type: "fintech",
  },
  {
    title: "Avant Credit Card: Build Credit with No Hidden Fees | KardTrust",
    slug: "avant-credit-card",
    description:
      "Discover the Avant Credit Card designed for credit building. No security deposit, no hidden fees, proactive credit line increases, and mobile app management. 29.99%-35.99% APR with $39-$75 annual membership fee. Issued by WebBank.",
    image:
      "https://media.topfinanzas.com/images/kardtrust/avant-credit-card.webp",
    category: "Financial Solutions",
    categoryPath: "/financial-solutions",
    date: "28 October 2025",
    type: "fintech",
  },
  {
    title:
      "Bank of America® Unlimited Cash Rewards: Straightforward Cash Back Card | KardTrust",
    slug: "bank-of-america-unlimited-cash-rewards",
    description:
      "Discover the Bank of America® Unlimited Cash Rewards credit card with unlimited 1.5% cash back on all purchases, $200 online cash rewards bonus, 0% intro APR for 18 billing cycles, no annual fee, and Preferred Rewards benefits up to 75% bonus cash back.",
    image:
      "https://media.topfinanzas.com/images/kardtrust/bank-of-america-unlimited-cash-rewards.webp",
    category: "Financial Solutions",
    categoryPath: "/financial-solutions",
    date: "28 October 2025",
    type: "traditional",
  },
  {
    title:
      "Blue Cash Preferred® Card from American Express: Maximize Your Cash Back Rewards | KardTrust",
    slug: "blue-cash-preferred-card-from-american-express",
    description:
      "Discover the Blue Cash Preferred® Card from American Express offering 6% cash back at U.S. supermarkets, 6% on streaming, 3% at gas stations, and a $250 welcome bonus. Learn about benefits, rewards, and how to apply.",
    image:
      "https://media.topfinanzas.com/images/kardtrust/blue-cash-preferred-card-from-american-express.webp",
    category: "Financial Solutions",
    categoryPath: "/financial-solutions",
    date: "28 October 2025",
    type: "traditional",
  },
  {
    title:
      "Chase Freedom Flex℠: Cash Back Credit Card with Rotating Categories | KardTrust",
    slug: "chase-freedom-flex",
    description:
      "Discover the Chase Freedom Flex℠ with 5% cash back in quarterly bonus categories, $200 welcome bonus, 0% intro APR for 15 months, and no annual fee. Earn 5% on travel through Chase, 3% on dining and drugstores.",
    image:
      "https://media.topfinanzas.com/images/kardtrust/chase-freedom-flex.webp",
    category: "Financial Solutions",
    categoryPath: "/financial-solutions",
    date: "28 October 2025",
    type: "traditional",
  },
  {
    title: "Chase Sapphire Reserve®: Premium Travel Rewards Card | KardTrust",
    slug: "chase-sapphire-reserve",
    description:
      "Discover the Chase Sapphire Reserve® with 3X points on travel & dining, $300 annual travel credit, Priority Pass lounge access, and premium travel protections. Earn 60,000 bonus points after spending $4,000 in first 3 months.",
    image:
      "https://media.topfinanzas.com/images/kardtrust/chase-sapphire-reserve.webp",
    category: "Financial Solutions",
    categoryPath: "/financial-solutions",
    date: "28 October 2025",
    type: "traditional",
  },
  {
    title:
      "Chime Credit Builder Visa Secured Card: Build Credit with No Fees | KardTrust",
    slug: "chime-credit-builder-visa-secured-card",
    description:
      "Discover the Chime Credit Builder Visa Secured Card offering fee-free credit building, 1.5% cash back on rotating categories, no annual fees, no interest, and no credit check to apply.",
    image:
      "https://media.topfinanzas.com/images/kardtrust/chime-credit-builder-visa-secured-card.webp",
    category: "Financial Solutions",
    categoryPath: "/financial-solutions",
    date: "28 October 2025",
    type: "neobank",
  },
  {
    title:
      "Citi Custom Cash® Card: 5% Cash Back That Automatically Adapts | KardTrust",
    slug: "citi-custom-cash-card",
    description:
      "Discover the Citi Custom Cash® Card with automatic 5% cash back on your top spending category, $200 welcome bonus, 0% intro APR for 18 months on balance transfers, and no annual fee. Your rewards adapt as your spending changes.",
    image:
      "https://media.topfinanzas.com/images/kardtrust/citi-custom-cash-card.webp",
    category: "Financial Solutions",
    categoryPath: "/financial-solutions",
    date: "28 October 2025",
    type: "traditional",
  },
  {
    title:
      "Klarna Card: Pay Now or Pay Later Everywhere Visa is Accepted | KardTrust",
    slug: "klarna-card",
    description:
      "Discover the Klarna Card—switch instantly between debit mode and flexible pay later plans. No annual fees, no credit impact to apply, earn cashback with membership plans, and enjoy 0%-35.99% APR on payment plans.",
    image: "https://media.topfinanzas.com/images/kardtrust/klarna-card.webp",
    category: "Financial Solutions",
    categoryPath: "/financial-solutions",
    date: "28 October 2025",
    type: "fintech",
  },
  {
    title:
      "Mission Lane Visa Credit Card: Build Credit with Fair-to-Good Approval Odds | KardTrust",
    slug: "mission-lane-visa-credit-card",
    description:
      "Discover the Mission Lane Visa Credit Card designed for building and rebuilding credit. Features 19.99%-33.99% APR, $0-$59 annual fee, credit lines from $300-$3,000, and cash back rewards on select cards. No security deposit required.",
    image:
      "https://media.topfinanzas.com/images/kardtrust/mission-lane-visa-credit-card.webp",
    category: "Financial Solutions",
    categoryPath: "/financial-solutions",
    date: "28 October 2025",
    type: "fintech",
  },
  {
    title:
      "Robinhood Gold Card: 3% Cash Back on Everything with Premium Benefits | KardTrust",
    slug: "robinhood-gold-card",
    description:
      "Discover the Robinhood Gold Card offering 3% cash back on all purchases, 5% back on travel, no annual fee, virtual cards, family card sharing, and Visa Signature benefits. Exclusive to Robinhood Gold members.",
    image:
      "https://media.topfinanzas.com/images/kardtrust/robinhood-gold-card.webp",
    category: "Financial Solutions",
    categoryPath: "/financial-solutions",
    date: "28 October 2025",
    type: "fintech",
  },
  {
    title:
      "Self Credit Builder Account + Visa Card: Build Credit with Savings and Secured Spending | KardTrust",
    slug: "self-credit-builder-account-visa-card",
    description:
      "See how the Self Credit Builder Account and Visa Secured Card pair to report to all three bureaus, offer $35-per-month plans with 15.69% APR, and deliver a $0 intro annual fee with a $100 deposit.",
    image:
      "https://media.topfinanzas.com/images/kardtrust/self-credit-builder-account-visa-card.webp",
    category: "Financial Solutions",
    categoryPath: "/financial-solutions",
    date: "28 October 2025",
    type: "fintech",
  },
  {
    title:
      "SIREN Card: Premium Metal Card with Automatic Credit Building | KardTrust | KardTrust",
    slug: "siren-card",
    description:
      "Discover SIREN Card - the hybrid debit/credit card that builds credit automatically with 0% interest guaranteed. Get paid 2 days early, premium metal card, 55K+ free ATMs, advanced security features, and never pay fees. Exclusive for Starbucks partners.",
    image: "https://media.topfinanzas.com/images/kardtrust/siren-card.webp",
    category: "Financial Solutions",
    categoryPath: "/financial-solutions",
    date: "28 October 2025",
    type: "fintech",
  },
  {
    title:
      "SoFi Credit Card: Unlimited 2% Cash Back with No Annual Fee | KardTrust",
    slug: "sofi-credit-card",
    description:
      "Discover the SoFi Unlimited 2% Credit Card offering unlimited cash back rewards on all purchases, no annual fees, Mastercard World Elite benefits, and exclusive travel perks. Perfect for building wealth with every purchase.",
    image:
      "https://media.topfinanzas.com/images/kardtrust/sofi-credit-card.webp",
    category: "Financial Solutions",
    categoryPath: "/financial-solutions",
    date: "28 October 2025",
    type: "fintech",
  },
  {
    title:
      "Step Visa Card: Build Credit for Free Starting at Age 13 | KardTrust",
    slug: "step-visa-card",
    description:
      "Discover the Step Visa Card—build credit history for free with no credit score required, no fees, and no interest. Perfect for teens 13+ and young adults. Reports to all 3 credit bureaus with an average 57-point score increase.",
    image: "https://media.topfinanzas.com/images/kardtrust/step-visa-card.webp",
    category: "Financial Solutions",
    categoryPath: "/financial-solutions",
    date: "28 October 2025",
    type: "neobank",
  },
  {
    title:
      "Tilt Card: Build Credit with Cash Back Rewards and No Security Deposit | KardTrust",
    slug: "tilt-card",
    description:
      "Discover Tilt credit cards offering credit building without security deposits or credit history. Get up to 10% cash back, automatic limit increases, and approval even if denied elsewhere. Compare Tilt Essentials, Motion, and Engage cards.",
    image: "https://media.topfinanzas.com/images/kardtrust/tilt-card.webp",
    category: "Financial Solutions",
    categoryPath: "/financial-solutions",
    date: "28 October 2025",
    type: "fintech",
  },
  {
    title:
      "Upgrade OneCard: Pay Now or Pay Later Credit Card with No Annual Fee | KardTrust",
    slug: "upgrade-credit-card",
    description:
      "Discover the Upgrade OneCard offering flexible payment options with pay now or pay later features, no annual fee, 14.99%-29.99% APR, and the convenience of a credit card with the predictability of a personal loan. Build credit while managing finances your way.",
    image:
      "https://media.topfinanzas.com/images/kardtrust/upgrade-credit-card.webp",
    category: "Financial Solutions",
    categoryPath: "/financial-solutions",
    date: "28 October 2025",
    type: "fintech",
  },
  {
    title:
      "Varo Believe Card: Build Credit with Zero Fees and No Security Deposit | KardTrust",
    slug: "varo-believe-card",
    description:
      "Discover the Varo Believe secured credit card offering revolutionary credit building with no security deposit, no annual fees, no interest, and no credit check. Average 40+ point credit score increase in just 3 months.",
    image:
      "https://media.topfinanzas.com/images/kardtrust/varo-believe-card.webp",
    category: "Financial Solutions",
    categoryPath: "/financial-solutions",
    date: "28 October 2025",
    type: "neobank",
  },
  {
    title:
      "Wells Fargo Active Cash® Card: Unlimited 2% Cash Back Rewards | KardTrust",
    slug: "wells-fargo-active-cash-card",
    description:
      "Discover the Wells Fargo Active Cash® Card with unlimited 2% cash back on all purchases, $200 welcome bonus, 0% intro APR for 12 months, no annual fee, and Visa Signature benefits. Award-winning flat-rate cash back card.",
    image:
      "https://media.topfinanzas.com/images/kardtrust/wells-fargo-active-cash-card.webp",
    category: "Financial Solutions",
    categoryPath: "/financial-solutions",
    date: "28 October 2025",
    type: "traditional",
  },
  {
    title:
      "Yotta Credit Card Review: Win Cash Back With Every Purchase | KardTrust | KardTrust",
    slug: "yotta-credit-card",
    description:
      "Discover how the Yotta Credit Card transforms spending into winning opportunities. Every purchase enters you to win up to 100% cash back, with prizes up to $5,000. Learn about Lucky Swipe rewards and better-than-average winning odds.",
    image:
      "https://media.topfinanzas.com/images/kardtrust/yotta-credit-card.webp",
    category: "Financial Solutions",
    categoryPath: "/financial-solutions",
    date: "28 October 2025",
    type: "traditional",
  },
];

// Target files that need product injection
const TARGET_FILES = [
  {
    path: "app/personal-finance/page.tsx",
    arrayName: "allPosts",
    structureType: "personal-finance", // Has category field for filtering
  },
  // Note: blog/page.tsx already has these products, so we skip it
  // Note: financial-solutions/page.tsx uses a different array structure (loans/cards), may need separate handling
  // Note: homepage (page.tsx) may need updates but should be done selectively
];

/**
 * Convert migrated product to the appropriate format based on target structure
 */
function formatProductForTarget(product, structureType) {
  switch (structureType) {
    case "blog":
      // Blog structure: simple PostItem with all fields
      return {
        title: product.title,
        slug: product.slug,
        description: product.description,
        image: product.image,
        category: product.category,
        categoryPath: product.categoryPath,
        date: product.date,
      };

    case "personal-finance":
      // Personal finance: PostItem with category field (not nested)
      return {
        title: product.title,
        slug: product.slug,
        description: product.description,
        image: product.image,
        date: product.date,
        category: "creditCards", // All are credit cards
      };

    case "financial-solutions":
      // Financial solutions: includes type field for filtering
      return {
        title: product.title.split(" | KardTrust")[0], // Remove KardTrust suffix
        slug: product.slug,
        description: product.description,
        image: product.image,
        date: product.date,
        type: product.type || "traditional",
      };

    case "homepage":
      // Homepage: PostData with frontmatter structure
      const dateISO = convertDateToISO(product.date);
      return {
        slug: product.slug,
        frontmatter: {
          title: product.title.split(" | KardTrust")[0],
          description: product.description,
          date: dateISO,
          featuredImage: product.image,
          categories: [
            {
              name: product.category,
              slug: product.categoryPath.replace("/", ""),
            },
          ],
        },
        category: product.category,
        categoryPath: product.categoryPath,
      };

    default:
      return product;
  }
}

/**
 * Convert "DD Month YYYY" to ISO date format
 */
function convertDateToISO(dateString) {
  const months = {
    January: "01",
    February: "02",
    March: "03",
    April: "04",
    May: "05",
    June: "06",
    July: "07",
    August: "08",
    September: "09",
    October: "10",
    November: "11",
    December: "12",
  };

  const parts = dateString.split(" ");
  const day = parts[0].padStart(2, "0");
  const month = months[parts[1]];
  const year = parts[2];

  return `${year}-${month}-${day}T00:00:00Z`;
}

/**
 * Format a product object as TypeScript code
 */
function formatProductAsCode(product, structureType, indent = "    ") {
  const formatted = formatProductForTarget(product, structureType);
  const lines = [];

  lines.push(`${indent}{`);

  // Handle different structure types
  if (structureType === "homepage") {
    lines.push(`${indent}  slug: "${formatted.slug}",`);
    lines.push(`${indent}  frontmatter: {`);
    lines.push(
      `${indent}    title: "${formatted.frontmatter.title.replace(/"/g, '\\"')}",`,
    );
    lines.push(
      `${indent}    description: "${formatted.frontmatter.description.replace(/"/g, '\\"')}",`,
    );
    lines.push(`${indent}    date: "${formatted.frontmatter.date}",`);
    lines.push(
      `${indent}    featuredImage: "${formatted.frontmatter.featuredImage}",`,
    );
    lines.push(`${indent}    categories: [`);
    lines.push(
      `${indent}      { name: "${formatted.frontmatter.categories[0].name}", slug: "${formatted.frontmatter.categories[0].slug}" },`,
    );
    lines.push(`${indent}    ],`);
    lines.push(`${indent}  },`);
    lines.push(`${indent}  category: "${formatted.category}",`);
    lines.push(`${indent}  categoryPath: "${formatted.categoryPath}",`);
  } else {
    // Standard structure
    Object.entries(formatted).forEach(([key, value]) => {
      if (typeof value === "string") {
        lines.push(`${indent}  ${key}: "${value.replace(/"/g, '\\"')}",`);
      } else {
        lines.push(`${indent}  ${key}: ${JSON.stringify(value)},`);
      }
    });
  }

  lines.push(`${indent}},`);

  return lines.join("\n");
}

/**
 * Find the insertion point in the file content
 */
function findArrayInsertionPoint(content, arrayName) {
  // Find the array declaration - handle both direct assignment and useMemo wrapper
  // Patterns to match:
  // 1. const allPosts = [
  // 2. const allPosts: PostItem[] = [
  // 3. const allPosts = useMemo<PostItem[]>(() => [
  // 4. const allPosts = useMemo(() => [
  const arrayPattern = new RegExp(
    `const\\s+${arrayName}[^=]*=\\s*(?:useMemo\\s*(?:<[^>]+>)?\\s*\\(\\s*(?:\\([^)]*\\)\\s*=>)?\\s*)?\\[`,
    "gs",
  );
  const match = arrayPattern.exec(content);

  if (!match) {
    return -1;
  }

  // Find the position right after the opening bracket
  let position = match.index + match[0].length;

  // Skip any whitespace or comments
  while (position < content.length && /[\s\n\r]/.test(content[position])) {
    position++;
  }

  return position;
}

/**
 * Check if a product already exists in the array
 */
function productExists(content, slug) {
  return content.includes(`slug: "${slug}"`);
}

/**
 * Inject products into a file
 */
function injectProducts(filePath, arrayName, structureType) {
  const fullPath = path.join(process.cwd(), filePath);

  log.info(`Processing: ${filePath}`);

  // Read file
  if (!fs.existsSync(fullPath)) {
    log.warning(`File not found: ${fullPath}`);
    return { injected: 0, skipped: 0, error: "File not found" };
  }

  let content = fs.readFileSync(fullPath, "utf8");

  // Create backup
  const backupPath = `${fullPath}.backup.${Date.now()}`;
  fs.writeFileSync(backupPath, content);
  log.info(`Backup created: ${backupPath}`);

  // Find insertion point
  const insertionPoint = findArrayInsertionPoint(content, arrayName);

  if (insertionPoint === -1) {
    log.error(`Could not find array "${arrayName}" in ${filePath}`);
    return { injected: 0, skipped: 0, error: "Array not found" };
  }

  // Filter products that don't already exist
  const productsToInject = MIGRATED_PRODUCTS.filter((product) => {
    const exists = productExists(content, product.slug);
    if (exists) {
      log.warning(`Product already exists: ${product.slug}`);
    }
    return !exists;
  });

  if (productsToInject.length === 0) {
    log.success("All products already exist in this file");
    return { injected: 0, skipped: MIGRATED_PRODUCTS.length };
  }

  // Format all products
  const formattedProducts = productsToInject
    .map((product) => formatProductAsCode(product, structureType))
    .join("\n");

  // Inject at insertion point
  const newContent =
    content.slice(0, insertionPoint) +
    "\n" +
    formattedProducts +
    "\n" +
    content.slice(insertionPoint);

  // Write back to file
  fs.writeFileSync(fullPath, newContent);

  log.success(`Injected ${productsToInject.length} products into ${filePath}`);

  return {
    injected: productsToInject.length,
    skipped: MIGRATED_PRODUCTS.length - productsToInject.length,
  };
}

/**
 * Main execution
 */
function main() {
  log.title("🚀 Financial Products Injection Script");
  log.info(`Total products to inject: ${MIGRATED_PRODUCTS.length}`);
  log.info(`Target files: ${TARGET_FILES.length}\n`);

  const results = [];

  for (const target of TARGET_FILES) {
    try {
      const result = injectProducts(
        target.path,
        target.arrayName,
        target.structureType,
      );
      results.push({ ...target, ...result });
    } catch (error) {
      log.error(`Error processing ${target.path}: ${error.message}`);
      results.push({
        ...target,
        injected: 0,
        skipped: 0,
        error: error.message,
      });
    }
  }

  // Summary
  log.title("📊 Injection Summary");

  let totalInjected = 0;
  let totalSkipped = 0;
  let totalErrors = 0;

  results.forEach((result) => {
    const status = result.error
      ? `${colors.red}ERROR${colors.reset}`
      : `${colors.green}SUCCESS${colors.reset}`;

    console.log(`\n${colors.bold}${result.path}${colors.reset}`);
    console.log(`  Status: ${status}`);
    console.log(`  Injected: ${colors.green}${result.injected}${colors.reset}`);
    console.log(`  Skipped: ${colors.yellow}${result.skipped}${colors.reset}`);

    if (result.error) {
      console.log(`  Error: ${colors.red}${result.error}${colors.reset}`);
      totalErrors++;
    }

    totalInjected += result.injected || 0;
    totalSkipped += result.skipped || 0;
  });

  console.log(`\n${colors.bold}Overall Summary:${colors.reset}`);
  console.log(
    `  Total injected: ${colors.green}${totalInjected}${colors.reset}`,
  );
  console.log(
    `  Total skipped: ${colors.yellow}${totalSkipped}${colors.reset}`,
  );
  console.log(
    `  Files with errors: ${colors.red}${totalErrors}${colors.reset}`,
  );

  log.title("✨ Injection complete!");
}

// Run the script
main();
