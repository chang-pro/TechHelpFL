"use client";

import { content } from "@/content";
import { motion } from "framer-motion";

export default function HowItWorks() {
    return (
        <section id="process" className="py-20 bg-slate-50 dark:bg-slate-950">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        Get Your AI Receptionist Up and Running in 3 Simple Steps
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300">
                        We handle the technical setup. You just tell us about your business, and we'll have your AI booking appointments in under 48 hours.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500/20 dark:via-blue-400/20 to-transparent" />

                    {content.home.process.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative flex flex-col items-center text-center"
                        >
                            <div className="w-24 h-24 rounded-full bg-white dark:bg-slate-800 border-4 border-blue-500/10 dark:border-blue-400/20 flex items-center justify-center text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6 shadow-sm relative z-10">
                                {step.step}
                            </div>
                            <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-3">
                                {step.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed max-w-xs">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
