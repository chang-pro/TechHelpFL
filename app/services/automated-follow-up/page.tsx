import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automated SMS & Email Follow-Up | Tech Help FL",
  description: "Missed-call text back, nurture campaigns, and CRM handoff so no lead slips away. Marketing automation experts.",
};

export default function AutomatedFollowUpPage() {
  return (
    <ServicePageTemplate
      title="Automated SMS & Email Follow-Up"
      subtitle="Missed-call text back, nurture campaigns, and CRM handoff so no lead slips away."
      description="Stop losing leads to slow response times. Our automation systems ensure every inquiry gets an immediate response, 24/7. From instant text-backs when you miss a call to long-term email nurture sequences, we build the systems that keep your pipeline full and your customers engaged without you lifting a finger."
      features={[
        "Missed-call text back automation",
        "Instant lead response via SMS & Email",
        "Long-term nurture sequences",
        "Review request automation",
        "Appointment reminders & confirmations",
        "CRM integration (GoHighLevel, HubSpot, etc.)",
      ]}
      benefits={[
        {
          title: "Never Miss a Lead",
          description: "Capture opportunities even when you're busy or sleeping.",
        },
        {
          title: "Increase Show Rates",
          description: "Automated reminders drastically reduce no-shows for appointments.",
        },
        {
          title: "Save Time",
          description: "Eliminate manual follow-up tasks and focus on closing deals.",
        },
      ]}
    />
  );
}

