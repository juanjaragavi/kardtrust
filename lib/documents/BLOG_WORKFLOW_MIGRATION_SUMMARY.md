# Blog Post Generation Workflow Migration Summary

## Overview

This document summarizes the successful migration of the blog post generation workflow from the UK TopFinanzas project to the KardTrust project (US market).

**Migration Date**: October 23, 2025  
**Source Project**: uk-topfinanzas-com (UK market)  
**Target Project**: kardtrust (US market)

## Files Created

### 1. System Instruction Files (in `/lib/`)

#### TOFU_BLOG_POST_GENERATION.instructions.md

- **Purpose**: System prompt for generating TOFU (Top-of-Funnel) blog articles
- **Location**: `/lib/TOFU_BLOG_POST_GENERATION.instructions.md`
- **Size**: ~15KB

#### CREDIT_CARD_PRODUCT_GENERATION.instructions.md

- **Purpose**: System prompt for generating financial product pages (credit cards, loans)
- **Location**: `/lib/CREDIT_CARD_PRODUCT_GENERATION.instructions.md`
- **Size**: ~11KB

### 2. User Prompt Files (in `/lib/documents/`)

#### prompt-to-generate-tofu-posts.md

- **Purpose**: User-facing prompt template for requesting TOFU blog articles
- **Location**: `/lib/documents/prompt-to-generate-tofu-posts.md`
- **Size**: ~4.8KB

#### prompt-to-generate-credit-card-products-posts.md

- **Purpose**: User-facing prompt template for requesting financial product pages
- **Location**: `/lib/documents/prompt-to-generate-credit-card-products-posts.md`
- **Size**: ~7.5KB

## Key Adaptations Made

### 1. Brand Identity Changes

| UK TopFinanzas                   | KardTrust                   |
| -------------------------------- | --------------------------- |
| KardTrust                        | KardTrust                   |
| uk.topfinanzas.com               | kardtrust.com               |
| KardTrust                        | KardTrust                   |
| topfinanzas-us-topic-outline.csv | kardtrust-topic-outline.csv |

### 2. Localization Changes

| UK Version               | US Version              |
| ------------------------ | ----------------------- |
| British English          | American English        |
| United Kingdom           | United States           |
| English (United Kingdom) | English (United States) |
| UK idioms                | US idioms               |
| personalised             | personalized            |
| authorised               | authorized              |
| GBP (£)                  | USD ($)                 |
| DD/MM/YYYY               | MM/DD/YYYY              |

### 3. Regulatory Framework Changes

| UK Regulators                     | US Regulators                               |
| --------------------------------- | ------------------------------------------- |
| FCA (Financial Conduct Authority) | CFPB (Consumer Financial Protection Bureau) |
| MoneyHelper                       | MyMoney.gov                                 |
| Financial Ombudsman Service       | FTC (Federal Trade Commission)              |
| FCA compliance                    | CFPB/FTC compliance                         |
| FCA-aware                         | Compliance-aware                            |

### 4. Technical Changes

| UK Version                     | US Version                |
| ------------------------------ | ------------------------- |
| uk_topfinanzas_3               | kardtrust_ad_1            |
| uk_topfinanzas_4               | kardtrust_ad_2            |
| media.topfinanzas.com          | media.topfinanzas.com     |
| uk.topfinanzas.com/sitemap.xml | kardtrust.com/sitemap.xml |

### 5. File Path Updates

All references to file paths have been updated to match the KardTrust project structure:

- CSV location: `lib/documents/kardtrust-topic-outline.csv`
- Sitemap: `https://kardtrust.com/sitemap.xml`
- CSV URL: `https://media.topfinanzas.com/documents/kardtrust-topic-outline.csv`

## Workflow Structure

### For TOFU Blog Articles

1. **Input**: User provides article parameters (pillar, keyword, title, etc.)
2. **System Prompt**: AI reads `/lib/TOFU_BLOG_POST_GENERATION.instructions.md`
3. **Data Sources**:
   - Primary: `lib/documents/kardtrust-topic-outline.csv`
   - Secondary: `https://kardtrust.com/sitemap.xml`
   - References: CFPB, FTC, MyMoney.gov
4. **Output**: One `.tsx` file at `/app/personal-finance/{slug}/page.tsx`
5. **Integration**: Update blog listing, category archive, sidebar

### For Financial Product Pages

