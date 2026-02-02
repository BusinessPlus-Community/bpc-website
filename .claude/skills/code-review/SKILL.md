---
name: code-review
description: Systematic code review for quality, performance, and best practices. Use when reviewing PRs, auditing code quality, before merging changes, reviewing code for issues, or when asked to "review code" or "code review".
---

# Code Review

Conduct a comprehensive code review identifying issues across security, code quality, performance, and best practices, prioritized by impact.

## Arguments

Parse the arguments to determine review scope:

| Input     | Scope              | How to Get Files                                                                             |
| --------- | ------------------ | -------------------------------------------------------------------------------------------- |
| No args   | Recent changes     | `git diff --cached --name-only` (staged) or `git diff --name-only HEAD~1 HEAD` (last commit) |
| `#123`    | PR changes         | `gh pr diff 123 --name-only`                                                                 |
| `path/`   | Specific directory | Use path directly                                                                            |
| `file.ts` | Specific file      | Use file directly                                                                            |

**Auto-detection logic:**

```bash
# Check for staged changes first
STAGED=$(git diff --cached --name-only 2>/dev/null)
if [ -n "$STAGED" ]; then
  echo "Reviewing staged changes..."
  FILES="$STAGED"
else
  # Fall back to last commit
  echo "Reviewing changes from last commit..."
  FILES=$(git diff --name-only HEAD~1 HEAD 2>/dev/null)
fi
```

## Review Workflow

### Step 1: Identify Scope

Based on arguments, determine which files to review.

```bash
# For PR review
gh pr diff 123 --name-only

# Show the actual diff
gh pr diff 123

# For staged changes
git diff --cached --name-only
git diff --cached

# For recent commit
git diff --name-only HEAD~1 HEAD
git diff HEAD~1 HEAD
```

### Step 2: Review Each File

For each changed file, apply the review checklist below in priority order.

### Step 3: Generate Report

Compile findings inline with prioritized recommendations.

## Review Checklist (By Priority)

### Priority 1: CRITICAL - Security Issues

**Must check before any other review:**

- [ ] **Hardcoded Secrets**
  ```bash
  grep -rn "(api[_-]?key|password|secret|token)\s*[=:]\s*['\"]" --include="*.js" --include="*.ts" --include="*.py"
  ```
- [ ] **SQL Injection** - String concatenation in queries
- [ ] **XSS Vulnerabilities** - Unsanitized user input in HTML
- [ ] **Command Injection** - User input in `exec()`, `eval()`
- [ ] **Path Traversal** - User input in file paths
- [ ] **Authentication Bypass** - Missing auth checks

### Priority 2: HIGH - Code Quality

**Impacts maintainability and reliability:**

- [ ] **Function Size** - Functions > 50 lines should be split
- [ ] **Nesting Depth** - Max 3 levels of nesting
- [ ] **Error Handling** - All async operations have try/catch
- [ ] **Type Safety** - No `any` types in TypeScript
- [ ] **Dead Code** - Unused variables, imports, functions
- [ ] **Duplicate Code** - DRY violations

**Detection patterns:**

```bash
# Find any types in TypeScript
grep -rn ": any" --include="*.ts" --include="*.tsx"

# Find TODO/FIXME comments
grep -rn "TODO\|FIXME\|XXX\|HACK" --include="*.js" --include="*.ts" --include="*.py"
```

### Priority 3: MEDIUM - Performance

**May impact user experience:**

- [ ] **N+1 Queries** - Database calls in loops
- [ ] **Unnecessary Re-renders** - Missing memoization in React
- [ ] **Large Bundle** - Importing entire libraries instead of specific functions
- [ ] **Missing Indexes** - Queries on non-indexed fields
- [ ] **Memory Leaks** - Event listeners not cleaned up
- [ ] **Synchronous I/O** - Blocking operations in async code

**Detection patterns:**

```bash
# Find potential N+1 queries
grep -rn "for.*await\|\.forEach.*await" --include="*.js" --include="*.ts"

# Find missing cleanup in React
grep -rn "useEffect.*addEventListener" --include="*.tsx" --include="*.jsx"
```

