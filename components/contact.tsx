'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { Mail, MessageSquare, Send } from 'lucide-react'

export function Contact() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://formspree.io/f/xyzllgww', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      const success = response.ok;
      
      if (success) {
        toast({
          title: "Message sent successfully!",
          description: "Thanks for reaching out. I'll get back to you within 24 hours.",
        })
        
        setFormData({
          name: '',
          email: '',
          company: '',
          message: '',
        })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Something went wrong. Please try again or email me directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              {"Let's Work Together"}
            </h2>
            <p className="text-lg text-muted-foreground text-balance">
              Have a project in mind? Whether you need a custom theme, app development, or Shopify consultation, I'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name *
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium">
                  Company
                </label>
                <Input
                  id="company"
                  type="text"
                  placeholder="Your company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Project Details *
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  className="min-h-32"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                <Send className="w-4 h-4 mr-2" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>

            <div className="space-y-6">
              <div className="p-6 bg-card border border-border rounded-lg space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-sm text-muted-foreground">
                      stephane.elmanouni@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold">Response Time</h3>
                    <p className="text-sm text-muted-foreground">
                      Usually within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-primary text-primary-foreground rounded-lg space-y-3">
                <h3 className="font-semibold text-lg">Why Work With Me?</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-foreground/80">✓</span>
                    <span>5+ years of Shopify development experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-foreground/80">✓</span>
                    <span>Expertise across themes, apps, and extensions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-foreground/80">✓</span>
                    <span>Clean code and best practices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-foreground/80">✓</span>
                    <span>Fast turnaround and clear communication</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
