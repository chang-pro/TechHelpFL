import { Navbar } from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutMe from "@/components/AboutMe";
import ServicesCards from "@/components/ServicesCards";
import PricingSection from "@/components/PricingSection";
import HowItWorks from "@/components/HowItWorks";
import LocationsSection from "@/components/LocationsSection";
import FreeHelp from "@/components/FreeHelp";
import ContactSection from "@/components/ContactSection";
import ProblemSection from "@/components/ProblemSection";
import FAQSection from "@/components/FAQSection";
import OtherServicesCTA from "@/components/OtherServicesCTA";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://techhelpflorida.com",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <ServicesCards />
      <PricingSection />
      <HowItWorks />
      <AboutMe />
      <LocationsSection />
      <FAQSection />
      <FreeHelp />
      <ContactSection />
      <OtherServicesCTA />
      <Footer />
    </main>
  );
}
