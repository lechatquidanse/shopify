'use client'

import { ProjectCard } from '@/components/project-card'
import { Code2 } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'La Deux Cinq',
    category: 'theme',
    type: 'Theme Creation',
    description: 'Designed and built a fully responsive, high-performance Shopify theme with custom sections, dynamic filtering, and optimized checkout experience.',
    technologies: ['Liquid', 'JavaScript', 'Tailwind CSS', 'Shopify CLI'],
    results: ['Mobile-first design'],
    image: 'ladeuxcinq.png',
    icon: Code2,
    link: 'https://ladeuxcinq.com/'
  },
  {
    id: 2,
    title: 'Ziggy Familly',
    category: 'theme',
    type: 'SEO & W3C improvements, GTM tracking',
    description: 'Improve W3C and SEO performance to optimized checkout experience. Implement GTM tracking',
    technologies: ['Liquid', 'JavaScript', 'CSS', 'GTM'],
    results: ['40% faster page load'],
    image: 'ziggyfamilly.png',
    icon: Code2,
    link: 'https://ziggyfamily.com'
  },
  {
    id: 3,
    title: 'Nuxe',
    category: 'extension',
    type: 'GTM tracking in StoreFront and Pixel API',
    description: 'Implement a GTM tracking to track on storefront and checkout via Shopify Pixel App',
    technologies: ['React', 'TypeScript', 'Shopify Pixel'],
    results: ['Full GTM tracking', 'Seamless integration with theme'],
    image: 'nuxe.png',
    icon: Code2,
    link: 'https://nuxe.com/'
  },
  {
    id: 4,
    title: 'Manucurist',
    category: 'theme',
    type: 'GTM tracking in StoreFront and Pixel API',
    description: 'Implement a GTM tracking to track on storefront and checkout via Shopify Pixel App',
    technologies: ['React', 'TypeScript', 'Shopify Pixel'],
    results: ['Full GTM tracking', 'Seamless integration with theme'],
    image: 'manucurist.png',
    icon: Code2,
    link: 'https://manucurist.com/'
  },
  {
    id: 5,
    title: 'Fastrack',
    category: 'app',
    type: 'Shopify app to track with shop with GTM and test it ',
    description: 'Implement a GTM tracking App, so merchant can install it and test it',
    technologies: ['React', 'TypeScript', 'Shopify App'],
    results: [],
    image: 'fastrack.png',
    icon: Code2,
    link: ''
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            A showcase of custom themes, powerful apps, and innovative extensions across the Shopify ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
