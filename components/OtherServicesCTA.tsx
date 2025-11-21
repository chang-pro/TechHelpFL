import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function OtherServicesCTA() {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Ask about our other services
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            We also offer Google Business Optimization, Google Ads Fixes, Website Development, and Custom Software solutions.
          </p>
          <Link
            href="/additional-services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-xl hover:bg-slate-800 dark:hover:bg-slate-100 transition-all hover:-translate-y-1 shadow-lg"
          >
            Explore Additional Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}


