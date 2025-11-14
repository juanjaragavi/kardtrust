# Deployment Script Update Notes

**Date:** 2025-11-14  
**Script:** `./scripts/deploy_update.sh`

## Key Changes Made

### 1. Fixed PM2 User Configuration
- **Previous Issue:** Script was trying to restart PM2 under user `juanjaramillo` 
- **Solution:** Updated to use `sudo pm2` commands since kardtrust runs under root's PM2
- **Current PM2 Setup:**
  - Process runs under root user
  - PM2 ID: 5
  - Process Name: kardtrust
  - Port: 3005

### 2. Enhanced Script Features

#### Added Color-Coded Output
- Green for success messages
- Red for errors
- Yellow for warnings
- Timestamped log entries

#### Smart Dependency Management (Step 2)
- Checks if `package.json` or `package-lock.json` changed
- Only runs `npm install --production` if dependencies were modified
- Skips unnecessary installations for faster deployments

#### Permission Fix (Step 5)
- Automatically fixes `.next/cache` directory permissions
- Sets ownership to `macbookpro:macbookpro`
- Prevents image caching errors

#### Health Check (Step 6)
- Waits 3 seconds after PM2 restart
- Performs HTTP health check on port 3005
- Verifies server returns HTTP 200 status
- Provides helpful error messages if issues detected

#### Better Error Handling
- Uses `set -e` to exit on any command failure
- Individual step validation with clear error messages
- Proper exit codes for automation integration

### 3. Deployment Steps

The script now follows this optimized workflow:

1. **Git Pull** - Fetches latest changes from `origin main`
2. **Dependency Check** - Conditionally updates npm packages
3. **Clean Build** - Removes old `.next` directory
4. **Build** - Creates optimized production build
5. **Fix Permissions** - Ensures proper cache permissions
6. **Restart & Verify** - Restarts PM2 and validates server health

### 4. Port Configuration Verified

All Next.js projects in `/var/www/html/` have distinct ports:

| Project | Port | Status |
|---------|------|--------|
| kardtrust | 3005 | ✅ Active |
| uk | 3004 | Active |
| budgetbee-next | 3007 | Active |
| emailgenius-broadcasts-generator | 3020 | Active |

## Usage

### Standard Deployment
```bash
cd /var/www/html/kardtrust
./scripts/deploy_update.sh
```

## Testing Results

**Last Test:** 2025-11-14 20:09:55  
**Status:** ✅ SUCCESS  
**Build Time:** ~107 seconds  
**Server Response:** HTTP 200 (15.4ms)  
**PM2 Status:** Online, 247MB memory usage

## Troubleshooting

### Check PM2 Status
```bash
sudo pm2 list
sudo pm2 show kardtrust
```

### View Logs
```bash
sudo pm2 logs kardtrust --lines 50
```

### Manual Restart
```bash
sudo pm2 restart kardtrust
```

### Verify Server Response
```bash
curl -I http://localhost:3005
```

## Notes

- Script requires sudo privileges for git, build, and PM2 operations
- All PM2 commands must run with sudo since process runs under root
- Cache permissions are automatically fixed to prevent Next.js image optimization errors
- Script includes automatic server health validation
