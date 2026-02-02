import type { Metadata } from 'next'
import { ProjectCard } from '../../components/projects/project-card'

export const metadata: Metadata = {
  title: 'Projects - BusinessPlus Community',
  description:
    'Open-source tools and utilities for BusinessPlus system administrators.',
}

const projects = [
  {
    name: 'BPC.DBRefresh',
    description:
      'PowerShell script for refreshing BusinessPlus test environments. Safely copies production data to test systems while maintaining proper security configurations.',
    language: 'PowerShell',
    githubUrl: 'https://github.com/BusinessPlus-Community/BPC.DBRefresh',
    status: 'public' as const,
  },
  {
    name: 'bp-webforms',
    description:
      'Web form templates and utilities for integrating with BusinessPlus workflows and data collection.',
    language: 'HTML/JavaScript',
    githubUrl: 'https://github.com/BusinessPlus-Community/bp-webforms',
    status: 'public' as const,
  },
  {
    name: 'bp-community-sql',
    description:
      'Collection of SQL queries, reports, and database utilities for BusinessPlus administration and reporting.',
    language: 'SQL',
    githubUrl: 'https://github.com/BusinessPlus-Community/bp-community-sql',
    status: 'public' as const,
  },
  {
    name: 'bpc-pycdd',
    description:
      'Python helper functions for working with CDD (Custom Data Definition) reports in BusinessPlus.',
    language: 'Python',
    status: 'coming-soon' as const,
  },
]

export default function ProjectsPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Our Projects
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Open-source tools created by and for the BusinessPlus community.
            All projects are free to use, modify, and contribute to.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.name}
              name={project.name}
              description={project.description}
              language={project.language}
              githubUrl={project.githubUrl}
              status={project.status}
            />
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-foreground">
            Want to Contribute?
          </h2>
          <p className="mt-3 text-muted-foreground">
            We welcome contributions from the community. Whether it&apos;s a bug
            fix, new feature, or entirely new project, your input helps everyone.
            Check out our{' '}
            <a
              href="https://github.com/BusinessPlus-Community"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-4 hover:text-primary/80"
            >
              GitHub organization
            </a>{' '}
            to get started.
          </p>
        </div>
      </div>
    </div>
  )
}
