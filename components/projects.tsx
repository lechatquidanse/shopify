'use client'

import { ProjectCard } from '@/components/project-card'
import { Code2, Package, Puzzle } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Luxury Fashion Store',
    category: 'theme',
    type: 'Custom Theme Development',
    description: 'Built a high-performance, fully customizable Shopify theme with advanced filtering, quick view, and seamless checkout experience.',
    technologies: ['Liquid', 'JavaScript', 'Tailwind CSS', 'Shopify CLI'],
    results: ['40% faster page load', '25% increase in conversions', 'Mobile-first design'],
    image: '/luxury-fashion-ecommerce.png',
    icon: Code2,
  },
  {
    id: 2,
    title: 'Inventory Sync Pro',
    category: 'app',
    type: 'Shopify App',
    description: 'Developed a multi-channel inventory management app that syncs stock levels across Shopify, Amazon, and eBay in real-time.',
    technologies: ['React', 'Node.js', 'Polaris', 'GraphQL', 'Shopify App Bridge'],
    results: ['Real-time sync', '10K+ active users', '4.9★ rating'],
    image: '/inventory-management-dashboard.png',
    icon: Package,
  },
  {
    id: 3,
    title: 'Product Customizer',
    category: 'extension',
    type: 'Checkout UI Extension',
    description: 'Created a checkout extension allowing customers to add personalized messages and gift wrapping options at checkout.',
    technologies: ['React', 'Shopify Functions', 'Checkout UI Extensions'],
    results: ['15% AOV increase', 'Seamless integration', 'Zero page speed impact'],
    image: '/product-customization-interface.jpg',
    icon: Puzzle,
  },
  {
    id: 4,
    title: 'Subscription Box Platform',
    category: 'theme',
    type: 'Custom Theme + App Integration',
    description: 'Designed and developed a custom theme integrated with subscription management, featuring flexible billing cycles and member portals.',
    technologies: ['Liquid', 'Shopify Subscriptions API', 'Customer Accounts API'],
    results: ['5K+ subscribers', 'Custom portal', '95% retention rate'],
    image: '/subscription-box-ecommerce.jpg',
    icon: Code2,
  },
  {
    id: 5,
    title: 'AI Product Recommendations',
    category: 'app',
    type: 'Shopify App',
    description: 'Built an AI-powered recommendation engine that analyzes customer behavior to suggest relevant products, increasing cross-sells.',
    technologies: ['Python', 'TensorFlow', 'React', 'Shopify Admin API'],
    results: ['35% more cross-sells', 'ML-powered', 'Easy setup'],
    image: '/ai-recommendation-dashboard.jpg',
    icon: Package,
  },
  {
    id: 6,
    title: 'Post-Purchase Upsell',
    category: 'extension',
    type: 'Post-Purchase Extension',
    description: 'Implemented a post-purchase upsell extension that presents complementary products after checkout completion.',
    technologies: ['React', 'Shopify Functions', 'Post-Purchase Extensions'],
    results: ['20% take rate', 'One-click add', '$50K+ revenue'],
    image: '/post-purchase-upsell-interface.jpg',
    icon: Puzzle,
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
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
