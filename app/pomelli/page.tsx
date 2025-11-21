import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Link as LinkIcon, Send } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pomelli URL Submission | Tech Help FL",
    description: "Submit URLs for Pomelli processing and automation.",
    robots: {
        index: false, // Keep this internal/private for now as requested "for Pomelli" implies a specific tool use
        follow: false,
    },
};

export default function PomelliSubmission() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <Navbar />

            <section className="pt-32 pb-20 px-4">
                <div className="container mx-auto max-w-2xl">
                    <div className="text-center mb-12">
                        <h1 className="font-heading text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                            Pomelli URL Submission
                        </h1>
                        <p className="text-slate-600 dark:text-slate-300">
                            Submit a URL below for processing.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800">
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="url" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Target URL
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <LinkIcon className="h-5 w-5 text-slate-400" />
                                    </div>
                                    <input
                                        type="url"
                                        name="url"
                                        id="url"
                                        className="block w-full pl-10 pr-3 py-3 border border-slate-300 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                        placeholder="https://example.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="notes" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Notes (Optional)
                                </label>
                                <textarea
                                    name="notes"
                                    id="notes"
                                    rows={4}
                                    className="block w-full p-3 border border-slate-300 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    placeholder="Any specific instructions..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors shadow-lg hover:shadow-blue-500/25"
                            >
                                Submit URL
                                <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
