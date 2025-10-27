# Logging Migration: Console.log to Pino

## Overview

This document outlines the migration from `console.log` to Pino logger across the KardTrust Next.js application.

## Why Migrate from Console.log?

### Security Risks

- **Sensitive Data Exposure**: Console.log can accidentally expose API keys, tokens, passwords, and user data
- **Production Logs**: Console logs in browser can reveal internal application logic
- **No Redaction**: Cannot automatically redact sensitive information

### ⚡ Performance Issues

- **Synchronous I/O**: Console.log blocks the Node.js event loop
- **Memory Leaks**: Logging large objects can cause memory issues
- **No Buffer Management**: Cannot control log volume or rotation

### 🔧 Operational Limitations

- **No Structure**: Plain text logs are hard to parse and analyze
- **No Log Levels**: Cannot filter by severity (debug, info, warn, error)
- **No Aggregation**: Cannot send logs to monitoring services
- **No Rotation**: Log files grow indefinitely

## Pino Advantages

### 🚀 Performance

- **Fastest Node.js Logger**: 5x faster than Winston, 10x faster than Bunyan
- **Worker Threads**: Logging happens off the main thread
- **Low Overhead**: Minimal performance impact (~5% vs ~30% for other loggers)

### 📊 Structured Logging

- **JSON Output**: Industry standard for log aggregation
- **Searchable**: Easy to query and filter
- **Machine Readable**: Perfect for log analysis tools

### 🛡️ Security

- **Automatic Redaction**: Sensitive data is automatically censored
- **Configurable**: Can customize what gets logged
- **Environment Aware**: Different settings for dev vs production

### 🔧 Features

- **Log Levels**: trace, debug, info, warn, error, fatal
- **Child Loggers**: Add context to specific modules
- **Pretty Printing**: Human-readable output in development
- **Transports**: Send logs to files, services, databases

## Implementation

### Logger Configuration

The centralized logger is located at `/lib/logger.ts`:

```typescript
import logger from "@/lib/logger";

// Basic logging
logger.info("User logged in");
logger.error("Database connection failed");
logger.warn("API rate limit approaching");
logger.debug("Processing user data");

// Structured logging with context
logger.info({ userId: "123", action: "login" }, "User logged in");

// Child loggers for modules
const moduleLogger = logger.child({ module: "api/sheets" });
moduleLogger.info("Request received");
```

### Configuration Details

```typescript
// Development Mode
- Pretty formatted output with colors
- Log level: debug (verbose)
- Shows: time, level, message, context
- File logging: optional

// Production Mode
- JSON formatted output
- Log level: info (standard)
- Sensitive data: automatically redacted
- Optimized for log aggregation services
```

### Sensitive Data Redaction

The logger automatically redacts:

- API keys and tokens
- Passwords and secrets
- Email addresses (when in sensitive contexts)
- Phone numbers
- Credit card information
- SSN and personal identifiers

## Migration Guide

### Step 1: Import the Logger

**Before:**

```typescript
// No import needed
```

**After:**

```typescript
import logger from "@/lib/logger";
```

### Step 2: Replace Console Statements

#### Simple Messages

**Before:**

```typescript
console.log("User created successfully");
console.error("Failed to connect to database");
console.warn("API key is missing");
```

**After:**

```typescript
logger.info("User created successfully");
logger.error("Failed to connect to database");
logger.warn("API key is missing");
```

#### Messages with Data

**Before:**

```typescript
console.log("[API] Request received:", {
  method: "POST",
  url: "/api/sheets",
  hasEmail: true,
});
```

**After:**

```typescript
logger.info(
  {
    module: "api",
    method: "POST",
    url: "/api/sheets",
    hasEmail: true,
  },
  "Request received",
);
```

#### Error Logging

**Before:**

```typescript
console.error("Error occurred:", error);
console.error("[Sheets API] Error:", {
  message: error.message,
  stack: error.stack,
});
```

**After:**

```typescript
logger.error({ error }, "Error occurred");
logger.error(
  {
    module: "sheets-api",
    errorMessage: error.message,
    errorStack: error.stack,
  },
  "Error occurred",
);
```

### Step 3: Use Appropriate Log Levels

| Level   | When to Use                            | Example                                 |
| ------- | -------------------------------------- | --------------------------------------- |
| `trace` | Ultra-detailed debugging (rarely used) | Function entry/exit points              |
| `debug` | Development debugging info             | Variable values, flow control           |
| `info`  | General information                    | Request received, user action completed |
| `warn`  | Warning conditions                     | Deprecation notices, rate limits        |
| `error` | Error conditions                       | Failed API calls, exceptions            |
| `fatal` | Fatal errors (app crash)               | Database unavailable, critical failures |

### Step 4: Add Context with Child Loggers

**For API Routes:**

```typescript
const logger = createLogger({ module: "api/sheets" });

export async function POST(req: Request) {
  logger.info("Request received");
  // ...
  logger.debug({ bodySize: body.length }, "Processing request body");
  // ...
  logger.info({ status: 201 }, "Request completed");
}
```

