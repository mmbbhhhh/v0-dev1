import { HeroSection } from '@/components/hero-section'
import { EducationSection } from '@/components/education-section'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-8 space-y-16">
        <HeroSection />
        <EducationSection />
      </div>
    </main>
  )
}

