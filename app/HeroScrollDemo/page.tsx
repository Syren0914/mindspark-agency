"use client";

import React from "react";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { motion } from "framer-motion";
import { Separator } from "@radix-ui/react-separator";
import { DiAtom } from "react-icons/di";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BackgroundLines } from "@/components/ui/background-lines";

const HeroScrollDemo = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <ContainerScroll
          titleComponent={
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="container flex flex-col items-center justify-center gap-6 text-center"
              >
                <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  href="#"
                  className="inline-flex items-center rounded-full bg-muted px-4 py-1.5 text-sm font-medium"
                >
                  🎉 <Separator className="mx-2 h-4" orientation="vertical" /> Introducing MindSpark
                </motion.a>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:text-7xl lg:leading-[1.1]"
                >
                  Welcome to
                  <br />
                  <span className="flex gap-2">MindSpark <DiAtom /></span>
                </motion.h1>

                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl"
                >
                  Revolutionize the way you do business with AI-powered automation and intelligent workflows.
                </motion.span>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex gap-4 flex-col lg:flex-row mb-20"
                >
                  <Link href="/projects" className="z-30">
                    <Button size="lg" className="h-12 px-8">
                      Our Projects
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline" className="h-12 px-8 z-20">
                    <Link href="/about">Learn More</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </>
          }
        >
          <Image
            src="/example.webp"
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </BackgroundLines>
    </div>
  );
};

// ✅ Ensure `page.tsx` has a **default export**
export default HeroScrollDemo;
