# Pino Logger Quick Reference

## Import Logger

```typescript
import logger from "@/lib/logger";
// Or for child logger with context:
import { createLogger } from "@/lib/logger";
```

## Basic Usage

```typescript
// Simple messages
logger.info("User logged in");
logger.error("Database connection failed");
logger.warn("API rate limit approaching");
logger.debug("Processing data");

// With context
logger.info({ userId: "123", action: "login" }, "User logged in");
logger.error({ error, module: "api" }, "Request failed");
```

## Log Levels (in order of severity)

| Level | Use When                 | Shown in Dev | Shown in Prod |
| ----- | ------------------------ | ------------ | ------------- |
| trace | Ultra-detailed debugging | ✅           | ❌            |
| debug | Development debugging    | ✅           | ❌            |
| info  | General information      | ✅           | ✅            |
| warn  | Warning conditions       | ✅           | ✅            |
| error | Error conditions         | ✅           | ✅            |
| fatal | Critical failures        | ✅           | ✅            |

## Common Patterns

### API Route

```typescript
export async function POST(req: Request) {
  logger.info({ module: "api/route" }, "Request received");

  try {
    // ... logic
    logger.info({ module: "api/route", status: 200 }, "Success");
    return NextResponse.json({ success: true });
  } catch (error) {
    logger.error({ module: "api/route", error }, "Failed");
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
```

### React Component

```typescript
const componentLogger = createLogger({ component: "MyComponent" });

export default function MyComponent() {
  useEffect(() => {
    componentLogger.debug("Mounted");
  }, []);

  const handleClick = () => {
    componentLogger.info({ action: "click" }, "Button clicked");
  };
}
```

### Error Handling

```typescript
try {
  await operation();
} catch (error) {
  logger.error(
    {
      module: "operation",
      error:
        error instanceof Error
          ? {
              message: error.message,
              stack: error.stack,
            }
          : error,
    },
    "Operation failed",
  );
}
```

## DO's and DON'Ts

### ✅ DO

```typescript
// Use structured context
logger.info({ userId, action }, "User action");

// Use appropriate log levels
logger.debug("Dev debugging info");
logger.info("User signed in");
logger.error({ error }, "Failed to process");

// Add module context
logger.info({ module: "api/sheets" }, "Request");

// Include relevant data
logger.error(
  {
    error,
    userId,
    attemptCount,
  },
  "Auth failed",
);
```

### ❌ DON'T

```typescript
// Don't use console.log
console.log('Message'); // ❌

// Don't log sensitive data directly
logger.info({ password, apiKey }, 'Data'); // ❌
// (Logger auto-redacts but better to not log at all)

// Don't use wrong log levels
logger.error('Just checking something'); // ❌
logger.info({ error }, 'Critical failure'); // ❌

// Don't log huge objects
logger.info({ hugeArray: [...1000items] }, 'Data'); // ❌
```

## Helper Functions

```typescript
import { logHelpers } from "@/lib/logger";

// API logging
logHelpers.apiRequest("POST", "/api/sheets");
logHelpers.apiResponse("POST", "/api/sheets", 200, 150);
logHelpers.apiError("POST", "/api/sheets", error);

// Analytics
logHelpers.analytics("page_view", { page: "/home" });

// Database
logHelpers.database("insert", "users", { id: "123" });

// Auth
logHelpers.auth("login", userId);

// Validation
logHelpers.validation("email", "Invalid format");
```

## Sensitive Data

Auto-redacted fields:

- `password`, `secret`, `token`, `apiKey`
- `email` (in sensitive contexts)
- `phone`, `creditCard`, `ssn`
- All `*_KEY` environment variables

## Environment Variables

```bash
# Override log level
PINO_LOG_LEVEL=debug npm run dev
PINO_LOG_LEVEL=error npm start

# Options: trace, debug, info, warn, error, fatal
```

## Migration from console.log

| Before                        | After                         |
| ----------------------------- | ----------------------------- |
| `console.log('msg')`          | `logger.info('msg')`          |
| `console.error('msg')`        | `logger.error('msg')`         |
| `console.warn('msg')`         | `logger.warn('msg')`          |
| `console.debug('msg')`        | `logger.debug('msg')`         |
| `console.log('prefix', data)` | `logger.info(data, 'prefix')` |

## Output Format

### Development (Pretty)

```bash
[14:32:15 UTC] INFO: User logged in
    userId: "123"
    action: "login"
```

### Production (JSON)

```json
{
  "level": "INFO",
  "time": "2025-10-27T14:32:15.123Z",
  "userId": "123",
  "action": "login",
  "msg": "User logged in"
}
```

## Need Help?

- Full docs: `/docs/LOGGING_MIGRATION.md`
- Implementation: `/lib/logger.ts`
- Examples: `/docs/PINO_IMPLEMENTATION_SUMMARY.md`
