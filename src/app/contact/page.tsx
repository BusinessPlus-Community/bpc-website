import type { Metadata } from 'next'
import { Button } from '../../components/ui/button'
import { Mail, MessageSquare, FolderPlus, Key } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact - BusinessPlus Community',
  description:
    'Get in touch with the BusinessPlus Community. Contact us via email or GitHub.',
}

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    description: 'For general inquiries, partnership questions, or other matters.',
    action: 'code@bpluscommunity.org',
    href: 'mailto:code@bpluscommunity.org',
    buttonText: 'Send Email',
  },
  {
    icon: MessageSquare,
    title: 'GitHub Discussions',
    description: 'Technical questions, ideas, and community conversations.',
    action: 'Join the discussion',
    href: 'https://github.com/orgs/BusinessPlus-Community/discussions',
    buttonText: 'Open Discussions',
  },
  {
    icon: FolderPlus,
    title: 'New Repository Requests',
    description: 'Have an idea for a new community project? Let us know.',
    action: 'Submit a request',
    href: 'mailto:code@bpluscommunity.org?subject=New%20Repository%20Request',
    buttonText: 'Request Project',
  },
  {
    icon: Key,
    title: 'Access Requests',
    description: 'Need contributor access to an existing repository?',
    action: 'Request access',
    href: 'mailto:code@bpluscommunity.org?subject=Access%20Request',
    buttonText: 'Request Access',
  },
]

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            We&apos;d love to hear from you. Choose the best way to get in touch.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
          {contactMethods.map((method) => (
            <div
              key={method.title}
              className="flex flex-col rounded-lg border bg-card p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <method.icon
                    className="h-5 w-5 text-primary"
                    aria-hidden="true"
                  />
                </div>
                <h2 className="text-lg font-semibold text-foreground">
                  {method.title}
                </h2>
              </div>
              <p className="mt-3 flex-1 text-muted-foreground">
                {method.description}
              </p>
              <div className="mt-4">
                <Button asChild variant="outline" className="w-full">
                  <a
                    href={method.href}
                    target={method.href.startsWith('mailto') ? undefined : '_blank'}
                    rel={method.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  >
                    {method.buttonText}
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Response Time */}
        <div className="mx-auto mt-12 max-w-2xl">
          <div className="rounded-lg border bg-muted/50 p-6 text-center">
            <h2 className="font-semibold text-foreground">Response Time</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              As a volunteer-run community, response times may vary. We typically
              respond to emails within a few business days. For urgent
              technical issues with PowerSchool products, please contact{' '}
              <a
                href="https://support.powerschool.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4 hover:text-primary/80"
              >
                PowerSchool Support
              </a>{' '}
              directly.
            </p>
          </div>
        </div>

        {/* Bug Reports */}
        <section
          aria-labelledby="bugs-heading"
          className="mx-auto mt-12 max-w-2xl"
        >
          <h2
            id="bugs-heading"
            className="text-center text-xl font-semibold text-foreground"
          >
            Found a Bug?
          </h2>
          <p className="mt-3 text-center text-muted-foreground">
            If you&apos;ve found an issue with one of our tools, please report it
            directly on the project&apos;s GitHub repository. Click the
            &quot;Issues&quot; tab on the relevant project and create a new
            issue with details about the problem.
          </p>
        </section>
      </div>
    </div>
  )
}
