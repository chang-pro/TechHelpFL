"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"
import { DarkModeToggle } from "./DarkModeToggle"
import { content } from "@/content"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

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
    { href: "/tech-support", label: "Tech Support" },
    { href: "/business", label: "Business Services" },
    { href: "/about", label: "About" },
    { href: "/legal", label: "Legal" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white dark:bg-slate-900 shadow-lg shadow-black/10 dark:shadow-black/20"
          : "bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24 lg:h-28">
          {/* Logo Section */}
          <Link
            href="/"
            className="flex items-center group"
            aria-label="Tech Help Florida Home"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="relative h-14 md:h-16 lg:h-20 w-auto">
              <Image
                src="/images/logotransparent.png"
                alt="Tech Help Florida Logo"
                width={160}
                height={80}
                className="h-full w-auto object-contain"
                priority
                quality={100}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 xl:px-4 py-2 text-sm xl:text-base text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-white font-medium transition-all duration-200 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Call Now Button - Orange */}
            <a
              href="tel:3863878150"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm rounded-lg transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900 min-h-[44px] whitespace-nowrap"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>Call Now: (386) 387-8150</span>
            </a>

            {/* Get Free Quote Button - Blue */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-lg transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900 min-h-[44px] whitespace-nowrap"
            >
              Get Free Quote
            </Link>

            {/* Dark Mode Toggle */}
            <div className="flex items-center ml-2">
              <DarkModeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            {/* Dark Mode Toggle - Mobile */}
            <div className="flex items-center">
              <DarkModeToggle />
            </div>
            
            {/* Hamburger Menu */}
            <button
              className="p-2 text-gray-700 dark:text-white hover:text-orange-600 dark:hover:text-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-1 border-t border-gray-200 dark:border-slate-700">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-base text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-800 font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Mobile Call Now Button */}
            <a
              href="tel:3863878150"
              className="flex items-center gap-2 mx-4 px-4 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-base rounded-lg transition-all duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900 min-h-[44px]"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              <span>Call Now: (386) 387-8150</span>
            </a>

            {/* Mobile Get Free Quote Button */}
            <Link
              href="/contact"
              className="flex items-center justify-center mx-4 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base rounded-lg transition-all duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900 min-h-[44px]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
