import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Header from '@/components/layout/Header'

const projects = [
  { 
    title: "Luxury Real Estate",
    description: "A high-end property listing platform with virtual tours and advanced filtering.",
    image: "/placeholder.svg?height=300&width=400",
    slug: "luxury-real-estate"
  },
  { 
    title: "Gourmet Restaurant",
    description: "An elegant website for a fine dining establishment, featuring online reservations and menu customization.",
    image: "/placeholder.svg?height=300&width=400",
    slug: "gourmet-restaurant"
  },
  { 
    title: "Tech Startup Landing",
    description: "A modern, conversion-optimized landing page for a SaaS product launch.",
    image: "/placeholder.svg?height=300&width=400",
    slug: "tech-startup-landing"
  },
  { 
    title: "E-commerce Fashion",
    description: "A stylish online store for a boutique fashion brand with AR try-on features.",
    image: "/placeholder.svg?height=300&width=400",
    slug: "ecommerce-fashion"
  },
  { 
    title: "Travel Blog",
    description: "A visually stunning travel blog with interactive maps and booking integrations.",
    image: "/placeholder.svg?height=300&width=400",
    slug: "travel-blog"
  },
  { 
    title: "Fitness App",
    description: "A mobile-responsive web app for tracking workouts and nutrition with social features.",
    image: "/placeholder.svg?height=300&width=400",
    slug: "fitness-app"
  },
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-violet-800 to-indigo-900 text-white">
     <Header/>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-8 sm:mb-12 text-center">Our Portfolio</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link href={`/portfolio/${project.slug}`} key={index} className="group">
              <div className="bg-white bg-opacity-10 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="object-cover w-full h-48"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-300">{project.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}

