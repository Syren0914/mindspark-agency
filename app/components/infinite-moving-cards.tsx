"use client"

import { InfiniteMovingCards } from "@/components/ui/infinite-moving"
import { Database, Server, Cloud, Cpu, BarChart } from "lucide-react"

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] z-0"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Powering Data-Driven Innovation</h2>
          <p className="text-gray-400 max-w-[700px] mx-auto">
            Our cutting-edge database solutions have revolutionized industries, earning accolades and transforming
            businesses globally.
          </p>
        </div>
        <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
      </div>
    </div>
  )
}

const testimonials = [
  {
    quote: "Their PostgreSQL solution increased our data processing speed by 300%. It's revolutionary.",
    name: "TechCorp Inc.",
    title: "Database Innovation Award Winner",
    icon: Database,
  },
  {
    quote: "Zero downtime in 18 months since migrating our MongoDB cluster to their managed service.",
    name: "DataFlow Systems",
    title: "Forbes Tech Excellence Feature",
    icon: Server,
  },
  {
    quote: "Scaled to 10M daily active users with their Redis implementation. Performance is off the charts.",
    name: "ScaleUp Technologies",
    title: "Cloud Excellence Award Recipient",
    icon: Cloud,
  },
  {
    quote: "Their distributed SQL approach is unmatched. It's like they're operating in the future.",
    name: "Enterprise Solutions Ltd",
    title: "Global Database Summit Keynote",
    icon: Cpu,
  },
  {
    quote: "The real-time analytics of their time-series database transformed our decision-making process.",
    name: "Insight Analytics",
    title: "Data Innovation Award Winner",
    icon: BarChart,
  },
]

