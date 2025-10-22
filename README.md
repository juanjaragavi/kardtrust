<div align="center">
  <img src="https://media.topfinanzas.com/images/kardtrust/kardtrust-logo-clear.png" alt="KardTrust Logo" width="300">
  
  # KardTrust - Next.js Project

[![GitHub Repository](https://img.shields.io/badge/GitHub-kardtrust-blue?logo=github)](https://github.com/juanjaragavi/kardtrust)

</div>

This is a Next.js 15+ project for KardTrust, a financial services comparison website for the United States market. It includes a blog, credit card comparison tools, personal loan guides, and comprehensive financial services information.

## Repository

- **GitHub**: [https://github.com/juanjaragavi/kardtrust](https://github.com/juanjaragavi/kardtrust)
- **Website**: [https://kardtrust.com](https://kardtrust.com)

## Tech Stack

- **Framework**: Next.js 15+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Shadcn/UI
- **Analytics**: Google Tag Manager + AdZep
- **Forms**: React Hook Form + Zod validation

## Getting Started

### Development

```bash
npm run dev      # Start development server on port 3005
npm run build    # Production build
npm run start    # Start production server on port 3005
npm run lint     # Run ESLint
```

### Environment Setup

1. Copy `.env.example` to `.env.local` (development) or `.env.production` (production)
2. Populate with actual API keys and values
3. Never commit sensitive files to the repository
4. On the server, environment files are stored in `/opt/app/` with strict permissions

**Required Environment Variables:**

- `GOOGLE_SERVICE_ACCOUNT_EMAIL` - Google Sheets integration
- `GOOGLE_PRIVATE_KEY` - Google Sheets authentication
- `GOOGLE_SHEET_ID` - Target spreadsheet
- `SENDGRID_API_KEY` - Email service
- `KIT_API_KEY` - Newsletter subscription service

## Deployment

Production deployment using PM2:

```bash
pm2 start ecosystem.config.js --env production
```

Or use the automated deployment script on the server:

```bash
sudo bash ./scripts/deploy_update.sh
```

## API Key Management

All API keys and sensitive information are managed through environment variables and should never be hardcoded in the application code.
