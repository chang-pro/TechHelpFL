"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { content } from "@/content";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";

export default function StickyHeader() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navLinks = [
        { href: "#services", label: "Services" },
        { href: "#process", label: "Process" },
        { href: "#about", label: "About" },
        { href: "#locations", label: "Locations" },
        { href: "#faq", label: "FAQ" },
        { href: "#contact", label: "Contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container mx-auto px-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xl group-hover:scale-105 transition-transform">
                            TH
                        </div>
                        <div>
                            <h1 className="font-heading font-bold text-lg leading-tight text-foreground">
                                {content.brand.name}
                            </h1>
                            <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">
                                {content.brand.tagline}
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}

                        <div className="flex items-center gap-4 pl-4 border-l border-border">
                            <a
                                href={`tel:${content.brand.phone.replace(/\D/g, "")}`}
                                className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
                            >
                                <Phone className="w-4 h-4" />
                                {content.brand.phone}
                            </a>
                            <a
                                href="#contact"
                                className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold hover:bg-primary/90 transition-all hover:shadow-md active:scale-95"
                            >
                                Book Free Audit
                            </a>
                        </div>
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden p-2 text-foreground"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden"
                    >
                        <div className="flex flex-col gap-6 text-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-xl font-medium text-foreground"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <hr className="border-border" />
                            <a
                                href={`tel:${content.brand.phone.replace(/\D/g, "")}`}
                                className="text-xl font-bold text-primary"
                            >
                                {content.brand.phone}
                            </a>
                            <a
                                href="#contact"
                                className="bg-primary text-primary-foreground px-6 py-4 rounded-xl text-lg font-bold shadow-lg"
                            >
                                Book Free Audit
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
