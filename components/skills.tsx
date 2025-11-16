import { Code2, Palette, Plug, Zap, Database, Sparkles } from 'lucide-react'

const skills = [
  {
    icon: Code2,
    title: 'Theme Development',
    description: 'Custom Liquid themes, Shopify CLI, Theme Kit, and responsive design',
    items: ['Liquid', 'JavaScript', 'Tailwind CSS', 'Performance Optimization'],
  },
  {
    icon: Plug,
    title: 'App Development',
    description: 'Full-stack Shopify apps with React, Node.js, and GraphQL',
    items: ['React', 'Node.js', 'Polaris', 'Shopify Admin API'],
  },
  {
    icon: Sparkles,
    title: 'Extensions',
    description: 'Checkout UI, post-purchase, and theme app extensions',
    items: ['Checkout Extensions', 'App Blocks', 'Shopify Functions'],
  },
  {
    icon: Database,
    title: 'APIs & Integration',
    description: 'REST & GraphQL APIs, webhooks, and third-party integrations',
    items: ['GraphQL', 'REST API', 'Webhooks', 'OAuth'],
  },
  {
    icon: Palette,
    title: 'Design Systems',
    description: 'Implementing design systems and UI component libraries',
    items: ['Polaris', 'Figma', 'Responsive Design', 'Accessibility'],
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Speed optimization, SEO, and Core Web Vitals',
    items: ['Lazy Loading', 'Code Splitting', 'SEO', 'Analytics'],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Expertise Across the Ecosystem
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            Comprehensive knowledge of the entire Shopify development stack
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <div
                key={skill.title}
                className="group p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {skill.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {skill.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
