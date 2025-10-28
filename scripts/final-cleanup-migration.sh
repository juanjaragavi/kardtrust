#!/bin/bash

# Final cleanup script to remove paragraph wrapping around h3 tags

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

echo "Final cleanup - removing paragraph wrapping around headers..."
echo ""

FIXED=0

for FILE_BASE in "${FILES[@]}"; do
    TARGET_FILE="$TARGET_DIR/$FILE_BASE/page.tsx"
    
    if [ ! -f "$TARGET_FILE" ]; then
        continue
    fi
    
    # Use perl for multi-line pattern matching
    perl -i -pe 's|<p className="text-gray-700 mb-8">\s*(<h3 className="text-xl font-semibold text-gray-800 mb-3">.*?</h3>)\s*</p>|\1|gs' "$TARGET_FILE"
    
    echo "✓ Processed: $FILE_BASE"
    ((FIXED++))
done

echo ""
echo "================================================"
echo "Final Cleanup Complete!"
echo "Files processed: $FIXED"
echo "================================================"
