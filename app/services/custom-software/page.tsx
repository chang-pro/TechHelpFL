import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Software & Integrations | Tech Help FL",
  description: "Booking tools, dashboards, and API integrations tailored to how you work. Custom dev solutions.",
};

export default function CustomSoftwarePage() {
  return (
    <ServicePageTemplate
      title="Custom Software & Integrations"
      subtitle="Booking tools, dashboards, and API integrations tailored to how you work."
      description="Sometimes off-the-shelf software doesn't fit. We build custom web applications, internal tools, and integrations to solve your specific business problems. Whether it's connecting two disconnected systems, building a custom client portal, or automating a complex workflow, we code the solution."
      features={[
        "Custom Web App Development",
        "API Development & Integration",
        "Client Portals & Dashboards",
        "Internal Business Tools",
        "Database Design & Management",
        "Legacy System Modernization",
      ]}
      benefits={[
        {
          title: "Perfect Fit",
          description: "Software built exactly for your workflow, not the other way around.",
        },
        {
          title: "Streamlined Ops",
          description: "Eliminate manual data entry and copy-pasting between apps.",
        },
        {
          title: "Own Your Tech",
          description: "Stop paying monthly fees for generic SaaS tools you barely use.",
        },
      ]}
    />
  );
}

