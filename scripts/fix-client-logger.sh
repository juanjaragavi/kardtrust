#!/bin/bash

# Script to replace logger imports in client components with browser-logger

# List of client component files that import logger
CLIENT_COMPONENTS=(
  "components/analytics/gtm.tsx"
  "components/analytics/adzep-spa-bridge.tsx"
  "components/analytics/utm-link-injector.tsx"
  "components/analytics/adzep-trigger.tsx"
  "components/analytics/utm-persister.tsx"
  "components/credit-card-form.tsx"
  "components/analytics/adzep.tsx"
  "components/credit-card-form-to-product.tsx"
  "components/analytics/gam.tsx"
)

for file in "${CLIENT_COMPONENTS[@]}"; do
  if [ -f "$file" ] && grep -q '"use client"' "$file" && grep -q 'import logger from "@/lib/logger"' "$file"; then
    echo "Fixing: $file"
    # Replace the import statement
    sed -i '' 's|import logger from "@/lib/logger";|import logger from "@/lib/browser-logger";|g' "$file"
  fi
done

echo "Done! All client components now use browser-logger"
