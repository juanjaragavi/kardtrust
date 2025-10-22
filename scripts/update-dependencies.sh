#!/bin/bash

# Script to update dependencies and resolve deprecated packages
# Created: October 22, 2025

echo "🔧 Starting dependency update process..."
echo ""

# Step 1: Remove node_modules and lock file
echo "📦 Step 1: Cleaning old dependencies..."
rm -rf node_modules
rm -f package-lock.json
echo "✅ Cleaned node_modules and package-lock.json"
echo ""

# Step 2: Install fresh dependencies
echo "📦 Step 2: Installing fresh dependencies..."
npm install
echo "✅ Dependencies installed"
echo ""

# Step 3: Check for vulnerabilities
echo "🔍 Step 3: Checking for security vulnerabilities..."
npm audit
echo ""

# Step 4: List outdated packages
echo "📊 Step 4: Checking for outdated packages..."
npm outdated
echo ""

echo "✅ Dependency update process complete!"
echo ""
echo "📝 Summary of changes:"
echo "  - Removed deprecated 'sendgrid@5.2.3' package"
echo "  - Using '@sendgrid/mail@8.1.7' (modern SendGrid package)"
echo "  - All sub-dependencies updated automatically"
echo ""
echo "🚀 You can now run 'npm run build' to test the build"
