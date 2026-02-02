## GitHub MCP Server

Access GitHub via MCP for repository operations, issues, PRs, and code search.

**Source:** `mcp_servers.json`
**URL:** `https://api.githubcopilot.com/mcp/`
**Auth:** Requires `GH_TOKEN` environment variable

### Tool Selection Guide

| Need | Tool(s) |
|------|---------|
| List items (all, paginated) | `list_*` tools |
| Search with filters | `search_*` tools |
| Get current user | `get_me` |
| Create repo/branch/PR | `create_*` tools |
| Read issue/PR details | `issue_read`, `pull_request_read` |
| Write issue/PR | `issue_write`, `update_pull_request` |

### Key Tools

**Repository:**
- `create_repository` - Create new repo
- `get_file_contents` - Read file from repo
- `create_or_update_file` - Write single file
- `push_files` - Push multiple files

**Issues:**
- `list_issues` - List repo issues
- `search_issues` - Search with query
- `issue_write` - Create/update/close issues
- `add_issue_comment` - Comment on issue

**Pull Requests:**
- `list_pull_requests` - List PRs
- `create_pull_request` - Create PR
- `merge_pull_request` - Merge PR
- `pull_request_review_write` - Review PR

**Search:**
- `search_code` - Search code in repos
- `search_repositories` - Find repos
- `search_issues` - Search issues/PRs

### Usage Examples

```bash
# Get current user
mcp-cli github/get_me '{}'

# List issues
mcp-cli github/list_issues '{"owner": "BusinessPlus-Community", "repo": "bpc-website", "state": "open"}'

# Search code
mcp-cli github/search_code '{"query": "org:BusinessPlus-Community language:typescript"}'

# Create branch
mcp-cli github/create_branch '{"owner": "BusinessPlus-Community", "repo": "bpc-website", "branch": "feature/new-page"}'
```

### Best Practices

- Use `minimal_output: true` when full details not needed
- Paginate with batches of 5-10 items
- Call `get_me` first to understand current permissions
- Use `search_issues` before creating to avoid duplicates
- Set `state_reason` when closing issues

---

## shadcn MCP Server

Generate and manage shadcn/ui components via MCP.

**Source:** `mcp_servers.json`
**Command:** `npx shadcn@latest mcp`

### Usage

```bash
# Add a component
mcp-cli shadcn/add '{"component": "button"}'

# List available components
mcp-cli shadcn/list '{}'
```

**Prefer using `bunx shadcn@latest add <component>` directly** for interactive component installation.

---

## Puppeteer MCP Server

Browser automation for testing and screenshots.

**Source:** `mcp_servers.json`
**Command:** `npx -y @modelcontextprotocol/server-puppeteer`

### Key Tools

- `navigate` - Navigate to URL
- `screenshot` - Capture page screenshot
- `click` - Click element
- `fill` - Fill form input
- `evaluate` - Run JavaScript in page

### Usage Examples

```bash
# Navigate to page
mcp-cli puppeteer/navigate '{"url": "http://localhost:3000"}'

# Take screenshot
mcp-cli puppeteer/screenshot '{"name": "homepage"}'

# Click element
mcp-cli puppeteer/click '{"selector": "button[type=submit]"}'
```

**For E2E testing, prefer `agent-browser`** which provides a simpler interface. Use Puppeteer MCP for advanced automation needs.
