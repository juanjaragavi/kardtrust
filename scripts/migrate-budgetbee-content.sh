#!/bin/bash

# Migration script for BudgetBee to KardTrust content
# This script migrates 32 financial solution articles from BudgetBee (Astro.js) to KardTrust (Next.js)

SOURCE_DIR="/Users/macbookpro/GitHub/budgetbee/src/content/financial-solutions"
TARGET_DIR="/Users/macbookpro/GitHub/kardtrust/app/financial-solutions"

# Array of files to migrate
declare -a FILES=(
    "cit-bank-home-loans-requirements"
    "cit-bank-home-loans-benefits"
    "amazon-rewards-visa-credit-card-benefits"
    "amazon-rewards-visa-credit-card-requirements"
    "chase-freedom-unlimited-credit-card-benefits"
    "chase-freedom-unlimited-requirements"
    "citi-double-cash-credit-card-benefits"
    "citi-double-cash-credit-card-requirements"
    "discover-it-student-chrome-credit-card-benefits"
    "discover-it-student-chrome-credit-card-requirements"
    "doordash-rewards-mastercard-benefits"
    "doordash-rewards-mastercard-requirements"
    "td-flexpay-credit-card-benefits"
    "td-flexpay-credit-card-requirements"
    "tomo-credit-card-benefits"
    "us-bank-cash-plus-visa-signature-card-benefits"
    "tomo-credit-card-requirements"
    "us-bank-cash-plus-visa-signature-card-requirements"
    "titanium-rewards-visa-signature-credit-card-requirements"
    "titanium-rewards-visa-signature-credit-card-benefits"
    "citi-simplicity-card-benefits"
    "citi-simplicity-card-requirements"
    "capital-one-quicksilver-student-credit-card-benefits"
    "capital-one-quicksilver-student-credit-card-requirements"
    "first-digital-nextgen-mastercard-benefits"
    "first-digital-nextgen-mastercard-requirements"
    "capital-one-savor-rewards-credit-card-benefits"
    "capital-one-savor-rewards-credit-card-requirements"
    "visa-signature-us-current-build-credit-card-benefits"
    "visa-signature-us-current-build-credit-card-requirements"
    "wells-fargo-autograph-card-requirements"
    "wells-fargo-autograph-card-benefits"
)

echo "Starting migration of 32 articles from BudgetBee to KardTrust..."
echo "Source: $SOURCE_DIR"
echo "Target: $TARGET_DIR"
echo ""

MIGRATED=0
SKIPPED=0

for FILE_BASE in "${FILES[@]}"; do
    SOURCE_FILE="$SOURCE_DIR/${FILE_BASE}.mdx"
    TARGET_FOLDER="$TARGET_DIR/$FILE_BASE"
    TARGET_FILE="$TARGET_FOLDER/page.tsx"
    
    # Check if source file exists
    if [ ! -f "$SOURCE_FILE" ]; then
        echo "⚠️  Source file not found: $SOURCE_FILE"
        ((SKIPPED++))
        continue
    fi
    
    # Skip if already migrated (first file was done manually)
    if [ -f "$TARGET_FILE" ]; then
        echo "⏭️  Skipping (already exists): $FILE_BASE"
        ((SKIPPED++))
        continue
    fi
    
    echo "📝 Processing: $FILE_BASE"
    
    # Create target directory
    mkdir -p "$TARGET_FOLDER"
    
    # Store the temp file path
    TEMP_FILE="/tmp/migration_temp_${FILE_BASE}.txt"
    
    # Copy source to temp file
    cp "$SOURCE_FILE" "$TEMP_FILE"
    
    # Now we'll convert it using Node.js for better text processing
    # Create the converted file directly
    node - "$TEMP_FILE" "$TARGET_FILE" "$FILE_BASE" <<'NODEJS'
const fs = require('fs');
const path = require('path');

const [tempFile, targetFile, fileBase] = process.argv.slice(2);
const content = fs.readFileSync(tempFile, 'utf8');

// Extract frontmatter
const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
if (!frontmatterMatch) {
    console.error('Could not parse frontmatter');
    process.exit(1);
}

const frontmatter = frontmatterMatch[1];
const body = frontmatterMatch[2];

// Parse frontmatter fields
const titleMatch = frontmatter.match(/^title:\s*"(.+)"$/m);
const metaTitleMatch = frontmatter.match(/^meta_title:\s*"(.+)"$/m);
const descriptionMatch = frontmatter.match(/^description:\s*"(.+)"$/m);
const tagsMatch = frontmatter.match(/^tags:\s*\[(.*)\]$/m);

