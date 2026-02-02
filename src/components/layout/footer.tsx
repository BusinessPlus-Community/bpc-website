import Link from "next/link"
import { Heart, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container px-4 py-8 mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold mb-4">BusinessPlus Community</h3>
            <p className="text-sm text-muted-foreground">
              Independent, volunteer-driven community for K-12 technology professionals.
              Not affiliated with PowerSchool.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-foreground">About</Link></li>
              <li><Link href="/projects" className="text-muted-foreground hover:text-foreground">Projects</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://github.com/BusinessPlus-Community" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                  GitHub
                </a>
              </li>
              <li>
                <a href="mailto:code@bpluscommunity.org" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                  <Mail className="h-4 w-4" aria-hidden="true" /> Email
                </a>
              </li>
              <li>
                <a href="https://github.com/sponsors/BusinessPlus-Community" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                  <Heart className="h-4 w-4" aria-hidden="true" /> Sponsor
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} BusinessPlus Community. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
