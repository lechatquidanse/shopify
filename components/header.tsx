'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Mail, Linkedin, Github } from 'lucide-react'
import Image from 'next/image'

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-16 h-16 rounded-lg flex items-center justify-center">
              <Image src="shopify.png" alt="Stephane EL MANOUNI - Shopify developer" width={128} height={128}/>
            </div>
            <span className="font-semibold text-lg">Stephane El Manouni</span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('projects')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </button>
            
            <div className="flex items-center gap-3 ml-2">
              <a
                href="mailto:stephane.elmanouni@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/stephane-el-manouni/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/lechatquidanse"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          <Button onClick={() => scrollToSection('contact')} className="hidden md:inline-flex">
            {"Let's Work Together"}
          </Button>

          {/* Mobile menu button */}
          <Button onClick={() => scrollToSection('contact')} size="sm" className="md:hidden">
            Contact
          </Button>
        </nav>
      </div>
    </header>
  )
}
