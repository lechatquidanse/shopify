'use client'

import { ArrowDown } from 'lucide-react'

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
      
      {/* Animated circles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            ✨ Shopify Expert Developer
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
            Building Exceptional{' '}
            <span className="text-primary">Shopify</span> Experiences
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            Specialized in custom themes, powerful apps, and seamless extensions across the entire Shopify ecosystem
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <div className="px-6 py-3 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105">
              <div className="text-2xl font-bold text-primary">Liquid</div>
              <div className="text-sm text-muted-foreground">Theme Expert</div>
            </div>
            <div className="px-6 py-3 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105">
              <div className="text-2xl font-bold text-primary">React</div>
              <div className="text-sm text-muted-foreground">App Builder</div>
            </div>
            <div className="px-6 py-3 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105">
              <div className="text-2xl font-bold text-primary">API</div>
              <div className="text-sm text-muted-foreground">Integration</div>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center gap-3">
            <p className="text-sm font-medium text-primary animate-pulse">
              See what I've built
            </p>
            <button
              onClick={scrollToProjects}
              className="animate-bounce inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-primary/20 hover:border-primary transition-colors"
              aria-label="Scroll to projects"
            >
              <ArrowDown className="w-5 h-5 text-primary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
