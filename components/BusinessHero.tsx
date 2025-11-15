"use client"

import { motion } from "framer-motion"
import { ButtonColorful } from "@/components/ui/button-colorful"

export function BusinessHero() {
  return (
    <section className="pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-20 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto space-y-6"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 text-sm font-semibold mb-4">
            ⚡ Limited Availability: Only 7 spots left this month
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-gray-50 leading-tight">
            Turn Google Searches Into Paying Customers — Starting This Week
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Daytona businesses get 3–5X more calls, bookings, and walk-ins when tourists and locals search for services on Google Maps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <ButtonColorful href="#rank-check" className="text-lg px-8 py-4">
              See Where You Rank
            </ButtonColorful>
            <ButtonColorful href="/contact" className="text-lg px-8 py-4">
              Free Audit
            </ButtonColorful>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 pt-2">
            ⭐️⭐️⭐️⭐️⭐️ 4.9/5 rating — Trusted by local restaurants, shops, contractors & services
          </p>
          
          {/* Video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="pt-6 md:pt-8 max-w-4xl mx-auto"
          >
            <div className="rounded-xl overflow-hidden shadow-xl">
              <video
                className="w-full h-auto"
                controls
                playsInline
                preload="metadata"
              >
                <source src="/video/Daytona_Beach_Dinner_Search.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

