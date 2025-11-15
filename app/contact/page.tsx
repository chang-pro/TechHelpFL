"use client"

import { useState } from "react"
import { content } from "@/content"
import { Phone, Mail, MapPin, CheckCircle, AlertCircle } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  const [smsConsent, setSmsConsent] = useState(false)
  const [consent, setConsent] = useState(false)
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormErrors({})
    setSubmitStatus("idle")

    const formData = new FormData(e.currentTarget)
    const errors: Record<string, string> = {}

    // Validate required fields
    if (!formData.get("name")) {
      errors.name = "Name is required"
    }
    if (!formData.get("email")) {
      errors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.get("email") as string)) {
      errors.email = "Please enter a valid email address"
    }
    if (!formData.get("phone")) {
      errors.phone = "Phone number is required"
    }
    if (!formData.get("message")) {
      errors.message = "Message is required"
    }
    if (!smsConsent) {
      errors.sms_consent = "SMS consent is required"
    }
    if (!consent) {
      errors.consent = "Privacy policy consent is required"
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      })

      if (response.ok) {
        setSubmitStatus("success")
        e.currentTarget.reset()
        setSmsConsent(false)
        setConsent(false)
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Hidden ghost form for Netlify detection */}
      <form name="contact" data-netlify="true" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="tel" name="phone" />
        <textarea name="message" />
        <input type="checkbox" name="sms_consent" />
        <input type="checkbox" name="consent" />
      </form>

      <div className="min-h-screen bg-slate-50 dark:bg-gray-900 px-4 pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-24">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 md:mb-20">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-gray-50 mb-4">
              Get In Touch
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Need tech support or want to grow your business with Google? Send me a message and I'll get back to you within 24 hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            {/* Main Form Section */}
            <div className="lg:col-span-2 space-y-6">
              {/* Introduction Section */}
              <div className="rounded-3xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:border-orange-300 dark:hover:border-orange-600 transition-all duration-200 p-6 md:p-8">
                <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  <strong className="text-gray-900 dark:text-gray-50">I respond within the same day.</strong> Whether you need tech help, business services, help with device issues, or Google Maps ranking help, I'm here to assist.
                </p>
                <div className="space-y-2">
                  <p className="text-sm md:text-base font-semibold text-gray-900 dark:text-gray-50 mb-2">Ways I Can Help:</p>
                  <ul className="space-y-2 text-sm md:text-base text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent dark:text-orange-500 flex-shrink-0 mt-0.5" />
                      <span>Tech support (phones, computers, tablets, Wi-Fi, devices)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent dark:text-orange-500 flex-shrink-0 mt-0.5" />
                      <span>Smart home setup</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent dark:text-orange-500 flex-shrink-0 mt-0.5" />
                      <span>Account recovery & login help</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent dark:text-orange-500 flex-shrink-0 mt-0.5" />
                      <span>Google Business Profile setup & ranking help</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent dark:text-orange-500 flex-shrink-0 mt-0.5" />
                      <span>Review system setup for businesses</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Form Card */}
              <div className="rounded-3xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:border-orange-300 dark:hover:border-orange-600 transition-all duration-200 p-8 md:p-10 mt-0">

                {/* Form */}
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  action="/contact"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  noValidate
                >
                  {/* Hidden inputs for Netlify */}
                  <input type="hidden" name="form-name" value="contact" />
                  
                  {/* Honeypot field */}
                  <div className="hidden" aria-hidden="true">
                    <label>
                      Don't fill this out if you're human: <input name="bot-field" />
                    </label>
                  </div>

                  {/* Name Field */}
                  <div>
                    <Label
                      htmlFor="name"
                      className="block text-base font-semibold mb-2"
                    >
                      Name <span className="text-orange-500 dark:text-orange-500">*</span>
                    </Label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className={`
                        w-full rounded-lg border bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-50 px-3 py-2 text-sm
                        ${formErrors.name 
                          ? "border-red-500 dark:border-red-500 focus-visible:ring-red-500/20" 
                          : "border-gray-300 dark:border-gray-600 focus-visible:border-orange-500 dark:focus-visible:border-orange-500 focus-visible:ring-orange-500/20"
                        }
                        focus-visible:outline-none focus-visible:ring-[3px] transition-colors
                      `}
                      placeholder="Your full name"
                    />
                    {formErrors.name && (
                      <p className="mt-1.5 text-sm text-red-500 dark:text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {formErrors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <Label
                      htmlFor="email"
                      className="block text-base font-semibold mb-2"
                    >
                      Email <span className="text-orange-500 dark:text-orange-500">*</span>
                    </Label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className={`
                        w-full rounded-lg border bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-50 px-3 py-2 text-sm
                        ${formErrors.email 
                          ? "border-red-500 dark:border-red-500 focus-visible:ring-red-500/20" 
                          : "border-gray-300 dark:border-gray-600 focus-visible:border-orange-500 dark:focus-visible:border-orange-500 focus-visible:ring-orange-500/20"
                        }
                        focus-visible:outline-none focus-visible:ring-[3px] transition-colors
                      `}
                      placeholder="your.email@example.com"
                    />
                    {formErrors.email && (
                      <p className="mt-1.5 text-sm text-red-500 dark:text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {formErrors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div>
                    <Label
                      htmlFor="phone"
                      className="block text-base font-semibold mb-2"
                    >
                      Phone Number <span className="text-orange-500 dark:text-orange-500">*</span>
                    </Label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className={`
                        w-full rounded-lg border bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-50 px-3 py-2 text-sm
                        ${formErrors.phone 
                          ? "border-red-500 dark:border-red-500 focus-visible:ring-red-500/20" 
                          : "border-gray-300 dark:border-gray-600 focus-visible:border-orange-500 dark:focus-visible:border-orange-500 focus-visible:ring-orange-500/20"
                        }
                        focus-visible:outline-none focus-visible:ring-[3px] transition-colors
                      `}
                      placeholder="(386) 555-1234"
                    />
                    {formErrors.phone && (
                      <p className="mt-1.5 text-sm text-red-500 dark:text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {formErrors.phone}
                      </p>
                    )}
                  </div>

                  {/* SMS Consent Checkbox */}
                  <div>
                    <div className="flex items-start gap-3">
                      <input
                        type="hidden"
                        name="sms_consent"
                        value={smsConsent ? "on" : "off"}
                      />
                      <Checkbox
                        id="sms_consent"
                        checked={smsConsent}
                        onCheckedChange={(checked) => {
                          setSmsConsent(checked === true)
                          if (formErrors.sms_consent) {
                            setFormErrors(prev => {
                              const newErrors = { ...prev }
                              delete newErrors.sms_consent
                              return newErrors
                            })
                          }
                        }}
                        required
                        className="mt-1"
                      />
                      <Label
                        htmlFor="sms_consent"
                        className="text-base leading-relaxed cursor-pointer"
                      >
                        By checking this box, I consent to receive appointment text messages from Tech Help FL (3-5 msgs per appointment). Message and data rates may apply. Reply STOP to opt out.{" "}
                        <a
                          href="/legal#sms"
                          className="text-orange-500 dark:text-orange-400 hover:text-orange-600 dark:hover:text-orange-300 underline focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-500 rounded"
                        >
                          SMS Terms
                        </a>
                        . <span className="text-orange-500 dark:text-orange-500">*</span>
                      </Label>
                    </div>
                    {formErrors.sms_consent && (
                      <p className="mt-1.5 ml-7 text-sm text-red-500 dark:text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {formErrors.sms_consent}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <Label
                      htmlFor="message"
                      className="block text-base font-semibold mb-2"
                    >
                      Message <span className="text-orange-500 dark:text-orange-500">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className={`
                        ${formErrors.message 
                          ? "border-red-500 dark:border-red-500 focus-visible:ring-red-500/20" 
                          : ""
                        }
                        resize-none
                      `}
                      placeholder="Tell me about your needs..."
                    />
                    {formErrors.message && (
                      <p className="mt-1.5 text-sm text-red-500 dark:text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {formErrors.message}
                      </p>
                    )}
                  </div>

                  {/* Privacy Policy & Terms Consent Checkbox */}
                  <div>
                    <div className="flex items-start gap-3">
                      <input
                        type="hidden"
                        name="consent"
                        value={consent ? "on" : "off"}
                      />
                      <Checkbox
                        id="consent"
                        checked={consent}
                        onCheckedChange={(checked) => {
                          setConsent(checked === true)
                          if (formErrors.consent) {
                            setFormErrors(prev => {
                              const newErrors = { ...prev }
                              delete newErrors.consent
                              return newErrors
                            })
                          }
                        }}
                        required
                        className="mt-1"
                      />
                      <Label
                        htmlFor="consent"
                        className="text-base leading-relaxed cursor-pointer"
                      >
                        I agree to the{" "}
                        <a
                          href="/legal"
                          className="text-orange-500 dark:text-orange-400 hover:text-orange-600 dark:hover:text-orange-300 underline focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-500 rounded"
                        >
                          Privacy Policy and Terms & Conditions
                        </a>
                        . <span className="text-orange-500 dark:text-orange-500">*</span>
                      </Label>
                    </div>
                    {formErrors.consent && (
                      <p className="mt-1.5 ml-7 text-sm text-red-500 dark:text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {formErrors.consent}
                      </p>
                    )}
                  </div>

                  {/* Submit Status Messages */}
                  {submitStatus === "success" && (
                    <div className="rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4">
                      <p className="text-sm text-green-800 dark:text-green-200 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        Message sent successfully! I'll get back to you within 24 hours.
                      </p>
                    </div>
                  )}
                  {submitStatus === "error" && (
                    <div className="rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4">
                      <p className="text-sm text-red-800 dark:text-red-200 flex items-center gap-2">
                        <AlertCircle className="w-5 h-5" />
                        There was an error sending your message. Please try again or call (386) 387-8150.
                      </p>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center rounded-lg px-8 py-3 text-base font-semibold transition-all duration-200 bg-orange-500 dark:bg-orange-500 text-white hover:bg-orange-600 dark:hover:bg-orange-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400 dark:focus:ring-orange-600 disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px]"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>

                  {/* Reassurance Text */}
                  <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-4">
                    You'll receive a reply within 24 hours. Most messages are answered the same day.
                  </p>

                  {/* Trust Indicators */}
                  <div className="flex flex-wrap justify-center items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Local</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Trusted</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Fast Response</span>
                  </div>
                </form>
              </div>
            </div>

            {/* Sidebar - Alternate Contact Options */}
            <div className="lg:col-span-1">
              <div className="rounded-3xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:border-orange-300 dark:hover:border-orange-600 transition-all duration-200 p-8 sticky top-24">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-gray-50 mb-6">
                  Prefer to talk by phone?
                </h2>
                
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-orange-100 dark:bg-orange-500/20 p-3 flex-shrink-0">
                      <Phone className="w-6 h-6 text-accent dark:text-orange-500" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Call or text</p>
                      <a
                        href="tel:3863878150"
                        className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-50 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                      >
                        (386) 387-8150
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-orange-100 dark:bg-orange-500/20 p-3 flex-shrink-0">
                      <Mail className="w-6 h-6 text-accent dark:text-orange-500" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Email</p>
                      <a
                        href="mailto:tech@techhelpfl.com"
                        className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-50 hover:text-orange-500 dark:hover:text-orange-400 transition-colors break-all"
                      >
                        tech@techhelpfl.com
                      </a>
                    </div>
                  </div>

                  {/* Service Area */}
                  <div className="flex items-start gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="rounded-full bg-orange-100 dark:bg-orange-500/20 p-3 flex-shrink-0">
                      <MapPin className="w-6 h-6 text-accent dark:text-orange-500" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Service Area</p>
                      <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                        Daytona Beach, Ormond Beach, Port Orange, Holly Hill & surrounding areas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
