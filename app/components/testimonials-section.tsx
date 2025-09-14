"use client"

import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  const testimonials = [
    {
      quote: "Sarah's strategic vision and execution excellence transformed our product development process. Her ability to balance stakeholder needs while maintaining user focus is exceptional.",
      name: "Michael Chen",
      title: "VP of Engineering",
      company: "TechCorp Solutions",
      image: "/placeholder.svg?height=60&width=60"
    },
    {
      quote: "Working with Sarah was a game-changer for our team. She brought clarity to complex requirements and helped us deliver features that truly resonated with our users.",
      name: "Emily Rodriguez",
      title: "UX Design Lead",
      company: "InnovateLabs",
      image: "/placeholder.svg?height=60&width=60"
    },
    {
      quote: "Sarah's data-driven approach to product management resulted in measurable improvements across all our key metrics. Her leadership style fosters collaboration and innovation.",
      name: "David Thompson",
      title: "CEO",
      company: "StartupVenture",
      image: "/placeholder.svg?height=60&width=60"
    },
    {
      quote: "As a stakeholder, I appreciated Sarah's clear communication and her ability to translate technical concepts into business value. She's a true product leader.",
      name: "Lisa Park",
      title: "Marketing Director",
      company: "DataDriven Inc",
      image: "/placeholder.svg?height=60&width=60"
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  return (
    <section id="testimonials" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Colleagues Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Testimonials from team members, stakeholders, and leadership
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Card className="min-h-[300px] flex items-center">
              <CardContent className="p-8 text-center">
                <Quote className="h-12 w-12 text-primary/20 mx-auto mb-6" />
                
                <div className="space-y-6">
                  <blockquote className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                  
                  <div className="flex items-center justify-center gap-4">
                    <Image
                      src={testimonials[currentIndex].image || "/placeholder.svg"}
                      alt={testimonials[currentIndex].name}
                      width={60}
                      height={60}
                      className="rounded-full border-2 border-primary/20"
                    />
                    <div className="text-left">
                      <div className="font-semibold text-lg">{testimonials[currentIndex].name}</div>
                      <div className="text-primary font-medium">{testimonials[currentIndex].title}</div>
                      <div className="text-sm text-muted-foreground">{testimonials[currentIndex].company}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
              onClick={goToNext}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-primary w-8' : 'bg-muted-foreground/30'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
