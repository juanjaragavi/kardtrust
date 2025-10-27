# Logging System - Pino Implementation

## Overview

This project uses **Pino** for structured, production-ready logging instead of `console.log`. Pino is the fastest Node.js logging library with automatic sensitive data redaction and full Next.js compatibility.

## Quick Start

```typescript
import logger from "@/lib/logger";

// Basic logging
logger.info("User logged in");
logger.error({ error }, "Request failed");
logger.warn("API rate limit approaching");
logger.debug("Processing data");

// With context
logger.info({ userId: "123", action: "login" }, "User logged in");
```

## Why Not Console.log?

❌ **Security**: Exposes sensitive data  
❌ **Performance**: Blocks event loop (~30% overhead)  
❌ **Structure**: Hard to parse and analyze  
❌ **Production**: No log levels, rotation, or monitoring

✅ **Pino**: Secure, fast (5% overhead), structured, production-ready

## Log Levels

```typescript
logger.trace("Ultra-detailed"); // Dev only
logger.debug("Debugging"); // Dev only
logger.info("Information"); // Always shown
logger.warn("Warning"); // Always shown
logger.error({ error }, "Error"); // Always shown
logger.fatal("Critical"); // Always shown
```

## Environment Configuration

```bash
# Development - pretty formatted, verbose
npm run dev

# Production - JSON formatted, redacted
npm run build && npm start

# Override log level
PINO_LOG_LEVEL=debug npm run dev
```

## Sensitive Data Protection

Automatically redacted:

- API keys (`GOOGLE_PRIVATE_KEY`, `BREVO_API_KEY`, etc.)
- Passwords, tokens, secrets
- Email addresses, phone numbers
- Credit card info, SSN, personal data

## Helper Functions

```typescript
import { logHelpers } from "@/lib/logger";

// API logging
logHelpers.apiRequest("POST", "/api/sheets");
logHelpers.apiResponse("POST", "/api/sheets", 200, 150);
logHelpers.apiError("POST", "/api/sheets", error);

// Other helpers
logHelpers.analytics("event", { data });
logHelpers.database("insert", "users");
logHelpers.auth("login", userId);
```

## Documentation

- **Quick Reference**: [/docs/LOGGER_QUICK_REFERENCE.md](/docs/LOGGER_QUICK_REFERENCE.md)
- **Migration Guide**: [/docs/LOGGING_MIGRATION.md](/docs/LOGGING_MIGRATION.md)
- **Implementation**: [/docs/PINO_IMPLEMENTATION_SUMMARY.md](/docs/PINO_IMPLEMENTATION_SUMMARY.md)
- **Logger Source**: [/lib/logger.ts](/lib/logger.ts)

## Examples

### API Route

```typescript
export async function POST(req: Request) {
  logger.info({ module: "api/sheets" }, "Request received");

  try {
    const result = await processRequest(req);
    logger.info({ module: "api/sheets", status: 200 }, "Success");
    return NextResponse.json(result);
  } catch (error) {
    logger.error({ module: "api/sheets", error }, "Failed");
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
```

### React Component

```typescript
import { createLogger } from "@/lib/logger";

export default function MyComponent() {
  const logger = createLogger({ component: "MyComponent" });

  useEffect(() => {
    logger.debug("Component mounted");
  }, []);

  const handleAction = () => {
    logger.info({ action: "click" }, "User action");
  };
}
```

## Migration Status

- ✅ Core infrastructure complete
- ✅ Documentation complete
- 🔄 API routes: 2/7 migrated
- ⏳ Components: In progress
- ⏳ Utilities: Pending

## Resources

- [Pino Official Docs](https://getpino.io/)
- [Research: Why console.log is bad](https://youtu.be/GvqZuVgRKWw)
- [Node.js Logging Best Practices](https://blog.logrocket.com/node-js-logging-best-practices-essential-guide/)

---

For detailed information, see the documentation files listed above.
