---
name: scaffold
description: Generate project structure from specifications or descriptions. Use when starting a new project, adding a new package to a monorepo, or creating boilerplate for a feature. Covers React apps, API servers, CLI tools, and library packages with appropriate directory structures and configuration files.
---

# Scaffold

Generate project boilerplate and directory structure from a specification or description.

## Arguments

| Input           | Interpretation                                           |
| --------------- | -------------------------------------------------------- |
| No args         | Detect project type from context and scaffold            |
| `<type>`        | Scaffold specific type: `react`, `api`, `cli`, `library` |
| `<name>`        | Project/package name                                     |
| `<type> <name>` | Create specific type with given name                     |

## When to Use

| Situation                            | Use Scaffold?                          |
| ------------------------------------ | -------------------------------------- |
| Starting a new project from scratch  | Yes                                    |
| Adding package to monorepo           | Yes                                    |
| Creating new feature module          | Maybe - if it needs standard structure |
| Adding a single file                 | No - just create the file              |
| Existing project needs restructuring | No - use refactoring approach          |

## Project Type Selection

**Choose based on what you're building:**

| Building                | Type      | Primary Output             |
| ----------------------- | --------- | -------------------------- |
| Web application with UI | `react`   | React + Vite + TypeScript  |
| REST/GraphQL backend    | `api`     | Express/FastAPI + routes   |
| Command-line tool       | `cli`     | Argument parser + commands |
| Reusable package        | `library` | Package with exports       |

## Directory Structures

### React Application (`react`)

```
<project-name>/
├── src/
│   ├── app/                    # App-level components
│   │   ├── App.tsx             # Root component
│   │   └── App.test.tsx        # App tests
│   ├── components/             # Shared UI components
│   │   └── ui/                 # Generic UI primitives
│   ├── features/               # Feature modules
│   │   └── <feature>/
│   │       ├── components/     # Feature-specific components
│   │       ├── hooks/          # Feature-specific hooks
│   │       ├── index.ts        # Public exports
│   │       └── schema.ts       # Zod validation (if forms)
│   ├── hooks/                  # Shared hooks
│   ├── lib/                    # Utilities and helpers
│   ├── types/                  # Shared TypeScript types
│   └── main.tsx                # Entry point
├── public/                     # Static assets
├── tests/                      # E2E tests (if separate)
├── index.html                  # HTML template
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.ts          # If using Tailwind
└── .gitignore
```

### API Server (`api`)

**TypeScript (Express/Fastify):**

```
<project-name>/
├── src/
│   ├── routes/                 # Route handlers
│   │   ├── index.ts            # Route registration
│   │   └── <resource>.ts       # Resource routes
│   ├── services/               # Business logic
│   ├── middleware/             # Express middleware
│   ├── models/                 # Data models/types
│   ├── lib/                    # Utilities
│   ├── types/                  # TypeScript types
│   └── index.ts                # Entry point
├── tests/
│   ├── unit/
│   └── integration/
├── package.json
├── tsconfig.json
└── .gitignore
```

**Python (FastAPI):**

```
<project-name>/
├── src/
│   └── <package_name>/
│       ├── __init__.py
│       ├── main.py             # FastAPI app
│       ├── routes/             # Route handlers
│       │   └── <resource>.py
│       ├── services/           # Business logic
│       ├── models/             # Pydantic models
│       └── lib/                # Utilities
├── tests/
│   ├── unit/
│   └── integration/
├── pyproject.toml
└── .gitignore
```

### CLI Tool (`cli`)

**TypeScript:**

```
<project-name>/
├── src/
│   ├── commands/               # Command implementations
│   │   ├── index.ts            # Command registration
│   │   └── <command>.ts        # Individual commands
│   ├── lib/                    # Shared utilities
│   ├── types/                  # TypeScript types
│   └── index.ts                # Entry point with arg parsing
├── tests/
├── bin/                        # Executable scripts (if needed)
├── package.json
├── tsconfig.json
└── .gitignore
```

**Python:**

```
<project-name>/
├── src/
│   └── <package_name>/
│       ├── __init__.py
│       ├── cli.py              # Entry point (typer/click)
│       ├── commands/           # Command implementations
│       │   └── <command>.py
│       └── lib/                # Shared utilities
├── tests/
├── pyproject.toml
└── .gitignore
```

### Library Package (`library`)

**TypeScript:**

```
<project-name>/
├── src/
│   ├── index.ts                # Public exports
│   ├── <module>.ts             # Module implementations
│   └── types.ts                # Type definitions
├── tests/
├── package.json                # With "main", "types", "exports"
├── tsconfig.json
└── .gitignore
```

**Python:**

