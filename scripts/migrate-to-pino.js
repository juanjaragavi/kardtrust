#!/usr/bin/env node
/**
 * Migration Script: Replace console.log with Pino Logger
 *
 * This script automatically replaces all console.log, console.error, console.warn, etc.
 * with the new Pino-based logger throughout the codebase.
 *
 * Usage: node scripts/migrate-to-pino.js
 */

const fs = require("fs");
const path = require("path");

// Colors for terminal output
const colors = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  red: "\x1b[31m",
};

// Statistics
const stats = {
  filesProcessed: 0,
  filesModified: 0,
  replacements: {
    "console.log": 0,
    "console.error": 0,
    "console.warn": 0,
    "console.info": 0,
    "console.debug": 0,
  },
};

// Directories to process
const dirs = ["app/api", "components", "lib", "hooks"];

// Files to skip
const skipFiles = [
  "migrate-to-pino.js",
  "logger.ts",
  "node_modules",
  ".next",
  "dist",
  "build",
];

/**
 * Check if file should be skipped
 */
function shouldSkipFile(filePath) {
  return skipFiles.some((skip) => filePath.includes(skip));
}

/**
 * Check if file is a TypeScript or JavaScript file
 */
function isCodeFile(filePath) {
  return /\.(ts|tsx|js|jsx)$/.test(filePath);
}

/**
 * Get all files in a directory recursively
 */
function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);

    if (shouldSkipFile(filePath)) {
      return;
    }

    if (fs.statSync(filePath).isDirectory()) {
      arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
    } else if (isCodeFile(filePath)) {
      arrayOfFiles.push(filePath);
    }
  });

  return arrayOfFiles;
}

/**
 * Check if file already imports logger
 */
