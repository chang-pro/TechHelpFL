import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Optimization (Local SEO + GBP) | Tech Help FL",
  description: "Rank in the map pack with tuned categories, posts, reviews, schema, and citations. Daytona Beach Local SEO experts.",
};

export default function GoogleOptimizationPage() {
  return (
    <ServicePageTemplate
      title="Google Optimization (Local SEO + GBP)"
      subtitle="Rank in the map pack with tuned categories, posts, reviews, schema, and citations."
      description="Our Google Optimization service is designed to get your business found by local customers exactly when they are looking for your services. We optimize your Google Business Profile (GBP) and website to signal relevance and authority to Google, pushing you up the rankings in the 'Map Pack' and local search results."
      features={[
        "Google Business Profile (GBP) complete optimization",
        "Local keyword research & strategy",
        "Citation building & management",
        "Review generation campaigns",
        "Schema markup implementation",
        "Weekly GBP posts & updates",
      ]}
      benefits={[
        {
          title: "Higher Visibility",
          description: "Appear in the top 3 map results where 70% of local clicks happen.",
        },
        {
          title: "More Inbound Calls",
          description: "Customers trust highly-ranked local businesses and call directly from Maps.",
        },
        {
          title: "Competitive Edge",
          description: "Outrank competitors who are neglecting their local search presence.",
        },
      ]}
    />
  );
}

