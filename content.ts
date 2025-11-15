// Content configuration - editable without touching components
export const content = {
  brand: {
    name: "Tech Help Florida",
    address: "Serving Central Florida – Daytona Beach, Ormond Beach, Port Orange, & Surrounding Areas",
    phone: "(386) 387-8150",
    email: "hello@techhelpflorida.com",
  },
  home: {
    hero: {
      headline: "Get Found on Google. Get More Customers. + We Fix Your Tech.",
      subtitle: "Small business owners: Get found on Google Maps so customers call and visit. Residents: Patient, in-home tech help for computers, phones, WiFi, printers, and smart home devices. Local service you can trust.",
      cta1: { text: "Call or Text (386) 387-8150", href: "tel:3863878150" },
      cta2: { text: "Get Tech Help", href: "/tech-support" },
      cta3: { text: "Get More Customers", href: "/business" },
    },
    features: [
      {
        title: "In-Home Tech Support",
        description: "We come to your home and fix any tech problem. Computers, phones, WiFi, printers, smart home devices - we handle it all. Patient, friendly help that makes sense.",
        image: "/images/hero-combined.png",
        cta: { text: "Get Tech Help", href: "/tech-support" },
      },
      {
        title: "Get Found on Google Maps",
        description: "Your business shows up when people search nearby. More customers find you on Google Maps. More calls. More walk-ins. More business.",
        image: "/images/five star.png",
        cta: { text: "Get More Customers", href: "/business" },
      },
    ],
    services: [
      {
        title: "Get Found on Google Maps",
        image: "/images/five star.png",
        description: "Your business appears when customers search nearby. More calls and walk-ins.",
      },
      {
        title: "In-Home Tech Support",
        image: "/images/hero-combined.png",
        description: "We come to you. Patient help with computers, phones, WiFi, and more.",
      },
      {
        title: "Smart Home Setup",
        image: "/images/smart home.png",
        description: "Ring doorbells, Alexa, smart thermostats, lights, and security systems.",
      },
      {
        title: "Photo Digitization",
        image: "/images/camera.png",
        description: "Turn your old photos into digital files you can share and save.",
      },
    ],
    testimonials: [
      {
        name: "Sarah Johnson",
        role: "Small Business Owner",
        text: "Tech Help Florida got my business showing up on Google Maps. Now customers find me when they search nearby. My phone rings more, and I get more walk-ins. It's made a real difference.",
        rating: 5,
      },
      {
        name: "Robert Martinez",
        role: "Customer",
        text: "So patient and friendly. They came to my house and fixed my WiFi, set up my smart TV, and showed me how to video call my grandkids. No problem was too small for them.",
        rating: 5,
      },
      {
        name: "Margaret Chen",
        text: "They set up my whole smart home - Ring doorbell, Alexa, and smart lights. Now I can control everything from my phone. They made it so simple!",
        rating: 5,
      },
    ],
    cta: {
      headline: "Ready to Get Started?",
      button: { text: "Call or Text (386) 387-8150", href: "tel:3863878150" },
    },
  },
  techSupport: {
    hero: {
      headline: "Patient, In-Home Tech Support",
      subtitle: "We solve ANY tech problem. Phones, WiFi, scams, TV, passwords, smart homes, computers - we've got you covered.",
      tagline: "Friendly, patient help for seniors, families, and anyone who feels overwhelmed by technology.",
      cta: { text: "Schedule Your Free Tech Support Call", href: "/contact" },
    },
    trustStrip: [
      "Background-checked",
      "Verified local provider",
      "5-star rated on Google & Thumbtack",
      "Serving Daytona, Ormond Beach & Central Florida",
    ],
    problemsSolved: [
      "My phone isn't working and I don't know why.",
      "My computer is slow and I'm worried it's broken.",
      "I can't remember my passwords.",
      "My TV / Wi-Fi keeps disconnecting.",
      "My printer won't print anything.",
      "I need help setting up a new device.",
      "My emails aren't sending.",
      "Help me organize my photos.",
      "I just want someone patient to walk me through things.",
    ],
    packages: [
      {
        name: "New Device Setup",
        price: "$50–$100",
        description: "I'll set it up, personalize it, transfer everything over, and teach you how to use it.",
        features: ["Phone, tablet, computer, TV", "Wi-Fi + email setup", "App installation", "Password organization", "1-on-1 lessons included"],
      },
      {
        name: "Computer Health Check",
        price: "$120",
        description: "Speed up your computer, remove viruses, and make it run like new.",
        features: ["Deep cleanup", "Virus + malware removal", "Speed optimization", "Software updates", "Backup setup"],
      },
      {
        name: "Smart Home Basics",
        price: "$90–$120",
        description: "Make your home smarter and easier to use.",
        features: ["TV + streaming setup", "Security cameras", "Doorbell cams", "Alexa / Google Home", "Home Wi-Fi improvement"],
      },
      {
        name: "Tech Butler",
        price: "$150/month",
        description: "Ongoing support for seniors and busy families.",
        features: ["Unlimited support visits (15 minutes each)", "Priority scheduling", "20% discount on full sessions", "Device monitoring + backups", "Family notifications (optional)"],
      },
      {
        name: "Photo Digitization",
        price: "$200–$500",
        description: "Turn old photos into digital memories.",
        features: ["Scan & organize", "Digitize prints & albums", "Transfer to USB / cloud", "Beautifully labeled folders", "Optional slideshow creation"],
      },
    ],
    hourly: {
      rate: "$75-$100/hr",
      description: "For one-off tasks or custom projects",
    },
    process: [
      {
        step: "1",
        title: "Schedule",
        description: "Pick a time that works for you (same-day available).",
      },
      {
        step: "2",
        title: "We Help You",
        description: "I fix your device, answer questions, and make everything easier to use.",
      },
      {
        step: "3",
        title: "Follow-Up",
        description: "Free advice + optional monthly checkups.",
      },
    ],
    whySeniorsLove: [
      "I explain things patiently",
      "I never rush",
      "No complicated tech words",
      "I guarantee a fix or you don't pay",
      "I'm local — text or call anytime",
    ],
    trustBoosters: [
      "Background checked",
      "Computer Science student",
      "Supporting seniors for years",
      "Friendly, patient, and honest",
      "Same-day availability",
    ],
    testimonials: [
      {
        name: "Eleanor Williams",
        text: "They set up my iPad and taught me how to FaceTime my children. So patient and kind! No judgment, just help.",
        rating: 5,
      },
      {
        name: "James Thompson",
        text: "Fixed my computer and WiFi in under an hour. No pressure to buy anything. Just honest help when I needed it.",
        rating: 5,
      },
      {
        name: "Margaret Chen",
        text: "The smart home package is amazing. I can control everything from my phone now! They made it so simple.",
        rating: 5,
      },
    ],
  },
  business: {
    hero: {
      headline: "Get Found on Google Maps",
      subtitle: "Show up in 'near me' searches. Dominate the local map pack. Outrank your competitors.",
      cta: { text: "Show Up on Google - Free Audit", href: "/contact" },
    },
    package: {
      title: "Google Maps Domination",
      features: [
        "Complete Google Business Profile overhaul",
        "Keyword optimization + category tuning",
        "Review system setup",
        "Photo + listing enhancements",
        "Weekly ranking tracking",
        "Lead and message setup",
        "Monthly insights dashboard",
      ],
    },
    pricing: [
      {
        name: "One-Time Setup",
        price: "$500-$800",
        priceNote: "Save $200 This Month",
        description: "Complete Google Business Profile optimization",
        features: ["Full profile rebuild", "Keyword optimization", "Photo cleanup", "Category tuning", "Competitor audit"],
        roiGuarantee: true,
      },
      {
        name: "Review System",
        price: "$400",
        priceNote: "Generates 50+ reviews monthly",
        description: "Automated review request system",
        features: ["Review automation system", "Templates + setup", "Tracking"],
        roiGuarantee: true,
        mostPopular: true,
      },
      {
        name: "Monthly Local SEO",
        price: "$400-$800/mo",
        priceNote: "Avg. clients see $8,000+ return",
        description: "Ongoing optimization & management",
        features: ["Ranking improvements", "Weekly updates", "Photo posting", "Reporting dashboard"],
        roiGuarantee: true,
      },
    ],
    secondaryServices: [
      "Google Maps optimization",
      "Review management",
      "Website fixes/updates",
      "Tech consulting for businesses",
    ],
    results: [
      { metric: "Visibility", value: "📈", description: "Stronger visibility" },
      { metric: "Calls", value: "📞", description: "More calls during tourist season" },
      { metric: "Directions", value: "🧭", description: "More direction requests" },
      { metric: "Reviews", value: "⭐", description: "Higher review confidence" },
    ],
    faq: [
      {
        question: "How fast can I see results?",
        answer: "Most clients notice more calls and direction requests within the first 30 days. You'll typically see early improvements like increased visibility and more map interactions. Full optimization results usually show within 60-90 days as your profile gains more reviews and better rankings. The key is consistent optimization and steady review growth.",
        defaultOpen: true,
      },
      {
        question: "What if it doesn't work?",
        answer: "We offer a 90-day money-back guarantee if you don't see measurable improvement. We're confident in our process because we use proven strategies that work for local businesses. If you're not happy with the results, we'll refund your investment.",
      },
      {
        question: "Do you guarantee page one rankings?",
        answer: "While we can't guarantee specific positions (Google's algorithm changes regularly), we use proven strategies that consistently improve visibility for our clients. Our focus is on getting you into the top 3 results where most customers click. We work to improve all the factors that matter: reviews, relevance, and trust signals.",
      },
      {
        question: "What if I don't have many reviews yet?",
        answer: "That's totally fine! We'll help you build a review generation system that makes it easy for satisfied customers to leave authentic reviews. This is one of the most important factors for ranking higher and converting tourists into customers. We'll guide you through the process and help you collect reviews naturally.",
      },
      {
        question: "Can you help with multiple locations?",
        answer: "Absolutely! We can manage multiple Google Business Profiles for businesses with several locations. Each location gets its own optimization strategy tailored to its specific area, competition, and local market. We'll create a plan that works for all your locations.",
      },
      {
        question: "Do you also fix websites?",
        answer: "Yes! While our primary focus is getting you found on Google Maps, we can also help with website fixes, updates, and general tech needs for your business. A strong website complements your Google Maps presence and helps convert visitors into customers.",
      },
    ],
  },
  contact: {
    headline: "Get In Touch",
    subtitle: "Tell us about your needs and we'll get back to you within 24 hours.",
    calendly: {
      text: "Schedule a Call",
      url: "https://calendly.com/techhelpflorida",
    },
  },
}
