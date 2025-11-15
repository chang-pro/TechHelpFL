"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { content } from "@/content"

export default function ServicesGrid() {
  return (
    <section className="py-12 md:py-16 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-gray-50 mb-4">
            What I Can Help You With
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Whether you need tech help at home or want more customers finding your business
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.home.services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="rounded-3xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg hover:border-orange-300 dark:hover:border-orange-600 transition-all duration-200 p-6"
            >
              <div className="mb-4">
                <div className="w-16 h-16 rounded-2xl bg-orange-100 dark:bg-orange-500/20 flex items-center justify-center">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={64}
                    height={64}
                    className="w-12 h-12 object-contain"
                  />
                </div>
              </div>
              <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-50 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

