import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Metadata } from "next";
import { GitMerge, UserCheck, Headphones } from "lucide-react";

export const metadata: Metadata = {
  title: "Smart Call Transfers - AI Routing | Tech Help FL",
  description: "AI that handles the routine and transfers the complex. Only speak to customers when they truly need you.",
};

export default function SmartTransfersPage() {
  return (
    <ServicePageTemplate
      title="Only Transfers When Needed"
      subtitle="Let AI handle the routine. You handle the VIPs."
      description="Not every call needs your personal attention. Our AI handles the routine tasks—booking, FAQs, pricing, status checks—completely on its own. It intelligently detects when a caller has a complex issue or specifically requests a manager, and only then transfers the call to you or your staff with a full summary of the conversation so far."
      features={[
        "Intelligent Intent Detection",
        "Warm Transfers with Context",
        "Department Routing",
        "VIP Client Recognition",
        "Fallback to Human Staff",
        "Custom Transfer Rules",
      ]}
      benefits={[
        {
          title: "Maximum Efficiency",
          description: "Spend your time solving high-value problems, not answering 'what are your hours?'.",
        },
        {
          title: "Better Customer Service",
          description: "Routine questions get instant answers; complex issues get human experts.",
        },
        {
          title: "Reduced Staff Burnout",
          description: "Protect your team from repetitive, low-value phone calls.",
        },
      ]}
      icon={GitMerge}
      ctaText="Optimize Your Calls"
      ctaLink="#contact"
    />
  );
}
