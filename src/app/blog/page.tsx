import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '../../components/ui/button'
import { Rss, Bell } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog - BusinessPlus Community',
  description:
    'News, updates, and insights from the BusinessPlus Community.',
}

export default function BlogPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Blog
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            News, updates, and insights from the BusinessPlus Community.
          </p>
        </div>

        {/* Coming Soon */}
        <div className="mx-auto mt-16 max-w-2xl">
          <div className="rounded-lg border bg-card p-8 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Rss className="h-8 w-8 text-primary" aria-hidden="true" />
            </div>
            <h2 className="mt-6 text-2xl font-semibold text-foreground">
              Coming Soon
            </h2>
            <p className="mt-4 text-muted-foreground">
              We&apos;re working on bringing you helpful articles, tutorials,
              and community updates. Check back soon for our first posts!
            </p>
          </div>
        </div>

        {/* What to expect */}
        <section
          aria-labelledby="expect-heading"
          className="mx-auto mt-16 max-w-3xl"
        >
          <h2
            id="expect-heading"
            className="text-center text-2xl font-bold text-foreground"
          >
            What to Expect
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="rounded-lg border bg-card p-5">
              <h3 className="font-semibold text-foreground">Tutorials</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Step-by-step guides for using our tools and solving common
                BusinessPlus challenges.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-5">
              <h3 className="font-semibold text-foreground">Project Updates</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Announcements about new features, releases, and improvements to
                community projects.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-5">
              <h3 className="font-semibold text-foreground">Community Spotlights</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Stories from districts using our tools and contributing to the
                community.
              </p>
            </div>
          </div>
        </section>

        {/* Stay updated */}
        <section
          aria-labelledby="stay-updated-heading"
          className="mx-auto mt-16 max-w-2xl text-center"
        >
          <div className="rounded-lg border bg-primary/5 p-6">
            <div className="flex items-center justify-center gap-2">
              <Bell className="h-5 w-5 text-primary" aria-hidden="true" />
              <h2
                id="stay-updated-heading"
                className="text-lg font-semibold text-foreground"
              >
                Stay Updated
              </h2>
            </div>
            <p className="mt-3 text-muted-foreground">
              Follow our GitHub organization to be notified of new releases and
              community activity.
            </p>
            <div className="mt-4">
              <Button asChild variant="outline">
                <a
                  href="https://github.com/BusinessPlus-Community"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow on GitHub
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Temporary: Link back */}
        <div className="mx-auto mt-12 text-center">
          <Button asChild variant="ghost">
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
