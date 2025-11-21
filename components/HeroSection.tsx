"use client";

import { motion } from "framer-motion";
import { SplineScene } from "@/components/ui/SplineScene";
import TextCursorProximity from "@/components/ui/TextCursorProximity";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { content } from "@/content";
import { useRef } from "react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="relative w-full overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24 lg:pt-44 lg:pb-32 min-h-[90vh] md:min-h-screen">
      {/* FULL SCREEN SPLINE BACKGROUND - HIDDEN ON MOBILE FOR PERFORMANCE */}
      <div className="hidden md:block absolute inset-0 w-full h-full">
        <SplineScene
          scene="https://prod.spline.design/U6pWwpbh9bFlM0Ch/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* MOBILE GRADIENT BACKGROUND */}
      <div className="md:hidden absolute inset-0 bg-gradient-to-br from-slate-50 via-orange-50/30 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />

      {/* GRADIENT OVERLAY FOR TEXT READABILITY */}
      <div className="hidden md:block absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/30 dark:from-transparent dark:via-slate-950/20 dark:to-slate-950/40 pointer-events-none" />
      <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-transparent dark:from-slate-950/40 dark:via-transparent dark:to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[80vh] md:min-h-[calc(100vh-16rem)] text-center max-w-5xl mx-auto">
          
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/95 dark:bg-slate-900/95 text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] md:tracking-[0.4em] text-slate-500 dark:text-slate-200 mb-4 md:mb-6 border border-white/40 dark:border-white/10">
              <span className="inline-flex h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              AI Receptionist
            </div>
            
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] md:leading-[1.05] mb-4 md:mb-6 tracking-tight">
              <TextCursorProximity
                label="Never Miss Another Customer Call Again."
                containerRef={containerRef}
                radius={120}
                falloff="exponential"
                className="text-white drop-shadow-lg"
                styles={{
                  color: {
                    from: "rgb(255, 255, 255)",
                    to: "rgb(249, 115, 22)",
                  },
                  textShadow: {
                    from: "0 4px 6px rgba(0,0,0,0.1)",
                    to: "0 10px 40px rgba(249, 115, 22, 0.5)",
                  },
                }}
              />
              <br className="hidden sm:block" />
              <TextCursorProximity
                label="AI That Books Appointments 24/7 for Your Business."
                containerRef={containerRef}
                radius={120}
                falloff="exponential"
                className="text-white drop-shadow-lg"
                styles={{
                  color: {
                    from: "rgb(255, 255, 255)",
                    to: "rgb(249, 115, 22)",
                  },
                  textShadow: {
                    from: "0 4px 6px rgba(0,0,0,0.1)",
                    to: "0 10px 40px rgba(249, 115, 22, 0.5)",
                  },
                }}
              />
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-700 dark:text-slate-200 mb-6 md:mb-10 leading-relaxed max-w-3xl mx-auto drop-shadow-sm px-4">
              Your new AI receptionist answers every call instantly, books appointments, sends confirmations, and captures leads - even after hours.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-4 md:mb-6 w-full sm:w-auto px-4">
              <Link
                href="#contact"
                className="w-full sm:w-auto px-6 md:px-10 py-4 md:py-5 bg-orange-500 text-white rounded-xl md:rounded-2xl font-semibold text-base md:text-lg shadow-2xl shadow-orange-500/50 hover:shadow-orange-500/70 hover:bg-orange-600 hover:-translate-y-1 hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                Try Live Demo
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
              <a
                href={content.brand.calendly || "#contact"}
                className="w-full sm:w-auto px-6 md:px-10 py-4 md:py-5 bg-white/90 dark:bg-slate-900/80 border-2 border-slate-300 dark:border-white/20 text-slate-900 dark:text-white rounded-xl md:rounded-2xl font-semibold text-base md:text-lg hover:bg-white dark:hover:bg-slate-900 hover:-translate-y-1 hover:scale-105 transition-all flex items-center justify-center backdrop-blur-xl shadow-xl"
              >
                Book Setup Call
              </a>
            </div>

            <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 mb-6 md:mb-10 px-4">
              Local to Daytona, Ormond, Port Orange and Palm Coast - built for Florida service businesses.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium px-4">
              <span className="flex items-center gap-1.5 md:gap-2 px-3 md:px-5 py-2 md:py-2.5 rounded-full border-2 border-white/60 dark:border-white/20 bg-white/95 dark:bg-slate-900/95 shadow-lg">
                <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-green-500 flex-shrink-0" />
                <span className="whitespace-nowrap">Answers in under 1 second</span>
              </span>
              <span className="flex items-center gap-1.5 md:gap-2 px-3 md:px-5 py-2 md:py-2.5 rounded-full border-2 border-white/60 dark:border-white/20 bg-white/95 dark:bg-slate-900/95 shadow-lg">
                <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-green-500 flex-shrink-0" />
                <span className="whitespace-nowrap">Books appointments</span>
              </span>
              <span className="flex items-center gap-1.5 md:gap-2 px-3 md:px-5 py-2 md:py-2.5 rounded-full border-2 border-white/60 dark:border-white/20 bg-white/95 dark:bg-slate-900/95 shadow-lg">
                <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-green-500 flex-shrink-0" />
                <span className="whitespace-nowrap">24/7 AI receptionist</span>
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
