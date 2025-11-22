"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, CheckCircle2, Search, Code, BarChart3, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AdditionalServices() {
    const services = [
        {
            title: "Dominate Your Local Market",
            subtitle: "Local SEO & Map Pack Ranking",
            description: "Stop losing customers to competitors just because they show up first. We optimize your online presence to ensure you're the #1 choice when locals search for your services.",
            benefit: "Get more customers for free without paying for ads.",
            icon: <Search className="w-6 h-6 text-blue-500" />,
            image: "/images/local-seo-maps.png",
            features: [
                "Rank #1 in Google Maps",
                "Drive organic foot traffic",
                "Build 5-star reputation",
                "Be the authority in your area"
            ]
        },
        {
            title: "Turn Clicks Into Revenue",
            subtitle: "Google Ads Management",
            description: "Stop wasting money on clicks that don't convert. We laser-target high-intent buyers in Daytona, Ormond, and Port Orange who are ready to buy right now.",
            benefit: "Lower your cost per lead and instantly boost ROI.",
            icon: <BarChart3 className="w-6 h-6 text-green-500" />,
            image: "/images/google-ads-campaign.png",
            features: [
                "Stop wasting ad spend",
                "Target ready-to-buy leads",
                "Transparent ROI reporting",
                "Beat competitors' bids"
            ]
        },
        {
            title: "Your 24/7 Best Salesperson",
            subtitle: "High-Performance Web Development",
            description: "Your website shouldn't just look good—it should sell. We build lightning-fast sites designed psychologically to convert visitors into paying customers.",
            benefit: "Look bigger than you are and convert more traffic.",
            icon: <Code className="w-6 h-6 text-purple-500" />,
            image: "/images/web-dev-performance.png",
            features: [
                "Load in under 1 second",
                "Mobile-first conversion design",
                "SEO-optimized architecture",
                "Trust-building aesthetics"
            ]
        },
        {
            title: "Automate The Busy Work",
            subtitle: "Custom Software & Automation",
            description: "Outgrow spreadsheets and manual data entry. We build custom software that automates your unique workflows, saving you hours every single day.",
            benefit: "Save time, reduce errors, and scale without hiring.",
            icon: <Zap className="w-6 h-6 text-orange-500" />,
            image: "/images/custom-software-automation.png",
            features: [
                "Eliminate manual data entry",
                "Custom client portals",
                "Connect all your apps",
                "Scale operations effortlessly"
            ]
        }
    ];

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-950/20 dark:to-transparent pointer-events-none" />
                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="font-heading text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                                Scale Your Business With <span className="text-blue-600">Technical Precision</span>
                            </h1>
                            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                                Beyond AI. We provide the foundational digital infrastructure—from ranking #1 on Google to custom automation—that allows you to dominate the Central Florida market.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Sections */}
            <div className="space-y-0">
                {services.map((service, index) => (
                    <section key={index} className={`py-24 ${index % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-slate-50 dark:bg-slate-950'}`}>
                        <div className="container mx-auto px-4 max-w-6xl">
                            <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
                                {/* Text Content */}
                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.7, ease: "easeOut" }}
                                    className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
                                >
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold mb-6">
                                        {service.icon}
                                        {service.subtitle}
                                    </div>
                                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                                        {service.title}
                                    </h2>
                                    <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                                        {service.description}
                                    </p>
                                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-r-xl mb-8">
                                        <p className="text-blue-800 dark:text-blue-200 font-medium italic">
                                            "{service.benefit}"
                                        </p>
                                    </div>
                                    <ul className="space-y-4">
                                        {service.features.map((feature, fIndex) => (
                                            <li key={fIndex} className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
                                                <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                                                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" />
                                                </div>
                                                <span className="font-medium">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>

                                {/* Image Content */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.7, delay: 0.2 }}
                                    className={`order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
                                >
                                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 group">
                                        <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            width={800}
                                            height={600}
                                            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none" />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </section>
                ))}
            </div>

            {/* CTA Section */}
            <section className="py-24 px-4">
                <div className="container mx-auto max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-blue-600 dark:bg-blue-500 rounded-[2.5rem] p-10 md:p-20 shadow-2xl relative overflow-hidden text-center"
                    >
                        <div className="relative z-10">
                            <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-8">
                                Ready to Outperform Your Competitors?
                            </h2>
                            <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                                Don't settle for average results. Get the high-performance digital infrastructure your business deserves.
                            </p>
                            <Link
                                href="/#contact"
                                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
                            >
                                Get Your Free Strategy Audit
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>

                        {/* Background decoration */}
                        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                            <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl" />
                            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl" />
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
