#!/usr/bin/env python3
"""
Remove unused Image import from migrated files
"""

from pathlib import Path

TARGET_DIR = "/Users/macbookpro/GitHub/kardtrust/app/financial-solutions"

FILES = [
    "amazon-rewards-visa-credit-card-benefits",
    "amazon-rewards-visa-credit-card-requirements",
    "capital-one-quicksilver-student-credit-card-benefits",
    "capital-one-quicksilver-student-credit-card-requirements",
    "capital-one-savor-rewards-credit-card-benefits",
    "capital-one-savor-rewards-credit-card-requirements",
    "chase-freedom-unlimited-credit-card-benefits",
    "chase-freedom-unlimited-requirements",
    "cit-bank-home-loans-benefits",
    "cit-bank-home-loans-requirements",
    "citi-double-cash-credit-card-benefits",
    "citi-double-cash-credit-card-requirements",
    "citi-simplicity-card-benefits",
    "citi-simplicity-card-requirements",
    "discover-it-student-chrome-credit-card-benefits",
    "discover-it-student-chrome-credit-card-requirements",
    "doordash-rewards-mastercard-benefits",
    "doordash-rewards-mastercard-requirements",
    "first-digital-nextgen-mastercard-benefits",
    "first-digital-nextgen-mastercard-requirements",
    "td-flexpay-credit-card-benefits",
    "td-flexpay-credit-card-requirements",
    "titanium-rewards-visa-signature-credit-card-benefits",
    "titanium-rewards-visa-signature-credit-card-requirements",
    "tomo-credit-card-benefits",
    "tomo-credit-card-requirements",
    "us-bank-cash-plus-visa-signature-card-benefits",
    "us-bank-cash-plus-visa-signature-card-requirements",
    "visa-signature-us-current-build-credit-card-benefits",
    "visa-signature-us-current-build-credit-card-requirements",
    "wells-fargo-autograph-card-benefits",
    "wells-fargo-autograph-card-requirements",
]

print("Removing unused Image import from migrated files...")
print()

fixed = 0

for file_base in FILES:
    target_file = Path(TARGET_DIR) / file_base / "page.tsx"
    
    if not target_file.exists():
        continue
    
    # Read the file
    with open(target_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    
    # Remove the Image import line
    if 'import Image from "next/image";' in content:
        content = content.replace('import Image from "next/image";\n', '')
        
        # Write back
        with open(target_file, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"✅ Fixed: {file_base}")
        fixed += 1
    else:
        print(f"✓ No unused import: {file_base}")

print()
print("=" * 48)
print("Unused Import Removal Complete!")
print(f"Files fixed: {fixed}")
print("=" * 48)
