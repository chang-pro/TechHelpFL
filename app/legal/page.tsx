"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/Section"
import { Shield, FileText, DollarSign, AlertCircle, MessageCircle, Phone, Mail, Globe } from "lucide-react"

export default function LegalPage() {
  return (
    <>
      <section className="pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-20 bg-gradient-to-b from-slate-50 dark:from-gray-900 to-white dark:to-gray-900">
        <Section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-gray-50 leading-tight mb-6">
              Legal & Policies
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              Simple, clear policies designed to protect our customers and ensure fair, honest service.
            </p>
            
            {/* Why This Matters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-3xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:border-orange-300 dark:hover:border-orange-600 transition-all duration-200 p-8 md:p-10 mt-8 text-left"
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-gray-50 mb-4">
                Why This Matters
              </h2>
              <div className="space-y-4 text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  We have clear policies to protect you and ensure transparency. Our policies safeguard your privacy, define fair service expectations, and establish honest communication. This is a real, transparent business you can trust.
                </p>
                <p>
                  We respect your privacy, protect your data, and treat every customer with fairness and respect. These policies are designed to help you feel confident and secure when working with us.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </Section>
      </section>

      <Section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto space-y-12">
          
          {/* Privacy Policy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:border-orange-300 dark:hover:border-orange-600 transition-all duration-200 p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-accent dark:text-orange-500" />
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-gray-50">
                Privacy Policy
              </h2>
            </div>
            
            <div className="space-y-8 text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Tech Help FL respects your privacy. Here's how we handle your information:
              </p>

              <div className="border-l-4 border-orange-500 dark:border-orange-400 pl-6">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-50 mb-4">Information We Collect</h3>
                <p className="mb-3">
                  We only collect the information needed to provide our services:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 dark:text-orange-400 mt-1">•</span>
                    <span>Name</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 dark:text-orange-400 mt-1">•</span>
                    <span>Phone number</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 dark:text-orange-400 mt-1">•</span>
                    <span>Email address</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 dark:text-orange-400 mt-1">•</span>
                    <span>Device information (for tech support)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 dark:text-orange-400 mt-1">•</span>
                    <span>Business information (for Google listing optimization)</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-500 dark:border-orange-400 pl-6">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-50 mb-4">How We Use Your Information</h3>
                <p className="mb-3">
                  Your information is only used to:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 dark:text-orange-400 mt-1">•</span>
                    <span>Schedule appointments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 dark:text-orange-400 mt-1">•</span>
                    <span>Provide services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 dark:text-orange-400 mt-1">•</span>
                    <span>Communicate about your service needs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 dark:text-orange-400 mt-1">•</span>
                    <span>Send appointment reminders and service updates</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-500 dark:border-orange-400 pl-6">
                <h2 id="sms" className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-50 mb-4">SMS/Text Message Communications</h2>
                <p className="mb-4">
                  When you schedule an appointment with Tech Help FL, you may opt-in to receive appointment-related text messages.
                </p>

                <p className="mb-3 font-semibold text-gray-900 dark:text-gray-50">
                  What Messages You'll Receive:
                </p>
                <p className="mb-3">
                  By opting in, you consent to receive:
                </p>
                <ul className="space-y-2 ml-4 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 dark:text-orange-400 mt-1">•</span>
                    <span>Appointment confirmation messages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 dark:text-orange-400 mt-1">•</span>
                    <span>Appointment reminder notifications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 dark:text-orange-400 mt-1">•</span>
                    <span>Arrival notifications ("We're on our way!")</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 dark:text-orange-400 mt-1">•</span>
                    <span>Service completion confirmations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 dark:text-orange-400 mt-1">•</span>
                    <span>Rescheduling or cancellation notifications</span>
                  </li>
                </ul>
                <p className="mt-4">
                  Messages may be sent using an automated system.
                </p>

                <p className="mb-3 font-semibold text-gray-900 dark:text-gray-50">
                  How to Opt-In:
                </p>
                <ul className="space-y-2 ml-4 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 dark:text-orange-400 mt-1">•</span>
                    <span><strong>WEBSITE:</strong> When booking through our contact form at techhelpfl.com/contact, you can check the SMS consent box to receive text reminders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 dark:text-orange-400 mt-1">•</span>
                    <span><strong>PHONE:</strong> When scheduling by phone at (386) 387-8150, you'll be asked if you'd like to receive text reminders and can verbally consent</span>
                  </li>
                </ul>

                <p className="mb-4 font-semibold text-gray-900 dark:text-gray-50">
                  Your Consent is Voluntary:
                </p>
                <p className="mb-6">
                  You are not required to consent to receive text messages as a condition of service. You can still schedule appointments without opting in to SMS notifications.
                </p>

                <p className="mb-3 font-semibold text-gray-900 dark:text-gray-50">
                  Opt-Out Anytime:
                </p>
                <p className="mb-3">
                  You can stop receiving text messages at any time by:
                </p>
                <ul className="space-y-2 ml-4 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 dark:text-orange-400 mt-1">•</span>
                    <span>Replying STOP to any message</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 dark:text-orange-400 mt-1">•</span>
                    <span>Calling us at (386) 387-8150</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 dark:text-orange-400 mt-1">•</span>
                    <span>Emailing tech@techhelpfl.com</span>
                  </li>
                </ul>
                <p className="mb-6">
                  For help with text messages, reply HELP or contact us directly.
                </p>

                <p className="mb-3 font-semibold text-gray-900 dark:text-gray-50">
                  Message Frequency & Charges:
                </p>
                <p className="mb-3">
                  You may receive up to 3-5 messages per appointment (confirmation, reminder, arrival notification, completion). Message and data rates may apply depending on your mobile carrier plan.
                </p>
                <p className="mb-6">
                  Carriers are not liable for delayed or undelivered messages.
                </p>

                <p className="mb-3 font-semibold text-gray-900 dark:text-gray-50">
                  Data Security:
                </p>
                <p>
                  Your phone number is stored securely and will never be sold or shared with third parties. We only use it to communicate about your scheduled services.
                </p>
              </div>

              <div className="border-l-4 border-orange-500 dark:border-orange-400 pl-6">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-50 mb-4">Data Protection</h3>
                <p>
                  Your information is stored securely using industry-standard security measures. You may request deletion of your information at any time by contacting us.
                </p>
              </div>

              <div className="border-l-4 border-orange-500 dark:border-orange-400 pl-6">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-50 mb-4">Cookies</h3>
                <p>
                  Our website may use basic cookies for analytics and performance. No personal data is tracked or stored via cookies.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Terms & Conditions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:border-orange-300 dark:hover:border-orange-600 transition-all duration-200 p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-8 h-8 text-accent dark:text-orange-500" />
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-gray-50">
                Terms & Conditions
              </h2>
            </div>
            
            <div className="space-y-8 text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <div className="border-l-4 border-orange-500 dark:border-orange-400 pl-6">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-50 mb-4">Services</h3>
                <p>
                  Tech Help FL provides tech support, troubleshooting, device setup, photo digitization, and Google listing optimization. I always do my best to help, but I cannot guarantee specific outcomes.
                </p>
              </div>

              <div className="border-l-4 border-orange-500 dark:border-orange-400 pl-6">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-50 mb-4">Client Responsibilities</h3>
                <p className="mb-3">Clients are responsible for:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 dark:text-orange-400 mt-1">•</span>
                    <span>Backing up devices before any work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 dark:text-orange-400 mt-1">•</span>
                    <span>Providing accurate information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 dark:text-orange-400 mt-1">•</span>
                    <span>Ensuring required passwords or access are available</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-500 dark:border-orange-400 pl-6">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-50 mb-4">Payment</h3>
                <p>
                  Payment is due at the time of service unless otherwise agreed in advance.
                </p>
              </div>

              <div className="border-l-4 border-orange-500 dark:border-orange-400 pl-6">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-50 mb-4">Cancellations</h3>
                <p>
                  Appointments canceled less than 12 hours before the scheduled time may incur a cancellation fee.
                </p>
              </div>

              <div className="border-l-4 border-orange-500 dark:border-orange-400 pl-6">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-50 mb-4">Home Visits</h3>
                <p>
                  Home visits must be safe and accessible. I reserve the right to decline a service at any location for safety reasons.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Service Disclaimer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-3xl bg-orange-50 dark:bg-orange-900/20 border-2 border-orange-200 dark:border-orange-800 shadow-lg p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-gray-50">
                Service Disclaimer
              </h2>
            </div>
            
            <div className="space-y-6 text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p className="font-semibold text-gray-900 dark:text-gray-50">
                To ensure transparency:
              </p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 dark:text-orange-400 mt-1 font-bold">•</span>
                  <span>Google ranking results cannot be guaranteed.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 dark:text-orange-400 mt-1 font-bold">•</span>
                  <span>Review outcomes cannot be guaranteed.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 dark:text-orange-400 mt-1 font-bold">•</span>
                  <span>Some tech issues may not be repairable due to hardware failure.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 dark:text-orange-400 mt-1 font-bold">•</span>
                  <span>Some devices or software may not be compatible with certain services.</span>
                </li>
              </ul>
              <p className="mt-4 font-semibold text-gray-900 dark:text-gray-50">
                I always provide honest recommendations based on what is realistically possible.
              </p>
            </div>
          </motion.div>

          {/* Refund / Service Policy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-3xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:border-orange-300 dark:hover:border-orange-600 transition-all duration-200 p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <DollarSign className="w-8 h-8 text-accent dark:text-orange-500" />
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-gray-50">
                Refund / Service Policy
              </h2>
            </div>
            
            <div className="space-y-8 text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                I want you to feel confident and satisfied with every service.
              </p>

              <div className="border-l-4 border-orange-500 dark:border-orange-400 pl-6">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-50 mb-4">If I Cannot Solve the Problem</h3>
                <p>
                  If I cannot solve the issue, there is no charge, unless work has already been completed successfully.
                </p>
              </div>

              <div className="border-l-4 border-orange-500 dark:border-orange-400 pl-6">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-50 mb-4">Partial Work</h3>
                <p>
                  If partial work is completed but full repair isn't possible, only the completed portion is billed.
                </p>
              </div>

              <div className="border-l-4 border-orange-500 dark:border-orange-400 pl-6">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-50 mb-4">Completed Work</h3>
                <p className="font-semibold text-gray-900 dark:text-gray-50 mb-2">
                  Completed work (Google listing optimization, tech repairs, digitization, device setup, etc.) is non-refundable, as the service time and labor have been fully delivered.
                </p>
              </div>

              <div className="border-l-4 border-orange-500 dark:border-orange-400 pl-6">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-50 mb-4">Concerns</h3>
                <p>
                  If you ever have concerns about a service, contact me and I will work with you to fix the issue.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Communication Policy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="rounded-3xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:border-orange-300 dark:hover:border-orange-600 transition-all duration-200 p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <MessageCircle className="w-8 h-8 text-accent dark:text-orange-500" />
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-gray-50">
                Communication Policy
              </h2>
            </div>
            
            <div className="space-y-6 text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                I respond to messages as quickly as possible (typically within the same day).
              </p>
              <p>
                Service hours may vary based on availability.
              </p>
              <p>
                Emergency after-hours services may incur additional fees.
              </p>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="rounded-3xl bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-2 border-orange-200 dark:border-orange-800 shadow-lg p-8 md:p-10"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-gray-50 mb-6">
              Questions About These Policies?
            </h2>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              If you have ANY questions, please reach out:
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-orange-600 dark:text-orange-400 flex-shrink-0" />
                <a href="tel:3863878150" className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-50 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                  📞 (386) 387-8150
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-orange-600 dark:text-orange-400 flex-shrink-0" />
                <a href="mailto:help@techhelpflorida.com" className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-50 hover:text-orange-600 dark:hover:text-orange-400 transition-colors break-all">
                  📧 help@techhelpflorida.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-6 h-6 text-orange-600 dark:text-orange-400 flex-shrink-0" />
                <a href="/contact" className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-50 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                  🌐 techhelpfl.com/contact
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </Section>
    </>
  )
}
