import Link from 'next/link'
import { Button } from '../ui/button'
import { Mail, Heart } from 'lucide-react'

export function CTA() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="bg-primary/5 py-20 sm:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="cta-heading"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Get Involved
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Whether you&apos;re looking to contribute tools, share knowledge, or
            simply connect with others in the K-12 technology community,
            we&apos;d love to have you.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">
                <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
                Contact Us
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a
                href="https://github.com/sponsors/BusinessPlus-Community"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Heart className="mr-2 h-4 w-4" aria-hidden="true" />
                Sponsor
              </a>
            </Button>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <div className="rounded-lg border bg-card p-8 text-center shadow-sm">
            <h3 className="text-xl font-semibold text-foreground">
              Featured Project: BPC.DBRefresh
            </h3>
            <p className="mt-3 text-muted-foreground">
              A PowerShell script that automates the process of refreshing
              BusinessPlus test environments. Safely copy production data to
              test systems while maintaining proper security configurations.
            </p>
            <div className="mt-6">
              <Button asChild variant="secondary">
                <a
                  href="https://github.com/BusinessPlus-Community/BPC.DBRefresh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
