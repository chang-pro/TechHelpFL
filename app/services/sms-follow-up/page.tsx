import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Metadata } from "next";
import { MessageSquare, Smartphone, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Instant SMS Follow-Ups - Missed Call Text Back | Tech Help FL",
  description: "Convert missed calls into conversations. Our AI instantly texts callers who hang up or when you can't answer.",
};

export default function SMSFollowUpPage() {
  return (
    <ServicePageTemplate
      title="Instant SMS Follow-Ups"
      subtitle="Turn missed calls into text conversations instantly."
      description="In today's world, many customers prefer texting. Our system automatically sends a friendly SMS to anyone who calls your business, summarizing their booking details or offering to help via text if the call drops. This 'Missed Call Text Back' feature saves countless leads that would otherwise call the next business on Google."
      features={[
        "Immediate 'Missed Call Text Back'",
        "Booking summaries via SMS",
        "Two-way AI text conversations",
        "Link sharing (payment, booking, etc.)",
        "Review request texts",
        "After-hours auto-replies",
      ]}
      benefits={[
        {
          title: "Save Every Lead",
          description: "62% of calls to small businesses go unanswered. Capture them instantly via text.",
        },
        {
          title: "Preferred Communication",
          description: "Meet customers where they are. 90% of texts are read within 3 minutes.",
        },
        {
          title: "Higher Engagement",
          description: "Keep the conversation going even after the phone call ends.",
        },
      ]}
      ctaText="Automate Follow-Up"
    />
  );
}
