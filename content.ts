// Content configuration - editable without touching components
export const content = {
  brand: {
    name: "TechHelpFL",
    tagline: "AI VoIP Appointment Setter",
    address: "Daytona Beach, Ormond Beach, Port Orange, Palm Coast",
    phone: "(386) 387-8150",
    email: "hello@techhelpflorida.com",
    calendly: "https://calendly.com/techhelpflorida",
  },
  home: {
    hero: {
      headline: "Never miss another customer call again.",
      subtitle:
        "AI that books appointments 24/7 for your business. Your new AI receptionist answers every call instantly, books appointments, sends confirmations, and captures leads - even after hours.",
      cta1: { text: "Try Live Demo", href: "#contact" },
      cta2: { text: "Book Setup Call", href: "tel:3863878150" },
      image: "/images/hero-combined.png",
      highlights: [
        "Answers in under 1 second",
        "Books and confirms automatically",
        "Local to Central Florida",
      ],
    },
    problem: {
      title: "Experience Your New AI Receptionist",
      intro:
        "Watch how our AI instantly answers calls, books appointments, and sends SMS confirmations - no missed calls, no voicemails, no lost customers.",
      placeholder: "Video demo coming soon - real AI call booking in action.",
      points: [
        {
          title: "Answers in under 1 second",
          description: "Every caller is greeted instantly by a natural voice.",
        },
        {
          title: "Sounds fully human",
          description: "Polished, friendly tone that feels like a real receptionist.",
        },
        {
          title: "Books appointments automatically",
          description: "Checks availability, schedules, reschedules, and sends confirmations.",
        },
        {
          title: "Sends SMS confirmations",
          description: "Instant text confirmations and reminders so customers show up.",
        },
        {
          title: "Works 24/7",
          description: "After-hours, weekends, and holidays are fully covered.",
        },
        {
          title: "Uses your 386/407 local number",
          description: "Keep your local presence while adding AI speed.",
        },
        {
          title: "Powered by Twilio + AI",
          description: "Reliable telephony with smart automation behind it.",
        },
      ],
    },
    about: {
      title: "Local to Daytona. Built for Local Businesses.",
      bio: "TechHelpFL is a Florida-based automation company helping restaurants, contractors, medical offices, and service businesses turn every incoming call into a booked appointment. We combine Twilio, Vapi, and advanced AI to deliver a reliable 24/7 receptionist that never sleeps.",
      image: "/images/about-voxel.png",
      badges: ["AI phone automation", "Daytona & nearby cities", "Twilio + Vapi + AI"],
    },
    services: [
      {
        title: "AI Picks Up Every Call",
        description: "Your AI receptionist answers instantly with a natural human voice - no voicemail, no hold music, no missed opportunities.",
        image: "/images/service-maps.png",
        slug: "google-optimization",
      },
      {
        title: "Books Appointments Automatically",
        description: "It checks your availability, books appointments, reschedules, cancels, and sends instant confirmations to customers.",
        image: "/images/hero-combined.png",
        slug: "lead-gen-websites",
      },
      {
        title: "Instant SMS Follow-Ups",
        description: "If you miss a call, the AI texts the caller within seconds with a customizable message and summary.",
        image: "/images/service-automation.png",
        slug: "automated-follow-up",
      },
      {
        title: "After-Hours Receptionist",
        description: "Your business is open 24/7 - nights, weekends, and holidays. Customers can book anytime.",
        image: "/images/hero.png",
        slug: "ai-call-bots",
      },
      {
        title: "Spam Call Blocking",
        description: "Stops robocalls before they reach you using intelligent screening and simple press-to-connect.",
        image: "/images/about-voxel.png", // Reusing workspace image
        slug: "custom-software",
      },
      {
        title: "Only Transfers When Needed",
        description: "If someone needs a real human, the system transfers them directly to you or your staff.",
        image: "/images/service-ads.png",
        slug: "organic-growth",
      },
    ],
    pricing: {
      title: "Simple, Transparent Pricing",
      subtitle: "Pay monthly. Cancel anytime. No long-term contracts.",
      plans: [
        {
          name: "Starter",
          price: "$299/mo",
          description: "Perfect for small businesses",
          features: [
            "24/7 AI phone agent",
            "SMS confirmations",
            "Calls answered instantly",
            "Up to 300 minutes",
          ],
        },
        {
          name: "Growth",
          price: "$499/mo",
          description: "Our most popular plan",
          features: [
            "Everything in Starter",
            "Up to 1,000 minutes",
            "Review request automation",
            "Lead qualification",
            "Multi-location routing",
          ],
        },
        {
          name: "Pro",
          price: "$799/mo",
          description: "Full automation",
          features: [
            "Unlimited minutes",
            "Priority support",
            "CRM integrations",
            "Custom AI voice and behavior",
          ],
        },
      ],
      setup: "Setup: $99 one-time.",
    },
    caseStudies: [
      {
        title: "After-hours coverage",
        result: "No missed calls",
        stat: "24/7 booking",
        description: "AI receptionist keeps booking jobs overnight and on weekends so every caller is handled.",
      },
      {
        title: "Human-quality voice",
        result: "Sounds real",
        stat: "0 awkward pauses",
        description: "Natural voice and routing scripts tuned for local service businesses.",
      },
      {
        title: "Instant follow-up",
        result: "Text + confirm",
        stat: "Under 1 second",
        description: "Immediate SMS confirmations and reminders so customers show up ready.",
      },
    ],
    process: [
      {
        step: "1",
        title: "15-minute setup call",
        description: "Share your hours, services, and how you want calls handled.",
      },
      {
        step: "2",
        title: "Local number configured",
        description: "We set up or port your 386/407 number and call routing.",
      },
      {
        step: "3",
        title: "Train your AI receptionist",
        description: "Upload FAQs, booking rules, and tone so it sounds like your brand.",
      },
      {
        step: "4",
        title: "Go live in days",
        description: "AI answers every call, books appointments, and sends confirmations.",
      },
      {
        step: "5",
        title: "Optimize & report",
        description: "Call summaries, spam filtering, and tweaks based on recordings.",
      },
    ],
    freeHelp: {
      headline: "Ready to stop missing calls?",
      subtitle:
        "Try the live demo or book a setup call. It only takes 15 minutes to get your AI receptionist online.",
      cta: "Try Live Demo",
    },
    contact: {
      headline: "Book your AI receptionist setup call",
      subtitle: "Tell us about your business, hours, and how you want calls booked. We'll get your AI receptionist live fast.",
      form: {
        name: "Your name",
        phone: "Phone number",
        message: "Call routing notes",
        submit: "Book Setup Call",
      },
    },
    faq: [
      {
        question: "How fast does the AI pick up?",
        answer: "Calls are answered in under one second with a natural, human-sounding voice.",
      },
      {
        question: "Can it book into my calendar?",
        answer: "Yes. It checks availability, books, reschedules, cancels, and sends confirmations automatically.",
      },
      {
        question: "What about spam calls?",
        answer: "Intelligent screening blocks robocalls and uses press-to-connect so only real callers get through.",
      },
      {
        question: "How long does setup take?",
        answer: "Most businesses go live within days after a 15-minute setup call and quick script training.",
      },
    ],
  },
}
