import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Metadata } from "next";
import { PhoneCall, Mic2, Clock, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Receptionist - Answers Every Call Instantly | Tech Help FL",
  description: "Never miss a lead again. Our AI receptionist answers calls in under 1 second with a natural human voice, 24/7/365.",
};

export default function AIReceptionistPage() {
  return (
    <ServicePageTemplate
      title="AI Receptionist That Answers Every Call"
      subtitle="Instant answer. Natural voice. Zero missed opportunities."
      description="Your new AI employee answers every single call in under 1 second. It speaks with a natural, friendly human voice that represents your brand perfectly. Unlike a human receptionist, it never takes a break, never gets sick, and can handle unlimited simultaneous calls at once. Stop losing revenue to voicemail."
      features={[
        "Answers in < 1 second",
        "Natural, human-like voice engine",
        "Handles unlimited concurrent calls",
        "Customizable greeting & script",
        "Recognizes returning callers",
        "Never sleeps, takes breaks, or quits",
      ]}
      benefits={[
        {
          title: "100% Answer Rate",
          description: "Capture every single lead, even when your lines are busy or it's after hours.",
        },
        {
          title: "Instant Trust",
          description: "Callers trust businesses that answer immediately. Stop them from calling your competitor.",
        },
        {
          title: "Zero Staffing Headaches",
          description: "No hiring, training, or managing. Your AI agent is ready to work 24/7.",
        },
      ]}
      icon={PhoneCall}
      ctaText="Hear a Demo"
      ctaLink="#contact"
    />
  );
}
