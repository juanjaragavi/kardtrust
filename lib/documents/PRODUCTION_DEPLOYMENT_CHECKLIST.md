# KardTrust Production Deployment Checklist

## Migration from Vercel Staging to GCP Production Server

**Date:** October 29, 2025
**Environment:** GCP Compute Engine (Ubuntu/Apache 2.0)
**Production URL:** <https://kardtrust.com>

---

## ✅ Completed URL Migration Tasks

### 1. AdZep Analytics Integration

- [x] Updated AdZep script URL from `uk.kardtrust.js` to `kardtrust.js`
- [x] File: `/components/analytics/adzep.tsx`
- [x] Verified script loading strategy remains optimized

### 2. Blog Post Metadata URLs

- [x] Replaced all `uk.kardtrust.com` with `kardtrust.com` in 13 metadata files
- [x] Directory: `/app/personal-finance/*/metadata.ts`
- [x] All Open Graph URLs now point to production domain
- [x] Verified no remaining staging URLs

### 3. Legal Content Updates

- [x] Updated Privacy Policy to reference `kardtrust.com`
- [x] Updated Terms & Conditions to reference `kardtrust.com`
- [x] Updated Cookie Policy to reference `kardtrust.com`
- [x] Changed regulatory compliance from UK GDPR to US privacy laws
- [x] Files: `/content/legal/*.mdx`

### 4. CORS Configuration

- [x] Updated CORS config from `uk.kardtrust.com` to `kardtrust.com`
- [x] Added www subdomain support (`www.kardtrust.com`)
- [x] File: `/cors-config.json`

### 5. Documentation Updates

- [x] Updated staging references to production URLs
- [x] File: `/docs/PERSONAL_FINANCE_CATEGORIZATION_FIX.md`

### 6. Next.js Configuration Optimizations

- [x] Added SWC minification for better performance
- [x] Disabled production source maps for security
- [x] Enhanced security headers (X-XSS-Protection, Permissions-Policy)
- [x] Optimized for standalone Apache deployment
- [x] File: `/next.config.mjs`

### 7. Apache Server Configuration

- [x] Created comprehensive `.htaccess` file
- [x] Configured HTTPS enforcement
- [x] Configured GZIP compression
- [x] Set up browser caching (1-year for static assets)
- [x] Added security headers (HSTS, X-Frame-Options, etc.)
- [x] Configured proper MIME types
- [x] File: `/public/.htaccess`

---

## 📋 Pre-Deployment Verification

### URLs & Configuration

- [x] All hardcoded URLs point to `https://kardtrust.com`
- [x] No remaining Vercel staging URLs in source code
- [x] No remaining UK subdomain references in source code
- [x] Sitemap references production URL (`/app/sitemap.xml`)
- [x] Robots.txt references production sitemap
- [x] Package.json homepage field is correct

### Core Files Verified

- [x] `app/layout.tsx` - baseUrl set to `https://kardtrust.com`
- [x] `package.json` - homepage set to `https://kardtrust.com`
- [x] `app/sitemap.xml` - all URLs use production domain
- [x] `public/robots.txt` - sitemap URL is correct
- [x] `next.config.mjs` - optimized for production
- [x] `middleware.ts` - no environment-specific URLs

---

## 🚀 Deployment Steps for GCP Server

### 1. Server Preparation (Ubuntu/Apache)

```bash
# Ensure Apache modules are enabled
sudo a2enmod rewrite
sudo a2enmod deflate
sudo a2enmod expires
sudo a2enmod headers
sudo a2enmod ssl

# Restart Apache
sudo systemctl restart apache2
```

### 2. Environment Variables

Ensure the following environment variables are set in production:

```bash
# Google Sheets API (if used)
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"

# Email Services (if used)
SENDGRID_API_KEY=your-sendgrid-key
BREVO_API_KEY=your-brevo-key

# Analytics
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID=AW-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL=XXXXXXXX

# Cookie validation
NEXT_PUBLIC_COOKIE_VALIDATION_ENABLED=true
NEXT_PUBLIC_COOKIE_SHORT_EXPIRATION=1

# Node environment
NODE_ENV=production
```

### 3. Build the Application

```bash
# Install dependencies
npm ci --production=false

# Build the application
npm run build

# Verify build output
ls -la .next/standalone/
```

