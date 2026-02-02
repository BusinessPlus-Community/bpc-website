import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '../../components/ui/button'
import { Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About - BusinessPlus Community',
  description:
    'Learn about the BusinessPlus Community - an independent, volunteer-driven group of K-12 technology professionals.',
}

const values = [
  {
    name: 'Open Collaboration',
    description:
      'We believe in the power of shared knowledge. All our tools and resources are open-source, allowing everyone to contribute, learn, and improve together.',
  },
  {
    name: 'Knowledge Sharing',
    description:
      'From quick tips to comprehensive guides, we document solutions so others can benefit from our collective experience with BusinessPlus.',
  },
  {
    name: 'Respectful Environment',
    description:
      'We maintain a welcoming space where questions are encouraged, mistakes are learning opportunities, and everyone is treated with respect.',
  },
  {
    name: 'Practical Solutions',
    description:
      'We focus on real-world tools and techniques that solve actual problems faced by K-12 technology teams every day.',
  },
  {
    name: 'Security First',
    description:
      'Educational data requires the highest standards of protection. Security considerations are built into everything we create.',
  },
]

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Who We Are */}
        <section aria-labelledby="who-we-are-heading" className="mx-auto max-w-3xl">
          <h1
            id="who-we-are-heading"
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
          >
            Who We Are
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            The BusinessPlus Community is an independent, volunteer-driven group
            of K-12 technology professionals who work with PowerSchool&apos;s
            BusinessPlus ERP software. We&apos;re system administrators, database
            managers, and IT specialists from school districts across the United
            States.
          </p>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            United by our shared experience with BusinessPlus—the accounting,
            procurement, human resources, and payroll system used by many K-12
            districts—we&apos;ve come together to support one another through
            open-source tools and collaborative problem-solving.
          </p>
        </section>

        {/* Our Mission */}
        <section
          aria-labelledby="mission-heading"
          className="mx-auto mt-16 max-w-3xl"
        >
          <h2
            id="mission-heading"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Our Mission
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            To empower K-12 technology teams by providing free, open-source tools
            and fostering a community of knowledge sharing around BusinessPlus
            system administration. We believe that by working together,
            we can solve problems more effectively and improve the technology
            experience for school districts everywhere.
          </p>
        </section>

        {/* Community Values */}
        <section
          aria-labelledby="values-heading"
          className="mx-auto mt-16 max-w-4xl"
        >
          <h2
            id="values-heading"
            className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Our Values
          </h2>
          <dl className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.name}
                className="rounded-lg border bg-card p-6 shadow-sm"
              >
                <dt className="text-lg font-semibold text-foreground">
                  {value.name}
                </dt>
                <dd className="mt-2 text-muted-foreground">
                  {value.description}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Independence Disclaimer */}
        <section
          aria-labelledby="independence-heading"
          className="mx-auto mt-16 max-w-3xl rounded-lg border border-primary/20 bg-primary/5 p-6"
        >
          <h2
            id="independence-heading"
            className="text-xl font-semibold text-foreground"
          >
            Independent Community
          </h2>
          <p className="mt-3 text-muted-foreground">
            The BusinessPlus Community is <strong>not affiliated with PowerSchool</strong>.
            We are an independent, volunteer-run organization. For official
            PowerSchool support, documentation, or product inquiries, please
            contact PowerSchool directly through their official channels.
          </p>
        </section>

        {/* Get Involved */}
        <section
          aria-labelledby="involved-heading"
          className="mx-auto mt-16 max-w-3xl text-center"
        >
          <h2
            id="involved-heading"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Get Involved
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Whether you want to contribute code, share documentation, or simply
            connect with others facing similar challenges, we&apos;d love to
            hear from you.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">
                <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
                Contact Us
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
