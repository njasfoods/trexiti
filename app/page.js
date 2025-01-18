"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Code,
  Laptop,
  Megaphone,
  MousePointer,
  Zap,
  Globe,
  Users,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";

export default function Home() {
  const [activeTab, setActiveTab] = useState("web");

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-violet-800 to-indigo-900 text-white">
     <Header/>
      <main className="max-w-6xl mx-auto px-4 py-12">
        <section className="mb-24">
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            Elevate Your Digital Presence from the Heart of Jamaica
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            Trexiti brings Caribbean flair to innovative web development and
            digital marketing solutions. Launch your business into the global
            market with our expertise.
          </p>
          <Link href="/onboard">
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white border-0"
            >
              Start Your Journey
            </Button>
          </Link>
        </section>

        <section id="services" className="mb-24">
          <h2 className="text-4xl font-bold mb-12">Our Launchpad</h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex space-x-4 mb-8">
                <Button
                  variant={activeTab === "web" ? "default" : "outline"}
                  onClick={() => setActiveTab("web")}
                  className={`flex-1 ${
                    activeTab === "web" ? "" : "text-white"
                  }`}
                >
                  <Laptop className="mr-2 h-4 w-4" /> Web Development
                </Button>
                <Button
                  variant={activeTab === "marketing" ? "default" : "outline"}
                  onClick={() => setActiveTab("marketing")}
                  className={`flex-1 ${
                    activeTab === "marketing" ? "" : "text-white"
                  }`}
                >
                  <Megaphone className="mr-2 h-4 w-4" /> Digital Marketing
                </Button>
              </div>
              {activeTab === "web" ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-semibold mb-4">
                    Web Development
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Code className="mr-2 h-5 w-5 text-pink-400" />
                      <span>
                        Custom website design with Caribbean-inspired aesthetics
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Zap className="mr-2 h-5 w-5 text-pink-400" />
                      <span>
                        Responsive and mobile-first approach for global
                        accessibility
                      </span>
                    </li>
                    <li className="flex items-start">
                      <MousePointer className="mr-2 h-5 w-5 text-pink-400" />
                      <span>
                        Interactive UI/UX design optimized for international
                        audiences
                      </span>
                    </li>
                  </ul>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-semibold mb-4">
                    Digital Marketing
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Globe className="mr-2 h-5 w-5 text-orange-400" />
                      <span>
                        Global SEO strategies with local Caribbean focus
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Users className="mr-2 h-5 w-5 text-orange-400" />
                      <span>Culturally-tailored Social Media Marketing</span>
                    </li>
                    <li className="flex items-start">
                      <TrendingUp className="mr-2 h-5 w-5 text-orange-400" />
                      <span>
                        Data-driven PPC campaigns for international markets
                      </span>
                    </li>
                  </ul>
                </motion.div>
              )}
            </div>
            <div className="col-span-2 md:col-span-1 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg transform rotate-3"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-blue-600 rounded-lg transform -rotate-3"></div>
              <div className="relative bg-white p-8 rounded-lg shadow-xl">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Ready to Go Global?
                </h3>
                <p className="text-gray-600 mb-6">
                  Let&apos;s discuss your project and launch your brand onto the
                  world stage.
                </p>
                <form>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name" className="text-gray-700">
                        Name
                      </Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-700">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-gray-700">
                        Message
                      </Label>
                      <textarea
                        id="message"
                        placeholder="Tell us about your global ambitions"
                        className="w-full mt-1 px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        rows={4}
                      ></textarea>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white border-0">
                      Start Your Journey
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mb-24">
          <h2 className="text-4xl font-bold mb-12">About Trexiti</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6">
                Born in the vibrant heart of Jamaica, Trexiti brings a unique
                blend of Caribbean creativity and global tech expertise to your
                digital endeavors. Our mission is to help businesses of all
                sizes harness the power of the digital realm, infusing their
                online presence with the warmth and energy of our island
                heritage.
              </p>
              <p className="text-lg mb-6">
                With a team of passionate developers and marketers, we&apos;re
                committed to delivering cutting-edge solutions that not only
                meet but exceed the expectations of the modern digital
                landscape. Let us be your guide in navigating the exciting
                waters of online success.
              </p>
            </div>
            <div className="relative h-96">
              <Image
                src="/placeholder.svg?height=600&width=400"
                alt="Trexiti team in Jamaica"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900 to-transparent opacity-60 rounded-lg"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Our Jamaican Roots</h3>
                <p>Bringing Caribbean innovation to the global stage</p>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="mb-24">
          <h2 className="text-4xl font-bold mb-12 text-center">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                company: "Global Eats Co.",
                quote:
                  "Trexiti transformed our local restaurant into an international sensation with their innovative web design and global SEO strategies.",
              },
              {
                name: "Michael Chen",
                company: "TechStart Industries",
                quote:
                  "The team at Trexiti brought our tech startup to life online. Their understanding of both local and international markets is unparalleled.",
              },
              {
                name: "Aisha Patel",
                company: "Harmony Wellness",
                quote:
                  "Our wellness brand now reaches clients worldwide, thanks to Trexiti's expert digital marketing and beautiful, functional web design.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm"
              >
                <p className="text-lg mb-4">&quot;{testimonial.quote}&quot;</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full mr-4"></div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-purple-300">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="cta" className="mb-24 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Take Your Business Global?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hands with Trexiti and let&apos;s create digital magic that
            resonates across borders. Your journey to international success
            starts here.
          </p>
          <Link href="/onboard">
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white border-0"
            >
              Begin Your Trexiti Adventure
            </Button>
          </Link>
        </section>
      </main>
    
    </div>
  );
}
