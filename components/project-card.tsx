'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { ExternalLink, type LucideIcon } from 'lucide-react'
import Image from 'next/image'

interface Project {
  id: number
  title: string
  category: 'theme' | 'app' | 'extension'
  type: string
  description: string
  technologies: string[]
  results: string[]
  image: string
  icon: LucideIcon
}

interface ProjectCardProps {
  project: Project
  index: number
}

const categoryColors = {
  theme: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
  app: 'bg-primary/10 text-primary border-primary/20',
  extension: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const Icon = project.icon

  return (
    <Card
      className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/2] overflow-hidden bg-muted">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className={`object-cover transition-transform duration-500 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute top-4 right-4 w-10 h-10 bg-background/90 backdrop-blur-sm rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Icon className="w-5 h-5 text-primary" />
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-2">
          <div className="space-y-1 flex-1">
            <h3 className="font-semibold text-xl leading-tight group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground">{project.type}</p>
          </div>
          <Badge className={`${categoryColors[project.category]} border`}>
            {project.category}
          </Badge>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        <div className="space-y-3">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          <div className="pt-2 border-t border-border">
            <div className="flex flex-wrap gap-3 text-xs">
              {project.results.map((result, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-muted-foreground">{result}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <button className="flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all group/btn">
          <span>View Details</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </button>
      </div>
    </Card>
  )
}
