import type { Metadata } from 'next'
import { ExternalLink, BookOpen, Users, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Resources - BusinessPlus Community',
  description:
    'Helpful links and resources for BusinessPlus administrators and the K-12 technology community.',
}

const officialResources = [
  {
    name: 'PowerSchool Community',
    description: 'Official PowerSchool user community and forums.',
    url: 'https://community.powerschool.com/',
  },
  {
    name: 'PowerSchool Support',
    description: 'Official support portal for PowerSchool products.',
    url: 'https://support.powerschool.com/',
  },
  {
    name: 'PowerSchool Documentation',
    description: 'Official product documentation and release notes.',
    url: 'https://docs.powerschool.com/',
  },
]

const communityResources = [
  {
    name: 'GitHub Organization',
    description:
      'Browse all our open-source projects, submit issues, and contribute code.',
    url: 'https://github.com/BusinessPlus-Community',
    icon: Users,
  },
  {
    name: 'Contributing Guidelines',
    description:
      'Learn how to contribute to our projects and community resources.',
    url: 'https://github.com/BusinessPlus-Community/.github/blob/main/CONTRIBUTING.md',
    icon: FileText,
  },
  {
    name: 'Code of Conduct',
    description: 'Our community standards and expectations for participation.',
    url: 'https://github.com/BusinessPlus-Community/.github/blob/main/CODE_OF_CONDUCT.md',
    icon: BookOpen,
  },
]

export default function ResourcesPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Resources
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Helpful links and materials for BusinessPlus administrators.
          </p>
        </div>

        {/* Official Resources */}
        <section
          aria-labelledby="official-heading"
          className="mx-auto mt-16 max-w-4xl"
        >
          <h2
            id="official-heading"
            className="text-2xl font-bold text-foreground"
          >
            Official PowerSchool Resources
          </h2>
          <p className="mt-2 text-muted-foreground">
            For official support, documentation, and product information, visit
            these PowerSchool resources.
          </p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {officialResources.map((resource) => (
              <li key={resource.name}>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full flex-col rounded-lg border bg-card p-5 transition-shadow hover:shadow-md"
                >
                  <span className="font-semibold text-foreground">
                    {resource.name}
                  </span>
                  <span className="mt-1 flex-1 text-sm text-muted-foreground">
                    {resource.description}
                  </span>
                  <span className="mt-3 inline-flex items-center text-sm text-primary">
                    Visit site
                    <ExternalLink
                      className="ml-1 h-3 w-3"
                      aria-hidden="true"
                    />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Community Resources */}
        <section
          aria-labelledby="community-heading"
          className="mx-auto mt-16 max-w-4xl"
        >
          <h2
            id="community-heading"
            className="text-2xl font-bold text-foreground"
          >
            Community Resources
          </h2>
          <p className="mt-2 text-muted-foreground">
            Get involved with the BusinessPlus Community.
          </p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {communityResources.map((resource) => (
              <li key={resource.name}>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full flex-col rounded-lg border bg-card p-5 transition-shadow hover:shadow-md"
                >
                  <div className="flex items-center gap-2">
                    <resource.icon
                      className="h-5 w-5 text-primary"
                      aria-hidden="true"
                    />
                    <span className="font-semibold text-foreground">
                      {resource.name}
                    </span>
                  </div>
                  <span className="mt-2 flex-1 text-sm text-muted-foreground">
                    {resource.description}
                  </span>
                  <span className="mt-3 inline-flex items-center text-sm text-primary">
                    View resource
                    <ExternalLink
                      className="ml-1 h-3 w-3"
                      aria-hidden="true"
                    />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Getting Started */}
        <section
          aria-labelledby="getting-started-heading"
          className="mx-auto mt-16 max-w-3xl"
        >
          <div className="rounded-lg border bg-card p-8">
            <h2
              id="getting-started-heading"
              className="text-2xl font-bold text-foreground"
            >
              Getting Started
            </h2>
            <p className="mt-4 text-muted-foreground">
              New to the BusinessPlus Community? Here&apos;s how to get the most
              out of our resources:
            </p>
            <ol className="mt-6 list-inside list-decimal space-y-3 text-muted-foreground">
              <li>
                <strong className="text-foreground">Explore our projects</strong>{' '}
                — Browse our{' '}
                <a
                  href="https://github.com/BusinessPlus-Community"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-4 hover:text-primary/80"
                >
                  GitHub repositories
                </a>{' '}
                to find tools that might help your district.
              </li>
              <li>
                <strong className="text-foreground">Read the documentation</strong>{' '}
                — Each project includes a README with setup instructions and
                usage examples.
              </li>
              <li>
                <strong className="text-foreground">Ask questions</strong> — Use
                GitHub Issues or Discussions to ask questions and share ideas.
              </li>
              <li>
                <strong className="text-foreground">Contribute back</strong> — If
                you fix a bug or add a feature, consider contributing it back to
                the community.
              </li>
            </ol>
          </div>
        </section>
      </div>
    </div>
  )
}
