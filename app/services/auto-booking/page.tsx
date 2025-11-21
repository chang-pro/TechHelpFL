import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Metadata } from "next";
import { CalendarCheck, Clock, BellRing } from "lucide-react";

export const metadata: Metadata = {
  title: "Auto-Booking AI - Schedule Appointments Automatically | Tech Help FL",
  description: "Our AI integrates with your calendar to check availability and book appointments while you sleep. Fully automated scheduling.",
};

export default function AutoBookingPage() {
  return (
    <ServicePageTemplate
      title="Books Appointments Automatically"
      subtitle="Fill your calendar without lifting a finger."
      description="Turn phone calls into confirmed appointments automatically. Our AI connects directly to your calendar (Google, Outlook, etc.) to check real-time availability. It negotiates a time with the caller, books the slot, and sends confirmation details to both parties instantly. It's like having a full-time scheduling coordinator working 24/7."
      features={[
        "Real-time calendar integration",
        "Smart time-slot negotiation",
        "Instant booking confirmation",
        "Handles rescheduling & cancellations",
        "Collects necessary intake details",
        "Prevents double-booking",
      ]}
      benefits={[
        {
          title: "Full Calendars",
          description: "Wake up to a calendar full of qualified appointments, not just leads.",
        },
        {
          title: "Hands-Free Scheduling",
          description: "Eliminate the back-and-forth phone tag. The AI handles the logistics for you.",
        },
        {
          title: "Reduced No-Shows",
          description: "Immediate confirmation and calendar invites lock in the commitment.",
        },
      ]}
      icon={CalendarCheck}
      ctaText="Start Booking Automatically"
      ctaLink="#contact"
    />
  );
}
