import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Metadata } from "next";
import { ShieldAlert, PhoneOff, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Spam Call Blocking AI - Stop Robocalls | Tech Help FL",
  description: "Block 100% of spam and robocalls. Our AI screens calls so your phone only rings for real customers.",
};

export default function SpamBlockingPage() {
  return (
    <ServicePageTemplate
      title="Spam Call Blocking"
      subtitle="Your phone only rings for paying customers."
      description="Robocalls and spam are distractions that kill productivity. Our intelligent screening layer sits before your phone rings. It challenges unknown numbers, blocks known spam lists, and requires a simple human interaction (like pressing a key) to connect, ensuring 100% of robocalls are stopped dead in their tracks."
      features={[
        "AI Call Screening",
        "Global Spam List Blocking",
        "Robocall Challenge/Response",
        "Whitelist VIP Numbers",
        "Custom Block Lists",
        "Zero False Positives",
      ]}
      benefits={[
        {
          title: "Regain Focus",
          description: "Stop being interrupted by 'car warranty' calls 10 times a day.",
        },
        {
          title: "Cleaner Lines",
          description: "Ensure your lines are open for real customers, not tied up by bots.",
        },
        {
          title: "Peace of Mind",
          description: "Know that when the phone rings, it's actually business.",
        },
      ]}
      icon={ShieldAlert}
      ctaText="Block Spam Now"
      ctaLink="#contact"
    />
  );
}
