"use client";

import { content } from "@/content";
import { motion } from "framer-motion";
import { Phone, Calendar, Mail, ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";

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
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ContactForm() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");
        setErrorMessage(null);

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData as any).toString(),
            });

            if (response.ok) {
                setStatus("success");
                form.reset();
            } else {
                throw new Error("Form submission failed");
            }
        } catch (error) {
            console.error("Submission error:", error);
            setStatus("error");
            setErrorMessage("Something went wrong. Please try again.");
        }
    };

    if (status === "success") {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-10"
            >
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                    Thanks for reaching out. We'll get back to you shortly.
                </p>
                <button
                    onClick={() => setStatus("idle")}
                    className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                    Send another message
                </button>
            </motion.div>
        );
    }

    return (
        <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="space-y-4"
            onSubmit={handleSubmit}
        >
            <input type="hidden" name="form-name" value="contact" />
            <div className="hidden">
                <label>
                    Don’t fill this out: <input name="bot-field" />
                </label>
            </div>
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-1">
                    {content.home.contact.form.name}
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
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
                    name="phone"
                    required
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
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-white/20 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:bg-white dark:focus:bg-slate-800 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 transition-all outline-none resize-none"
                    placeholder="Tell us about your needs..."
                />
            </div>

            <div className="flex items-center space-x-2">
                <input type="checkbox" id="terms" name="terms" required className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <Label htmlFor="terms" className="text-xs text-slate-500 dark:text-slate-400">
                    I agree to the <a href="/terms" className="underline hover:text-blue-500">Terms of Service</a> and <a href="/privacy" className="underline hover:text-blue-500">Privacy Policy</a>.
                </Label>
            </div>

            {status === "error" && (
                <div className="p-3 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm">
                    {errorMessage}
                </div>
            )}

            <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full py-4 bg-blue-600 dark:bg-blue-500 text-white font-bold rounded-xl hover:bg-blue-700 dark:hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20 dark:shadow-blue-400/20 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {status === "submitting" ? "Sending..." : content.home.contact.form.submit}
                {status !== "submitting" && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
            </button>
        </form>


    );
}
