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
import { ScrollAnimationWrapper } from "@/components/ScrollAnimationWrapper";

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
      
      <ScrollAnimationWrapper animation="fade-up" delay={0.1}>
        <ProblemSection />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper animation="fade-up" delay={0.1}>
        <ServicesCards />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper animation="fade-up" delay={0.1}>
        <PricingSection />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper animation="fade-up" delay={0.1}>
        <HowItWorks />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper animation="fade-up" delay={0.1}>
        <AboutMe />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper animation="fade-up" delay={0.1}>
        <LocationsSection />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper animation="fade-up" delay={0.1}>
        <FAQSection />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper animation="scale-up" delay={0.1}>
        <FreeHelp />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper animation="fade-up" delay={0.1}>
        <ContactSection />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper animation="slide-left" delay={0.1}>
        <OtherServicesCTA />
      </ScrollAnimationWrapper>

      <Footer />
    </main>
  );
}
