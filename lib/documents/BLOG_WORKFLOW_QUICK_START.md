# KardTrust Blog Workflow - Quick Start Guide

## 📁 Files Location

### System Instructions

```bash
/lib/TOFU_BLOG_POST_GENERATION.instructions.md
/lib/CREDIT_CARD_PRODUCT_GENERATION.instructions.md
```

### User Prompts

```bash
/lib/documents/prompt-to-generate-tofu-posts.md
/lib/documents/prompt-to-generate-credit-card-products-posts.md
```

### Migration Documentation

```bash
/lib/documents/BLOG_WORKFLOW_MIGRATION_SUMMARY.md
```

## 🚀 Quick Start

### Generate a TOFU Blog Article

1. **Open**: `/lib/documents/prompt-to-generate-tofu-posts.md`
2. **Edit**: Replace `{title}` with your article title
3. **Submit**: Send the prompt to your AI assistant
4. **Result**: Receive a complete `.tsx` file for `/app/personal-finance/{slug}/page.tsx`

### Generate a Financial Product Page

1. **Open**: `/lib/documents/prompt-to-generate-credit-card-products-posts.md`
2. **Edit**: Update product details (name, provider, URL, brand color)
3. **Submit**: Send the prompt to your AI assistant
4. **Result**: Receive TWO `.tsx` files:
   - `/app/financial-solutions/{slug}/page.tsx` (benefits)
   - `/app/financial-solutions/{slug}-requirements/page.tsx` (requirements)

## 🎯 Key Adaptations from UK to US

| Aspect         | UK Version                         | US Version                     |
| -------------- | ---------------------------------- | ------------------------------ |
| **Brand**      | Top Finanzas UK                    | KardTrust                      |
| **Domain**     | uk.topfinanzas.com                 | kardtrust.com                  |
| **Language**   | British English                    | American English               |
| **Regulators** | FCA, MoneyHelper                   | CFPB, FTC, MyMoney.gov         |
| **Currency**   | GBP (£)                            | USD ($)                        |
| **Ad IDs**     | uk_topfinanzas_3, uk_topfinanzas_4 | kardtrust_ad_1, kardtrust_ad_2 |
| **CSV File**   | topfinanzas-us-topic-outline.csv   | kardtrust-topic-outline.csv    |

## 📊 Content Specifications

### TOFU Articles

- **Length**: 800-1,000 words
- **Internal Links**: Minimum 3
- **Ad Placements**: 2 (kardtrust_ad_1, kardtrust_ad_2)
- **Components**: Header, CompactFooter, AIContentDisclaimer

### Product Pages

- **Benefits Page**: 800-1,200 words
- **Requirements Page**: 600-900 words
- **Internal Links**: 2-3 per page
- **Components**: Same as TOFU + product-specific elements

## 🔗 Data Sources

### Primary

- **CSV**: `lib/documents/kardtrust-topic-outline.csv`
- **Official URLs**: Product websites (for product pages)

### Secondary

- **Sitemap**: `https://kardtrust.com/sitemap.xml`
- **CDN**: `https://media.kardtrust.com/`

### References

- **CFPB**: <https://www.consumerfinance.gov/>
- **FTC**: <https://www.ftc.gov/>
- **MyMoney.gov**: <https://www.mymoney.gov/>

## ✅ Pre-Generation Checklist

Before generating content, ensure:

- [ ] CSV topic outline exists: `lib/documents/kardtrust-topic-outline.csv`
- [ ] Sitemap is accessible: `https://kardtrust.com/sitemap.xml`
- [ ] CDN is configured: `https://media.kardtrust.com/`
- [ ] Template articles exist in `/app/personal-finance/` or `/app/financial-solutions/`

## 📝 Post-Generation Tasks

After receiving generated content:

### For TOFU Articles

- [ ] Save to `/app/personal-finance/{slug}/page.tsx`
- [ ] Update `app/blog/page.tsx` - add to allPosts array
- [ ] Update `app/personal-finance/page.tsx` - add to category archive
- [ ] Update `components/mdx/blog-layout.tsx` - update sidebar
- [ ] (Optional) Feature on homepage or header navigation

### For Product Pages

- [ ] Save benefits page to `/app/financial-solutions/{slug}/page.tsx`
- [ ] Save requirements page to `/app/financial-solutions/{slug}-requirements/page.tsx`
- [ ] Update product listings
- [ ] Update navigation menus
- [ ] Verify cross-links between pages work

## 🛠️ Compliance Reminders

All generated content must:

- ✅ Use American English spelling
- ✅ Include CFPB/FTC compliance disclaimers
- ✅ Show representative APR examples
- ✅ Add appropriate risk warnings
- ✅ State content is informational, not personalized advice
- ✅ Be transparent about costs and fees

## 🎨 Brand Standards

- **Primary Ad ID**: kardtrust_ad_1 (after H1)
- **Secondary Ad ID**: kardtrust_ad_2 (near end of article)
- **CTA Button Class**: `cta-button-blue`
- **Currency Format**: USD ($)
- **Date Format**: MM/DD/YYYY

## 📚 Additional Resources

- **Full Documentation**: `/lib/documents/BLOG_WORKFLOW_MIGRATION_SUMMARY.md`
- **System Prompts**: `/lib/*.instructions.md`
- **User Prompts**: `/lib/documents/prompt-to-generate-*.md`

## 🆘 Troubleshooting

### Issue: CSV file not found

**Solution**: Ensure `lib/documents/kardtrust-topic-outline.csv` exists

### Issue: Sitemap not accessible

**Solution**: Verify `https://kardtrust.com/sitemap.xml` is published

### Issue: Images not loading

**Solution**: Check CDN configuration at `https://media.kardtrust.com/`

### Issue: TypeScript errors in generated code

**Solution**: Verify template files exist and are up-to-date

## 💡 Tips

1. **Always read the system prompt first** - It contains crucial instructions
2. **Verify product URLs work** before generating product pages
3. **Check existing content** for styling consistency
4. **Test internal links** after generation
5. **Review compliance disclaimers** for accuracy

## 📞 Support

For questions or issues with the blog workflow:

1. Review the migration summary document
2. Check the system instruction files
3. Verify data sources are accessible
4. Test with sample content first

---

**Last Updated**: October 23, 2025  
**Version**: 1.0  
**Project**: KardTrust (US Market)
