import { Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Luchen</h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Computer Science student passionate about web development and artificial intelligence
            </p>
          </div>
          <div className="space-x-4">
            <Button asChild variant="outline">
              <a href="mailto:3082466050@qq.com" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Contact Me
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

