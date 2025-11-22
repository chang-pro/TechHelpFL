"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, CheckCircle2, BarChart3, Phone, Clock } from "lucide-react";

export default function AdvancedServicesPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 to-transparent dark:from-orange-950/20 dark:to-transparent pointer-events-none" />

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs font-semibold uppercase tracking-wider mb-6">
                                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                                Advanced AI Solutions
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                                Revolutionize Your Business with <span className="text-orange-500">AI Appointment Automation</span>
                            </h1>
                            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                                Stop missing calls and start booking more business. Our AI receptionist works 24/7 to answer calls, qualify leads, and schedule appointments directly into your calendar.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="#contact"
                                    className="px-8 py-4 bg-orange-500 text-white rounded-xl font-semibold shadow-lg shadow-orange-500/30 hover:bg-orange-600 hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                                >
                                    Get Started Now
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                                <Link
                                    href="/services"
                                    className="px-8 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center"
                                >
                                    View All Services
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
                                <Image
                                    src="/images/ai-receptionist-hero.png"
                                    alt="AI Receptionist Interface"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                            </div>

                            {/* Floating Stats Card */}
                            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-900 p-6 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 max-w-xs hidden md:block">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600 dark:text-green-400">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 dark:text-slate-400">Calls Handled</p>
                                        <p className="text-2xl font-bold text-slate-900 dark:text-white">24/7</p>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-600 dark:text-slate-300">Response Time</span>
                                        <span className="font-semibold text-green-500">{"<"} 1 sec</span>
                                    </div>
                                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                                        <div className="h-full bg-green-500 w-[98%]" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                            Why Choose AI Automation?
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300">
                            Transform your customer experience and operational efficiency with our cutting-edge AI solutions.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Clock,
                                title: "24/7 Availability",
                                description: "Never miss a lead. Your AI receptionist works round the clock to answer questions and book appointments, even on weekends and holidays."
                            },
                            {
                                icon: Calendar,
                                title: "Smart Scheduling",
                                description: "Seamlessly integrates with your existing calendar to book appointments in real-time, eliminating double-bookings and back-and-forth emails."
                            },
                            {
                                icon: BarChart3,
                                title: "Data-Driven Insights",
                                description: "Gain valuable insights into call volume, peak times, and customer intent to optimize your marketing and staffing decisions."
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all"
                            >
                                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center text-orange-600 dark:text-orange-400 mb-6">
                                    <feature.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Deep Dive Sections */}
            <section className="py-20 overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    {/* Feature 1 */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="order-2 lg:order-1"
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
                                <Image
                                    src="/images/smart-scheduling.png"
                                    alt="Smart Scheduling System"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto"
                                />
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="order-1 lg:order-2"
                        >
                            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                                Supercharge Efficiency & Slash Costs
                            </h3>
                            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                                AI-powered booking systems streamline your workflow by automating the entire scheduling process. This significantly reduces manual administrative tasks, freeing up your staff to focus on what matters most - your customers.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Automate lead qualification and booking",
                                    "Reduce administrative overhead costs",
                                    "Eliminate scheduling conflicts",
                                    "Handle thousands of calls simultaneously"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Feature 2 */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                                Intelligent Targeting & Analytics
                            </h3>
                            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                                Stop guessing and start knowing. Our AI analyzes vast amounts of data to predict which prospects are most likely to convert, allowing for laser-focused marketing efforts.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Real-time conversion tracking",
                                    "Customer sentiment analysis",
                                    "Peak call time identification",
                                    "ROI measurement for marketing campaigns"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
                                <Image
                                    src="/images/analytics-dashboard.png"
                                    alt="Analytics Dashboard"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-orange-500">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">
                        Join the future of business automation today. Book a free consultation to see how our AI solutions can work for you.
                    </p>
                    <Link
                        href="#contact"
                        className="inline-flex items-center gap-2 px-10 py-5 bg-white text-orange-600 rounded-xl font-bold text-lg shadow-xl hover:bg-orange-50 hover:scale-105 transition-all"
                    >
                        Book Your Free Demo
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
