"use client"

import { motion } from "framer-motion"
import { Section } from "./Section"
import { Check } from "lucide-react"

export function ProofText() {
  return (
    <Section className="py-16 md:py-20 bg-white dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-6"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-gray-50 mb-8">
            Why This Works
          </h2>
          <ul className="space-y-6">
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6 text-orange-500 dark:text-orange-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <span className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                Tourists rely on Google Maps for food, hotels, and services.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6 text-orange-500 dark:text-orange-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <span className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                Google Maps ranks businesses based on relevance, reviews, and trust.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6 text-orange-500 dark:text-orange-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <span className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                Most businesses never optimize their profile — so ranking is easy to win.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6 text-orange-500 dark:text-orange-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <span className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                A strong listing can bring in extra customers within weeks.
              </span>
            </li>
          </ul>
        </div>
      </motion.div>
    </Section>
  )
}