const title = titleMatch ? titleMatch[1] : 'Financial Solution';
const metaTitle = metaTitleMatch ? metaTitleMatch[1] : title;
const description = descriptionMatch ? descriptionMatch[1] : '';
const tags = tagsMatch ? tagsMatch[1].replace(/"/g, '') : 'credit cards, financial solutions';

// Generate component name from file base
const componentName = fileBase
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('') + 'Page';

// Process body content
let processedBody = body;

// Remove AdZone components
processedBody = processedBody.replace(/<AdZone[^>]*\/>/g, '');

// Replace Button component with Link
processedBody = processedBody.replace(
    /<Button\s+label="([^"]+)"\s+link="([^"]+)"\s*\/>/g,
    '<BUTTON_PLACEHOLDER label="$1" href="$2" />'
);

// Convert markdown to JSX-friendly format
// Convert headers
processedBody = processedBody.replace(/^### (.+)$/gm, '<h2 className="text-2xl font-bold text-gray-800 mb-4">$1</h2>');
processedBody = processedBody.replace(/^## (.+)$/gm, '<h2 className="text-2xl font-bold text-gray-800 mb-4">$1</h2>');

// Convert bullet lists - need to handle multi-line
const lines = processedBody.split('\n');
let inList = false;
let listBuffer = [];
let processedLines = [];

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const bulletMatch = line.match(/^-\s+(.+)$/);
    
    if (bulletMatch) {
        if (!inList) {
            inList = true;
            listBuffer = [];
        }
        // Extract the content and handle bold markdown
        let itemContent = bulletMatch[1];
        itemContent = itemContent.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
        listBuffer.push(itemContent);
    } else {
        if (inList) {
            // End of list, flush buffer
            processedLines.push('<ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">');
            listBuffer.forEach(item => {
                processedLines.push(`  <li>${item}</li>`);
            });
            processedLines.push('</ul>');
            inList = false;
            listBuffer = [];
        }
        processedLines.push(line);
    }
}

// Handle case where file ends with list
if (inList) {
    processedLines.push('<ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">');
    listBuffer.forEach(item => {
        processedLines.push(`  <li>${item}</li>`);
    });
    processedLines.push('</ul>');
}

processedBody = processedLines.join('\n');

// Convert markdown links to JSX Link components
processedBody = processedBody.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    (match, text, href) => {
        // Check if it's an internal link
        if (href.startsWith('/')) {
            // Handle markdown bold in link text
            const cleanText = text.replace(/\*\*/g, '');
            return `<Link href="${href}" className="text-primary hover:underline">${cleanText}</Link>`;
        } else {
            // External link
            return `<a href="${href}" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">${text}</a>`;
        }
    }
);

// Convert bold text
processedBody = processedBody.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

// Split content into paragraphs and wrap with proper JSX
const paragraphs = processedBody.split('\n\n').filter(p => p.trim());
const jsxParagraphs = paragraphs.map(p => {
    const trimmed = p.trim();
    
    // Skip if it's already JSX (starts with <)
    if (trimmed.startsWith('<')) {
        return trimmed;
    }
    
    // Otherwise wrap as paragraph
    return `<p className="text-gray-700 mb-8">\n  ${trimmed}\n</p>`;
});

const jsxBody = jsxParagraphs.join('\n\n');

// Build the final TSX file
const tsxContent = `import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title: "${title} - KardTrust",
    description: "${description}",
    keywords: "${tags}",
  };
}

export default function ${componentName}() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12" data-category="credit-cards">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-4xl font-bold text-gray-800 mb-4 leading-8">
              ${title}
            </h1>

            <div className="my-8 text-left sm:text-left">
              <div
                id="kardtrust_ad_1"
                className="items-center justify-center flex w-full my-8"
              >
                {/* Empty responsive, centered div */}
              </div>

              

              ${jsxBody}

              <div
                id="kardtrust_ad_2"
                className="items-center justify-center flex w-full my-8"
              >
                {/* Empty responsive, centered div */}
              </div>

              
            </div>
          </div>
        </div>

        <AIContentDisclaimer />
      </article>

      <CompactFooter />
    </main>
  );
}
`;

// Handle button placeholders
const finalContent = tsxContent.replace(
    /<BUTTON_PLACEHOLDER label="([^"]+)" href="([^"]+)" \/>/g,
    `<div className="my-8 flex justify-center">
                <Link href="$2">
                  <Button className="bg-primary hover:bg-red-800 text-white px-8 py-3">
                    $1
                  </Button>
                </Link>
              </div>`
);

// Write to target file
fs.writeFileSync(targetFile, finalContent);
console.log('✅ Converted successfully');

NODEJS
    
    if [ $? -eq 0 ]; then
        ((MIGRATED++))
        echo "   ✅ Migrated successfully"
    else
        echo "   ❌ Migration failed"
        ((SKIPPED++))
    fi
    
    # Clean up temp file
    rm -f "$TEMP_FILE"
    
    echo ""
done

echo "================================================"
echo "Migration Complete!"
echo "Migrated: $MIGRATED files"
echo "Skipped: $SKIPPED files"
echo "================================================"
