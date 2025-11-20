"use client";

import { content } from "@/content";
import { motion } from "framer-motion";
import { AlertTriangle, GaugeCircle, Timer, Plug } from "lucide-react";

const icons = [AlertTriangle, GaugeCircle, Timer, Plug];

export default function ProblemSection() {
    return (
        <section id="problem" className="py-16 md:py-20 bg-slate-50 dark:bg-slate-950">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-14">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        {content.home.problem.title}
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300">
                        {content.home.problem.intro}
                    </p>
                    {content.home.problem.placeholder && (
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-3">
                            {content.home.problem.placeholder}
                        </p>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {content.home.problem.points.map((point, index) => {
                        const Icon = icons[index % icons.length];
                        return (
                            <motion.div
                                key={point.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative overflow-hidden rounded-2xl border border-white/10 dark:border-white/10 bg-white/5 dark:bg-white/5 backdrop-blur-xl p-6 shadow-sm"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="w-11 h-11 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                        <Icon className="w-5 h-5" />
                                    </span>
                                    <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">
                                        {point.title}
                                    </h3>
                                </div>
                                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                    {point.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
