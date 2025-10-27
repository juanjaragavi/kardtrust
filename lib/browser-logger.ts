/**
 * Browser-Safe Logger for Client Components
 *
 * This logger provides a simple wrapper around console methods
 * that can be safely imported in client components without trying
 * to bundle server-side dependencies like Pino.
 *
 * Use this in "use client" components instead of importing the main logger.
 */

const isDevelopment = process.env.NODE_ENV === "development";

export const browserLogger = {
  trace: (...args: unknown[]) =>
    isDevelopment && console.debug("[TRACE]", ...args),
  debug: (...args: unknown[]) =>
    isDevelopment && console.debug("[DEBUG]", ...args),
  info: (...args: unknown[]) => console.info("[INFO]", ...args),
  warn: (...args: unknown[]) => console.warn("[WARN]", ...args),
  error: (...args: unknown[]) => console.error("[ERROR]", ...args),
  fatal: (...args: unknown[]) => console.error("[FATAL]", ...args),
};

export default browserLogger;
