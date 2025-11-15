"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ButtonColorful } from "@/components/ui/button-colorful"

export function FeatureCard({
  title,
  description,
  image,
  cta,
  delay = 0,
}: {
  title: string
  description: string
  image: string
  cta: { text: string; href: string }
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={{ scale: 1.01, y: -2 }}
      className="rounded-3xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-lg hover:border-orange-300 dark:hover:border-orange-600 border border-gray-200 dark:border-gray-700 transition-all duration-200 overflow-hidden"
    >
      <div className="p-6 md:p-8">
        <div className="mb-6">
          <Image
            src={image}
            alt={title}
            width={200}
            height={200}
            className="w-full h-auto rounded-3xl object-cover"
          />
        </div>
        <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-gray-50 mb-3">{title}</h3>
        <p className="text-base text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{description}</p>
        <ButtonColorful href={cta.href} className="w-full sm:w-auto text-base px-6 py-3">
          {cta.text}
        </ButtonColorful>
      </div>
    </motion.div>
  )
}

