import { Navbar } from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutMe from "@/components/AboutMe";
import ServicesCards from "@/components/ServicesCards";
import HowItWorks from "@/components/HowItWorks";
import LocationsSection from "@/components/LocationsSection";
import FreeHelp from "@/components/FreeHelp";
import ContactSection from "@/components/ContactSection";
import ProblemSection from "@/components/ProblemSection";
import FAQSection from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <ServicesCards />
      <HowItWorks />
      <AboutMe />
      <LocationsSection />
      <FAQSection />
      <FreeHelp />
      <ContactSection />
      <Footer />
    </main>
  );
}