1. **Input**: User provides product details and official URL
2. **System Prompt**: AI reads `/lib/CREDIT_CARD_PRODUCT_GENERATION.instructions.md`
3. **Data Sources**:
   - Primary: Official product website (via `fetch_webpage`)
   - Secondary: CSV and sitemap
4. **Output**: Two `.tsx` files:
   - `/app/financial-solutions/{slug}/page.tsx` (benefits)
   - `/app/financial-solutions/{slug}-requirements/page.tsx` (requirements)
5. **Integration**: Update product listings and navigation

## Content Standards

### US Compliance Requirements

- **CFPB Compliance**: All content adheres to CFPB regulations
- **FTC Guidelines**: Marketing content follows FTC truth-in-advertising rules
- **APR Disclosure**: Representative APR examples included as required
- **Risk Warnings**: Appropriate warnings for different product types
- **No Financial Advice**: Clear disclaimers that content is informational only

### Content Quality Standards

- **Length Guidelines**:
  - TOFU articles: 800-1,000 words
  - MOFU articles: 1,000-1,200 words
  - Credit card benefits: 800-1,200 words
  - Credit card requirements: 600-900 words
- **Internal Linking**: Minimum 3 internal links per article
- **SEO Optimization**: Complete metadata with titles, descriptions, keywords
- **Accessibility**: Semantic HTML with proper ARIA attributes

## Usage Instructions

### Generating a TOFU Blog Article

1. Open the prompt template: `/lib/documents/prompt-to-generate-tofu-posts.md`
2. Replace `{title}` with your article title
3. Submit the prompt to your AI assistant
4. AI will read the system instructions and generate the article
5. Follow the integration checklist to update related files

### Generating a Financial Product Page

1. Open the prompt template: `/lib/documents/prompt-to-generate-credit-card-products-posts.md`
2. Update product details (name, provider, URL, brand color)
3. Submit the prompt to your AI assistant
4. AI will fetch product data and generate both benefits and requirements pages
5. Review for accuracy and compliance

## Next Steps

### Immediate Actions

1. ✅ Create CSV topic outline file: `lib/documents/kardtrust-topic-outline.csv`
2. ✅ Ensure sitemap is accessible: `https://kardtrust.com/sitemap.xml`
3. ✅ Verify CDN is configured: `https://media.topfinanzas.com/`
4. ✅ Test workflow with a sample article

### Optional Enhancements

- Create `.github/instructions/BLOG_POST_INTEGRATION.instructions.md` for integration procedures
- Set up automated testing for generated content
- Create content templates for different article types
- Establish editorial review process

## Maintenance Notes

### When to Update These Files

- **New regulatory requirements**: Update compliance sections
- **Brand changes**: Update brand identity references
- **New product categories**: Expand product type coverage
- **Component changes**: Update import paths and component names
- **CSV schema changes**: Update field descriptions

### Version Control

All instruction files should be version controlled alongside the codebase. Consider:

- Creating a changelog for instruction file updates
- Tagging releases when significant changes are made
- Documenting breaking changes that affect content generation

## Testing Checklist

Before using the workflow in production:

- [ ] Test TOFU article generation with sample data
- [ ] Test product page generation with real product URL
- [ ] Verify all internal links work correctly
- [ ] Check ad placeholder integration
- [ ] Validate SEO metadata generation
- [ ] Test compliance disclaimer inclusion
- [ ] Verify American English spelling throughout
- [ ] Check brand color application
- [ ] Test responsive image components
- [ ] Validate TypeScript compilation

## Support Resources

### Official US Financial References

- **CFPB**: <https://www.consumerfinance.gov/>
- **FTC**: <https://www.ftc.gov/>
- **MyMoney.gov**: <https://www.mymoney.gov/>

### Project Documentation

- System Instructions: `/lib/*.instructions.md`
- Prompt Templates: `/lib/documents/prompt-to-generate-*.md`
- Integration Guide: `.github/instructions/BLOG_POST_INTEGRATION.instructions.md` (if created)

## Conclusion

The blog post generation workflow has been successfully migrated from UK TopFinanzas to KardTrust with all necessary adaptations for the US market. The system is now ready to generate:

1. **TOFU blog articles** - Educational personal finance content
2. **Financial product pages** - Credit cards, loans, and other financial products

All content will be:

- Written in American English
- Compliant with CFPB and FTC regulations
- SEO-optimized for US search intent
- Production-ready TypeScript/Next.js code

The workflow maintains the same high-quality standards while being fully adapted for the US market and KardTrust brand identity.
