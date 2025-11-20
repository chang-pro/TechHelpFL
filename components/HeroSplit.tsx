"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ButtonColorful } from "@/components/ui/button-colorful"
import { Typewriter } from "@/components/ui/typewriter-text"
import { content } from "@/content"

export default function HeroSplit() {
  const { hero } = content.home

  return (
    <section className="relative bg-gradient-to-b from-slate-50 dark:from-gray-900 to-white dark:to-gray-900 pt-24 md:pt-28 lg:pt-32">
      <div className="mx-auto max-w-[1200px] px-6 py-12 md:py-20">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 text-sm font-semibold mb-4">
              Serving Central Florida - Daytona Beach, Ormond Beach, Port Orange, and nearby
            </div>
            <div className="inline-block px-4 py-2 rounded-full bg-orange-500 dark:bg-orange-600 text-white text-sm font-bold mb-4 animate-pulse">
              ⚡ Launch partner spots open - free Google ranking audit
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-gray-50 leading-tight">
              <Typewriter
                text={["Rank #1 on Google.", "Automate every lead.", "Grow without heavy ad spend."]}
                speed={100}
                loop={true}
                className="text-4xl md:text-5xl lg:text-6xl font-display font-bold"
              />
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
              {hero.subtitle}
            </p>
            {/* Large Phone Number */}
            <div className="flex items-center justify-center sm:justify-start gap-2 pt-2">
              <a
                href="tel:3863878150"
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-50 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
              >
                📞 Call or Text: (386) 387-8150
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-2 flex-wrap">
              <ButtonColorful href={hero.cta1.href} className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 whitespace-nowrap">
                {hero.cta1.text}
              </ButtonColorful>
              <ButtonColorful href={hero.cta2.href} className="text-base px-6 py-3 sm:py-4 whitespace-nowrap">
                {hero.cta2.text}
              </ButtonColorful>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/hero-combined.png"
              alt="Tech Help Florida boosting local business visibility on Google"
              width={1200}
              height={900}
              className="rounded-2xl w-full h-auto object-cover"
              priority
              quality={95}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
