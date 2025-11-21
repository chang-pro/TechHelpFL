"use client";

import Image from "next/image";
import Link from "next/link";
import { content } from "@/content";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function ServicesCards() {
    return (
        <section id="services" className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 text-sm font-medium mb-6">
                        <Sparkles className="w-4 h-4" />
                        <span>Complete AI Phone System</span>
                    </div>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                        Powerful AI Automation for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600">
                            Local Businesses
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        Replace your voicemail with an intelligent AI that captures every lead, books appointments, and handles customers 24/7.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {content.home.services.map((service, index) => {
                        // @ts-ignore - inferred type from content.ts
                        const isMain = service.isMain;
                        
                        return (
                            <Link 
                                href={`/services/${service.slug}`} 
                                key={index}
                                className={`block h-full group relative ${isMain ? 'md:col-span-1' : ''}`}
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`
                                        h-full p-8 rounded-3xl transition-all duration-300
                                        border backdrop-blur-sm
                                        ${isMain 
                                            ? 'bg-white dark:bg-slate-900/80 border-orange-500/30 dark:border-orange-500/20 shadow-xl shadow-orange-500/5 hover:shadow-orange-500/20 hover:border-orange-500/50' 
                                            : 'bg-white/80 dark:bg-slate-900/50 border-slate-200 dark:border-white/5 hover:bg-white dark:hover:bg-slate-900 hover:border-slate-300 dark:hover:border-white/20 shadow-lg shadow-slate-200/50 dark:shadow-none'
                                        }
                                        hover:-translate-y-1
                                    `}
                                >
                                    {/* Hover Glow Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className={`
                                            w-14 h-14 mb-6 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110
                                            ${isMain ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}
                                        `}>
                                            <Image
                                                src={service.image}
                                                alt={service.title}
                                                width={32}
                                                height={32}
                                                className={`object-contain ${isMain ? 'brightness-0 invert' : 'dark:invert'}`}
                                            />
                                        </div>

                                        <h3 className="font-heading text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                                            {service.title}
                                        </h3>
                                        
                                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 flex-grow">
                                            {service.description}
                                        </p>

                                        <div className="flex items-center text-sm font-semibold text-orange-600 dark:text-orange-400 group-hover:translate-x-2 transition-transform duration-300">
                                            {isMain ? 'Explore Core Feature' : 'Learn more'}
                                            <ArrowRight className="w-4 h-4 ml-1" />
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
