"use client"

import { useState, useEffect, useRef } from "react"
import { Calendar, MapPin, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const experiences = [
    {
      role: "Senior Product Owner",
      company: "TechCorp Solutions",
      logo: "/placeholder.svg?height=60&width=60",
      location: "San Francisco, CA",
      period: "2021 - Present",
      achievements: [
        "Led product strategy for flagship SaaS platform serving 50K+ users",
        "Increased user engagement by 40% through data-driven feature prioritization",
        "Managed $2M product budget and coordinated 3 cross-functional teams",
        "Implemented agile processes that reduced time-to-market by 30%",
      ],
      technologies: ["Jira", "Confluence", "Figma", "Analytics", "A/B Testing"],
    },
    {
      role: "Product Owner",
      company: "InnovateLabs",
      logo: "/placeholder.svg?height=60&width=60",
      location: "Austin, TX",
      period: "2019 - 2021",
      achievements: [
        "Launched 3 major product features resulting in 25% revenue increase",
        "Collaborated with UX team to redesign user onboarding flow",
        "Established product metrics framework and KPI tracking system",
        "Mentored 2 junior product managers and 1 business analyst",
      ],
      technologies: ["Scrum", "User Stories", "Roadmapping", "Stakeholder Management"],
    },
    {
      role: "Business Analyst",
      company: "DataDriven Inc",
      logo: "/placeholder.svg?height=60&width=60",
      location: "Chicago, IL",
      period: "2017 - 2019",
      achievements: [
        "Analyzed user behavior data to identify product improvement opportunities",
        "Created detailed requirements documentation for 15+ features",
        "Facilitated stakeholder workshops and requirement gathering sessions",
        "Supported product launch that achieved 120% of adoption targets",
      ],
      technologies: ["SQL", "Excel", "Requirements Analysis", "Process Mapping"],
    },
    {
      role: "Junior Product Analyst",
      company: "StartupVenture",
      logo: "/placeholder.svg?height=60&width=60",
      location: "Remote",
      period: "2016 - 2017",
      achievements: [
        "Conducted market research and competitive analysis for new product lines",
        "Assisted in user testing sessions and feedback collection",
        "Created product documentation and user guides",
        "Supported agile development process as team member",
      ],
      technologies: ["Market Research", "User Testing", "Documentation", "Agile"],
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A progressive career journey in product management and business analysis
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-6 relative">
                <div className="flex items-start gap-4 mb-4">
                  <Image
                    src={exp.logo || "/placeholder.svg"}
                    alt={`${exp.company} logo`}
                    width={60}
                    height={60}
                    className="rounded-lg border group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-primary font-medium mb-2">{exp.company}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Hover overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
