#!/usr/bin/env python3
"""
Fix blockquote symbols and other special characters in migrated files
"""

import os
import re
from pathlib import Path

TARGET_DIR = "/Users/macbookpro/GitHub/kardtrust/app/financial-solutions"

FILES = [
    "cit-bank-home-loans-requirements",
    "cit-bank-home-loans-benefits",
    "amazon-rewards-visa-credit-card-benefits",
    "amazon-rewards-visa-credit-card-requirements",
    "chase-freedom-unlimited-credit-card-benefits",
    "chase-freedom-unlimited-requirements",
    "citi-double-cash-credit-card-benefits",
    "citi-double-cash-credit-card-requirements",
    "discover-it-student-chrome-credit-card-benefits",
    "discover-it-student-chrome-credit-card-requirements",
    "doordash-rewards-mastercard-benefits",
    "doordash-rewards-mastercard-requirements",
    "td-flexpay-credit-card-benefits",
    "td-flexpay-credit-card-requirements",
    "tomo-credit-card-benefits",
    "us-bank-cash-plus-visa-signature-card-benefits",
    "tomo-credit-card-requirements",
    "us-bank-cash-plus-visa-signature-card-requirements",
    "titanium-rewards-visa-signature-credit-card-requirements",
    "titanium-rewards-visa-signature-credit-card-benefits",
    "citi-simplicity-card-benefits",
    "citi-simplicity-card-requirements",
    "capital-one-quicksilver-student-credit-card-benefits",
    "capital-one-quicksilver-student-credit-card-requirements",
    "first-digital-nextgen-mastercard-benefits",
    "first-digital-nextgen-mastercard-requirements",
    "capital-one-savor-rewards-credit-card-benefits",
    "capital-one-savor-rewards-credit-card-requirements",
    "visa-signature-us-current-build-credit-card-benefits",
    "visa-signature-us-current-build-credit-card-requirements",
    "wells-fargo-autograph-card-requirements",
    "wells-fargo-autograph-card-benefits",
]

print("Fixing blockquote symbols and special characters...")
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
    
    # Fix blockquote symbols at the start of paragraphs
    # Pattern: > Some text in a paragraph becomes: Some text in a paragraph
    content = re.sub(r'<p className="text-gray-700 mb-8">\s*>\s*', '<p className="text-gray-700 mb-8">\n  ', content)
    
    # Also handle inline blockquotes
    content = re.sub(r'(\n\s*)>\s+', r'\1', content)
    
    # Write back if changed
    if content != original_content:
        with open(target_file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"✅ Fixed: {file_base}")
        fixed += 1
    else:
        print(f"✓ No issues: {file_base}")

print()
print("=" * 48)
print(f"Blockquote Fix Complete!")
print(f"Files fixed: {fixed}")
print("=" * 48)
