"use client";

import { SiteHeader } from "./components/site-header";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";


import {
  Zap,
  Command,
  Scale,
  Bot,
  Shield,
  Sparkles,
  Check,
} from "lucide-react";
import { Footer } from "./components/Footer";

import { Spotlight } from "@/components/ui/spotlight-new";
import Link from "next/link";
import HeroScrollDemo from "./HeroScrollDemo/page";
import InfiniteMovingCardsDemo from "./components/infinite-moving-cards";



export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col justify-center">
      <SiteHeader />
      <main className="flex-1">
        
        <section className="flex min-h-screen flex-col items-center justify-center space-y-10 py-24 relative">
          {/* Spotlight wrapped to prevent unintended movement */}
          
          <div className="absolute inset-0 overflow-hidden">
            <Spotlight />
          </div>
          
          <HeroScrollDemo></HeroScrollDemo>

          
        </section>
        <InfiniteMovingCardsDemo></InfiniteMovingCardsDemo>

        <Separator className="my-12" />

        <section className="container mx-auto space-y-12 py-12 md:py-24 lg:py-32 ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
          >
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
              Features built for scale
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Empower your brand with cutting-edge automation, AI-driven
              solutions, and seamless integrations. At MindSpark, we craft
              digital experiences that drive growth and innovation.
            </p>
          </motion.div>
          <div className="mx-auto grid gap-6 px-4 w-full sm:max-w-3xl sm:grid-cols-2 lg:max-w-5xl lg:grid-cols-3 justify-center items-center">
  {features.map((feature, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        rotateX: index % 2 === 0 ? 5 : -5,
        rotateY: index % 3 === 0 ? 5 : -5,
        transition: { duration: 0.3 },
      }}
      className="relative overflow-hidden rounded-lg border bg-background p-4 flex justify-center items-center w-full"
    >
      <div className="flex min-h-[200px] flex-col justify-between rounded-md p-6 text-center w-full">
        <feature.icon className="h-12 w-12 text-primary mx-auto" />
        <div className="space-y-2">
          <h3 className="font-bold">{feature.name}</h3>
          <p className="text-sm text-muted-foreground">
            {feature.description}
          </p>
        </div>
      </div>
    </motion.div>
  ))}
</div>

        </section>

        <Separator className="my-12" />

        <section
  id="pricing"
  className="w-full mx-auto container py-12 md:py-24 lg:py-32 px-4"
>
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
  >
    <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
      Simple, transparent pricing
    </h2>
    <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
      Choose the plan that&apos;s right for you we build
      from startups to enterprises, we design scalable solutions that automate, engage, and elevate your brand. Let’s turn your vision into reality.
    </p>
  </motion.div>

  <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
    {pricingPlans.map((plan, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="flex flex-col overflow-hidden rounded-lg border bg-background w-full min-h-[250px]"
      >
        <div className="p-6">
          <h3 className="text-2xl font-bold">{plan.name}</h3>
          <div className="mt-4 flex items-baseline text-3xl font-bold">
            {plan.price}
            <span className="ml-1 text-xl font-normal text-muted-foreground">
              /month
            </span>
          </div>
          <p className="mt-4 text-muted-foreground">{plan.description}</p>
        </div>
        <div className="flex flex-1 flex-col justify-between p-6">
          <ul className="space-y-4">
            {plan.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-primary" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <Link target="_blank" href={"mailto:Mindsparkamplify@gmail.com"}>
          <Button className="mt-8 w-full">{plan.buttonText}</Button>
          </Link>
        </div>
      </motion.div>
    ))}
  </div>
</section>


        <Separator className="my-12" />

        <section className="container w-full mx-auto py-12 md:py-24 lg:py-32 px-4">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="mx-auto flex max-w-xl flex-col items-center justify-center gap-4 text-center"
  >
    <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
      Ready to get started?
    </h2>
    <p className="max-w-xl text-muted-foreground sm:text-lg sm:leading-7">
      Find a simple solution for your business in minutes.
    </p>
    <Button size="lg" className="mt-4 w-full sm:w-auto">
      <Link target="_blank" href={"mailto:Mindsparkamplify@gmail.com"}>Start Connecting Now</Link>
      
    </Button>
  </motion.div>
</section>

      </main>

      <Footer />
    </div>
  );
}

const features = [
  {
    name: "Easy Setup",
    description:
      "Get your business running in minutes with our quick support.",
    icon: Zap,
  },
  {
    name: "Powerful Commands",
    description: "Create complex commands with our visual command builder.",
    icon: Command,
  },
  {
    name: "Scale Infinitely",
    description: "Built to handle millions of users and messages.",
    icon: Scale,
  },
  {
    name: "AI-Powered",
    description:
      "Leverage artificial intelligence to create smarter solutions.",
    icon: Bot,
  },
  {
    name: "Enterprise Security",
    description: "Bank-grade security to protect your server and users.",
    icon: Shield,
  },
  {
    name: "Custom Features",
    description: "Build custom features without touching any code.",
    icon: Sparkles,
  },
] as const;

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for individuals exploring our services.",
    features: [
      " Access to essential resources",
      "Monthly newsletter",
      "Community forums",
      "Standard support",
    ],
    buttonText: "Contact Us For More Information",
  },
  {
    name: "Elite Membership",
    price: "Custom Pricing",
    description: "Best for professionals & businesses seeking full access.",
    features: [
      "All Premium perks",
      "Personalized consultations",
      "Custom solutions & integrations",
      "VIP networking opportunities",
      "Dedicated account manager",
    ],
    buttonText: "Contact Us For Information",
  },
  {
    name: "Premium Membership",
    price: "$35",
    description: "Great for dedicated members who want more benefits.",
    features: [
      "All Basic Membership perks",
      "Exclusive content & resources",
      "Priority support",
      "Early access to new features",
      "Member-only events",

    ],
    buttonText: "Contact Us For Information",
  },
] as const;
