"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code2, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import { SiteHeader } from "../components/site-header"
import { Footer } from "../components/Footer"

const agencySkills = [
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "Digital Marketing",
  "E-commerce Solutions",
  "Cloud Services",
  "AI Integration",
  "Blockchain Development",
]

const teamMembers = [
  {
    name: "Joe",
    role: "Founder & CEO",
    image: "/joe.jpg",
    bio: "Joe has over 15 years of experience in tech leadership and software development.",
    skills: ["Strategic Planning", "Team Leadership"],
    github: "https://github.com/janedoe",
    linkedin: "https://linkedin.com/in/janedoe",
    email: "jane@youragency.com",
  },
  {
    name: "Eddie",
    role: "Lead Developer",
    image: "/erdene.jpg",
    bio: "Eddie is an expert in React and Node.js with a passion for building scalable applications.",
    skills: ["React", "Node.js", "GraphQL", "AWS"],
    github: "https://github.com/johnsmith",
    linkedin: "https://linkedin.com/in/johnsmith",
    email: "john@youragency.com",
  },
  {
    name: "Emily Brown",
    role: "UX/UI Designer",
    image: "/placeholder.svg",
    bio: "Emily creates intuitive and beautiful user interfaces that drive engagement.",
    skills: ["UI Design", "User Research", "Prototyping", "Figma"],
    github: "https://github.com/emilybrown",
    linkedin: "https://linkedin.com/in/emilybrown",
    email: "emily@youragency.com",
  },
  // Add more team members as needed
]

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader/>

      <main className="flex-grow container mx-auto px-4 py-8">
        <motion.section
          className="py-12 md:py-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">About Our Agency</h1>
            <p className="text-xl text-muted-foreground mb-8">
              We are a dynamic digital agency committed to delivering innovative solutions that drive business growth.
              Our team of experts combines creativity with technical expertise to build cutting-edge web and mobile
              applications, design captivating user experiences, and implement effective digital strategies.
            </p>
            <h2 className="text-2xl font-bold mb-4">Our Expertise</h2>
            <div className="flex flex-wrap gap-4 mb-12">
              {agencySkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Badge variant="secondary" className="text-lg py-2 px-4">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          className="py-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={200}
                      height={200}
                      className="rounded-full mx-auto mb-4"
                    />
                    <CardTitle className="text-xl text-center">{member.name}</CardTitle>
                    <p className="text-center text-muted-foreground">{member.role}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-4">{member.bio}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex justify-center space-x-2">
                      <Button variant="outline" size="icon" asChild>
                        <a href={member.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button variant="outline" size="icon" asChild>
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button variant="outline" size="icon" asChild>
                        <a href={`mailto:${member.email}`}>
                          <Mail className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="py-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Let&apos;s Work Together</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Ready to bring your digital vision to life? Our team is here to help you create innovative solutions
                that drive results.
              </p>
              <Button size="lg" asChild>
                <a href="/#contact">Contact Us</a>
              </Button>
            </CardContent>
          </Card>
        </motion.section>
      </main>

      <Footer></Footer>
    </div>
  )
}

