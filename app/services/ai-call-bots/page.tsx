import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Call Bots / Voice Automation | Tech Help FL",
  description: "Round-the-clock call answering, qualification, and booking that feels human. AI voice agents for local business.",
};

export default function AiCallBotsPage() {
  return (
    <ServicePageTemplate
      title="AI Call Bots / Voice Automation"
      subtitle="Round-the-clock call answering, qualification, and booking that feels human."
      description="Deploy intelligent AI voice agents that can answer your phone, answer questions, qualify leads, and book appointments directly into your calendar. It's like having a 24/7 receptionist who never takes a break, sounds human, and handles unlimited concurrent calls."
      features={[
        "24/7 Call Answering",
        "Natural Language Processing (sounds human)",
        "Lead Qualification & Filtering",
        "Direct Calendar Booking integration",
        "CRM Data Entry automation",
        "Call Recording & Transcripts",
      ]}
      benefits={[
        {
          title: "24/7 Availability",
          description: "Capture leads after hours, weekends, and holidays.",
        },
        {
          title: "Scale Instantly",
          description: "Handle 10 or 100 calls simultaneously without hiring more staff.",
        },
        {
          title: "Cost Efficient",
          description: "A fraction of the cost of a full-time receptionist or call center.",
        },
      ]}
    />
  );
}

