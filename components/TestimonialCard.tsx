"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

export function TestimonialCard({
  name,
  role,
  text,
  rating,
  delay = 0,
}: {
  name: string
  role?: string
  text: string
  rating: number
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={{ scale: 1.01, y: -2 }}
      className="rounded-3xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg hover:border-orange-300 dark:hover:border-orange-600 transition-all duration-200 p-8 md:p-10"
    >
      <div className="flex gap-1 mb-5">
        {Array.from({ length: rating }).map((_, i) => (
          <Star
            key={i}
            className="w-6 h-6 fill-accent dark:fill-orange-500 text-accent dark:text-orange-500"
            aria-label={`${rating} star rating`}
          />
        ))}
      </div>
      <p className="text-lg md:text-base text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">&quot;{text}&quot;</p>
      <div>
        <div className="font-semibold text-lg text-gray-900 dark:text-gray-50">{name}</div>
        {role && <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{role}</div>}
      </div>
    </motion.div>
  )
}

