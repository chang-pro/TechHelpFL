"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Section } from "@/components/Section"
import { Button } from "@/components/Button"
import { Heart, Users, MapPin, DollarSign, CheckCircle, Shield, Star } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      <section className="pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-20 bg-gradient-to-b from-slate-50 dark:from-gray-900 to-white dark:to-gray-900">
        <Section>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/professional.jpeg"
                    alt="Tech Help Florida - Professional headshot"
                    width={800}
                    height={800}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-3xl bg-white dark:bg-gray-900 shadow-lg p-8 md:p-10"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-gray-50 leading-tight mb-6">
                  About Me
                </h1>
                <div className="space-y-6">
                  <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                    I'm a Computer Science student who's always been the "tech helper" in my family — fixing phones, computers, tablets, printers, Wi-Fi, and smart devices. I grew up helping my grandparents and family members with their tech, and over the years I realized I genuinely enjoy making technology easier for people.
                  </p>
                  <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                    A lot of my family works in healthcare helping seniors, so I learned patience, communication, and how to explain things clearly. That inspired me to start offering tech help to older adults and local residents who need someone dependable and friendly.
                  </p>
                  <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                    I also help local businesses get more customers through Google.
                  </p>
                  <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                    While studying computer science, I learned how Google Business Profiles work and how visibility affects real customers. I realized I could help local businesses show up higher on Google Maps so they get more calls, more customers, and more local traffic — without confusing technical jargon.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </Section>
      </section>

      <Section className="py-16 md:py-20 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-gray-50 mb-8">
              My Story
            </h2>
            <div className="space-y-8 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                My goal is simple:
              </p>
              <div className="grid sm:grid-cols-3 gap-4 my-6">
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all duration-200">
                  <CheckCircle className="w-6 h-6 text-accent dark:text-orange-500 flex-shrink-0" />
                  <span className="font-semibold">Make technology easier.</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all duration-200">
                  <CheckCircle className="w-6 h-6 text-accent dark:text-orange-500 flex-shrink-0" />
                  <span className="font-semibold">Make businesses more visible.</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all duration-200">
                  <CheckCircle className="w-6 h-6 text-accent dark:text-orange-500 flex-shrink-0" />
                  <span className="font-semibold">Make people feel confident using tech.</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section className="py-16 md:py-20 bg-slate-50 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-gray-50 mb-4 text-center">
              What Makes Me Different
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-8 shadow-lg hover:shadow-xl hover:border-orange-300 dark:hover:border-orange-600 transition-all duration-200"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="rounded-full bg-orange-100 dark:bg-orange-500/20 p-3">
                  <Heart className="w-6 h-6 text-accent dark:text-orange-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-gray-50 mb-3">
                    Patient & Understanding
                  </h3>
                  <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    I'm patient, calm, and I take the time to explain everything
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-8 shadow-lg hover:shadow-xl hover:border-orange-300 dark:hover:border-orange-600 transition-all duration-200"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="rounded-full bg-orange-100 dark:bg-orange-500/20 p-3">
                  <Users className="w-6 h-6 text-accent dark:text-orange-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-gray-50 mb-3">
                    1-on-1 Service
                  </h3>
                  <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    I work 1-on-1 with seniors, parents, and beginners
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-8 shadow-lg hover:shadow-xl hover:border-orange-300 dark:hover:border-orange-600 transition-all duration-200"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="rounded-full bg-orange-100 dark:bg-orange-500/20 p-3">
                  <MapPin className="w-6 h-6 text-accent dark:text-orange-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-gray-50 mb-3">
                    Local & Trusted
                  </h3>
                  <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    I'm local, not a big corporation or call center
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-8 shadow-lg hover:shadow-xl hover:border-orange-300 dark:hover:border-orange-600 transition-all duration-200"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="rounded-full bg-orange-100 dark:bg-orange-500/20 p-3">
                  <DollarSign className="w-6 h-6 text-accent dark:text-orange-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-gray-50 mb-3">
                    Honest Pricing
                  </h3>
                  <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    I provide honest, upfront pricing with no pressure
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap justify-center items-center gap-6 md:gap-8"
          >
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white dark:bg-gray-900 shadow-md">
              <MapPin className="w-5 h-5 text-accent dark:text-orange-500" />
              <span className="text-sm md:text-base font-semibold text-gray-900 dark:text-gray-50">Local Business</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white dark:bg-gray-900 shadow-md">
              <Shield className="w-5 h-5 text-accent dark:text-orange-500" />
              <span className="text-sm md:text-base font-semibold text-gray-900 dark:text-gray-50">Insured</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white dark:bg-gray-900 shadow-md">
              <Star className="w-5 h-5 text-accent dark:text-orange-500 fill-current" />
              <span className="text-sm md:text-base font-semibold text-gray-900 dark:text-gray-50">5-Star Reputation</span>
            </div>
          </motion.div>

          {/* Service Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <h3 className="text-xl md:text-2xl font-display font-bold text-gray-900 dark:text-gray-50 mb-4">
              Service Area
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Serving Central Florida — Daytona Beach, Ormond Beach, Port Orange, Holly Hill & surrounding areas.
            </p>
          </motion.div>
        </div>
      </Section>

      <Section className="py-16 md:py-20 bg-white dark:bg-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-gray-50 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8 max-w-2xl mx-auto">
            Need Tech Help or Want to Grow Your Business Online?
          </p>
          <Button href="/contact" variant="primary" className="text-xl px-10 py-5">
            Contact Me
          </Button>
        </motion.div>
      </Section>
    </>
  )
}