### 4. Deploy to Server

```bash
# Copy standalone build to server
scp -r .next/standalone/* user@server:/opt/app/kardtrust/
scp -r .next/static user@server:/opt/app/kardtrust/.next/
scp -r public user@server:/opt/app/kardtrust/

# Copy .htaccess to public directory
scp public/.htaccess user@server:/opt/app/kardtrust/public/
```

### 5. Start the Application

```bash
# On the server
cd /opt/app/kardtrust
NODE_ENV=production node server.js
```

### 6. Configure Apache Virtual Host

```apache
<VirtualHost *:443>
    ServerName kardtrust.com
    ServerAlias www.kardtrust.com

    SSLEngine on
    SSLCertificateFile /path/to/cert.pem
    SSLCertificateKeyFile /path/to/key.pem

    ProxyPreserveHost On
    ProxyPass / http://localhost:3005/
    ProxyPassReverse / http://localhost:3005/

    # Enable .htaccess override
    <Directory /opt/app/kardtrust/public>
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/kardtrust-error.log
    CustomLog ${APACHE_LOG_DIR}/kardtrust-access.log combined
</VirtualHost>

# Redirect HTTP to HTTPS
<VirtualHost *:80>
    ServerName kardtrust.com
    ServerAlias www.kardtrust.com
    Redirect permanent / https://kardtrust.com/
</VirtualHost>
```

---

## 🧪 Post-Deployment Testing

### Critical Functionality Tests

1. **Homepage Loading**
   - [ ] Visit <https://kardtrust.com>
   - [ ] Verify hero section loads
   - [ ] Check that images load from CDN
   - [ ] Verify AdZep script loads correctly

2. **Navigation**
   - [ ] Test main navigation menu
   - [ ] Verify all internal links work
   - [ ] Check breadcrumb navigation
   - [ ] Test mobile navigation

3. **Forms & Recommender**
   - [ ] Test credit card recommender flow
   - [ ] Verify form submissions
   - [ ] Check Google Sheets API integration
   - [ ] Test UTM parameter persistence

4. **Blog & Content**
   - [ ] Access blog listing page
   - [ ] Open personal finance category
   - [ ] Verify blog post metadata
   - [ ] Check internal links in articles

5. **Legal Pages**
   - [ ] Privacy Policy loads correctly
   - [ ] Terms & Conditions display properly
   - [ ] Cookie Policy is accessible
   - [ ] All legal content references kardtrust.com

6. **Analytics & Tracking**
   - [ ] GTM container loads
   - [ ] AdZep activation on page load
   - [ ] AdZep activation on navigation
   - [ ] UTM parameters are tracked
   - [ ] Conversion tracking works

7. **Performance**
   - [ ] Run Lighthouse audit (target: >90 Performance)
   - [ ] Check Core Web Vitals
   - [ ] Verify GZIP compression is active
   - [ ] Check browser caching headers
   - [ ] Test image optimization

8. **Security**
   - [ ] Verify HTTPS enforcement
   - [ ] Check security headers (X-Frame-Options, etc.)
   - [ ] Test CSP headers
   - [ ] Verify no directory browsing
   - [ ] Check that sensitive files are blocked

9. **SEO**
   - [ ] Verify sitemap.xml is accessible
   - [ ] Check robots.txt
   - [ ] Verify canonical URLs
   - [ ] Test Open Graph metadata
   - [ ] Validate structured data

10. **Cross-Browser Testing**
    - [ ] Chrome (latest)
    - [ ] Firefox (latest)
    - [ ] Safari (latest)
    - [ ] Edge (latest)
    - [ ] Mobile Safari (iOS)
    - [ ] Chrome Mobile (Android)

---

## 📊 Monitoring Setup

### 1. Server Monitoring

```bash
# Set up server monitoring
sudo apt-get install htop
sudo apt-get install apache2-utils

# Monitor Apache logs
tail -f /var/log/apache2/kardtrust-access.log
tail -f /var/log/apache2/kardtrust-error.log
```

### 2. Application Monitoring

- Set up uptime monitoring (UptimeRobot, Pingdom, etc.)
- Configure error tracking (Sentry, LogRocket, etc.)
- Set up performance monitoring (New Relic, Datadog, etc.)

### 3. Analytics Monitoring

