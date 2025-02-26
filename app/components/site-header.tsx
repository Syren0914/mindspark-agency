"use client"

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {  FaBars, FaTimes } from "react-icons/fa";
import { DiAtom } from "react-icons/di";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";


export function SiteHeader() {
  
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      >
        <div className="w-full max-w-7xl mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center space-x-2">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-2xl font-bold flex justify-center items-center gap-2"
            >
              MindSpark
              <DiAtom />
            </motion.span>
          </Link>
          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className="h-10 px-4 py-2">Home</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-10 px-4">About Us</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px] md:w-[500px]">
                    <div className="grid gap-1">
                      <NavigationMenuLink asChild>
                        <Link
                          href="/about"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium">How It All Started</div>
                          <p className="text-sm text-muted-foreground">
                            At MindSpark, we blend creativity with technology to craft stunning digital experiences.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-10 px-4">Projects</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px] md:w-[500px]">
                    <div className="grid gap-1">
                      <NavigationMenuLink asChild>
                        <Link
                          href="/projects"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium">Works</div>
                          <p className="text-sm text-muted-foreground">View Our All Projects</p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#pricing" legacyBehavior passHref>
                  <NavigationMenuLink className="h-10 px-4 py-2">Pricing</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col items-center space-y-4 py-4 bg-background shadow-lg"
          >
            <Link href="/" className="text-lg" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link href="/about" className="text-lg" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
            <Link href="/projects" className="text-lg" onClick={() => setIsMobileMenuOpen(false)}>Projects</Link>
            <Link href="#pricing" className="text-lg" onClick={() => setIsMobileMenuOpen(false)}>Pricing</Link>
          </motion.div>
        )}
      </motion.header>
    </div>
  );
}
