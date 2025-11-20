"use client";

import { content } from "@/content";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {content.home.pricing.title}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            {content.home.pricing.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.home.pricing.plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative h-full rounded-2xl border border-white/10 dark:border-white/10 bg-white/5 dark:bg-white/5 backdrop-blur-xl p-6 shadow-sm ${
                plan.name === "Growth" ? "ring-2 ring-orange-500/50" : ""
              }`}
            >
              {plan.name === "Growth" && (
                <span className="absolute -top-3 right-4 px-3 py-1 text-xs font-semibold rounded-full bg-orange-500 text-white">
                  Most popular
                </span>
              )}
              <div className="mb-4">
                <div className="text-sm text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wide">
                  {plan.description}
                </div>
                <h3 className="font-heading text-2xl font-bold text-slate-900 dark:text-white">
                  {plan.name} - {plan.price}
                </h3>
              </div>
              <ul className="space-y-3 mb-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-200">
                    <span className="mt-0.5 rounded-full bg-green-500/15 text-green-600 dark:text-green-300 p-1">
                      <Check className="w-4 h-4" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm text-slate-600 dark:text-slate-300 mt-8">
          {content.home.pricing.setup}
        </p>
      </div>
    </section>
  );
}