function hasLoggerImport(content) {
  return /import.*logger.*from.*['"]@\/lib\/logger['"]/.test(content);
}

/**
 * Add logger import to file
 */
function addLoggerImport(content, filePath) {
  // Determine if it's a client component
  const isClientComponent =
    content.includes("'use client'") || content.includes('"use client"');

  // Find the position after the first import block
  const importRegex = /^import\s+.*$/gm;
  const imports = content.match(importRegex);

  if (!imports) {
    // No imports found, add at the beginning
    return `import logger from '@/lib/logger';\n\n${content}`;
  }

  // Find the last import
  const lastImport = imports[imports.length - 1];
  const lastImportIndex = content.indexOf(lastImport) + lastImport.length;

  // Insert the logger import after the last import
  return (
    content.slice(0, lastImportIndex) +
    "\nimport logger from '@/lib/logger';" +
    content.slice(lastImportIndex)
  );
}

/**
 * Replace console methods with logger methods
 */
function replaceConsoleCalls(content) {
  let modified = content;
  let replacementCount = 0;

  // Pattern 1: console.log with message
  // console.log("message") -> logger.info("message")
  // console.log("prefix", data) -> logger.info(data, "prefix")

  // Pattern for console.log/info/debug -> logger.info/debug
  modified = modified.replace(
    /console\.(log|info)\s*\(\s*(['"`])([^'"` ]*)\2\s*,\s*([^)]+)\)/g,
    (match, method, quote, message, data) => {
      stats.replacements[`console.${method}`]++;
      replacementCount++;
      return `logger.${method === "log" ? "info" : method}(${data}, ${quote}${message}${quote})`;
    },
  );

  // Pattern for console.log/info/debug with single argument
  modified = modified.replace(
    /console\.(log|info|debug)\s*\(\s*(['"`])([^'"]*)\2\s*\)/g,
    (match, method, quote, message) => {
      stats.replacements[`console.${method}`]++;
      replacementCount++;
      return `logger.${method === "log" ? "info" : method}(${quote}${message}${quote})`;
    },
  );

  // Pattern for console.warn -> logger.warn
  modified = modified.replace(
    /console\.warn\s*\(\s*(['"`])([^'"` ]*)\1\s*,\s*([^)]+)\)/g,
    (match, quote, message, data) => {
      stats.replacements["console.warn"]++;
      replacementCount++;
      return `logger.warn(${data}, ${quote}${message}${quote})`;
    },
  );

  modified = modified.replace(
    /console\.warn\s*\(\s*(['"`])([^'"]*)\1\s*\)/g,
    (match, quote, message) => {
      stats.replacements["console.warn"]++;
      replacementCount++;
      return `logger.warn(${quote}${message}${quote})`;
    },
  );

  // Pattern for console.error -> logger.error
  modified = modified.replace(
    /console\.error\s*\(\s*(['"`])([^'"` ]*)\1\s*,\s*([^)]+)\)/g,
    (match, quote, message, data) => {
      stats.replacements["console.error"]++;
      replacementCount++;
      return `logger.error(${data}, ${quote}${message}${quote})`;
    },
  );

  modified = modified.replace(
    /console\.error\s*\(\s*(['"`])([^'"]*)\1\s*\)/g,
    (match, quote, message) => {
      stats.replacements["console.error"]++;
      replacementCount++;
      return `logger.error(${quote}${message}${quote})`;
    },
  );

  // Pattern for console.debug -> logger.debug
  modified = modified.replace(
    /console\.debug\s*\(\s*(['"`])([^'"` ]*)\1\s*,\s*([^)]+)\)/g,
    (match, quote, message, data) => {
      stats.replacements["console.debug"]++;
      replacementCount++;
      return `logger.debug(${data}, ${quote}${message}${quote})`;
    },
  );

  return { content: modified, replacementCount };
}

/**
 * Process a single file
 */
function processFile(filePath) {
  try {
    stats.filesProcessed++;

    let content = fs.readFileSync(filePath, "utf8");
    const originalContent = content;

    // Check if file has any console calls
    if (!/console\.(log|error|warn|info|debug)/.test(content)) {
      return;
    }

    // Add logger import if not present
    if (!hasLoggerImport(content)) {
      content = addLoggerImport(content, filePath);
    }

    // Replace console calls
    const { content: newContent, replacementCount } =
      replaceConsoleCalls(content);

    if (newContent !== originalContent) {
      fs.writeFileSync(filePath, newContent, "utf8");
      stats.filesModified++;
      console.log(
        `${colors.green}✓${colors.reset} ${filePath} ${colors.blue}(${replacementCount} replacements)${colors.reset}`,
      );
    }
  } catch (error) {
    console.error(
      `${colors.red}✗${colors.reset} Error processing ${filePath}:`,
      error.message,
    );
  }
}

/**
 * Main execution
 */
function main() {
  console.log(
    `\n${colors.bright}${colors.blue}Starting Pino Logger Migration${colors.reset}\n`,
  );
  console.log(
    `${colors.yellow}This will replace console.log calls with Pino logger${colors.reset}\n`,
  );

  // Get all files to process
  const allFiles = [];
  dirs.forEach((dir) => {
    const dirPath = path.join(process.cwd(), dir);
    if (fs.existsSync(dirPath)) {
      const files = getAllFiles(dirPath);
      allFiles.push(...files);
    }
  });

  console.log(
    `Found ${colors.bright}${allFiles.length}${colors.reset} files to process\n`,
  );

  // Process each file
  allFiles.forEach(processFile);

  // Print summary
  console.log(
    `\n${colors.bright}${colors.green}Migration Complete!${colors.reset}\n`,
  );
  console.log(`${colors.bright}Summary:${colors.reset}`);
  console.log(`  Files processed: ${stats.filesProcessed}`);
  console.log(
    `  Files modified: ${colors.green}${stats.filesModified}${colors.reset}`,
  );
  console.log(`\n${colors.bright}Replacements:${colors.reset}`);
  Object.entries(stats.replacements).forEach(([method, count]) => {
    if (count > 0) {
      console.log(`  ${method}: ${colors.green}${count}${colors.reset}`);
    }
  });
  console.log("");
}

// Run the migration
main();
