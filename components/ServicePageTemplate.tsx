"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  benefits: { title: string; description: string }[];
  ctaText?: string;
}

export default function ServicePageTemplate({
  title,
  subtitle,
  description,
  features,
  benefits,
  ctaText = "Get Started",
}: ServicePageProps) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.1),_transparent_70%)] dark:bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.15),_transparent_70%)]" />
          </div>

          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Link
                  href="/#services"
                  className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors mb-8"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Services
                </Link>

                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
                  {title}
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto mb-8">
                  {subtitle}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="#contact"
                    className="px-8 py-4 bg-orange-500 text-white rounded-2xl font-semibold text-base shadow-lg shadow-orange-500/40 hover:bg-orange-600 hover:-translate-y-1 transition-all"
                  >
                    {ctaText}
                  </Link>
                  <a
                    href="tel:3863878150"
                    className="px-8 py-4 bg-white/80 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white rounded-2xl font-semibold text-base hover:bg-slate-50 dark:hover:bg-white/10 transition-all"
                  >
                    Call (386) 387-8150
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Description & Features */}
        <section className="py-20 bg-slate-50 dark:bg-slate-950">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="font-heading text-3xl font-bold text-slate-900 dark:text-white mb-6">
                    What is {title}?
                  </h2>
                  <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                    {description}
                  </p>
                  <ul className="space-y-4">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 dark:text-slate-200">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-white/10 shadow-xl">
                  <h3 className="font-heading text-2xl font-bold text-slate-900 dark:text-white mb-6">
                    Why choose this?
                  </h3>
                  <div className="space-y-6">
                    {benefits.map((benefit, index) => (
                      <div key={index}>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                          {benefit.title}
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {benefit.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-12 text-white shadow-2xl">
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                  Ready to Grow?
                </h2>
                <p className="text-lg text-orange-100 mb-8 max-w-2xl mx-auto">
                  Schedule a free audit to see how {title} can help your business.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/#contact"
                    className="px-8 py-4 bg-white text-orange-600 rounded-2xl font-semibold text-base shadow-lg hover:bg-orange-50 transition-all inline-flex items-center gap-2"
                  >
                    Book Free Audit
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