```
<project-name>/
├── src/
│   └── <package_name>/
│       ├── __init__.py         # Public exports
│       ├── <module>.py         # Module implementations
│       └── py.typed            # PEP 561 marker
├── tests/
├── pyproject.toml
└── .gitignore
```

## Configuration Templates

### package.json (React)

```json
{
  "name": "<project-name>",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "test": "vitest",
    "test:coverage": "vitest --coverage",
    "lint": "eslint . --fix",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "@vitejs/plugin-react": "^4.0.0",
    "typescript": "^5.8.0",
    "vite": "^6.0.0",
    "vitest": "^3.0.0"
  }
}
```

### package.json (Library)

```json
{
  "name": "<package-name>",
  "version": "0.1.0",
  "type": "module",
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.js"
    }
  },
  "files": ["dist"],
  "scripts": {
    "build": "tsc",
    "test": "vitest",
    "prepublishOnly": "npm run build"
  },
  "devDependencies": {
    "typescript": "^5.8.0",
    "vitest": "^3.0.0"
  }
}
```

### pyproject.toml

```toml
[project]
name = "<package-name>"
version = "0.1.0"
description = "<description>"
requires-python = ">=3.12"
dependencies = []

[project.optional-dependencies]
dev = [
    "pytest>=8.0",
    "pytest-cov>=4.0",
    "ruff>=0.4",
    "basedpyright>=1.0",
]

[project.scripts]
<cli-name> = "<package_name>.cli:main"

[build-system]
requires = ["hatchling"]
build-backend = "hatchling.build"

[tool.hatch.build.targets.wheel]
packages = ["src/<package_name>"]

[tool.ruff]
line-length = 100
target-version = "py312"

[tool.basedpyright]
pythonVersion = "3.12"
typeCheckingMode = "strict"
```

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "isolatedModules": true,
    "jsx": "react-jsx"
  },
  "include": ["src"]
}
```

### vite.config.ts

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
});
```

### .gitignore

```gitignore
# Dependencies
node_modules/
.venv/
__pycache__/
*.pyc

# Build
dist/
build/
*.egg-info/

# Environment
.env
.env.local
.env.*.local

# IDE
.idea/
.vscode/
*.swp

# Testing
coverage/
.pytest_cache/
.coverage

# OS
.DS_Store
Thumbs.db

# Logs
*.log
npm-debug.log*
```

## Scaffolding Workflow

### Step 1: Gather Requirements

Ask these questions if not provided:

- Project type (react/api/cli/library)?
- Project name?
- Language (TypeScript/Python)?
- Any specific frameworks or libraries?

### Step 2: Create Directory Structure

1. Create root directory
2. Create subdirectories following the type template
3. Create placeholder files where needed

### Step 3: Generate Configuration Files

1. Package manifest (package.json or pyproject.toml)
2. TypeScript config (if applicable)
3. Build tool config (Vite, etc.)
4. .gitignore

### Step 4: Create Entry Points

1. Main entry file (index.ts, main.py, etc.)
2. Export barrel files for libraries
3. Route registration for APIs

### Step 5: Initialize Git

```bash
git init
git add .
git commit -m "chore: initial project scaffold"
```

## Quick Reference

| Type             | Entry Point             | Config Files                                |
| ---------------- | ----------------------- | ------------------------------------------- |
| React            | `src/main.tsx`          | package.json, vite.config.ts, tsconfig.json |
| API (TS)         | `src/index.ts`          | package.json, tsconfig.json                 |
| API (Python)     | `src/<pkg>/main.py`     | pyproject.toml                              |
| CLI (TS)         | `src/index.ts`          | package.json, tsconfig.json                 |
| CLI (Python)     | `src/<pkg>/cli.py`      | pyproject.toml                              |
| Library (TS)     | `src/index.ts`          | package.json, tsconfig.json                 |
| Library (Python) | `src/<pkg>/__init__.py` | pyproject.toml                              |

## Anti-Patterns to Avoid

| Anti-Pattern              | Better Approach                                          |
| ------------------------- | -------------------------------------------------------- |
| Deeply nested directories | Keep it flat until complexity demands depth              |
| Too many config files     | Start minimal, add as needed                             |
| Premature abstraction     | Create features/, utils/ only when there's code for them |
| Monolithic entry point    | Split by feature/route/command early                     |
| Missing .gitignore        | Always include one from the start                        |

## Verification Checklist

After scaffolding, verify:

- [ ] All directories exist as planned
- [ ] Configuration files are valid (no syntax errors)
- [ ] Entry point can be executed without errors
- [ ] Git is initialized with initial commit
- [ ] Package manager can install dependencies
