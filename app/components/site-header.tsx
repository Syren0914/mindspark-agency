"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { DiAtom } from "react-icons/di";
export function SiteHeader() {
  const pathname = usePathname()
  const isAuthPage = pathname === "/signin" || pathname === "/register"

  return (
    <div className="flex flex-col ">
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 "
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
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">How It All Started</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        At MindSpark, we blend creativity with technology to craft stunning digital experiences that elevate brands and drive success. 🚀
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
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Works</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          View Our All Projects
                        </p>
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
        {!isAuthPage && (
          <div className="flex items-center space-x-1 lg:space-x-5 ">
            <Button variant="ghost" size="sm" asChild>
              <Link href="https://www.facebook.com/MindSparkdmv/"><FaFacebook /></Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="https://github.com/Syren0914"><FaGithub /></Link>
            </Button>

            <Button size="sm" asChild>
              <Link target="_blank" href="mailto:erdenebatbayar3@gmail.com">Contact Us</Link>
            </Button>
          </div>
        )}
      </div>
    </motion.header>
    </div>
  )
}

