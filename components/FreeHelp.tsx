"use client";

import { content } from "@/content";
import { motion } from "framer-motion";
import { Video } from "lucide-react";

import { Label } from "@/components/ui/label";

export default function FreeHelp() {
    return (
        <section className="py-20 bg-slate-50 dark:bg-slate-950">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-600 dark:to-blue-800 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                        <div className="flex-1 text-center md:text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-bold mb-4 backdrop-blur-sm">
                                <Video className="w-3 h-3" />
                                15-minute setup
                            </div>
                            <h2 className="font-heading text-3xl font-bold mb-4">
                                {content.home.freeHelp.headline}
                            </h2>
                            <p className="text-blue-100 text-lg leading-relaxed mb-6">
                                {content.home.freeHelp.subtitle}
                            </p>
                        </div>

                        <div className="w-full md:w-auto bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                            <form
                                name="demo"
                                method="POST"
                                data-netlify="true"
                                netlify-honeypot="bot-field"
                                className="flex flex-col gap-4 w-full md:w-80"
                            >
                                <input type="hidden" name="form-name" value="demo" />
                                <div className="hidden">
                                    <label>
                                        Don’t fill this out: <input name="bot-field" />
                                    </label>
                                </div>
                                <div>
                                    <label htmlFor="audit-email" className="sr-only">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                    id="audit-email"
                                    placeholder="Where should we send the demo?"
                                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                                    />
                                </div>
                            
                                <div className="flex items-center space-x-2">
                                    <input type="checkbox" id="terms-free" name="terms" className="rounded border-blue-300 text-blue-600 focus:ring-blue-500 bg-white/20" />
                                    <Label htmlFor="terms-free" className="text-xs text-blue-100">
                                        I agree to the <a href="/terms" className="underline hover:text-white">Terms</a> and <a href="/privacy" className="underline hover:text-white">Privacy</a>.
                                    </Label>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full px-6 py-3 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
                                >
                                    {content.home.freeHelp.cta}
                                </button>
                                <p className="text-xs text-blue-200 text-center">
                                    Fast walkthrough so you hear and see the AI receptionist.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
