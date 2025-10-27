#!/bin/bash

# Script to fix Next.js Image dimension warnings
# Adds style={{ width: "auto", height: "auto" }} to Images with className="w-full h-auto"

# Find all .tsx files with the pattern
files=$(find app components -name "*.tsx" -type f -exec grep -l 'className="w-full h-auto rounded-xl"' {} \;)

count=0
for file in $files; do
  # Check if the file has Images with width/height props AND className="w-full h-auto"
  # that don't already have the style prop
  if grep -q 'width={' "$file" && \
     grep -q 'height={' "$file" && \
     grep -q 'className="w-full h-auto rounded-xl"' "$file"; then
    
    # Use perl for multi-line replacement
    # This adds the style prop after className if it doesn't exist
    perl -i -0pe 's/className="w-full h-auto rounded-xl"(?!\n.*?style=)/className="w-full h-auto rounded-xl"\n                  style={{ width: "auto", height: "auto" }}/g' "$file"
    
    echo "Fixed: $file"
    ((count++))
  fi
done

echo ""
echo "Total files fixed: $count"
