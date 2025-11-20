// Content configuration - editable without touching components
export const content = {
  brand: {
    name: "Tech Help FL",
    tagline: "Local SEO & Automation Studio",
    address: "Daytona Beach, Ormond Beach, Port Orange",
    phone: "(386) 387-8150",
    email: "hello@techhelpflorida.com",
    calendly: "https://calendly.com/techhelpflorida", // Placeholder, update if user provides specific link
  },
  home: {
    hero: {
      headline: "Get more customers from Google without wasting money on ads",
      subtitle:
        "I help Central Florida businesses rank #1 on Google, automate follow-ups with SMS + call bots, and ship high-converting websites and custom tools.",
      cta1: { text: "Book a Free Google Ranking Audit", href: "#contact" },
      cta2: { text: "Call Now", href: "tel:3863878150" },
      image: "/images/hero-combined.png",
      highlights: [
        "Local SEO + Google Business Profile optimization",
        "Automated SMS, email, and voice follow-up",
        "Conversion-first websites and custom software",
      ],
    },
    problem: {
      title: "Why the usual marketing isn't working",
      intro:
        "Most local businesses keep paying for ads while their Google Business Profile and follow-up systems sit untouched.",
      points: [
        {
          title: "Ads keep getting pricier",
          description: "You spend more every month while leads stay flat.",
        },
        {
          title: "Google profile isn't optimized",
          description: "Missing posts, reviews, and categories push you below competitors.",
        },
        {
          title: "Leads fall through the cracks",
          description: "No missed-call text back or SMS follow-up means lost jobs.",
        },
        {
          title: "Sites look dated",
          description: "Slow, outdated sites hurt rankings and conversion.",
        },
      ],
    },
    about: {
      title: "Built by a Computer Science grad who cares about local wins",
      bio: "I'm a Computer Science graduate focused on helping Central Florida businesses dominate Google, automate lead flow, and look modern online. No big agency fluff - just direct help, fast implementation, and pricing that makes sense while I build case studies.",
      image: "/images/about-voxel.png",
      badges: ["Local to Daytona", "SEO + Automation", "Web + Software Builds"],
    },
    services: [
      {
        title: "Google Optimization (Local SEO + GBP)",
        description: "Rank in the map pack with tuned categories, posts, reviews, schema, and citations.",
        image: "/images/service-maps.png",
        slug: "google-optimization",
      },
      {
        title: "Lead Gen Websites & Redesigns",
        description: "Modern, fast, mobile-first pages built to convert traffic into booked calls.",
        image: "/images/hero-combined.png",
        slug: "lead-gen-websites",
      },
      {
        title: "Automated SMS & Email Follow-Up",
        description: "Missed-call text back, nurture campaigns, and CRM handoff so no lead slips away.",
        image: "/images/service-automation.png",
        slug: "automated-follow-up",
      },
      {
        title: "AI Call Bots / Voice Automation",
        description: "Round-the-clock call answering, qualification, and booking that feels human.",
        image: "/images/hero.png",
        slug: "ai-call-bots",
      },
      {
        title: "Custom Software & Integrations",
        description: "Booking tools, dashboards, and API integrations tailored to how you work.",
        image: "/images/about-voxel.png", // Reusing workspace image
        slug: "custom-software",
      },
      {
        title: "Cut Ads Dependency Packages",
        description: "Shift budget from paid ads to durable organic growth and retention systems.",
        image: "/images/service-ads.png",
        slug: "organic-growth",
      },
    ],
    caseStudies: [
      {
        title: "Launch Partner: Home Services",
        result: "Map Pack Wins",
        stat: "New in 30 days",
        description: "Optimized Google Business Profile, citations, and reviews to push into the top 3. Building out full case study now.",
      },
      {
        title: "Website Redesign",
        result: "Doubled conversions",
        stat: "Launch pricing",
        description: "Rebuilt a dated site into a fast, conversion-focused page with clear CTAs and automation behind it.",
      },
      {
        title: "Automation Rollout",
        result: "Zero missed leads",
        stat: "SMS + call bots",
        description: "Missed-call text back, nurture sequences, and reporting so every inquiry is answered instantly.",
      },
    ],
    process: [
      {
        step: "1",
        title: "Free audit",
        description: "Quick look at your Google presence, traffic, and current follow-up.",
      },
      {
        step: "2",
        title: "Custom strategy",
        description: "A simple plan: SEO actions, website fixes, and automation gaps.",
      },
      {
        step: "3",
        title: "Build + implement",
        description: "I execute the high-impact items first so you see movement fast.",
      },
      {
        step: "4",
        title: "Automation setup",
        description: "SMS, email, and voice bots so leads are handled instantly.",
      },
      {
        step: "5",
        title: "Measure & scale",
        description: "Rank tracking, call analytics, and continuous improvements.",
      },
    ],
    freeHelp: {
      headline: "Launch offer: free Google ranking audit + plan",
      subtitle:
        "I'm building local case studies. I'll record a short video with the 3 fastest fixes for your Google profile, website, and follow-up.",
      cta: "Send me my audit",
    },
    contact: {
      headline: "Get your free audit & plan",
      subtitle: "Tell me about your business. I'll send a quick video and options that fit your budget.",
      form: {
        name: "Your name",
        phone: "Phone number",
        message: "What do you want to improve?",
        submit: "Get My Audit",
      },
    },
    faq: [
      {
        question: "How fast can I see results?",
        answer: "Most local SEO fixes and automation wins show within 30-60 days. I prioritize quick wins first.",
      },
      {
        question: "Do I need reviews to rank?",
        answer: "They help a ton. I'll set up a simple review flow so you can collect them fast without being pushy.",
      },
      {
        question: "What does this cost?",
        answer: "I'm offering launch pricing while I build case studies. We can start with a focused sprint and grow from there.",
      },
      {
        question: "Can you work with any industry?",
        answer: "Service businesses, restaurants, medical, real estate, trades, and local shops all benefit from strong Google visibility and fast follow-up.",
      },
    ],
  },
}
