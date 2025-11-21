import { content } from "@/content";

export const metadata = {
  title: "TechHelpFL Brand Snapshot | AI Receptionist",
  description:
    "Plain-HTML brand snapshot for TechHelpFL: AI receptionist, services, pricing, process, contact, and all brand imagery.",
};

const galleryImages = [
  { src: "/images/logo.png", alt: "TechHelpFL logo" },
  { src: "/images/logotransparent.png", alt: "TechHelpFL logo transparent" },
  { src: "/images/hero-voxel.png", alt: "Voxel hero illustration" },
  { src: "/images/hero-combined.png", alt: "Combined hero illustration" },
  { src: "/images/hero.png", alt: "Hero illustration" },
  { src: "/images/hero-seniors.png", alt: "Hero seniors illustration" },
  { src: "/images/about-voxel.png", alt: "About section voxel image" },
  { src: "/images/service-maps.png", alt: "Service - maps" },
  { src: "/images/service-automation.png", alt: "Service - automation" },
  { src: "/images/service-ads.png", alt: "Service - ads" },
  { src: "/images/highrating.png", alt: "High rating graphic" },
  { src: "/images/lowratings.png", alt: "Low ratings graphic" },
  { src: "/images/five star.png", alt: "Five star graphic" },
  { src: "/images/camera.png", alt: "Camera icon" },
  { src: "/images/my chaarcter.png", alt: "Character illustration" },
  { src: "/images/professional.jpeg", alt: "Professional portrait" },
  { src: "/images/smart home.png", alt: "Smart home graphic" },
];

export default function BrandPage() {
  const services = content.home.services;
  const plans = content.home.pricing.plans;
  const steps = content.home.process;

  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-12 text-slate-900">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase text-slate-500">Brand snapshot</p>
        <h1 className="text-3xl font-bold">TechHelpFL — AI Receptionist & Call Booking</h1>
        <p className="text-lg max-w-4xl">
          TechHelpFL is a Central Florida AI receptionist that answers every call in under one
          second, books appointments automatically, sends SMS confirmations, and screens spam so
          local businesses never miss revenue. Built for restaurants, contractors, medical offices,
          and service businesses across Daytona Beach, Ormond Beach, Port Orange, and Palm Coast.
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          <span className="font-semibold">Phone:</span> <span>{content.brand.phone}</span>
          <span className="font-semibold">Email:</span>{" "}
          <a href={`mailto:${content.brand.email}`} className="text-blue-600">
            {content.brand.email}
          </a>
          <span className="font-semibold">Service area:</span> <span>{content.brand.address}</span>
        </div>
      </header>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Core Offer</h2>
        <p className="max-w-4xl">
          AI receptionist that answers instantly, sounds human, books and confirms appointments,
          texts callers, blocks spam, and routes only complex calls to staff. Uses your 386/407
          local number and runs 24/7 so you never miss a lead.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Services</h2>
        <ul className="grid gap-3 md:grid-cols-2">
          {services.map((service) => (
            <li key={service.slug} className="rounded-xl border border-slate-200 p-4">
              <div className="text-lg font-semibold">{service.title}</div>
              <p className="text-sm text-slate-600">{service.description}</p>
              <p className="mt-2 text-xs text-slate-500">Image: {service.image}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Pricing</h2>
        <p className="text-sm text-slate-600">Setup: $99 one-time.</p>
        <div className="grid gap-4 md:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className="rounded-xl border border-slate-200 p-4">
              <div className="text-lg font-semibold">{plan.name}</div>
              <div className="text-2xl font-bold text-blue-700">{plan.price}</div>
              <p className="text-sm text-slate-600 mb-2">{plan.description}</p>
              <ul className="space-y-1 text-sm text-slate-700">
                {plan.features.map((feat) => (
                  <li key={feat}>• {feat}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Process</h2>
        <ol className="space-y-2 text-sm text-slate-700">
          {steps.map((step) => (
            <li key={step.step}>
              <span className="font-semibold">Step {step.step}:</span> {step.title} —{" "}
              <span className="text-slate-600">{step.description}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Brand Assets & Images (public/images)</h2>
        <p className="text-sm text-slate-600">
          Direct image URLs are listed for crawler visibility. All assets live under
          /public/images.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {galleryImages.map((img) => (
            <figure key={img.src} className="rounded-lg border border-slate-200 p-3 bg-white">
              <img src={img.src} alt={img.alt} className="w-full rounded-md" />
              <figcaption className="mt-2 text-xs text-slate-600 break-all">{img.src}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Tone & Audience</h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Tone: friendly, confident, local, service-focused.</li>
          <li>Audience: local service businesses (restaurants, contractors, medical, home services).</li>
          <li>Value: never miss calls, book instantly, confirm by SMS, block spam, 24/7 coverage.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <ul className="space-y-1 text-sm text-slate-700">
          <li>Phone: {content.brand.phone}</li>
          <li>Email: {content.brand.email}</li>
          <li>Service area: {content.brand.address}</li>
          <li>Calendar: {content.brand.calendly}</li>
        </ul>
      </section>
    </main>
  );
}
