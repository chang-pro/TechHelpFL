"use client";

import Image from "next/image";
import { content } from "@/content";
import { motion } from "framer-motion";

export default function AboutMe() {
    return (
        <section id="about" className="py-20 bg-slate-50 dark:bg-slate-950">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto bg-white/70 dark:bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 dark:border-white/10 shadow-sm">
                    <div className="flex flex-col md:flex-row items-center gap-10">

                        <div className="w-full md:w-1/3 relative">
                            <div className="aspect-square relative rounded-2xl overflow-hidden bg-blue-500/10 dark:bg-blue-500/20 border-4 border-white/50 dark:border-white/10 shadow-lg rotate-[-3deg] hover:rotate-0 transition-transform duration-300">
                                <Image
                                    src={content.home.about.image}
                                    alt="Student Workspace"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        <div className="flex-1 text-center md:text-left">
                            <h2 className="font-heading text-3xl font-bold mb-4 text-slate-900 dark:text-white">
                                {content.home.about.title}
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                                {content.home.about.bio}
                            </p>

                            <div className="flex flex-wrap justify-center md:justify-start gap-3">
                                {content.home.about.badges.map((badge, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-green-500/10 dark:bg-green-500/20 text-green-700 dark:text-green-300 text-sm font-bold rounded-full border border-green-500/20 dark:border-green-500/30"
                                    >
                                        {badge}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
