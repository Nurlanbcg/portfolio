"use client"

import { useState, useEffect, useRef } from 'react'
import { ExternalLink, Github, Users, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const projects = [
    {
      name: "E-commerce Platform Redesign",
      description: "Led the complete redesign of a B2B e-commerce platform, focusing on user experience optimization and conversion rate improvement.",
      image: "/placeholder.svg?height=200&width=300",
      tools: ["Figma", "Jira", "Google Analytics", "Hotjar", "A/B Testing"],
      role: "Senior Product Owner",
      outcome: "35% increase in conversion rate, 50% reduction in cart abandonment",
      metrics: {
        users: "25K+",
        revenue: "$1.2M+"
      },
      link: "#",
      github: "#"
    },
    {
      name: "Mobile App MVP Launch",
      description: "Managed the end-to-end development of a mobile application MVP for task management, from concept to market launch.",
      image: "/placeholder.svg?height=200&width=300",
      tools: ["React Native", "Firebase", "Mixpanel", "Sketch", "Zeplin"],
      role: "Product Owner",
      outcome: "10K downloads in first month, 4.2 App Store rating",
      metrics: {
        users: "10K+",
        rating: "4.2/5"
      },
      link: "#",
      github: "#"
    },
    {
      name: "Data Analytics Dashboard",
      description: "Developed a comprehensive analytics dashboard for internal stakeholders to track key business metrics and user behavior.",
      image: "/placeholder.svg?height=200&width=300",
      tools: ["Tableau", "SQL", "Python", "REST APIs", "Slack Integration"],
      role: "Product Owner & Analyst",
      outcome: "Reduced reporting time by 70%, improved decision-making speed",
      metrics: {
        users: "50+",
        efficiency: "70%"
      },
      link: "#"
    },
    {
      name: "Customer Support Portal",
      description: "Created a self-service customer support portal with knowledge base, ticketing system, and live chat integration.",
      image: "/placeholder.svg?height=200&width=300",
      tools: ["Zendesk", "Intercom", "WordPress", "CSS", "JavaScript"],
      role: "Product Owner",
      outcome: "40% reduction in support tickets, 90% customer satisfaction",
      metrics: {
        satisfaction: "90%",
        tickets: "-40%"
      },
      link: "#"
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

  return (
    <section id="projects" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects & Case Studies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing successful product initiatives and their measurable impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.name}
              className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl mb-2">{project.name}</CardTitle>
                <p className="text-muted-foreground text-sm">{project.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2 text-sm">My Role</h4>
                  <Badge variant="outline">{project.role}</Badge>
                </div>

                <div>
                  <h4 className="font-medium mb-2 text-sm">Tools & Technologies</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.tools.map((tool) => (
                      <Badge key={tool} variant="secondary" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2 text-sm flex items-center gap-1">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    Key Outcome
                  </h4>
                  <p className="text-sm text-muted-foreground">{project.outcome}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center p-2 bg-muted/50 rounded">
                      <div className="font-semibold text-primary">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    View Project
                  </Button>
                  {project.github && (
                    <Button size="sm" variant="outline">
                      <Github className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
