import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, CheckCircle2, Search, Globe, Code, Smartphone, BarChart3, Zap } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Additional Digital Services | Tech Help FL",
    description: "Beyond automation: Expert Local SEO, Google Ads management, custom web development, and software solutions for Central Florida businesses.",
    alternates: {
        canonical: "https://techhelpflorida.com/additional-services",
    },
};

export default function AdditionalServices() {
    const services = [
        {
            title: "Local SEO & Map Pack Ranking",
            description: "Be the first business customers see when they search nearby. We optimize your Google Business Profile and local citations to dominate the 'Map Pack' and drive organic foot traffic and calls.",
            icon: <Search className="w-10 h-10 text-blue-500" />,
            features: [
                "Google Business Profile optimization",
                "Local keyword dominance",
                "Review generation strategies",
                "Citation cleanup & building"
            ]
        },
        {
            title: "Google Ads Management",
            description: "Stop burning budget on clicks that don't convert. We audit and restructure your campaigns to lower your Cost Per Lead (CPL) and target high-intent buyers in Daytona, Ormond, and Port Orange.",
            icon: <BarChart3 className="w-10 h-10 text-green-500" />,
            features: [
                "Campaign ROI audit",
                "Negative keyword filtering",
                "High-converting ad copy",
                "Precision location targeting"
            ]
        },
        {
            title: "High-Performance Web Development",
            description: "Your website should be your best salesperson. We build lightning-fast, mobile-responsive websites designed to convert visitors into paying customers, not just look pretty.",
            icon: <Code className="w-10 h-10 text-purple-500" />,
            features: [
                "Conversion-focused design",
                "Mobile-first architecture",
                "Blazing fast load speeds",
                "SEO-friendly structure"
            ]
        },
        {
            title: "Custom Software & Automation",
            description: "Outgrow off-the-shelf tools? We build custom software solutions to streamline your specific business workflows, from client portals to automated inventory management.",
            icon: <Zap className="w-10 h-10 text-orange-500" />,
            features: [
                "Workflow automation",
                "Client portals & dashboards",
                "API integrations",
                "Legacy system upgrades"
            ]
        }
    ];

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h1 className="font-heading text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                            Complete Digital Solutions for <span className="text-blue-600">Local Growth</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                            We don't just do AI. From ranking #1 on Google Maps to building custom software, we provide the technical edge your business needs to scale in Central Florida.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-lg border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all group">
                                <div className="mb-6 bg-slate-100 dark:bg-slate-800 w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform">
                                    {service.icon}
                                </div>
                                <h3 className="font-heading text-2xl font-bold text-slate-900 dark:text-white mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                                    {service.description}
                                </p>
                                <ul className="space-y-3">
                                    {service.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
                                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <div className="bg-blue-600 dark:bg-blue-500 rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden">
                            <div className="relative z-10">
                                <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
                                    Stop Losing Leads to Competitors
                                </h2>
                                <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                                    Whether it's fixing your Google Ads or rebuilding your site, we have the technical expertise to turn your digital presence into a revenue engine.
                                </p>
                                <Link
                                    href="/#contact"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
                                >
                                    Get a Free Audit
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>

                            {/* Background decoration */}
                            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                                <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl" />
                                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
