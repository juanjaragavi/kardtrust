/**
 * Centralized Logging System using Pino
 *
 * This module provides a production-ready logging solution that replaces console.log
 * throughout the application with structured, performant logging.
 *
 * Features:
 * - Structured JSON logging in production
 * - Pretty formatting in development
 * - Automatic log level management
 * - Sensitive data redaction
 * - Performance optimized (uses worker threads)
 * - Compatible with Next.js server and client components
 *
 * @see https://github.com/pinojs/pino
 */

import pino from "pino";
import pinoPretty from "pino-pretty";

/**
 * Determine if we're running in a browser environment
 */
const isBrowser = typeof window !== "undefined";

/**
 * Determine the environment
 */
const isDevelopment = process.env.NODE_ENV === "development";

/**
 * Determine log level based on environment
 * - Development: 'debug' for verbose logging
 * - Production: 'info' for standard logging
 * - Can be overridden with PINO_LOG_LEVEL environment variable
 */
const logLevel =
  process.env.PINO_LOG_LEVEL || (isDevelopment ? "debug" : "info");

/**
 * Browser-safe logger for client components
 * Falls back to console methods but with structured approach
 */
type LogContext = Record<string, unknown>;

type BrowserLogger = {
  trace: (...args: unknown[]) => void;
  debug: (...args: unknown[]) => void;
  info: (...args: unknown[]) => void;
  warn: (...args: unknown[]) => void;
  error: (...args: unknown[]) => void;
  fatal: (...args: unknown[]) => void;
  child: (bindings?: LogContext) => BrowserLogger;
};

const createBrowserLogger = (): BrowserLogger => {
  return {
    trace: (...args: unknown[]) => {
      if (isDevelopment) {
        console.debug("[TRACE]", ...args);
      }
    },
    debug: (...args: unknown[]) => {
      if (isDevelopment) {
        console.debug("[DEBUG]", ...args);
      }
    },
    info: (...args: unknown[]) => {
      console.info("[INFO]", ...args);
    },
    warn: (...args: unknown[]) => {
      console.warn("[WARN]", ...args);
    },
    error: (...args: unknown[]) => {
      console.error("[ERROR]", ...args);
    },
    fatal: (...args: unknown[]) => {
      console.error("[FATAL]", ...args);
    },
    child: () => createBrowserLogger(),
  };
};

/**
 * Server-side Pino logger configuration
 */
const createServerLogger = () => {
  // Base configuration for all environments
  const baseConfig: pino.LoggerOptions = {
    level: logLevel,

    // Format timestamp as ISO string for better readability
    timestamp: pino.stdTimeFunctions.isoTime,

    // Add custom formatters
    formatters: {
      level: (label) => {
        return { level: label.toUpperCase() };
      },
      bindings: (bindings) => {
        return {
          pid: bindings.pid,
          host: bindings.hostname,
          node_version: process.version,
        };
      },
    },

    // Redact sensitive data from logs
    redact: {
      paths: [
        // API Keys and Secrets
        "GOOGLE_PRIVATE_KEY",
        "GOOGLE_SERVICE_ACCOUNT_EMAIL",
        "BREVO_API_KEY",
        "KIT_API_KEY",
        "SENDGRID_API_KEY",
        "VERTEX_AI_SEARCH_API_KEY",
        "*.apiKey",
        "*.api_key",
        "*.token",
        "*.password",
        "*.secret",

        // User data
        "email",
        "user.email",
        "*.email",
        "phone",
        "user.phone",
        "*.phone",
        "creditCard",
        "*.creditCard",
        "ssn",
        "*.ssn",

        // Request headers that might contain sensitive data
        "req.headers.authorization",
        "req.headers.cookie",
        "request.headers.authorization",
        "request.headers.cookie",
      ],
      censor: "[REDACTED]",
    },
  };

  // Development configuration with pretty printing
  // Note: Using sync mode to avoid worker thread issues in Next.js/Turbopack
  if (isDevelopment) {
    try {
      // Try to use pino-pretty in sync mode (no worker threads)
      return pino(
        {
          ...baseConfig,
        },
        pinoPretty({
          colorize: true,
          translateTime: "HH:MM:ss Z",
          ignore: "pid,hostname",
          singleLine: false,
          levelFirst: true,
          messageFormat: "{msg}",
          sync: true, // Synchronous mode - no worker threads
        }),
      );
    } catch (error) {
      // Fallback to basic pino if pino-pretty fails
      console.warn(
        "Failed to initialize pino-pretty, using basic logger:",
        error,
      );
      return pino(baseConfig);
    }
  }

  // Production configuration - pure JSON for log aggregation
  return pino(baseConfig);
};

/**
 * Main logger instance
 * Automatically selects browser or server logger based on environment
 */
const logger = isBrowser ? createBrowserLogger() : createServerLogger();

/**
 * Create a child logger with additional context
 *
 * @example
 * ```ts
 * const log = logger.child({ module: 'api/sheets' });
 * log.info('Processing request');
 * ```
 */
export const createLogger = (context: LogContext) => {
  return logger.child(context);
};

/**
 * Export the main logger instance
 */
export default logger;

/**
 * Type-safe logging helpers for common use cases
 */
export const logHelpers = {
  /**
   * Log API request details
   */
  apiRequest: (method: string, url: string, meta?: LogContext) => {
    logger.info({ method, url, ...meta }, `API Request: ${method} ${url}`);
  },

  /**
   * Log API response details
   */
  apiResponse: (
    method: string,
    url: string,
    status: number,
    duration?: number,
    meta?: LogContext,
  ) => {
    logger.info(
      { method, url, status, duration, ...meta },
      `API Response: ${method} ${url} - ${status} (${duration}ms)`,
    );
  },

  /**
   * Log API errors
   */
  apiError: (
    method: string,
    url: string,
    error: Error | unknown,
    meta?: LogContext,
  ) => {
    logger.error(
      { method, url, error, ...meta },
      `API Error: ${method} ${url} - ${error instanceof Error ? error.message : "Unknown error"}`,
    );
  },

  /**
   * Log analytics events
   */
  analytics: (event: string, data?: LogContext) => {
    logger.debug({ event, ...data }, `Analytics: ${event}`);
  },

  /**
   * Log database operations
   */
  database: (operation: string, table: string, meta?: LogContext) => {
    logger.debug(
      { operation, table, ...meta },
      `Database: ${operation} on ${table}`,
    );
  },

  /**
   * Log authentication events
   */
  auth: (action: string, userId?: string, meta?: LogContext) => {
    logger.info({ action, userId, ...meta }, `Auth: ${action}`);
  },

  /**
   * Log validation errors
   */
  validation: (field: string, error: string, meta?: LogContext) => {
    logger.warn({ field, error, ...meta }, `Validation: ${field} - ${error}`);
  },
};

/**
 * Type definitions for better TypeScript support
 */
export type Logger = typeof logger;
export type LogLevel = "trace" | "debug" | "info" | "warn" | "error" | "fatal";