### Priority 4: MEDIUM - Best Practices

**Improves code health over time:**

- [ ] **Naming Conventions** - Clear, descriptive names
- [ ] **Magic Numbers** - Constants should be named
- [ ] **Comments** - Complex logic documented
- [ ] **Accessibility** - ARIA attributes, semantic HTML
- [ ] **Testing** - New code has tests
- [ ] **Documentation** - Public APIs documented

**Detection patterns:**

```bash
# Find magic numbers
grep -rn "[^a-zA-Z0-9_][0-9]{2,}[^a-zA-Z0-9_]" --include="*.js" --include="*.ts" | grep -v "test\|spec\|node_modules"
```

## Issue Severity Levels

| Level          | Criteria                               | Action                  |
| -------------- | -------------------------------------- | ----------------------- |
| **CRITICAL**   | Security vulnerability, data loss risk | Must fix before merge   |
| **WARNING**    | Bug potential, significant tech debt   | Should fix before merge |
| **SUGGESTION** | Improvement opportunity, minor issue   | Consider fixing         |
| **NITPICK**    | Style preference, minor cleanup        | Optional                |

## Common Fix Examples

### Security: SQL Injection

```javascript
// BAD
const query = `SELECT * FROM users WHERE id = ${userId}`;

// GOOD
const query = 'SELECT * FROM users WHERE id = ?';
db.query(query, [userId]);
```

### Code Quality: Deep Nesting

```javascript
// BAD
if (a) {
  if (b) {
    if (c) {
      doSomething();
    }
  }
}

// GOOD (early returns)
if (!a) return;
if (!b) return;
if (!c) return;
doSomething();
```

### Performance: N+1 Query

```javascript
// BAD
for (const user of users) {
  const orders = await db.query('SELECT * FROM orders WHERE user_id = ?', [user.id]);
}

// GOOD (batch query)
const userIds = users.map((u) => u.id);
const orders = await db.query('SELECT * FROM orders WHERE user_id IN (?)', [userIds]);
```

### React: Missing Cleanup

```javascript
// BAD
useEffect(() => {
  window.addEventListener('resize', handleResize);
}, []);

// GOOD
useEffect(() => {
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);
```

### TypeScript: Avoid Any

```typescript
// BAD
function process(data: any) { ... }

// GOOD
interface ProcessData {
  id: string;
  value: number;
}
function process(data: ProcessData) { ... }
```

## Output Format

**Report findings inline.** Do not generate separate report files.

For each issue found:

````
### [SEVERITY] Issue Title

**File:** `path/to/file.ts:123`
**Category:** Security | Code Quality | Performance | Best Practices

**Problem:**
Brief description of what's wrong.

**Current code:**
```language
// problematic code
````

**Suggested fix:**

```language
// improved code
```

**Why it matters:**
Impact explanation.

```

## Final Summary Format

After reviewing all files, provide a summary:

```

# Code Review Summary

**Scope:** [files/directories reviewed]
**Date:** [current date]

## Summary

| Severity   | Count |
| ---------- | ----- |
| CRITICAL   | X     |
| WARNING    | X     |
| SUGGESTION | X     |
| NITPICK    | X     |

**Overall Assessment:** [APPROVED / CHANGES REQUESTED / NEEDS DISCUSSION]

## Must Fix Before Merge

[List CRITICAL and WARNING issues]

## Suggestions

[List SUGGESTION issues]

## Nitpicks

[List NITPICK issues]

## Positive Observations

[Note good patterns, clean code, etc.]

## Files Reviewed

- [x] file1.ts
- [x] file2.ts

````

## Quick Commands Reference

```bash
# Full diff
git diff HEAD~1 HEAD

# Files changed
git diff --name-only HEAD~1 HEAD

# Specific file diff
git diff HEAD~1 HEAD -- path/to/file.ts

# Blame for context
git blame path/to/file.ts

# Find related tests
find . -name "*test*" -o -name "*spec*" | grep -i filename

# PR operations
gh pr diff 123
gh pr view 123
gh pr checks 123
````
