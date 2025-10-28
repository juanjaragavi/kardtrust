# Product Injection Script

## Overview

This automated script (`inject-migrated-products.js`) handles the integration of 32 financial products migrated from the BudgetBee Astro.js project into the KardTrust Next.js application's blog post listings.

## Purpose

The script programmatically injects product data into `allPosts` arrays across multiple `page.tsx` files, ensuring:

- Consistent data structure across all listings
- No duplicate entries
- Proper formatting for each target file's specific requirements
- Automatic backup creation before modifications

## Products Included

The script includes all 32 migrated financial products:

### Traditional Bank Cards (6 products)

1. Blue Cash Preferred® Card (American Express)
2. Citi Custom Cash® Card
3. Wells Fargo Active Cash® Card
4. Chase Freedom Flex℠
5. Bank of America® Unlimited Cash Rewards
6. Chase Sapphire Reserve®

   **Fintech Solutions (14 products)**

7. Self Credit Builder Account + Visa Card
8. SIREN Card
9. Yotta Credit Card
10. Mission Lane Visa Credit Card
11. Avant Credit Card
12. Klarna Card
13. Affirm Card
14. Robinhood Gold Card
15. Tilt Card
16. Upgrade OneCard
17. SoFi Credit Card
    ... (and more)

### Neobank Cards (3 products)

- Step Visa Card
- Varo Believe Card
- Chime Credit Builder Visa Secured Card

## Target Files

The script injects products into four key files:

### 1. `/app/blog/page.tsx`

- **Array**: `allPosts`
- **Structure**: Simple PostItem with all fields
- **Fields**: title, slug, description, image, category, categoryPath, date

### 2. `/app/personal-finance/page.tsx`

- **Array**: `allPosts`
- **Structure**: PostItem with category for filtering
- **Fields**: title, slug, description, image, date, category
- **Note**: Products are categorized as 'creditCards' for filtering

### 3. `/app/financial-solutions/page.tsx`

- **Array**: `allLoansContent` (credit cards array is separate)
- **Structure**: Includes type field for fintech/traditional/neobank filtering
- **Fields**: title, slug, description, image, date, type

### 4. `/app/page.tsx` (Homepage)

- **Array**: `allPosts`
- **Structure**: PostData with nested frontmatter
- **Fields**: slug, frontmatter (title, description, date, featuredImage, categories), category, categoryPath

## Usage

### Basic Execution

```bash
# From project root
node ./scripts/inject-migrated-products.js
```

### What the Script Does

1. **Initialization**
   - Loads 32 migrated product definitions
   - Identifies target files and their array structures

2. **File Processing**
   - Reads each target file
   - Creates timestamped backup (`.backup.[timestamp]`)
   - Locates the `allPosts` array declaration
   - Finds insertion point (after array opening bracket)

3. **Product Injection**
   - Checks for existing products (by slug)
   - Formats new products to match target structure
   - Injects at the beginning of the array
   - Writes modified content back to file

4. **Reporting**
   - Shows progress for each file
   - Reports products injected vs. skipped
   - Displays summary statistics
   - Highlights any errors

## Output Example

```bash
🚀 Financial Products Injection Script

ℹ Total products to inject: 32
ℹ Target files: 4

ℹ Processing: app/blog/page.tsx
ℹ Backup created: /path/to/app/blog/page.tsx.backup.1730145234567
✓ Injected 32 products into app/blog/page.tsx

ℹ Processing: app/personal-finance/page.tsx
⚠ Product already exists: blue-cash-preferred-card-from-american-express
...
✓ Injected 20 products into app/personal-finance/page.tsx

📊 Injection Summary

app/blog/page.tsx
  Status: SUCCESS
  Injected: 32
  Skipped: 0

app/personal-finance/page.tsx
  Status: SUCCESS
  Injected: 20
  Skipped: 12

Overall Summary:
  Total injected: 52
  Total skipped: 12
  Files with errors: 0

✨ Injection complete!
```

## Features

### ✅ Safety Features

- **Automatic Backups**: Creates timestamped backups before any modifications
- **Duplicate Detection**: Checks for existing products by slug
- **Error Handling**: Graceful handling of missing files or arrays
- **Dry-run Capability**: Can be modified to preview changes without writing

### ✅ Smart Formatting

- **Structure Adaptation**: Automatically formats products for each target file's structure
- **Date Conversion**: Converts "DD Month YYYY" to ISO format where needed
- **String Escaping**: Properly escapes quotes in titles and descriptions
- **Indentation Preservation**: Maintains consistent code formatting

### ✅ Validation

- **Array Detection**: Finds arrays even with `useMemo` wrappers
- **Slug Uniqueness**: Prevents duplicate product entries
- **Path Verification**: Checks file existence before processing

## Data Structure Mappings

### Blog Structure

```typescript
{
  title: string,
  slug: string,
  description: string,
  image: string,
  category: "Financial Solutions",
  categoryPath: "/financial-solutions",
  date: "DD Month YYYY"
}
```

