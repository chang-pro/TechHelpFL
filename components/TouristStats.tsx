"use client"

import { motion } from "framer-motion"
import { Section } from "./Section"
import { ButtonColorful } from "@/components/ui/button-colorful"

export function TouristStats() {
  return (
    <Section className="py-16 md:py-20 bg-white dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-6"
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-gray-50 mb-8 md:mb-12 text-center">
          The Tourist Angle
        </h2>
        
        <div className="max-w-3xl mx-auto mb-10 space-y-6">
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-center">
            28+ million visitors come to Central Florida every year. Every single one of them uses their phone to find where to eat, shop, and spend money.
          </p>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-center">
            When tourists search 'restaurants near me,' 'bars open now,' or 'things to do,' Google Maps decides who gets their business.
          </p>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-center">
            If your business isn't in the top 3 results, you're invisible — even if you're the best in town.
          </p>
        </div>
        
        <div className="text-center">
          <ButtonColorful href="#rank-check" className="text-lg px-8 py-4">
            Show Me How It Works (Free Demo)
          </ButtonColorful>
        </div>
      </motion.div>
    </Section>
  )
}

