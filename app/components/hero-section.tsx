"use client"

import { useState, useEffect } from 'react'
import { Download, MessageCircle, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 animate-gradient"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-secondary/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-accent/25 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Name and Title */}
          <div className={`mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              {"Nurlan İbrahimov"}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              Product Owner | Building Digital Products
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating user-centric digital experiences through strategic product management and agile methodologies
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`mb-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download CV
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="group"
              >
                <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Let's Connect
              </Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <button 
              onClick={() => scrollToSection('about')}
              className="animate-bounce hover:text-primary transition-colors"
            >
              <ChevronDown className="h-8 w-8 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
