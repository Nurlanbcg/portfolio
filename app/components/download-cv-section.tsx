"use client"

import { useState, useEffect, useRef } from 'react'
import { Download, FileText, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function DownloadCVSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDownloading, setIsDownloading] = useState(false)
  const [isDownloaded, setIsDownloaded] = useState(false)
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

  const handleDownload = async () => {
    setIsDownloading(true)
    
    // Simulate download process
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsDownloading(false)
    setIsDownloaded(true)
    
    // Reset downloaded state after 3 seconds
    setTimeout(() => setIsDownloaded(false), 3000)
    
    // In a real application, you would trigger the actual file download here
    // For example: window.open('/path/to/cv.pdf', '_blank')
  }

  return (
    <section id="download-cv" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className={`max-w-2xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="mb-6">
                <FileText className="h-16 w-16 text-primary mx-auto mb-4" />
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Download My CV</h2>
                <p className="text-lg text-muted-foreground">
                  Get a comprehensive overview of my experience, skills, and achievements in product management
                </p>
              </div>

              <div className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Detailed Experience
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Skills & Certifications
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Contact Information
                  </div>
                </div>

                <Button 
                  size="lg" 
                  className="group relative overflow-hidden"
                  onClick={handleDownload}
                  disabled={isDownloading}
                >
                  {isDownloading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Preparing Download...
                    </>
                  ) : isDownloaded ? (
                    <>
                      <CheckCircle className="mr-2 h-5 w-5" />
                      Downloaded!
                    </>
                  ) : (
                    <>
                      <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                      Download CV (PDF)
                    </>
                  )}
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                </Button>

                <p className="text-xs text-muted-foreground">
                  PDF format • Last updated: December 2024 • 2 pages
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
