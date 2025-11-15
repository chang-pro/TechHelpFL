"use client"

import { motion } from "framer-motion"
import { Section } from "./Section"
import Image from "next/image"

export function BusinessVideo() {
  return (
    <Section className="py-12 md:py-16 bg-slate-50 dark:bg-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-6"
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-gray-50 mb-12 md:mb-16 text-center">
          What Tourists Actually See
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
          <div className="text-center space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-50">
              Before (Low Google Visibility)
            </h3>
            <div className="rounded-xl overflow-hidden shadow-xl mx-auto" style={{ maxWidth: '600px' }}>
              <Image
                src="/images/lowratings.png"
                alt="Before - Low Google Maps rating"
                width={600}
                height={400}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          <div className="text-center space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-50">
              After (Top 3 Result on Google Maps)
            </h3>
            <div className="rounded-xl overflow-hidden shadow-xl mx-auto" style={{ maxWidth: '600px' }}>
              <Image
                src="/images/highrating.png"
                alt="After - High Google Maps rating"
                width={600}
                height={400}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
        
        <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto text-center">
          Your Google Maps listing is the first impression. A weak rating drives customers away. A great rating earns trust instantly.
        </p>
      </motion.div>
    </Section>
  )
}

