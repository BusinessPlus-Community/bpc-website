import { ExternalLink } from 'lucide-react'
import { Button } from '../ui/button'

interface ProjectCardProps {
  name: string
  description: string
  language?: string
  githubUrl?: string
  status?: 'public' | 'private' | 'coming-soon'
}

export function ProjectCard({
  name,
  description,
  language,
  githubUrl,
  status = 'public',
}: ProjectCardProps) {
  return (
    <article className="flex flex-col rounded-lg border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-semibold text-foreground">{name}</h3>
        {status === 'coming-soon' && (
          <span className="rounded-full bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
            Coming Soon
          </span>
        )}
        {status === 'private' && (
          <span className="rounded-full bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
            Private
          </span>
        )}
      </div>
      <p className="mt-3 flex-1 text-muted-foreground">{description}</p>
      <div className="mt-4 flex items-center justify-between">
        {language && (
          <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <span
              className="h-3 w-3 rounded-full bg-primary"
              aria-hidden="true"
            />
            {language}
          </span>
        )}
        {githubUrl && status === 'public' && (
          <Button asChild variant="ghost" size="sm">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
              <ExternalLink className="ml-1.5 h-3 w-3" aria-hidden="true" />
            </a>
          </Button>
        )}
      </div>
    </article>
  )
}
