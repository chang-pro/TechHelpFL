"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Section } from "@/components/Section"
import { Button } from "@/components/Button"
import { TestimonialCard } from "@/components/TestimonialCard"
import { Check, Shield, MapPin, Star, CheckCircle } from "lucide-react"
import { content } from "@/content"

export default function TechSupportPage() {
  const { hero, trustStrip, packages, hourly, process, whySeniorsLove, trustBoosters, testimonials } = content.techSupport

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 md:pt-28 lg:pt-32 pb-12 md:pb-16 bg-gradient-to-b from-slate-50 dark:from-gray-900 to-white dark:to-gray-900">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="inline-block px-4 py-2 rounded-full bg-accent/10 dark:bg-orange-500/20 text-accent dark:text-orange-400 text-sm font-semibold mb-4">
                Serving Central Florida – Daytona Beach, Ormond Beach, Port Orange, & Surrounding Areas
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-gray-50 leading-tight">
                {hero.headline}
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
                {hero.subtitle}
              </p>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-xl leading-relaxed font-medium">
                {hero.tagline}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button href={hero.cta.href} variant="primary" className="text-lg px-8 py-4">
                  {hero.cta.text}
                </Button>
                <Button href="/contact" variant="secondary" className="text-lg px-8 py-4">
                  Schedule Free Consultation
                </Button>
              </div>
              {/* Trust Strip */}
              <div className="flex flex-wrap items-center gap-4 pt-4 opacity-90">
                {trustStrip.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    {index === 0 && <Shield className="w-4 h-4 text-accent dark:text-orange-400" />}
                    {index === 1 && <CheckCircle className="w-4 h-4 text-accent dark:text-orange-400" />}
                    {index === 2 && <Star className="w-4 h-4 text-accent dark:text-orange-400 fill-current" />}
                    {index === 3 && <MapPin className="w-4 h-4 text-accent dark:text-orange-400" />}
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative rounded-3xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/hero-seniors.png"
                alt="Friendly in-home tech support helping with any tech problem in Central Florida"
                width={1200}
                height={800}
                className="rounded-2xl w-full h-auto object-cover shadow-2xl"
                priority
                quality={95}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problems Solved */}
      <Section className="py-12 md:py-16 bg-white dark:bg-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-gray-50 mb-4">
              Common Problems We Solve
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We fix ANY tech problem. No judgment, just patient help.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {content.techSupport.problemsSolved.map((problem, index) => (
              <div
                key={problem}
                className="flex items-start gap-3 p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:border-orange-300 dark:hover:border-orange-600 transition-all duration-200"
              >
                <Check className="w-6 h-6 text-accent dark:text-orange-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-base text-gray-700 dark:text-gray-300">{problem}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Process */}
      <Section className="py-12 md:py-16 bg-slate-50 dark:bg-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-gray-50 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Simple, straightforward process from start to finish
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {process.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-sm hover:border-orange-300 dark:hover:border-orange-600 transition-all duration-200 p-6 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-accent dark:bg-orange-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {step.step}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-2">{step.title}</h3>
              <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Packages */}
      <Section className="py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-gray-50 mb-4">
            Service Packages
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose a package or pay by the hour
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="rounded-3xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg hover:border-orange-300 dark:hover:border-orange-600 transition-all duration-200 p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-2">{pkg.name}</h3>
              <div className="text-3xl font-extrabold text-accent dark:text-orange-500 mb-4">{pkg.price}</div>
              <p className="text-base text-gray-600 dark:text-gray-400 mb-6">{pkg.description}</p>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent dark:text-orange-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button href="/contact" variant="primary" className="w-full">
                Book This Package
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Hourly Rate */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 rounded-3xl bg-orange-50 dark:bg-orange-900/20 border-2 border-orange-200 dark:border-orange-800 p-8 text-center max-w-2xl mx-auto"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
            <span className="font-semibold">Hourly Rate:</span> {hourly.rate}
          </p>
          <p className="text-base text-gray-600 dark:text-gray-400">{hourly.description}</p>
        </motion.div>
      </Section>

      {/* Why Seniors Love This Service */}
      <Section className="py-16 md:py-20 bg-slate-50 dark:bg-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-gray-50 mb-4">
              Why Seniors Love This Service
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Simple, patient help that makes technology easy
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {whySeniorsLove.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-3 p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-sm hover:border-orange-300 dark:hover:border-orange-600 transition-all duration-200"
              >
                <Check className="w-6 h-6 text-accent dark:text-orange-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Trust Boosters */}
      <Section className="py-12 md:py-16 bg-white dark:bg-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            {trustBoosters.map((booster, index) => (
              <div key={booster} className="flex items-center gap-2 text-sm md:text-base text-gray-700 dark:text-gray-300">
                <CheckCircle className="w-5 h-5 text-accent dark:text-orange-500 flex-shrink-0" />
                <span>{booster}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Testimonials */}
      <Section className="py-16 md:py-20 bg-slate-50 dark:bg-gray-800">
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
            Real stories from seniors and families we've helped
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              name={testimonial.name}
              text={testimonial.text}
              rating={testimonial.rating}
              delay={index * 0.1}
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
            Ready for Tech Help?
          </h2>
          <p className="text-lg text-indigo-100 dark:text-blue-200 mb-8 max-w-2xl mx-auto">
            Schedule a visit and let us help you get the most out of your devices. No tech problem is too big or too small.
          </p>
          <Button href="/contact" variant="secondary" className="text-lg px-8 py-4">
            Schedule Your Free Tech Support Call
          </Button>
        </motion.div>
      </Section>
    </>
  )
}

