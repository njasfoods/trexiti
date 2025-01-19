import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle } from 'lucide-react'
import Header from '@/components/layout/Header'

const projects = {
  "luxury-real-estate": {
    title: "Luxury Real Estate",
    description: "A high-end property listing platform showcasing exclusive homes and estates.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Virtual 3D property tours",
      "Advanced search with lifestyle filters",
      "Secure client portals for document sharing",
      "Integration with high-resolution mapping services",
      "Real-time market analytics dashboard"
    ],
    technologies: ["Next.js", "React", "Node.js", "MongoDB", "Three.js"],
    challenge: "Creating an immersive online experience that matches the luxury and exclusivity of high-end real estate.",
    solution: "We developed a visually stunning platform with cutting-edge features like virtual tours and lifestyle-based search, setting a new standard in online property browsing."
  },
  "gourmet-restaurant": {
    title: "Gourmet Restaurant",
    description: "An elegant website for a fine dining establishment, enhancing the culinary experience.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Interactive menu with dietary filtering",
      "Table reservation system with real-time availability",
      "Chef's blog with video content",
      "Virtual kitchen tour",
      "Integration with food delivery platforms"
    ],
    technologies: ["Vue.js", "Nuxt.js", "Express.js", "PostgreSQL", "Stripe"],
    challenge: "Translating the exquisite dining experience into a digital format while streamlining reservations and customer engagement.",
    solution: "We crafted a visually rich website that not only showcases the restaurant's offerings but also provides seamless booking and engagement features, enhancing customer experience both online and offline."
  },
  "tech-startup-landing": {
    title: "Tech Startup Landing",
    description: "A modern, conversion-optimized landing page for a SaaS product launch.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Animated product demonstrations",
      "Interactive pricing calculator",
      "Live chat support integration",
      "A/B testing setup for conversion optimization",
      "Integrated blog and resource center"
    ],
    technologies: ["React", "Gatsby", "GraphQL", "Netlify", "Intercom"],
    challenge: "Creating a high-converting landing page that effectively communicates the value of a complex SaaS product.",
    solution: "We designed an engaging, fast-loading page with clear messaging, interactive elements, and strategic CTAs, resulting in a 40% increase in sign-up conversions."
  }
}

export default function PortfolioDetail({ params }){
  const project = projects[params.slug]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-violet-800 to-indigo-900 text-white">
   <Header/>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">{project.title}</h1>
        <p className="text-xl mb-8">{project.description}</p>

        <div className="mb-12">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={800}
            height={600}
            className="rounded-lg shadow-2xl"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Features</h2>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span key={index} className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
          <p className="text-lg">{project.challenge}</p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Solution</h2>
          <p className="text-lg">{project.solution}</p>
        </div>

        <div className="text-center">
          <Link href="/onboard">
            <Button size="lg" className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white border-0">
              Start Your Project
            </Button>
          </Link>
        </div>
      </main>


    </div>
  )
}

