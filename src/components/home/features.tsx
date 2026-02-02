import { Code2, Users, BookOpen, HeartHandshake } from 'lucide-react'

const features = [
  {
    name: 'Share Tools',
    description:
      'Open-source PowerShell scripts, Python utilities, and SQL queries that solve real-world BusinessPlus administration challenges.',
    icon: Code2,
  },
  {
    name: 'Foster Collaboration',
    description:
      'Connect with fellow K-12 technology professionals who understand the unique challenges of managing BusinessPlus in educational environments.',
    icon: Users,
  },
  {
    name: 'Document Solutions',
    description:
      'Comprehensive documentation and guides to help you get the most out of BusinessPlus, from basic setup to advanced customization.',
    icon: BookOpen,
  },
  {
    name: 'Support Each Other',
    description:
      'A welcoming community where questions are encouraged and everyone contributes to collective knowledge.',
    icon: HeartHandshake,
  },
]

export function Features() {
  return (
    <section aria-labelledby="features-heading" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="features-heading"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            What We Do
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Building a supportive ecosystem for K-12 technology teams working
            with BusinessPlus.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-5xl">
          <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative rounded-lg border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <dt className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon
                      className="h-5 w-5 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <span className="text-lg font-semibold text-foreground">
                    {feature.name}
                  </span>
                </dt>
                <dd className="mt-3 text-muted-foreground">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
