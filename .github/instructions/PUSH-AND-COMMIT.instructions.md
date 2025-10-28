---
applyTo: "**"
---

# Push and Commit Guidelines

## Trigger

This procedure is initiated when the user issues the prompt "Push and commit our latest changes." following a successful development cycle.

### Steps

1. **Initialize Commit Message File**:
   Clear the contents of the @/lib/documents/commit-message.txt file.

2. **Verify Codebase Status**:
   Query the current status of the codebase using your `git_status` MCP server with the following request body:

   ```json
   {
     "repo_path": "/Users/macbookpro/GitHub/kardtrust"
   }
   ```

3. **Formulate Commit Message**:
   Populate the @/lib/documents/commit-message.txt file with a message that accurately describes the latest modifications.

4. **Execute Workflow Script**:
   Run the `git workflow` automation script using the command:

   ```bash
   bash ./scripts/git-workflow.sh
   ```

## Blog Listing Synchronization (MANDATORY)

- Before finalizing any commit that involves creating, updating, or deleting Personal Finance or Financial Solutions blog posts, verify that every `allPosts` array in the listing `page.tsx` files (for example `app/blog/page.tsx`, `app/personal-finance/page.tsx`, `app/financial-solutions/page.tsx`) reflects the latest content changes
- Do not proceed with the push workflow until those arrays mirror the new metadata, ordering, and link structure

## Sitemap Synchronization (MANDATORY)

- Before executing the workflow script for any change that adds, renames, or removes a Personal Finance or Financial Solutions article or product page, confirm that `app/sitemap.xml` has been updated to include the new URLs and purge any stale entries
- Do not run the push workflow until the sitemap changes are part of the pending commit set
