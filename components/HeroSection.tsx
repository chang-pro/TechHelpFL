"use client";

import { motion } from "framer-motion";
import { SplineScene } from "@/components/ui/SplineScene";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32 min-h-screen">
      {/* FULL SCREEN SPLINE BACKGROUND */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <SplineScene
          scene="https://prod.spline.design/U6pWwpbh9bFlM0Ch/scene.splinecode"
          className="w-full h-full"
        />
      </motion.div>

      {/* GRADIENT OVERLAY FOR TEXT READABILITY - REDUCED OPACITY */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/30 dark:from-transparent dark:via-slate-950/20 dark:to-slate-950/40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-transparent dark:from-slate-950/40 dark:via-transparent dark:to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-16rem)] text-center max-w-4xl mx-auto">
          
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 dark:bg-slate-900/95 text-xs font-semibold uppercase tracking-[0.4em] text-slate-500 dark:text-slate-200 mb-6 border border-white/40 dark:border-white/10">
              <span className="inline-flex h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              Available Now
            </div>
            
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-[1.05] mb-6 tracking-tight drop-shadow-lg">
              Dominate Google. <br />
              Get More Calls.
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-slate-700 dark:text-slate-200 mb-10 leading-relaxed max-w-3xl mx-auto drop-shadow-sm">
              Local SEO, website fixes, and automation that keeps your phone ringing without burning cash on ads.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Link
                href="#contact"
                className="w-full sm:w-auto px-10 py-5 bg-orange-500 text-white rounded-2xl font-semibold text-lg shadow-2xl shadow-orange-500/50 hover:shadow-orange-500/70 hover:bg-orange-600 hover:-translate-y-1 hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                Book Free Audit
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:3863878150"
                className="w-full sm:w-auto px-10 py-5 bg-white/90 dark:bg-slate-900/80 border-2 border-slate-300 dark:border-white/20 text-slate-900 dark:text-white rounded-2xl font-semibold text-lg hover:bg-white dark:hover:bg-slate-900 hover:-translate-y-1 hover:scale-105 transition-all flex items-center justify-center backdrop-blur-xl shadow-xl"
              >
                Call (386) 387-8150
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-700 dark:text-slate-200 font-medium">
              <span className="flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-white/60 dark:border-white/20 bg-white/95 dark:bg-slate-900/95 shadow-lg">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                No contracts
              </span>
              <span className="flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-white/60 dark:border-white/20 bg-white/95 dark:bg-slate-900/95 shadow-lg">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                Local expert
              </span>
              <span className="flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-white/60 dark:border-white/20 bg-white/95 dark:bg-slate-900/95 shadow-lg">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                Fast results
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
