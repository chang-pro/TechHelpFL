"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";

const locations = [
  {
    city: "Restaurants & Cafes",
    region: "Hospitality",
    description: "Book tables automatically, handle takeout questions, and send reminders so hosts can focus on guests.",
    keywords: ["Table booking", "Takeout questions", "SMS reminders"],
  },
  {
    city: "Medical & Dental Offices",
    region: "Healthcare",
    description: "Schedule patients, answer common questions, and reduce front desk workload without adding staff.",
    keywords: ["Appointment scheduling", "Patient FAQs", "Reduced hold times"],
  },
  {
    city: "HVAC, Roofing & Contractors",
    region: "Home Services",
    description: "Capture emergency calls instantly, collect job details, and send them to your phone via SMS.",
    keywords: ["Emergency calls", "Job intake", "Instant SMS"],
  },
  {
    city: "Real Estate Teams",
    region: "Property",
    description: "Qualify leads, schedule showings, and take messages after hours so no inquiry slips away.",
    keywords: ["Lead qualification", "Showing schedules", "After-hours coverage"],
  },
  {
    city: "Marinas & Charters",
    region: "Tourism",
    description: "Book fishing trips, jet ski rentals, and tours even when you're on the water or out of service.",
    keywords: ["Charter bookings", "Rental scheduling", "Off-hours calls"],
  },
  {
    city: "Home Services",
    region: "Trades",
    description: "Plumbers, electricians, painters - AI books jobs while you're on-site and away from the phone.",
    keywords: ["Job booking", "Dispatch notes", "24/7 response"],
  },
];

export default function LocationsSection() {
  return (
    <section id="locations" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Built for Local Florida Businesses
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
              Whether you're a busy restaurant or a roofing company, AI automation helps you book more jobs - without adding staff.
              </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {locations.map((location, index) => (
            <motion.div
              key={location.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white/5 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 dark:border-white/10 hover:border-orange-500/30 dark:hover:border-orange-500/30 transition-all hover:shadow-lg"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 dark:bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {location.city}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {location.region}
                  </p>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                {location.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {location.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="text-xs px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                  >
                    {keyword}
                  </span>
                ))}
              </div>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors group-hover:gap-3"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-orange-500/10 dark:bg-orange-500/10 border border-orange-500/20 dark:border-orange-500/20 rounded-2xl backdrop-blur">
            <Phone className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            <div className="text-center sm:text-left">
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                Don't see your industry? We serve all local service businesses.
              </p>
              <a
                href="tel:3863878150"
                className="text-lg font-bold text-slate-900 dark:text-white hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
              >
                Call (386) 387-8150
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
