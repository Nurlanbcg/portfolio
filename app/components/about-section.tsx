"use client"

import { useState, useEffect, useRef } from 'react'
import { Target, Users, Lightbulb } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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

  const values = [
    {
      icon: Target,
      title: "Strategic Focus",
      description: "Aligning product vision with business objectives and user needs"
    },
    {
      icon: Users,
      title: "Collaborative Leadership",
      description: "Building high-performing cross-functional teams through effective communication"
    },
    {
      icon: Lightbulb,
      title: "Innovation Mindset",
      description: "Driving continuous improvement and embracing emerging technologies"
    }
  ]

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experienced Product Owner with 8+ years in digital product development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Image */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Sarah Johnson - About"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-lg"></div>
            </div>
          </div>

          {/* Bio Content */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-2xl font-semibold mb-6">Driving Product Excellence Through Agile Leadership</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                As a seasoned Product Owner at TechCorp Solutions, I specialize in transforming complex business requirements into user-centric digital products. My journey in product management has been driven by a passion for creating meaningful experiences that solve real-world problems.
              </p>
              <p>
                With expertise in Agile methodologies, I've successfully led cross-functional teams to deliver 15+ major product releases, resulting in a 40% increase in user engagement and $2M+ in additional revenue. My approach combines strategic thinking with hands-on execution, ensuring products not only meet market demands but exceed user expectations.
              </p>
              <p>
                I believe in the power of data-driven decisions, continuous learning, and fostering collaborative environments where innovation thrives. When I'm not crafting product roadmaps, you'll find me mentoring junior PMs or exploring the latest trends in UX design and emerging technologies.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card 
              key={value.title}
              className={`transition-all duration-1000 hover:shadow-lg hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${700 + index * 200}ms` }}
            >
              <CardContent className="p-6 text-center">
                <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
