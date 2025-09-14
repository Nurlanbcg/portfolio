"use client"

import { useState, useEffect, useRef } from 'react'
import { Award, Calendar, ExternalLink } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import Image from 'next/image'

export default function CertificatesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const certificates = [
    {
      title: "Certified Scrum Product Owner (CSPO)",
      issuer: "Scrum Alliance",
      year: "2023",
      image: "/placeholder.svg?height=300&width=400",
      description: "Advanced certification in Scrum product ownership methodologies and practices",
      credentialId: "CSP0001234"
    },
    {
      title: "Google Analytics Certified",
      issuer: "Google",
      year: "2023",
      image: "/placeholder.svg?height=300&width=400",
      description: "Proficiency in Google Analytics for data-driven product decisions",
      credentialId: "GA4567890"
    },
    {
      title: "Product Management Certificate",
      issuer: "Stanford University",
      year: "2022",
      image: "/placeholder.svg?height=300&width=400",
      description: "Comprehensive program covering product strategy, development, and launch",
      credentialId: "STAN789012"
    },
    {
      title: "Agile Project Management",
      issuer: "PMI",
      year: "2022",
      image: "/placeholder.svg?height=300&width=400",
      description: "Project Management Institute certification in Agile methodologies",
      credentialId: "PMI345678"
    },
    {
      title: "UX Design Fundamentals",
      issuer: "Coursera",
      year: "2021",
      image: "/placeholder.svg?height=300&width=400",
      description: "User experience design principles and best practices",
      credentialId: "COUR901234"
    },
    {
      title: "Data Analysis with Python",
      issuer: "edX",
      year: "2021",
      image: "/placeholder.svg?height=300&width=400",
      description: "Data analysis and visualization using Python and related libraries",
      credentialId: "EDX567890"
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
    <section id="certificates" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certificates & Credentials</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development in product management and related fields
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <Card 
              key={cert.title}
              className={`group hover:shadow-lg transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <Award className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1 line-clamp-2">{cert.title}</h3>
                    <p className="text-primary font-medium">{cert.issuer}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    {cert.year}
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-3">{cert.description}</p>
                </div>

                <div className="flex gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm" variant="outline" className="flex-1">
                        View Certificate
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-xl font-semibold">{cert.title}</h3>
                          <p className="text-muted-foreground">{cert.issuer} • {cert.year}</p>
                        </div>
                        <Image
                          src={cert.image || "/placeholder.svg"}
                          alt={cert.title}
                          width={400}
                          height={300}
                          className="w-full rounded-lg border"
                        />
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">{cert.description}</p>
                          <p className="text-xs text-muted-foreground">
                            Credential ID: {cert.credentialId}
                          </p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  
                  <Button size="sm" variant="ghost">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
