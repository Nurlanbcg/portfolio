"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "az"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    // Hero Section
    "hero.name": "Nurlan İbrahimov",
    "hero.title": "Product Owner | Building Digital Products",
    "hero.description":
      "Passionate about creating user-centric digital experiences through strategic product management and agile methodologies",
    "hero.downloadCV": "Download CV",
    "hero.letsConnect": "Let's Connect",

    // About Section
    "about.title": "About Me",
    "about.subtitle": "Experienced Product Owner with 8+ years in digital product development",
    "about.heading": "Driving Product Excellence Through Agile Leadership",
    "about.bio1":
      "As a seasoned Product Owner at TechCorp Solutions, I specialize in transforming complex business requirements into user-centric digital products. My journey in product management has been driven by a passion for creating meaningful experiences that solve real-world problems.",
    "about.bio2":
      "With expertise in Agile methodologies, I've successfully led cross-functional teams to deliver 15+ major product releases, resulting in a 40% increase in user engagement and $2M+ in additional revenue. My approach combines strategic thinking with hands-on execution, ensuring products not only meet market demands but exceed user expectations.",
    "about.bio3":
      "I believe in the power of data-driven decisions, continuous learning, and fostering collaborative environments where innovation thrives. When I'm not crafting product roadmaps, you'll find me mentoring junior PMs or exploring the latest trends in UX design and emerging technologies.",
    "about.strategicFocus": "Strategic Focus",
    "about.strategicFocusDesc": "Aligning product vision with business objectives and user needs",
    "about.collaborativeLeadership": "Collaborative Leadership",
    "about.collaborativeLeadershipDesc":
      "Building high-performing cross-functional teams through effective communication",
    "about.innovationMindset": "Innovation Mindset",
    "about.innovationMindsetDesc": "Driving continuous improvement and embracing emerging technologies",

    // Skills Section
    "skills.title": "Skills & Expertise",
    "skills.subtitle": "A comprehensive skill set built through years of hands-on experience in product management",
    "skills.productManagement": "Product Management",
    "skills.technicalUnderstanding": "Technical Understanding",
    "skills.softSkills": "Soft Skills",

    // Experience Section
    "experience.title": "Work Experience",
    "experience.subtitle": "A progressive career journey in product management and business analysis",
    "experience.keyAchievements": "Key Achievements",
    "experience.senior.role": "Senior Product Owner",
    "experience.senior.company": "TechCorp Solutions",
    "experience.senior.location": "San Francisco, CA",
    "experience.senior.period": "2021 - Present",
    "experience.senior.achievement1": "Led product strategy for flagship SaaS platform serving 50K+ users",
    "experience.senior.achievement2": "Increased user engagement by 40% through data-driven feature prioritization",
    "experience.senior.achievement3": "Managed $2M product budget and coordinated 3 cross-functional teams",
    "experience.senior.achievement4": "Implemented agile processes that reduced time-to-market by 30%",
    "experience.product.role": "Product Owner",
    "experience.product.company": "InnovateLabs",
    "experience.product.location": "Austin, TX",
    "experience.product.period": "2019 - 2021",
    "experience.product.achievement1": "Launched 3 major product features resulting in 25% revenue increase",
    "experience.product.achievement2": "Collaborated with UX team to redesign user onboarding flow",
    "experience.product.achievement3": "Established product metrics framework and KPI tracking system",
    "experience.product.achievement4": "Mentored 2 junior product managers and 1 business analyst",
    "experience.analyst.role": "Business Analyst",
    "experience.analyst.company": "DataDriven Inc",
    "experience.analyst.location": "Chicago, IL",
    "experience.analyst.period": "2017 - 2019",
    "experience.analyst.achievement1": "Analyzed user behavior data to identify product improvement opportunities",
    "experience.analyst.achievement2": "Created detailed requirements documentation for 15+ features",
    "experience.analyst.achievement3": "Facilitated stakeholder workshops and requirement gathering sessions",
    "experience.analyst.achievement4": "Supported product launch that achieved 120% of adoption targets",
    "experience.junior.role": "Junior Product Analyst",
    "experience.junior.company": "StartupVenture",
    "experience.junior.location": "Remote",
    "experience.junior.period": "2016 - 2017",
    "experience.junior.achievement1": "Conducted market research and competitive analysis for new product lines",
    "experience.junior.achievement2": "Assisted in user testing sessions and feedback collection",
    "experience.junior.achievement3": "Created product documentation and user guides",
    "experience.junior.achievement4": "Supported agile development process as team member",

    // Projects Section
    "projects.title": "Projects & Case Studies",
    "projects.subtitle": "Showcasing successful product initiatives and their measurable impact",
    "projects.myRole": "My Role",
    "projects.toolsTech": "Tools & Technologies",
    "projects.keyOutcome": "Key Outcome",
    "projects.viewProject": "View Project",
    "projects.users": "users",
    "projects.revenue": "revenue",
    "projects.rating": "rating",
    "projects.efficiency": "efficiency",
    "projects.satisfaction": "satisfaction",
    "projects.tickets": "tickets",

    // Certificates Section
    "certificates.title": "Certificates & Credentials",
    "certificates.subtitle":
      "Continuous learning and professional development in product management and related fields",
    "certificates.viewCertificate": "View Certificate",
    "certificates.credentialId": "Credential ID",

    // Testimonials Section
    "testimonials.title": "What Colleagues Say",
    "testimonials.subtitle": "Testimonials from team members, stakeholders, and leadership",

    // Download CV Section
    "downloadCV.title": "Download My CV",
    "downloadCV.description":
      "Get a comprehensive overview of my experience, skills, and achievements in product management",
    "downloadCV.detailedExperience": "Detailed Experience",
    "downloadCV.skillsCertifications": "Skills & Certifications",
    "downloadCV.contactInfo": "Contact Information",
    "downloadCV.preparingDownload": "Preparing Download...",
    "downloadCV.downloaded": "Downloaded!",
    "downloadCV.downloadButton": "Download CV (PDF)",
    "downloadCV.fileInfo": "PDF format • Last updated: December 2024 • 2 pages",

    // Contact Section
    "contact.title": "Let's Connect",
    "contact.subtitle": "Ready to discuss your next product opportunity? I'd love to hear from you.",
    "contact.sendMessage": "Send me a message",
    "contact.yourName": "Your Name",
    "contact.yourEmail": "Your Email",
    "contact.subject": "Subject",
    "contact.yourMessage": "Your Message",
    "contact.sending": "Sending...",
    "contact.sendMessageBtn": "Send Message",
    "contact.messageSent": "Message Sent!",
    "contact.thankYou": "Thank you for reaching out. I'll get back to you within 24 hours.",
    "contact.contactInfo": "Contact Information",
    "contact.followMe": "Follow Me",
    "contact.connectDescription":
      "Connect with me on professional networks or schedule a call to discuss opportunities.",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.location": "Location",

    // Footer
    "footer.description":
      "Product Owner passionate about creating user-centric digital experiences through strategic product management.",
    "footer.navigation": "Navigation",
    "footer.getInTouch": "Get In Touch",
    "footer.allRightsReserved": "All rights reserved.",
    "footer.builtWith": "Built with Next.js & Tailwind CSS",
  },
  az: {
    // Navigation
    "nav.home": "Ana Səhifə",
    "nav.about": "Haqqımda",
    "nav.skills": "Bacarıqlar",
    "nav.experience": "Təcrübə",
    "nav.projects": "Layihələr",
    "nav.contact": "Əlaqə",

    // Hero Section
    "hero.name": "Nurlan İbrahimov",
    "hero.title": "Məhsul Sahibi | Rəqəmsal Məhsullar Yaradıram",
    "hero.description":
      "Strateji məhsul idarəetməsi və çevik metodologiyalar vasitəsilə istifadəçi mərkəzli rəqəmsal təcrübələr yaratmağa həvəsliyəm",
    "hero.downloadCV": "CV Yüklə",
    "hero.letsConnect": "Gəlin Əlaqə Saxlayaq",

    // About Section
    "about.title": "Haqqımda",
    "about.subtitle": "Rəqəmsal məhsul inkişafında 8+ il təcrübəsi olan təcrübəli Məhsul Sahibi",
    "about.heading": "Çevik Liderlik Vasitəsilə Məhsul Mükəmməlliyini İrəli Sürürəm",
    "about.bio1":
      "TechCorp Solutions-da təcrübəli Məhsul Sahibi olaraq, mürəkkəb biznes tələblərini istifadəçi mərkəzli rəqəmsal məhsullara çevirməkdə ixtisaslaşıram. Məhsul idarəetməsindəki səyahətim real dünya problemlərini həll edən mənalı təcrübələr yaratmaq ehtirası ilə idarə olunub.",
    "about.bio2":
      "Çevik metodologiyalarda ekspertliklə, 15+ böyük məhsul buraxılışını təqdim etmək üçün çarpaz funksional komandaları uğurla idarə etmişəm, nəticədə istifadəçi cəlbediciliyində 40% artım və əlavə 2 milyon dollar+ gəlir əldə etmişəm. Yanaşmam strateji düşüncəni praktik icra ilə birləşdirir, məhsulların yalnız bazar tələblərinə cavab verməsini deyil, istifadəçi gözləntilərini aşmasını təmin edir.",
    "about.bio3":
      "Mən məlumat əsaslı qərarların, davamlı öyrənmənin və innovasiyanın çiçəkləndiyi əməkdaşlıq mühitlərinin yaradılmasının gücünə inanıram. Məhsul yol xəritələri hazırlamadığım vaxtlarda, məni gənc PM-ləri mentorluq etməkdə və ya UX dizaynında və yeni texnologiyalarda ən son tendensiyaları araşdırmaqda tapacaqsınız.",
    "about.strategicFocus": "Strateji Fokus",
    "about.strategicFocusDesc": "Məhsul vizyonunu biznes məqsədləri və istifadəçi ehtiyacları ilə uyğunlaşdırmaq",
    "about.collaborativeLeadership": "Əməkdaşlıq Liderliyi",
    "about.collaborativeLeadershipDesc":
      "Effektiv ünsiyyət vasitəsilə yüksək performanslı çarpaz funksional komandalar qurmaq",
    "about.innovationMindset": "İnnovasiya Düşüncəsi",
    "about.innovationMindsetDesc": "Davamlı təkmilləşdirməni həyata keçirmək və yeni texnologiyaları qəbul etmək",

    // Skills Section
    "skills.title": "Bacarıqlar və Ekspertlik",
    "skills.subtitle": "Məhsul idarəetməsində illər boyu praktik təcrübə ilə qurulmuş hərtərəfli bacarıq dəsti",
    "skills.productManagement": "Məhsul İdarəetməsi",
    "skills.technicalUnderstanding": "Texniki Anlayış",
    "skills.softSkills": "Yumşaq Bacarıqlar",

    // Experience Section
    "experience.title": "İş Təcrübəsi",
    "experience.subtitle": "Məhsul idarəetməsi və biznes analizində mütərəqqi karyera səyahəti",
    "experience.keyAchievements": "Əsas Nailiyyətlər",
    "experience.senior.role": "Baş Məhsul Sahibi",
    "experience.senior.company": "TechCorp Solutions",
    "experience.senior.location": "San Francisco, CA",
    "experience.senior.period": "2021 - İndiki vaxt",
    "experience.senior.achievement1":
      "50K+ istifadəçiyə xidmət edən flaqman SaaS platforması üçün məhsul strategiyasına rəhbərlik etdi",
    "experience.senior.achievement2":
      "Məlumat əsaslı xüsusiyyət prioritetləşdirməsi vasitəsilə istifadəçi cəlbediciliyini 40% artırdı",
    "experience.senior.achievement3":
      "2 milyon dollar məhsul büdcəsini idarə etdi və 3 çarpaz funksional komandanı koordinasiya etdi",
    "experience.senior.achievement4": "Bazara çıxma vaxtını 30% azaldan çevik proseslər tətbiq etdi",
    "experience.product.role": "Məhsul Sahibi",
    "experience.product.company": "InnovateLabs",
    "experience.product.location": "Austin, TX",
    "experience.product.period": "2019 - 2021",
    "experience.product.achievement1": "25% gəlir artımı ilə nəticələnən 3 böyük məhsul xüsusiyyətini işə saldı",
    "experience.product.achievement2":
      "İstifadəçi qoşulma axınını yenidən dizayn etmək üçün UX komandası ilə əməkdaşlıq etdi",
    "experience.product.achievement3": "Məhsul metrikalari çərçivəsi və KPI izləmə sistemini qurdu",
    "experience.product.achievement4": "2 gənc məhsul meneceri və 1 biznes analitikə mentorluq etdi",
    "experience.analyst.role": "Biznes Analitik",
    "experience.analyst.company": "DataDriven Inc",
    "experience.analyst.location": "Chicago, IL",
    "experience.analyst.period": "2017 - 2019",
    "experience.analyst.achievement1":
      "Məhsul təkmilləşdirmə imkanlarını müəyyən etmək üçün istifadəçi davranış məlumatlarını təhlil etdi",
    "experience.analyst.achievement2": "15+ xüsusiyyət üçün ətraflı tələblər sənədləşdirməsi yaratdı",
    "experience.analyst.achievement3":
      "Maraqlı tərəflər seminarları və tələblərin toplanması sessiyalarını asanlaşdırdı",
    "experience.analyst.achievement4": "Qəbul hədəflərinin 120%-nə nail olan məhsul buraxılışını dəstəklədi",
    "experience.junior.role": "Gənc Məhsul Analitik",
    "experience.junior.company": "StartupVenture",
    "experience.junior.location": "Uzaqdan",
    "experience.junior.period": "2016 - 2017",
    "experience.junior.achievement1": "Yeni məhsul xətləri üçün bazar araşdırması və rəqabət təhlili apardı",
    "experience.junior.achievement2": "İstifadəçi test sessiyalarında və rəy toplanmasında kömək etdi",
    "experience.junior.achievement3": "Məhsul sənədləşdirməsi və istifadəçi bələdçiləri yaratdı",
    "experience.junior.achievement4": "Komanda üzvü olaraq çevik inkişaf prosesinə dəstək verdi",

    // Projects Section
    "projects.title": "Layihələr və Hal Araşdırmaları",
    "projects.subtitle": "Uğurlu məhsul təşəbbüslərini və onların ölçülə bilən təsirini nümayiş etdirmək",
    "projects.myRole": "Mənim Rolum",
    "projects.toolsTech": "Alətlər və Texnologiyalar",
    "projects.keyOutcome": "Əsas Nəticə",
    "projects.viewProject": "Layihəyə Bax",
    "projects.users": "istifadəçi",
    "projects.revenue": "gəlir",
    "projects.rating": "reytinq",
    "projects.efficiency": "səmərəlilik",
    "projects.satisfaction": "məmnunluq",
    "projects.tickets": "biletlər",

    // Certificates Section
    "certificates.title": "Sertifikatlar və Etimadnamələr",
    "certificates.subtitle": "Məhsul idarəetməsi və əlaqəli sahələrdə davamlı öyrənmə və peşəkar inkişaf",
    "certificates.viewCertificate": "Sertifikata Bax",
    "certificates.credentialId": "Etimadnamə ID",

    // Testimonials Section
    "testimonials.title": "Həmkarların Dedikləri",
    "testimonials.subtitle": "Komanda üzvləri, maraqlı tərəflər və rəhbərlikdən rəylər",

    // Download CV Section
    "downloadCV.title": "CV-mi Yüklə",
    "downloadCV.description":
      "Məhsul idarəetməsində təcrübəm, bacarıqlarım və nailiyyətlərim haqqında hərtərəfli məlumat əldə edin",
    "downloadCV.detailedExperience": "Ətraflı Təcrübə",
    "downloadCV.skillsCertifications": "Bacarıqlar və Sertifikatlar",
    "downloadCV.contactInfo": "Əlaqə Məlumatları",
    "downloadCV.preparingDownload": "Yükləmə Hazırlanır...",
    "downloadCV.downloaded": "Yükləndi!",
    "downloadCV.downloadButton": "CV Yüklə (PDF)",
    "downloadCV.fileInfo": "PDF formatı • Son yenilənmə: Dekabr 2024 • 2 səhifə",

    // Contact Section
    "contact.title": "Gəlin Əlaqə Saxlayaq",
    "contact.subtitle": "Növbəti məhsul imkanınızı müzakirə etməyə hazırsınız? Sizdən eşitməkdən məmnun olaram.",
    "contact.sendMessage": "Mənə mesaj göndər",
    "contact.yourName": "Adınız",
    "contact.yourEmail": "E-poçtunuz",
    "contact.subject": "Mövzu",
    "contact.yourMessage": "Mesajınız",
    "contact.sending": "Göndərilir...",
    "contact.sendMessageBtn": "Mesaj Göndər",
    "contact.messageSent": "Mesaj Göndərildi!",
    "contact.thankYou": "Müraciət etdiyiniz üçün təşəkkür edirik. 24 saat ərzində sizə cavab verəcəyəm.",
    "contact.contactInfo": "Əlaqə Məlumatları",
    "contact.followMe": "Məni İzləyin",
    "contact.connectDescription":
      "Peşəkar şəbəkələrdə mənimlə əlaqə saxlayın və ya imkanları müzakirə etmək üçün zəng planlaşdırın.",
    "contact.email": "E-poçt",
    "contact.phone": "Telefon",
    "contact.location": "Yer",

    // Footer
    "footer.description":
      "Strateji məhsul idarəetməsi vasitəsilə istifadəçi mərkəzli rəqəmsal təcrübələr yaratmağa həvəsli Məhsul Sahibi.",
    "footer.navigation": "Naviqasiya",
    "footer.getInTouch": "Əlaqə Saxlayın",
    "footer.allRightsReserved": "Bütün hüquqlar qorunur.",
    "footer.builtWith": "Next.js və Tailwind CSS ilə qurulub",
  },
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "az")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
