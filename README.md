# BusinessPlus Community Website

Official website for the BusinessPlus Community at [bpluscommunity.org](https://bpluscommunity.org).

An independent, volunteer-driven group of K-12 technology professionals sharing open-source tools and knowledge for BusinessPlus system administration.

> **Note:** This community is NOT affiliated with PowerSchool.

## Tech Stack

- **Framework:** Next.js 15 (App Router, Static Export)
- **Runtime:** Bun
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Components:** shadcn/ui (Radix UI primitives)
- **Icons:** Lucide React
- **Dark Mode:** next-themes

## Development

### Prerequisites

- [Bun](https://bun.sh) (latest stable)
- Node.js 20+ (for some tooling compatibility)

### Setup

```bash
# Clone the repository
git clone https://github.com/BusinessPlus-Community/bpc-website.git
cd bpc-website

# Install dependencies
bun install

# Start development server
bun run dev
```

The development server will be available at `http://localhost:3000`.

### Commands

| Command | Description |
|---------|-------------|
| `bun install` | Install dependencies |
| `bun run dev` | Start development server |
| `bun run build` | Build static export to `out/` |
| `bun run lint` | Run ESLint |
| `bunx serve out` | Serve built static files locally |

## Deployment

This site exports to static HTML/CSS/JS files and can be deployed to any static file hosting.

### Build

```bash
bun run build
```

### Output

Static files are generated in the `out/` directory:

```
out/
├── index.html          # Home page
├── about/index.html    # About page
├── projects/index.html # Projects page
├── resources/index.html
├── contact/index.html
├── blog/index.html
├── docs/index.html
├── faq/index.html
├── 404.html            # Error page
├── robots.txt          # Search engine directives
├── sitemap.xml         # Sitemap for search engines
├── favicon.svg         # Site icon
└── _next/              # Static assets (JS, CSS)
```

### Container Deployment

Copy the contents of `out/` to your web server's document root:

```bash
# Example: nginx
cp -r out/* /var/www/html/

# Example: serve with Node.js
npx serve out

# Example: serve with Bun
bunx serve out
```

### Server Configuration

For clean URLs (without `.html`), configure your web server to:
1. Serve `index.html` for directory requests
2. Try files with `.html` extension as fallback
3. Serve `404.html` for not found errors

Example nginx configuration:

```nginx
server {
    listen 80;
    server_name bpluscommunity.org;
    root /var/www/html;

    location / {
        try_files $uri $uri/ $uri.html =404;
    }

    error_page 404 /404.html;
}
```

## Accessibility

This site is designed to meet WCAG 2.2 AA compliance:

- Color contrast ratios meet 4.5:1 for normal text
- Keyboard navigation for all interactive elements
- Skip link for main content
- Semantic HTML with proper heading hierarchy
- ARIA labels where appropriate
- Reduced motion support via `prefers-reduced-motion`
- Focus indicators visible on all interactive elements

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Home page
│   ├── about/           # About page
│   ├── projects/        # Projects page
│   ├── resources/       # Resources page
│   ├── contact/         # Contact page
│   ├── blog/            # Blog page
│   ├── docs/            # Documentation page
│   ├── faq/             # FAQ page
│   ├── sitemap.ts       # Sitemap generation
│   ├── robots.ts        # Robots.txt generation
│   └── globals.css      # Global styles
├── components/
│   ├── home/            # Home page components
│   ├── layout/          # Layout components (Header, Footer)
│   ├── projects/        # Project components
│   └── ui/              # shadcn/ui components
└── lib/
    └── utils.ts         # Utility functions
```

## Contributing

We welcome contributions! Please see our [Contributing Guidelines](https://github.com/BusinessPlus-Community/.github/blob/main/CONTRIBUTING.md) for details.

## License

MIT License - see [LICENSE](LICENSE) for details.

## Contact

- **Email:** code@bpluscommunity.org
- **GitHub:** [BusinessPlus-Community](https://github.com/BusinessPlus-Community)
- **Website:** [bpluscommunity.org](https://bpluscommunity.org)