### Personal Finance Structure

```typescript
{
  title: string,
  slug: string,
  description: string,
  image: string,
  date: "DD Month YYYY",
  category: "creditCards" // For filtering
}
```

### Financial Solutions Structure

```typescript
{
  title: string, // Without " | KardTrust" suffix
  slug: string,
  description: string,
  image: string,
  date: "DD Month YYYY",
  type: "traditional" | "fintech" | "neobank"
}
```

### Homepage Structure

```typescript
{
  slug: string,
  frontmatter: {
    title: string,
    description: string,
    date: "YYYY-MM-DDTHH:mm:ssZ", // ISO format
    featuredImage: string,
    categories: [
      { name: string, slug: string }
    ]
  },
  category: string,
  categoryPath: string
}
```

## Customization

### Adding More Products

Edit the `MIGRATED_PRODUCTS` array in the script:

```javascript
const MIGRATED_PRODUCTS = [
  {
    title: "Product Name | KardTrust",
    slug: "product-slug",
    description: "Product description...",
    image: "https://media.topfinanzas.com/images/kardtrust/image.webp",
    category: "Financial Solutions",
    categoryPath: "/financial-solutions",
    date: "DD Month YYYY",
    type: "traditional", // or "fintech" or "neobank"
  },
  // ... more products
];
```

### Adding Target Files

Add to the `TARGET_FILES` array:

```javascript
{
  path: 'app/new-section/page.tsx',
  arrayName: 'allPosts',
  structureType: 'blog', // or create a new structure type
}
```

### Creating New Structure Types

Add a case to `formatProductForTarget()`:

```javascript
case 'custom-structure':
  return {
    // Your custom field mapping
  };
```

## Troubleshooting

### "Array not found" Error

**Cause**: The script can't locate the `allPosts` array in the target file.

**Solution**:

- Verify the array name matches
- Check for syntax variations (e.g., `useMemo` wrapper)
- Update the `findArrayInsertionPoint()` regex pattern

### "File not found" Error

**Cause**: Target file doesn't exist at the specified path.

**Solution**:

- Verify file paths in `TARGET_FILES` array
- Run from project root directory
- Check file permissions

### Products Already Exist

**Cause**: Products with matching slugs found in target file.

**Solution**:

- This is normal on subsequent runs
- Check the "skipped" count in the summary
- Review backup files if you need to restore

### Formatting Issues

**Cause**: Output code doesn't match expected TypeScript syntax.

**Solution**:

- Review `formatProductAsCode()` function
- Check indentation settings
- Verify quote escaping logic

## Backup Management

### Backup Location

Backups are created in the same directory as the target file with format:

```bash
original-filename.backup.timestamp
```

### Restore from Backup

```bash
# Find backup files
find app -name "*.backup.*"

# Restore specific backup
cp app/blog/page.tsx.backup.1730145234567 app/blog/page.tsx
```

### Clean Up Old Backups

```bash
# Remove all backup files (careful!)
find app -name "*.backup.*" -delete

# Or selectively remove old ones
find app -name "*.backup.*" -mtime +7 -delete
```

## Integration with Git Workflow

### Before Running

```bash
# Ensure clean working tree
git status

# Create a branch for the changes
git checkout -b feature/inject-migrated-products
```

### After Running

```bash
# Review changes
git diff

# Stage changes
git add app/blog/page.tsx app/personal-finance/page.tsx ...

# Commit with descriptive message
git commit -m "Inject 32 migrated financial products into blog listings"
```

## Testing

### Verify Injection

1. **Check file syntax**:

   ```bash
   npm run lint
   ```

2. **Build the project**:

   ```bash
   npm run build
   ```

3. **Visual verification**:

   ```bash
   npm run dev
   ```

   - Visit `/blog`
   - Visit `/personal-finance`
   - Visit `/financial-solutions`
   - Check homepage

### Validate Data Integrity

Run these checks:

```bash
# Count products in each file
grep -c "slug:" app/blog/page.tsx
grep -c "slug:" app/personal-finance/page.tsx
grep -c "slug:" app/financial-solutions/page.tsx
grep -c "slug:" app/page.tsx

# Check for duplicate slugs
grep "slug:" app/blog/page.tsx | sort | uniq -d
```

## Performance Considerations

- **File Size**: Each injection adds ~500-800 characters per product
- **Build Time**: Minimal impact as data is static
- **Runtime**: No performance impact (arrays are pre-processed)

## Maintenance

### Regular Updates

When adding new products:

1. Add product definition to `MIGRATED_PRODUCTS`
2. Run the script
3. Commit changes
4. Deploy

### Schema Changes

If the data structure changes in any target file:

1. Update the corresponding case in `formatProductForTarget()`
2. Update the structure documentation
3. Test with a single file first
4. Roll out to all files

## Support

For issues or questions:

1. Check this documentation
2. Review the script comments
3. Check the project's main README
4. Consult the instruction files in `.github/instructions/`

## License

This script is part of the KardTrust project and follows the same license terms.
