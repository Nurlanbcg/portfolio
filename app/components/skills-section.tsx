"use client"

import { useState, useEffect, useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedValues, setAnimatedValues] = useState<{ [key: string]: number }>({})
  const sectionRef = useRef<HTMLElement>(null)

  const skillCategories = [
    {
      title: "Product Management",
      skills: [
        { name: "Agile/Scrum", level: 95 },
        { name: "Jira/Confluence", level: 90 },
        { name: "Roadmapping", level: 92 },
        { name: "Sprint Planning", level: 88 },
        { name: "User Story Writing", level: 85 }
      ]
    },
    {
      title: "Technical Understanding",
      skills: [
        { name: "API Integration", level: 75 },
        { name: "Database Concepts", level: 70 },
        { name: "UI/UX Collaboration", level: 88 },
        { name: "Analytics Tools", level: 82 },
        { name: "A/B Testing", level: 80 }
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Communication", level: 95 },
        { name: "Leadership", level: 90 },
        { name: "Stakeholder Management", level: 92 },
        { name: "Problem Solving", level: 88 },
        { name: "Strategic Thinking", level: 85 }
      ]
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate progress bars
          setTimeout(() => {
            const newValues: { [key: string]: number } = {}
            skillCategories.forEach(category => {
              category.skills.forEach(skill => {
                newValues[skill.name] = skill.level
              })
            })
            setAnimatedValues(newValues)
          }, 500)
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
    <section id="skills" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set built through years of hands-on experience in product management
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.title}
              className={`transition-all duration-1000 hover:shadow-lg ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${categoryIndex * 200}ms` }}
            >
              <CardHeader>
                <CardTitle className="text-xl text-center">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name}
                    className={`transition-all duration-500 ${
                      isVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100) + 300}ms` }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{animatedValues[skill.name] || 0}%</span>
                    </div>
                    <Progress 
                      value={animatedValues[skill.name] || 0} 
                      className="h-2"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
