import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function EducationSection() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-center mb-8">Education</h2>
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <div className="flex items-center gap-4">
            <img
              src="https://sjc.microlink.io/H4T3Fs9WMnVutQI6aP68k_jehUAhOpZNJ_mefXLgGgOjJ0-1vlkvmTrSpiGXgHHzg-zW4wZhLSnWqABfEb6b4g.jpeg"
              alt="HITSZ Logo"
              width={64}
              height={64}
              className="rounded-lg object-contain"
            />
            <div>
              <CardTitle>
                <a 
                  href="https://www.hitsz.edu.cn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Harbin Institute of Technology, Shenzhen
                </a>
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold">Major</h3>
              <p className="text-gray-500">Computer Science</p>
            </div>
            <div>
              <h3 className="font-semibold">Expected Graduation</h3>
              <p className="text-gray-500">June 2024</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

