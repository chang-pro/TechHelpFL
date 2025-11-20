"use client";

import { content } from "@/content";
import { motion } from "framer-motion";
import { Phone, Calendar, Mail, ArrowRight } from "lucide-react";

import { Label } from "@/components/ui/label";

export default function ContactSection() {
    return (
        <section id="contact" className="py-20 bg-white dark:bg-slate-900">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">

                        {/* Left: Contact Info */}
                        <div>
                            <h2 className="font-heading text-4xl font-bold text-slate-900 dark:text-white mb-6">
                                {content.home.contact.headline}
                            </h2>
                            <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed">
                                {content.home.contact.subtitle}
                            </p>

                            <div className="space-y-6">
                                <a
                                    href={`tel:${content.brand.phone.replace(/\D/g, "")}`}
                                    className="flex items-center gap-4 p-4 bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl shadow-sm hover:shadow-md transition-all group"
                                >
                                    <div className="w-12 h-12 bg-green-500/20 dark:bg-green-500/20 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">Call or Text</div>
                                        <div className="text-lg font-bold text-slate-900 dark:text-white">{content.brand.phone}</div>
                                    </div>
                                </a>

                                <a
                                    href={content.brand.calendly}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl shadow-sm hover:shadow-md transition-all group"
                                >
                                    <div className="w-12 h-12 bg-blue-500/20 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Calendar className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">Book a time</div>
                                        <div className="text-lg font-bold text-slate-900 dark:text-white">Schedule Setup Call</div>
                                    </div>
                                </a>

                                <a
                                    href={`mailto:${content.brand.email}`}
                                    className="flex items-center gap-4 p-4 bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl shadow-sm hover:shadow-md transition-all group"
                                >
                                    <div className="w-12 h-12 bg-orange-500/20 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">Email</div>
                                        <div className="text-lg font-bold text-slate-900 dark:text-white">{content.brand.email}</div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Right: Simple Form */}
                        <div className="bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 p-8 rounded-3xl shadow-sm">
                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-1">
                                        {content.home.contact.form.name}
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-white/20 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:bg-white dark:focus:bg-slate-800 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 transition-all outline-none"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-1">
                                        {content.home.contact.form.phone}
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-white/20 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:bg-white dark:focus:bg-slate-800 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 transition-all outline-none"
                                        placeholder="(386) 555-0123"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-1">
                                        {content.home.contact.form.message}
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                    className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-white/20 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:bg-white dark:focus:bg-slate-800 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 transition-all outline-none resize-none"
                                        placeholder="How should we handle your calls?"
                                    />
                                </div>
                                
                                <div className="flex items-center space-x-2">
                                    <input type="checkbox" id="terms" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                    <Label htmlFor="terms" className="text-xs text-slate-500 dark:text-slate-400">
                                        I agree to the <a href="/terms" className="underline hover:text-blue-500">Terms of Service</a> and <a href="/privacy" className="underline hover:text-blue-500">Privacy Policy</a>.
                                    </Label>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-4 bg-blue-600 dark:bg-blue-500 text-white font-bold rounded-xl hover:bg-blue-700 dark:hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20 dark:shadow-blue-400/20 flex items-center justify-center gap-2 group"
                                >
                                    {content.home.contact.form.submit}
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
