"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink} from "lucide-react"
import Image from "next/image"

import { motion } from "framer-motion"
import { SiteHeader } from "../components/site-header"
import { Footer } from "../components/Footer"




// Sample project data - replace with your actual projects
const projects = [
  // {
  //   title: "E-commerce Platform",
  //   description: "A full-stack e-commerce solution with real-time inventory management.",
  //   image: "/placeholder.svg",
  //   technologies: ["React", "Node.js", "MongoDB"],
  //   githubUrl: "https://github.com/yourusername/ecommerce-platform",
  //   liveUrl: "https://ecommerce-platform-demo.vercel.app",
  // },
  {
    title: "Thai Papaya",
    description: "A full-stack e-commerce solution with real-time inventory management.",
    image: "/thaipapaya.webp",
    technologies: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    liveUrl: "https://ecommerce-platform-demo.vercel.app",
  },
  {
    title: "Lumthai",
    description: "A full-stack e-commerce solution with real-time inventory management.",
    image: "/lumthai.png",
    technologies: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    liveUrl: "https://ecommerce-platform-demo.vercel.app",
  },
  {
    title: "Three.js Apple Webpage",
    description: "A sleek weather application with location-based forecasts.",
    image: "/threejs.png",
    technologies: ["Vue.js", "OpenWeatherMap API"],
    githubUrl: "https://github.com/yourusername/weather-app",
    liveUrl: "https://weather-app-demo.vercel.app",
  },
  {
    title: "Glow Organic Skincare",
    description: "A full-stack e-commerce solution with real-time inventory management.",
    image: "/glowOrganic.png",
    technologies: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    liveUrl: "https://ecommerce-platform-demo.vercel.app",
  },
  {
    title: "Thai Love ",
    description: "A full-stack e-commerce solution with real-time inventory management.",
    image: "/thailove.webp",
    technologies: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    liveUrl: "https://ecommerce-platform-demo.vercel.app",
  },
  {
    title: "Coffee Holic",
    description: "",
    image: "/logo1.png",
    technologies: ["Logo"],
    githubUrl: "",
    liveUrl: ""
  },
  {
    title: "Asian Noodle House",
    description: "",
    image: "/logo2.jpg",
    technologies: ["Logo"],
    githubUrl: "",
    liveUrl: ""
  },
  {
    title: "In House",
    description: "",
    image: "/logo3.png",
    technologies: ["Logo"],
    githubUrl: "",
    liveUrl: ""
  },
  {
    title: "JTM Gems",
    description: "",
    image: "/logo4.png",
    technologies: ["Logo"],
    githubUrl: "",
    liveUrl: ""
  },
  {
    title: "Pannee Ice Cream",
    description: "",
    image: "/logo5.png",
    technologies: ["Logo"],
    githubUrl: "",
    liveUrl: ""
  },
  {
    title: "Logo",
    description: "",
    image: "/logo6.jpg",
    technologies: ["Logo"],
    githubUrl: "",
    liveUrl: ""
  },
  {
    title: "Logo",
    description: "",
    image: "/logo7.png",
    technologies: ["Logo"],
    githubUrl: "",
    liveUrl: ""
  },
  {
    title: "Mum Aroi",
    description: "",
    image: "/marketing1.jpg",
    technologies: ["Marketing"],
    githubUrl: "",
    liveUrl: ""
  },
  {
    title: "Mum Aroi",
    description: "",
    image: "/marketing2.jpg",
    technologies: ["Marketing"],
    githubUrl: "",
    liveUrl: ""
  },
  {
    title: "Sawatdee",
    description: "",
    image: "/marketing3.jpg",
    technologies: ["Marketing"],
    githubUrl: "",
    liveUrl: ""
  },
  {
    title: "Marketing Post 4",
    description: "",
    image: "/marketing4.jpg",
    technologies: ["Marketing"],
    githubUrl: "",
    liveUrl: ""
  },
  {
    title: "Marketing Post 5",
    description: "",
    image: "/marketing5.jpg",
    technologies: ["Marketing"],
    githubUrl: "",
    liveUrl: ""
  },
  {
    title: "Menu 1",
    description: "",
    image: "/menu1.jpg",
    technologies: ["Menu"],
    githubUrl: "",
    liveUrl: ""
  },
  {
    title: "Menu 2",
    description: "",
    image: "/menu2.jpg",
    technologies: ["Menu"],
    githubUrl: "",
    liveUrl: ""
  },
 
  {
    title: "Menu 4",
    description: "",
    image: "/menu4.jpg",
    technologies: ["Menu"],
    githubUrl: "",
    liveUrl: ""
  },
  {
    title: "Menu 5",
    description: "",
    image: "/menu5.jpg",
    technologies: ["Menu"],
    githubUrl: "",
    liveUrl: ""
  },
  {
    title: "Menu 6",
    description: "",
    image: "/menu6.jpg",
    technologies: ["Menu"],
    githubUrl: "",
    liveUrl: ""
  },
  {
    title: "Crafted Poster",
    description: "",
    image: "/crafted.jpg",
    technologies: ["Poster"],
    githubUrl: "",
    liveUrl: ""
  },
  {
    title: "Poster",
    description: "",
    image: "/poster.jpg",
    technologies: ["Poster"],
    githubUrl: "",
    liveUrl: ""
  }
  
  
  
  // Add more projects as needed
]

const allTechnologies = Array.from(new Set(projects.flatMap((project) => project.technologies)))

export default function Projects() {
  const [filter, setFilter] = useState<string | null>(null)

  const filteredProjects = filter ? projects.filter((project) => project.technologies.includes(filter)) : projects

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <SiteHeader/>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter mt-5 mb-5 sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to our Project Showcase
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Explore our portfolio of web development projects. From responsive designs to full-stack applications,
                  discover my passion for creating innovative digital solutions.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <a href="#projects">View Projects</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="mailto:erdenebatbayar3@gmail.com">Contact Us</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Projects</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button variant={filter === null ? "default" : "outline"} onClick={() => setFilter(null)}>
              All
            </Button>
            {allTechnologies.map((tech) => (
              <Button key={tech} variant={filter === tech ? "default" : "outline"} onClick={() => setFilter(tech)}>
                {tech}
              </Button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <CardHeader className="p-0">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={200}
                      className="object-cover w-full h-48 transition-transform duration-300 hover:scale-105"
                    />
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between p-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                    <Button variant="default" size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Project
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      
      <Footer/>
    </div>
  )
}

