"use client"

import Image from "next/image"
import HeroSplit from "@/components/HeroSplit"
import { FeatureCard } from "@/components/FeatureCard"
import ServicesGrid from "@/components/ServicesGrid"
import { TestimonialCard } from "@/components/TestimonialCard"
import { ButtonColorful } from "@/components/ui/button-colorful"
import { Section } from "@/components/Section"
import { motion } from "framer-motion"
import { content } from "@/content"

export default function HomePage() {
  const { features, testimonials, cta } = content.home

  return (
    <>
      <HeroSplit />

      {/* How It Works - 3 Steps */}
      <Section className="py-16 md:py-20 bg-white dark:bg-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-gray-50 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Three simple steps to get the help you need
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-full bg-accent dark:bg-orange-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-2">Call or Text Us</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Call or text (386) 387-8150. We&apos;ll get back to you within 24 hours to discuss what you need.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-full bg-accent dark:bg-orange-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-2">We Fix It</h3>
            <p className="text-gray-600 dark:text-gray-400">
              For tech support: We come to your home. For your business: We get you set up on Google Maps so customers can find you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-full bg-accent dark:bg-orange-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-2">You Get Results</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Your tech works perfectly, or your business starts getting more calls and walk-ins from Google Maps.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Two Feature Cards */}
      <Section className="py-12 md:py-16 bg-slate-50 dark:bg-gray-800">
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              image={feature.image}
              cta={feature.cta}
              delay={index * 0.1}
            />
          ))}
        </div>
      </Section>

      {/* Services Grid */}
      <ServicesGrid />

      {/* Why People Trust Tech Help Florida */}
      <Section className="py-16 md:py-20 bg-slate-50 dark:bg-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-gray-50 mb-8 text-center">
            Why People Trust Tech Help Florida
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-6 md:p-8 shadow-lg hover:shadow-xl hover:border-orange-300 dark:hover:border-orange-600 transition-all duration-200 text-center"
            >
              <div className="text-3xl mb-3">🏠</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-2">
                Local & Trusted
              </h3>
              <p className="text-base text-gray-700 dark:text-gray-300">
                Local & trusted in Daytona Beach, Ormond Beach, and Port Orange
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-6 md:p-8 shadow-lg hover:shadow-xl hover:border-orange-300 dark:hover:border-orange-600 transition-all duration-200 text-center"
            >
              <div className="text-3xl mb-3">⭐</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-2">
                5.0 ★★★★★ Rating
              </h3>
              <p className="text-base text-gray-700 dark:text-gray-300">
                5.0 ★★★★★ rating from local families and business owners
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-6 md:p-8 shadow-lg hover:shadow-xl hover:border-orange-300 dark:hover:border-orange-600 transition-all duration-200 text-center"
            >
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-2">
                Fast Response Times
              </h3>
              <p className="text-base text-gray-700 dark:text-gray-300">
                Fast response times — same-day appointments available
              </p>
            </motion.div>
          </div>
        </motion.div>
      </Section>

      {/* Trust Builders - Why Choose Us */}
      <Section className="py-12 md:py-16 bg-white dark:bg-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-gray-50 mb-4">
            Why Choose Tech Help Florida
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Trusted by local businesses and families in Central Florida
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 text-center shadow-sm hover:shadow-md hover:border-orange-300 dark:hover:border-orange-600 transition-all duration-200"
          >
            <div className="text-4xl font-bold text-orange-500 dark:text-orange-400 mb-2">100+</div>
            <div className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2">Local Clients</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Trusted by businesses and families in Central Florida
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-3xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 text-center shadow-sm hover:shadow-md hover:border-orange-300 dark:hover:border-orange-600 transition-all duration-200"
          >
            <div className="flex justify-center gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Image
                  key={i}
                  src="/images/five star.png"
                  alt="5 star rating"
                  width={24}
                  height={24}
                  className="w-6 h-6 object-contain"
                />
              ))}
            </div>
            <div className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2">4.9★ Rating</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Average rating from satisfied customers
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-3xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 text-center shadow-sm hover:shadow-md hover:border-orange-300 dark:hover:border-orange-600 transition-all duration-200"
          >
            <div className="text-4xl font-bold text-orange-500 dark:text-orange-400 mb-2">24hr</div>
            <div className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2">Response Time</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              We&apos;ll get back to you within 24 hours
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="rounded-3xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 text-center shadow-sm hover:shadow-md hover:border-orange-300 dark:hover:border-orange-600 transition-all duration-200"
          >
            <div className="text-4xl font-bold text-orange-500 dark:text-orange-400 mb-2">Local</div>
            <div className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2">& Trusted</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Your neighbors in Central Florida
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="py-16 md:py-20 bg-white dark:bg-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-gray-50 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Trusted by local businesses and families in Central Florida
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              name={testimonial.name}
              role={testimonial.role}
              text={testimonial.text}
              rating={testimonial.rating}
              delay={index * 0.1}
            />
          ))}
        </div>
      </Section>

      {/* CTA Band */}
      <Section className="py-16 md:py-20 bg-slate-50 dark:bg-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-gradient-to-r from-primary to-indigo-900 dark:from-blue-800 dark:to-blue-900 text-white p-12 md:p-16 text-center max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-indigo-100 dark:text-blue-200 mb-8 max-w-2xl mx-auto">
            Get the help you need today. Same-day appointments available.
          </p>
          <div className="space-y-6">
            <a
              href="tel:3863878150"
              className="inline-block text-2xl md:text-3xl font-bold text-white hover:text-orange-200 dark:hover:text-orange-300 transition-colors mb-6"
            >
              📞 Call or Text: (386) 387-8150
            </a>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ButtonColorful href="/tech-support" className="text-lg px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-50 hover:bg-orange-50 dark:hover:bg-gray-700">
                Get Tech Help
              </ButtonColorful>
              <ButtonColorful href="/business" className="text-lg px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-50 hover:bg-orange-50 dark:hover:bg-gray-700">
                Get More Customers
              </ButtonColorful>
            </div>
          </div>
        </motion.div>
      </Section>
    </>
  )
}
