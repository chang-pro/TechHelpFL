"use client";

import { content } from "@/content";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

export default function FAQSection() {
    return (
        <section id="faq" className="py-20 bg-slate-50 dark:bg-slate-950">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto text-center mb-12">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        Frequently asked
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300">
                        Straight answers while we build your plan.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-4">
                    {content.home.faq.map((item, index) => (
                        <motion.div
                            key={item.question}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="border border-white/10 dark:border-white/10 bg-white/5 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-5 md:p-6 shadow-sm"
                        >
                            <div className="flex items-start gap-3">
                                <span className="mt-1 text-blue-600 dark:text-blue-400">
                                    <HelpCircle className="w-5 h-5" />
                                </span>
                                <div>
                                    <h3 className="font-heading text-lg font-semibold text-slate-900 dark:text-white mb-2">
                                        {item.question}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
