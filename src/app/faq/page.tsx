import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../components/ui/accordion'

export const metadata: Metadata = {
  title: 'FAQ - BusinessPlus Community',
  description:
    'Frequently asked questions about the BusinessPlus Community and our tools.',
}

const faqs = [
  {
    question: 'What is BusinessPlus?',
    answer:
      'BusinessPlus is PowerSchool\'s enterprise resource planning (ERP) software suite for K-12 school districts. It includes modules for accounting, procurement, human resources, payroll, and other administrative functions.',
  },
  {
    question: 'Is this community affiliated with PowerSchool?',
    answer:
      'No. The BusinessPlus Community is an independent, volunteer-driven organization. We are not affiliated with, endorsed by, or connected to PowerSchool in any way. For official PowerSchool support, please contact PowerSchool directly through their official support channels.',
  },
  {
    question: 'How do I get help with the BusinessPlus software itself?',
    answer:
      'For support with BusinessPlus software, including bugs, feature requests, or technical issues with the product, please contact PowerSchool Support directly at support.powerschool.com. Our community provides tools and resources to help administrators work with BusinessPlus, but we cannot provide official product support.',
  },
  {
    question: 'How do I contribute to the community?',
    answer:
      'We welcome contributions of all kinds! You can contribute by: forking a repository and submitting a pull request, opening issues to report bugs or suggest improvements, sharing your own tools or scripts, participating in GitHub Discussions, or helping other community members. Check out our Contributing Guidelines on GitHub for more details.',
  },
  {
    question: 'Who can join the community?',
    answer:
      'Anyone who works with or is interested in BusinessPlus is welcome to participate. Our community primarily consists of K-12 technology professionals including system administrators, database managers, IT directors, and other staff who manage BusinessPlus installations.',
  },
  {
    question: 'How do I request a new tool or feature?',
    answer:
      'You can request new tools or features by opening an issue on the relevant GitHub repository, starting a discussion in our GitHub Discussions area, or emailing us at code@bpluscommunity.org. We evaluate requests based on community interest and available volunteer time.',
  },
  {
    question: 'Are these tools safe to use in production?',
    answer:
      'Our tools are developed with care and tested by community members, but they are provided "as-is" without warranty. We strongly recommend testing any tool in a non-production environment before deploying to production. Always review the code and understand what it does before running it on your systems.',
  },
  {
    question: 'How can I sponsor or support the community?',
    answer:
      'You can support the BusinessPlus Community through GitHub Sponsors. Sponsorship helps cover infrastructure costs and allows us to dedicate more time to developing and maintaining community tools. Visit our GitHub Sponsors page to learn more.',
  },
]

export default function FAQPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Common questions about the BusinessPlus Community and our tools.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still have questions */}
        <section className="mx-auto mt-16 max-w-2xl text-center">
          <h2 className="text-xl font-semibold text-foreground">
            Still have questions?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Can&apos;t find what you&apos;re looking for? Reach out to us
            directly.
          </p>
          <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="text-primary underline underline-offset-4 hover:text-primary/80"
            >
              Contact us
            </Link>
            <span className="hidden text-muted-foreground sm:inline">•</span>
            <a
              href="https://github.com/orgs/BusinessPlus-Community/discussions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-4 hover:text-primary/80"
            >
              Ask in Discussions
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
