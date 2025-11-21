import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Metadata } from "next";
import { Moon, Clock, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "After-Hours AI Receptionist - 24/7 Coverage | Tech Help FL",
  description: "Capture leads nights, weekends, and holidays. Your business is now open 24/7 with our AI receptionist.",
};

export default function AfterHoursPage() {
  return (
    <ServicePageTemplate
      title="After-Hours Receptionist"
      subtitle="Make money while you sleep. Open 24/7/365."
      description="Service emergencies and customer inquiries don't stick to a 9-to-5 schedule. With our After-Hours AI Receptionist, your business is effectively open 24/7. Capture emergency jobs, book appointments for the next morning, and answer questions while your competitors are sending callers to voicemail."
      features={[
        "24/7/365 Availability",
        "Emergency escalation routing",
        "Weekend & holiday coverage",
        "After-hours specific scripts",
        "Morning sync reports",
        "Voicemail elimination",
      ]}
      benefits={[
        {
          title: "Capture Emergency Revenue",
          description: "Be the first to answer for high-value emergency service calls at night.",
        },
        {
          title: "Work-Life Balance",
          description: "Enjoy your evenings and weekends knowing your business is being handled professionally.",
        },
        {
          title: "Competitive Advantage",
          description: "Stand out as the only local business that actually answers the phone at 8 PM.",
        },
      ]}
      icon={Moon}
      ctaText="Get 24/7 Coverage"
      ctaLink="#contact"
    />
  );
}
