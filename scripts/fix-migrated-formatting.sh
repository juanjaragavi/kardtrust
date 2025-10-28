#!/bin/bash

# Post-processing script to fix markdown formatting in migrated files
# Fixes headers that weren't properly converted (#### to h3)

TARGET_DIR="/Users/macbookpro/GitHub/kardtrust/app/financial-solutions"

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

echo "Post-processing migrated files to fix formatting issues..."
echo ""

FIXED=0

for FILE_BASE in "${FILES[@]}"; do
    TARGET_FILE="$TARGET_DIR/$FILE_BASE/page.tsx"
    
    if [ ! -f "$TARGET_FILE" ]; then
        continue
    fi
    
    echo "📝 Processing: $FILE_BASE"
    
    # Create temp file
    TEMP_FILE="${TARGET_FILE}.tmp"
    
    # Fix patterns:
    # 1. #### Header -> <h3>Header</h3>
    # 2. Standalone markdown headers in paragraphs
    # 3. Remove extra blank lines in JSX
    
    sed -E \
        -e 's|<p className="text-gray-700 mb-8">[ ]*#### (.+)</p>|<h3 className="text-xl font-semibold text-gray-800 mb-3">\1</h3>|g' \
        -e 's|#### (.+)$|<h3 className="text-xl font-semibold text-gray-800 mb-3">\1</h3>|g' \
        "$TARGET_FILE" > "$TEMP_FILE"
    
    # Check if changes were made
    if ! cmp -s "$TARGET_FILE" "$TEMP_FILE"; then
        mv "$TEMP_FILE" "$TARGET_FILE"
        echo "   ✅ Fixed formatting issues"
        ((FIXED++))
    else
        rm "$TEMP_FILE"
        echo "   ✓ No issues found"
    fi
    
done

echo ""
echo "================================================"
echo "Post-processing Complete!"
echo "Files fixed: $FIXED"
echo "================================================"
