import Navigation from './components/navigation'
import HeroSection from './components/hero-section'
import AboutSection from './components/about-section'
import SkillsSection from './components/skills-section'
import ExperienceSection from './components/experience-section'
import CertificatesSection from './components/certificates-section'
import DownloadCVSection from './components/download-cv-section'
import ContactSection from './components/contact-section'
import Footer from './components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <CertificatesSection />
      <DownloadCVSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
