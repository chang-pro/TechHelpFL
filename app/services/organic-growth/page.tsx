import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cut Ads Dependency Packages | Tech Help FL",
  description: "Shift budget from paid ads to durable organic growth and retention systems. SEO & Database marketing.",
};

export default function OrganicGrowthPage() {
  return (
    <ServicePageTemplate
      title="Cut Ads Dependency Packages"
      subtitle="Shift budget from paid ads to durable organic growth and retention systems."
      description="Paid ads are getting more expensive and less effective. We help you pivot to sustainable, long-term growth strategies. By building your organic presence (SEO) and maximizing the value of your existing customer database (Retention Marketing), you can reduce your reliance on Facebook and Google ads while increasing profitability."
      features={[
        "Comprehensive SEO Strategy",
        "Database Reactivation Campaigns",
        "Content Marketing & Blogging",
        "Referral Program Setup",
        "Email Marketing Systems",
        "Organic Social Media Strategy",
      ]}
      benefits={[
        {
          title: "Lower CAC",
          description: "Organic leads and referrals have a significantly lower Cost Per Acquisition.",
        },
        {
          title: "Long-Term Asset",
          description: "SEO content and email lists are assets you own, not rent.",
        },
        {
          title: "Higher Quality Leads",
          description: "Inbound organic leads typically close at a higher rate than cold ad traffic.",
        },
      ]}
    />
  );
}

