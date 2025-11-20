import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lead Gen Websites & Redesigns | Tech Help FL",
  description: "Modern, fast, mobile-first pages built to convert traffic into booked calls. Web design for Volusia County businesses.",
};

export default function LeadGenWebsitesPage() {
  return (
    <ServicePageTemplate
      title="Lead Gen Websites & Redesigns"
      subtitle="Modern, fast, mobile-first pages built to convert traffic into booked calls."
      description="Your website shouldn't just look good—it should work. We build high-performance websites focused on one goal: converting visitors into leads. Using modern technology (Next.js), we ensure your site is lightning fast, ranks well on Google, and provides a seamless experience on mobile devices."
      features={[
        "Custom design tailored to your brand (no generic templates)",
        "Mobile-first responsive development",
        "Lightning-fast page load speeds (Core Web Vitals optimized)",
        "Conversion rate optimization (CRO) best practices",
        "SEO-friendly structure & clean code",
        "Easy-to-update content management",
      ]}
      benefits={[
        {
          title: "Maximize Conversions",
          description: "Turn more of your existing traffic into paying customers with strategic layouts.",
        },
        {
          title: "Rank Better",
          description: "Google loves fast, well-coded sites. Our tech stack gives you an SEO head start.",
        },
        {
          title: "Look Professional",
          description: "Build trust instantly with a polished, modern digital storefront.",
        },
      ]}
    />
  );
}