**For Components:**

```typescript
const logger = createLogger({ component: "AdZepSPABridge" });

useEffect(() => {
  logger.debug("Component mounted");
  // ...
}, []);
```

## File-by-File Migration Status

### ✅ Completed

- `/lib/logger.ts` - Logger configuration created
- `/app/api/sheets/route.ts` - All console.log replaced
- `/app/api/subscribe/route.ts` - Partially migrated

### 🔄 In Progress

- API Routes: `contact`, `search`, `posts`, `authors`
- Analytics Components: `AdZep`, `GTM`, `GAM`
- UTM Tracking Components

### ⏳ Pending

- UI Components and Pages
- Utility Functions in `/lib`
- Test Scripts (lower priority)

## Migration Checklist

For each file:

- [ ] Add logger import: `import logger from '@/lib/logger';`
- [ ] Replace `console.log` → `logger.info` (or appropriate level)
- [ ] Replace `console.error` → `logger.error`
- [ ] Replace `console.warn` → `logger.warn`
- [ ] Replace `console.debug` → `logger.debug`
- [ ] Add structured context objects
- [ ] Use child loggers for module context
- [ ] Test in development mode
- [ ] Test in production mode
- [ ] Verify no sensitive data is logged

## Testing

### Development Testing

```bash
# Run in development mode
npm run dev

# Check logs are properly formatted
# Logs should show colored output with timestamps
```

### Production Testing

```bash
# Build for production
npm run build

# Run production server
npm run start

# Check logs are JSON formatted
# Verify sensitive data is redacted
```

### Log Output Examples

**Development Mode:**

```bash
[14:32:15 UTC] INFO: Request received
    module: "api/sheets"
    method: "POST"
    hasEmail: true

[14:32:15 UTC] ERROR: Validation failed
    module: "api/sheets"
    field: "email"
```

**Production Mode:**

```json
{"level":"INFO","time":"2025-10-27T14:32:15.123Z","pid":12345,"host":"server-1","module":"api/sheets","method":"POST","hasEmail":true,"msg":"Request received"}
{"level":"ERROR","time":"2025-10-27T14:32:15.456Z","pid":12345,"host":"server-1","module":"api/sheets","field":"email","msg":"Validation failed"}
```

## Common Patterns

### API Request Logging

```typescript
import { logHelpers } from "@/lib/logger";

export async function POST(req: Request) {
  const startTime = Date.now();

  logHelpers.apiRequest("POST", "/api/sheets");

  try {
    // ... process request
    const duration = Date.now() - startTime;
    logHelpers.apiResponse("POST", "/api/sheets", 201, duration);

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    logHelpers.apiError("POST", "/api/sheets", error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
```

### Component Logging

```typescript
import { createLogger } from '@/lib/logger';

export default function MyComponent() {
  const logger = createLogger({ component: 'MyComponent' });

  useEffect(() => {
    logger.debug('Component mounted');

    return () => {
      logger.debug('Component unmounted');
    };
  }, []);

  const handleClick = () => {
    logger.info({ action: 'button-click' }, 'User clicked button');
  };

  return <button onClick={handleClick}>Click me</button>;
}
```

### Error Handling

```typescript
try {
  await someAsyncOperation();
} catch (error) {
  logger.error(
    {
      operation: "someAsyncOperation",
      error:
        error instanceof Error
          ? {
              message: error.message,
              stack: error.stack,
              name: error.name,
            }
          : error,
    },
    "Operation failed",
  );

  throw error;
}
```

## Benefits Realized

### Before (Console.log)

- ❌ No structure
- ❌ No log levels
- ❌ Security risks
- ❌ Performance issues
- ❌ No filtering
- ❌ Hard to analyze

### After (Pino)

- ✅ Structured JSON logs
- ✅ Proper log levels
- ✅ Automatic redaction
- ✅ High performance
- ✅ Easy filtering
- ✅ Ready for log aggregation
- ✅ Production-ready
- ✅ Better debugging

## Next Steps

1. **Complete Migration**: Finish migrating all remaining files
2. **Log Aggregation**: Set up log aggregation service (e.g., Better Stack, Datadog)
3. **Monitoring**: Configure alerts for error logs
4. **Log Rotation**: Set up log file rotation for production
5. **Documentation**: Update team documentation

## Resources

- [Pino Documentation](https://getpino.io/)
- [Pino GitHub](https://github.com/pinojs/pino)
- [Best Practices for Node.js Logging](https://blog.logrocket.com/node-js-logging-best-practices-essential-guide/)
- [Logging with Pino Guide](https://betterstack.com/community/guides/logging/how-to-install-setup-and-use-pino-to-log-node-js-applications/)

## Support

For questions or issues with the logging system, refer to:

- `/lib/logger.ts` - Logger implementation
- This document - Migration guide and examples
- Project maintainers - For specific concerns

---

**Migration Started:** October 27, 2025  
**Status:** In Progress  
**Target Completion:** TBD
