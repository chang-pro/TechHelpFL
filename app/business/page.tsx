"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Section } from "@/components/Section"
import { Button } from "@/components/Button"
import { StatCard } from "@/components/StatCard"
import { FaqItem } from "@/components/FaqItem"
import { Check } from "lucide-react"
import { content } from "@/content"
import { BusinessHero } from "@/components/BusinessHero"
import { TouristStats } from "@/components/TouristStats"
import { BusinessVideo } from "@/components/BusinessVideo"
import { ProofText } from "@/components/ProofText"
import { RoiCalculator } from "@/components/RoiCalculator"
import ViewerCounter from "@/components/ViewerCounter"

export default function BusinessPage() {
  const { package: pkg, pricing, secondaryServices, results, faq } = content.business

  return (
    <>
      {/* New Hero */}
      <BusinessHero />

      {/* Tourist Stats */}
      <TouristStats />

      {/* Business Video */}
      <BusinessVideo />

      {/* Proof Text */}
      <ProofText />

      {/* Package - Google Maps Domination */}
      <Section className="py-16 md:py-20 bg-slate-50 dark:bg-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto rounded-3xl bg-white dark:bg-gray-900 shadow-lg p-8 md:p-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-gray-50 mb-8">
            {pkg.title}
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {pkg.features.map((feature, index) => (
              <div key={feature} className="flex items-start gap-3">
                <Check className="w-6 h-6 text-accent dark:text-orange-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Rank Check Anchor */}
      <div id="rank-check" className="scroll-mt-24" />

      {/* ROI Calculator */}
      <RoiCalculator />

      {/* Secondary Services */}
      <Section className="py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-gray-50 mb-8">
            Secondary Services
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {secondaryServices.map((service, index) => (
              <div
                key={service}
                className="rounded-3xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-5 shadow-sm text-center hover:shadow-md hover:border-orange-300 dark:hover:border-orange-600 transition-all duration-200"
              >
                <p className="text-base text-gray-700 dark:text-gray-300">{service}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Pricing */}
      <Section className="py-16 md:py-20 bg-white dark:bg-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-gray-50 mb-4">
            Pricing
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-2">
            Choose the package that fits your needs
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 max-w-2xl mx-auto">
            Pricing varies depending on business size and goals. No long-term contracts.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricing.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className={`rounded-3xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg hover:border-orange-300 dark:hover:border-orange-600 transition-all duration-200 p-8 relative ${plan.mostPopular ? 'ring-2 ring-orange-500 dark:ring-orange-400 border-orange-300 dark:border-orange-600' : ''}`}
            >
              {plan.mostPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    MOST POPULAR
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-2">{plan.name}</h3>
              <div className="mb-2">
                <div className="text-3xl font-extrabold text-accent dark:text-orange-500">{plan.price}</div>
                {plan.priceNote && (
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{plan.priceNote}</div>
                )}
              </div>
              <p className="text-base text-gray-600 dark:text-gray-400 mb-6">{plan.description}</p>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent dark:text-orange-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              {plan.roiGuarantee && (
                <div className="mb-6 p-3 bg-orange-50 dark:bg-orange-500/10 rounded-lg border border-orange-200 dark:border-orange-500/20">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <Check className="w-4 h-4 text-orange-500 dark:text-orange-400 inline mr-1" aria-hidden="true" />
                    <strong className="text-orange-600 dark:text-orange-400">ROI Guarantee:</strong> 5X return or money back
                  </p>
                </div>
              )}
              <Button href="/contact" variant="primary" className="w-full">
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Trust Section */}
      <Section className="py-16 md:py-20 bg-slate-50 dark:bg-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-gray-50 mb-6">
            Trusted by Business Owners Across Central Florida
          </h2>
          <div className="flex justify-center gap-2 mb-6">
            <span className="text-2xl">⭐️⭐️⭐️⭐️⭐️</span>
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
            "I help local businesses improve their Google visibility and attract more customers — especially during tourist season."
          </p>
          <ViewerCounter />
        </motion.div>
      </Section>

      {/* Results */}
      <Section className="py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-gray-50 mb-4">
            Proven Results
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            See what our optimization services can do for your business
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {results.map((result, index) => (
            <StatCard
              key={result.metric}
              metric={result.metric}
              value={result.value}
              description={result.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section className="py-16 md:py-20 bg-slate-50 dark:bg-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-gray-50 mb-4">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-5">
          {faq.map((item, index) => (
            <FaqItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              delay={index * 0.05}
              defaultOpen={item.defaultOpen || false}
            />
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-gradient-to-r from-primary to-indigo-900 dark:from-blue-800 dark:to-blue-900 text-white p-12 md:p-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ready To Get 50+ New Customers From Google Maps?
          </h2>
          <p className="text-lg text-indigo-100 dark:text-blue-200 mb-4 max-w-2xl mx-auto">
            Next 20 businesses get free optimization ($500 value)
          </p>
          <p className="text-base text-indigo-200 dark:text-blue-300 mb-8 max-w-2xl mx-auto">
            Limited to 10 new clients per month
          </p>
          <Button href="/contact" variant="secondary" className="text-lg px-8 py-4">
            Get Your Free Audit ($500 Value)
          </Button>
        </motion.div>
      </Section>
    </>
  )
}