- Verify GTM is receiving data
- Check Google Analytics reports
- Monitor AdZep dashboard
- Review conversion tracking

---

## 🔧 Performance Optimizations Applied

### Next.js Level

- SWC minification enabled
- Production source maps disabled
- Standalone output mode
- Image optimization configured
- Compression enabled
- Build worker optimization

### Apache Level (.htaccess)

- GZIP compression for all text assets
- 1-year browser caching for static assets
- Security headers (HSTS, X-Frame-Options, CSP)
- HTTPS enforcement
- WWW to non-WWW redirect
- Proper MIME types configured

### CDN & Assets

- External images served from media.topfinanzas.com
- Next.js image optimization active
- WebP and AVIF format support
- Lazy loading for images
- Resource hints and preconnects

---

## 📝 Key Changes Summary

### Files Modified

1. `/components/analytics/adzep.tsx` - Updated script URL
2. `/app/personal-finance/*/metadata.ts` (13 files) - Updated URLs
3. `/content/legal/privacy-policy.mdx` - Updated references
4. `/content/legal/terms-conditions.mdx` - Updated references
5. `/content/legal/cookie-policy.mdx` - Updated references
6. `/cors-config.json` - Updated CORS origins
7. `/docs/PERSONAL_FINANCE_CATEGORIZATION_FIX.md` - Updated URLs
8. `/next.config.mjs` - Added production optimizations

### Files Created

1. `/public/.htaccess` - Apache configuration

### No Changes Required (Already Correct)

- `/app/layout.tsx` - baseUrl already set correctly
- `/package.json` - homepage already correct
- `/app/sitemap.xml` - already using production URLs
- `/public/robots.txt` - already correct
- `/middleware.ts` - no environment-specific code

---

## 🛡️ Security Considerations

### Implemented Security Measures

1. **HTTPS Enforcement** - All traffic redirected to HTTPS
2. **Security Headers** - X-Frame-Options, X-XSS-Protection, CSP
3. **HSTS** - 1-year max-age with preload
4. **File Protection** - .env and sensitive files blocked
5. **Directory Browsing** - Disabled
6. **Server Signature** - Hidden
7. **Input Validation** - Zod schemas in forms
8. **CORS** - Configured for specific origins only

### Additional Recommendations

- [ ] Set up SSL certificate auto-renewal (Let's Encrypt/Certbot)
- [ ] Configure fail2ban for brute force protection
- [ ] Set up regular security audits
- [ ] Enable Apache mod_security (optional)
- [ ] Configure rate limiting for API endpoints

---

## 📞 Support & Rollback

### Rollback Procedure

If issues arise, rollback by:

1. Keep previous build in `/opt/app/kardtrust.backup/`
2. Stop current Node process
3. Restore backup build
4. Restart Node process
5. Clear CDN cache if applicable

### Support Contacts

- **Technical Lead:** [info@kardtrust.com](mailto:info@kardtrust.com)
- **Server Admin:** Contact GCP support
- **Emergency:** Keep staging environment available at Vercel

---

## ✅ Final Pre-Launch Checklist

- [x] All URLs updated to production domain
- [x] No staging URLs remaining in code
- [x] Legal content updated
- [x] CORS configuration updated
- [x] Apache .htaccess created and optimized
- [x] Next.js configuration optimized for production
- [x] Security headers configured
- [ ] Environment variables configured on server
- [ ] SSL certificates installed
- [ ] Apache virtual host configured
- [ ] Application built successfully
- [ ] Files deployed to server
- [ ] Application started and running
- [ ] All post-deployment tests passed
- [ ] Analytics verified working
- [ ] Performance metrics acceptable
- [ ] Monitoring setup complete
- [ ] DNS pointing to new server

---

## 📚 Additional Documentation

- Project Instructions: `/.github/copilot-instructions.md`
- AdZep Implementation: `/.github/instructions/ADZEP_IMPLEMENTATION.instructions.md`
- Blog Integration: `/.github/instructions/BLOG_POST_INTEGRATION.instructions.md`
- Git Workflow: `/.github/instructions/PUSH-AND-COMMIT.instructions.md`

---

**Deployment Status:** ✅ Ready for Production
**Prepared by:** AI Assistant
**Date:** October 29, 2025
**Version:** 1.0
