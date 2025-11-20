"use client";

import Image from "next/image";
import Link from "next/link";
import { content } from "@/content";
import { motion } from "framer-motion";

export default function ServicesCards() {
    return (
        <section id="services" className="py-20 bg-white dark:bg-slate-900">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        Services built to rank & convert
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300">
                        Local SEO, conversion-focused sites, and automation that keeps leads moving without more ad spend.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {content.home.services.map((service, index) => (
                        <Link 
                            href={`/services/${service.slug}`} 
                            key={index}
                            className="block h-full"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white/5 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-white/10 dark:border-white/10 group h-full"
                            >
                                <div className="relative w-16 h-16 mb-6 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        width={48}
                                        height={48}
                                        className="object-contain"
                                    />
                                </div>
                                <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-orange-500 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
