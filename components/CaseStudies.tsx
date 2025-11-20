"use client";

import { content } from "@/content";
import { motion } from "framer-motion";
import { TrendingUp, MapPin, MessageSquare } from "lucide-react";

const icons = [MapPin, TrendingUp, MessageSquare];

export default function CaseStudies() {
    return (
        <section id="proof" className="py-20 bg-white dark:bg-slate-900">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        Results & launch partners
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300">
                        I'm offering discounted launch packages while I build case studies. Your wins become the next proof here.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {content.home.caseStudies.map((study, index) => {
                        const Icon = icons[index % icons.length];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white/5 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 dark:border-white/10 relative overflow-hidden group shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Icon className="w-24 h-24 text-blue-500 dark:text-blue-400" />
                                </div>

                                <div className="relative z-10">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 dark:bg-white/10 backdrop-blur border border-white/20 dark:border-white/20 text-xs font-bold text-slate-700 dark:text-slate-200 mb-6">
                                        <Icon className="w-3 h-3" />
                                        {study.title}
                                    </div>

                                    <div className="mb-6">
                                        <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                                            {study.result}
                                        </div>
                                        <div className="text-sm font-bold text-green-600 dark:text-green-400 uppercase tracking-wide">
                                            {study.stat}
                                        </div>
                                    </div>

                                    <p className="text-slate-600 dark:text-slate-300 text-sm">
                                        {study.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
