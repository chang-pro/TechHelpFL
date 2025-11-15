"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Section } from "./Section"

export function RoiCalculator() {
  const [monthlyRevenue, setMonthlyRevenue] = useState("")
  const potentialROI = monthlyRevenue ? Math.round(parseFloat(monthlyRevenue) * 3) : 0

  return (
    <Section className="py-12 md:py-16 bg-slate-50 dark:bg-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-md mx-auto rounded-2xl bg-white dark:bg-gray-900 p-8 shadow-lg border border-gray-200 dark:border-gray-700"
      >
        <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-gray-50 mb-4 text-center">
          See Your Potential ROI
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Enter monthly revenue
            </label>
            <input
              type="number"
              value={monthlyRevenue}
              onChange={(e) => setMonthlyRevenue(e.target.value)}
              placeholder="$10,000"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-50 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          {monthlyRevenue && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-orange-50 dark:bg-orange-500/10 rounded-lg border border-orange-200 dark:border-orange-500/20"
            >
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Potential monthly revenue:</p>
              <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                ${potentialROI.toLocaleString()}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                Based on 3X average ROI from Google Maps optimization
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </Section>
  )
}






