"use client"

import { motion } from "framer-motion"

export function StatCard({
  metric,
  value,
  description,
  delay = 0,
}: {
  metric: string
  value: string
  description: string
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={{ scale: 1.02, y: -2 }}
      className="rounded-2xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-lg transition-all duration-200 p-6 text-center"
    >
      <div className="text-4xl md:text-5xl mb-3">
        {value}
      </div>
      <div className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2">{metric}</div>
      <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{description}</div>
    </motion.div>
  )
}

