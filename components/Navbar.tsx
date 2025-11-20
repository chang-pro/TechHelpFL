"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"
import { DarkModeToggle } from "./DarkModeToggle"
import { motion } from "framer-motion"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [activeLink, setActiveLink] = useState<string>("#services")
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Check dark mode state
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains("dark"))
    }
    
    checkDarkMode()
    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })
    
    return () => observer.disconnect()
  }, [])

  // Close mobile menu when clicking outside or on a link
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [mobileMenuOpen])

  const navLinks = [
    { id: 1, href: "#services", label: "Services" },
    { id: 2, href: "#pricing", label: "Pricing" },
    { id: 3, href: "#process", label: "Process" },
    { id: 4, href: "#about", label: "About" },
    { id: 5, href: "#locations", label: "Industries" },
    { id: 6, href: "#faq", label: "FAQ" },
    { id: 7, href: "#contact", label: "Contact" },
  ]

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.filter(link => link.href.startsWith('#')).map(link => link.href.substring(1))
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveLink(`#${section}`)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const shellStyles = scrolled
    ? "bg-white/95 dark:bg-slate-950/95 shadow-2xl shadow-slate-900/10 dark:shadow-black/30 border border-white/40 dark:border-white/10"
    : "bg-white/80 dark:bg-slate-950/80 border border-white/30 dark:border-white/5"

  return (
    <nav className="fixed top-6 left-0 right-0 z-50" role="navigation" aria-label="Main navigation">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className={`flex items-center justify-between gap-4 rounded-full px-4 sm:px-6 py-3 transition-all duration-500 ${shellStyles}`}
        >
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label="Tech Help Florida Home"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="relative h-10 w-auto">
              <Image
                src="/images/logo.png"
                alt="Tech Help Florida Logo"
                width={120}
                height={60}
                className="h-full w-auto object-contain drop-shadow-md"
                priority
                quality={100}
              />
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-0">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="relative px-4 py-2 text-sm xl:text-base font-medium transition-colors duration-300"
                style={{
                  color: activeLink === link.href 
                    ? 'var(--color-orange-500)' 
                    : isDark 
                      ? 'rgb(226, 232, 240)' 
                      : 'rgb(71, 85, 105)'
                }}
                onClick={() => setActiveLink(link.href)}
                onMouseEnter={() => setHoveredLink(link.href)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <span className="relative z-10">{link.label}</span>
                
                {/* Hover Background */}
                {hoveredLink === link.href && (
                  <motion.div
                    layoutId="navbar-hover-bg"
                    className="absolute inset-0 bg-orange-500/10 dark:bg-orange-500/10 rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
                
                {/* Active Underline */}
                {activeLink === link.href && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                
                {/* Hover Underline */}
                {hoveredLink === link.href && activeLink !== link.href && (
                  <motion.div
                    layoutId="navbar-hover"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500/50"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:3863878150"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-white/10 bg-white dark:bg-slate-800 px-4 py-2 text-sm font-semibold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>(386) 387-8150</span>
            </a>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/40 transition-all hover:bg-orange-600 hover:translate-y-[-1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-500"
            >
              Book Setup Call
            </Link>
            <div className="flex items-center pl-2">
              <DarkModeToggle />
            </div>
          </div>

          <div className="flex lg:hidden items-center gap-3">
            <DarkModeToggle />
            <button
              className="p-2 text-slate-700 dark:text-white hover:text-slate-900 dark:hover:text-orange-400 focus:outline-none focus:ring-2 focus:ring-white/60 dark:focus:ring-orange-500 rounded-full transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
            </button>
          </div>
        </div>

        <div
          className={`lg:hidden fixed inset-x-4 top-24 z-40 rounded-3xl bg-white/95 dark:bg-slate-950/90 backdrop-blur-2xl border border-white/60 dark:border-white/10 transition-all duration-300 origin-top ${
            mobileMenuOpen ? "scale-100 opacity-100 pointer-events-auto" : "scale-95 opacity-0 pointer-events-none"
          }`}
        >
          <div className="py-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-6 py-3 text-lg text-slate-700 dark:text-slate-100 hover:bg-slate-100/70 dark:hover:bg-white/10 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-6 pt-4 space-y-3">
              <a
                href="tel:3863878150"
                className="flex items-center gap-3 rounded-2xl border border-slate-200 dark:border-white/15 px-4 py-3 text-slate-900 dark:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                <span>Call Now: (386) 387-8150</span>
              </a>
              <Link
                href="#contact"
                className="block rounded-2xl bg-orange-500 text-center text-white font-semibold py-3 hover:bg-orange-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Setup Call
              </Link>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div
            className="fixed inset-0 z-30 bg-slate-900/40 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </div>
    </nav>
  )
}
