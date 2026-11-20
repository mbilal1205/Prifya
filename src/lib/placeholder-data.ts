// ============================================================
// JANII G: PLACEHOLDER FILE
// Yahan se saara site content change hota hai.
// Components mein hardcoded text nahi hai — sab yahan se aata hai.
// Jab real data aaye, sirf yeh file update karo.
// ============================================================

// ------------------------------------------------------------
// PRODUCT
// ------------------------------------------------------------
export const placeholderProduct = {
  name: "Prifya Hair Serum",
  slug: "prifya-hair-serum",
  size: "100ml",
  price: 1499,
  compareAtPrice: 1999 as number | null, // JANII G: null rakho agar discount nahi dikhana
  currency: "Rs.",
  tagline: "Rooted in nature. Made for your hair.",
  taglineLines: ["Rooted in nature.", "Made for your hair."],
  subline:
    "One serum, thoughtfully made, for hair that feels soft and looks smooth. Free delivery across Pakistan. Pay on delivery.",
} as const;

// ------------------------------------------------------------
// NAVIGATION (desktop header + mobile tabs)
// ------------------------------------------------------------
export const placeholderNav = {
  // Desktop header links
  links: [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/our-story", label: "Our Story" },
    { href: "/faq", label: "FAQ" },
    { href: "/track", label: "Track Order" },
  ],
  // Mobile bottom tabs (excluding center Order Now + More)
  mobileTabs: {
    left: [
      { href: "/", label: "Home", icon: "home" as const },
      { href: "/shop", label: "Shop", icon: "shop" as const },
    ],
    right: [
      { href: "/track", label: "Track", icon: "track" as const },
    ],
  },
  // "More" bottom sheet links
  moreSheet: [
    { href: "/our-story", label: "Our Story" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
    { href: "/policies/shipping", label: "Shipping & Delivery" },
    { href: "/policies/returns", label: "Returns & Refunds" },
    { href: "/policies/privacy", label: "Privacy Policy" },
    { href: "/policies/terms", label: "Terms of Service" },
  ],
} as const;

// ------------------------------------------------------------
// ANNOUNCEMENT BAR
// ------------------------------------------------------------
export const placeholderAnnouncement = {
  segments: ["Free delivery across Pakistan", "Cash on Delivery", "Real confirmation call"],
} as const;

// ------------------------------------------------------------
// HOME PAGE
// ------------------------------------------------------------
export const placeholderHome = {
  // ========== HERO ==========
  hero: {
    eyebrow: `Hair Serum • ${placeholderProduct.size}`,
    tagline: placeholderProduct.tagline,
    subline: placeholderProduct.subline,
    ctaPrimary: "Order Now",
    ctaSecondary: "Our Story",
    trust: [
      "Free delivery across Pakistan",
      "Cash on Delivery",
      "Real confirmation call",
    ],
  },

  // ========== BENEFITS ==========
  benefits: {
    eyebrow: "Why Prifya",
    heading: {
      before: "Three things, done ",
      italic: "properly",
      after: ".",
    },
    subline:
      "We started with one serum and we're perfecting it before we add anything else. Here's what you can expect.",
    items: [
      {
        num: "01",
        title: "Nourish",
        description:
          "Plant-based oils and botanical extracts feed dry strands from root to tip — without weighing them down.",
      },
      {
        num: "02",
        title: "Smooth",
        description:
          "A lightweight formula that tames frizz and flyaways, leaving hair soft to the touch and easy to style.",
      },
      {
        num: "03",
        title: "Shine",
        description:
          "A subtle, healthy glow. Never greasy, never heavy — just the natural shine your hair already has, amplified.",
      },
    ],
  },

  // ========== HOW TO USE ==========
  howToUse: {
    eyebrow: "How to Use",
    heading: {
      before: "Three simple steps, ",
      italic: "every time",
      after: ".",
    },
    subline: "A small routine that fits into any day. No heat, no fuss.",
    steps: [
      {
        num: "01",
        title: "Prep",
        description:
          "Start with clean, towel-dried hair. A small amount goes a long way — no need to soak the strands.",
      },
      {
        num: "02",
        title: "Apply",
        description: `Take 2–3 drops of ${placeholderProduct.name} into your palms. Warm it between hands, then work through the mid-lengths and ends.`,
      },
      {
        num: "03",
        title: "Style",
        description:
          "Comb through gently to distribute evenly. Style as usual — or let it air-dry for a soft, natural finish.",
      },
    ],
    patchTest: {
      label: "First time?",
      text: "Do a patch test on a small area of skin before first use. If irritation occurs, discontinue use and contact us.",
    },
  },
  ingredients: {
    eyebrow: "Inside the bottle",
    heading: {
      before: "What goes ",
      italic: "in",
      after: ".",
    },
    subline:
      "A short, considered list. Every ingredient earns its place — nothing more than what your hair needs.",
    imageAlt: "Prifya Hair Serum — botanical texture close-up",
    keyIngredients: [
      { name: "Argan Oil", role: "Deep nourishment" },
      { name: "Jojoba Oil", role: "Balances scalp" },
      { name: "Vitamin E", role: "Protects & softens" },
      { name: "Rosemary Extract", role: "Supports strength" },
    ],
    fullInci: {
      label: "Full ingredient list (INCI)",
      text: "Aqua, Glycerin, Argania Spinosa (Argan) Kernel Oil, Simmondsia Chinensis (Jojoba) Seed Oil, Tocopherol (Vitamin E), Rosmarinus Officinalis (Rosemary) Leaf Extract, Panthenol, Sodium Hyaluronate, Phenoxyethanol, Ethylhexylglycerin, Parfum.",
    },
    suitableFor: {
      title: "Suitable for",
      text: "All hair types — especially dry, frizzy, or colour-treated hair.",
    },
    avoidIf: {
      title: "Avoid if",
      text: "You have a known allergy to any ingredient. Patch test on a small area before first use.",
    },
  },
    // ========== FAQ ==========
  faq: {
    eyebrow: "Questions",
    heading: {
      before: "Everything you might ",
      italic: "want to ask",
      after: ".",
    },
    subline:
      "Short, honest answers. If something is still unclear, message us on WhatsApp — we reply ourselves.",
    items: [
      {
        q: "How does Cash on Delivery work?",
        a: "Place your order, we confirm it by phone call and WhatsApp, and you pay the courier in cash when your parcel arrives. There is no extra COD fee.",
      },
      {
        q: "Is delivery really free?",
        a: "Yes. Delivery is free on every order, across Pakistan — no minimum, no hidden charges.",
      },
      {
        q: "Why will you call or WhatsApp me after I order?",
        a: "To confirm your name, address, and phone number so the parcel reaches you without delay. Orders are only dispatched after confirmation.",
      },
      {
        q: "How long does delivery take?",
        a: "Usually 3–5 working days for major cities and 5–7 working days for other areas after dispatch.",
      },
      {
        q: "How can I track my order?",
        a: "Use the Track Order page with your order number and phone, or use the tracking number we send on WhatsApp once your parcel is shipped.",
      },
      {
        q: "Can I return the serum?",
        a: "Opened or used bottles cannot be returned for change of mind. If your order is wrong, damaged, or defective, we will replace or refund it. See our Returns & Refunds page for the full policy.",
      },
      {
        q: "Is the serum suitable for my hair type?",
        a: "It is designed for all hair types — especially dry, frizzy, or colour-treated hair. We recommend a patch test on a small area of skin before first use. If irritation occurs, stop using and contact us.",
      },
      {
        q: "What if I have an allergic reaction?",
        a: "Stop using the product immediately and contact us on WhatsApp. We handle each case individually and will work with you on a fair resolution.",
      },
    ],
    contactCta: {
      text: "Still have questions?",
      subtext: "Message us on WhatsApp — a real person will reply.",
      button: "Chat on WhatsApp",
      href: "https://wa.me/923000000000", // JANII G: real number
    },
  },
    // ========== REVIEWS ==========
  reviews: {
    // JANII G: BLUEPRINT RULE — fake/khali reviews kabhi nahi.
    // Laun par real reviews na hon to `enabled: false` kar dein — section
    // poori tarah hide ho jayega. Jab 2-3 real reviews aayen, unhe neeche
    // `items` mein add karein aur `enabled: true` kar dein.
    // Distribution aur total ko real numbers se match rakhein.
    enabled: true,
    eyebrow: "Reviews",
    heading: {
      before: "Loved by ",
      italic: "real people",
      after: ".",
    },
    subline:
      "Real words from real customers. Unfiltered, unedited — the good and the honest.",
    average: 4.8,
    total: 4,
    distribution: [3, 1, 0, 0, 0] as const, // [5★, 4★, 3★, 2★, 1★]
    items: [
      // JANII G: PLACEHOLDER REVIEWS — launch se pehle:
      //   Option 1: real reviews se replace karein
      //   Option 2: `enabled: false` kar dein (section hide)
      {
        id: "r1",
        name: "Ayesha K.",
        city: "Karachi",
        rating: 5,
        date: "2026-11-10",
        title: "Soft, light, and actually works",
        body: "I was skeptical at first — most serums are either too greasy or do nothing. This one absorbs quickly and my hair feels softer without any weight. Frizz is noticeably better in a week.",
        verified: true,
      },
      {
        id: "r2",
        name: "Fatima S.",
        city: "Lahore",
        rating: 5,
        date: "2026-11-08",
        title: "No more flyaways",
        body: "Two drops on damp hair and I'm set. It doesn't make my hair look oily or heavy. The packaging is beautiful too — feels like a proper gift to yourself.",
        verified: true,
      },
      {
        id: "r3",
        name: "Hira M.",
        city: "Islamabad",
        rating: 5,
        date: "2026-11-05",
        title: "Ordered a second bottle",
        body: "Bought my first bottle last month. Loved it so much I ordered another for my sister. The COD process was smooth — got a WhatsApp message the same evening to confirm.",
        verified: true,
      },
      {
        id: "r4",
        name: "Zainab A.",
        city: "Faisalabad",
        rating: 4,
        date: "2026-11-01",
        title: "Gentle and honest",
        body: "I have a sensitive scalp and most products make it itchy. This one doesn't. Took about two weeks to see real shine, but the softness was immediate. Would recommend.",
        verified: true,
      },
    ],
    submitCta: {
      text: "Bought from us? We'd love to hear from you.",
      button: "Share your experience",
      // JANII G: PLACEHOLDER — Phase 2 mein review submission form aayega.
      // Abhi ke liye WhatsApp par route kar rahe hain.
      href: "https://wa.me/923000000000?text=Hi%2C%20I%20want%20to%20share%20my%20review%20for%20Prifya%20Hair%20Serum.",
    },
  },
    // ========== FINAL CTA ==========
  finalCta: {
    eyebrow: "One decision",
    headingLines: ["Rooted in nature.", "Made for your hair."],
    subline:
      "One serum. Free delivery across Pakistan. Pay cash when it arrives — we'll confirm on WhatsApp first.",
    primaryCta: {
      label: "Order Now",
      href: `/product/${placeholderProduct.slug}`,
    },
    secondaryCta: {
      label: "Our Story",
      href: "/our-story",
    },
    trust: [
      "Free delivery",
      "Cash on Delivery",
      "Real confirmation call",
    ],
  },
}
// ------------------------------------------------------------
// FOOTER
// ------------------------------------------------------------
export const placeholderFooter = {
  tagline: placeholderProduct.tagline,
  codBadge: "Cash on Delivery available",
  social: {
    whatsapp: "https://wa.me/923000000000", // JANII G: real number
    instagram: "https://instagram.com", // JANII G: real handle
  },
  sections: [
    {
      title: "Shop",
      links: [
        { href: "/shop", label: "All Products" },
        { href: `/product/${placeholderProduct.slug}`, label: "Hair Serum" },
        { href: "/track", label: "Track Order" },
        { href: "/our-story", label: "Our Story" },
      ],
    },
    {
      title: "Help",
      links: [
        { href: "/faq", label: "FAQ" },
        { href: "/contact", label: "Contact" },
        {
          href: "https://wa.me/923000000000",
          label: "WhatsApp",
          external: true,
        },
      ],
    },
    {
      title: "Legal",
      links: [
        { href: "/policies/shipping", label: "Shipping & Delivery" },
        { href: "/policies/returns", label: "Returns & Refunds" },
        { href: "/policies/privacy", label: "Privacy Policy" },
        { href: "/policies/terms", label: "Terms of Service" },
      ],
    },
  ],
  bottom: {
    copyright: "Prifya. All rights reserved.",
    madeIn: "Crafted with care in Pakistan",
    backToTop: "Back to top",
  },
} as const;



// ------------------------------------------------------------
// 404 NOT FOUND
// ------------------------------------------------------------
export const placeholderNotFound = {
  eyebrow: "Error 404",
  headingLines: ["This path has", "lost its way."],
  subline:
    "The page you're looking for doesn't exist, or may have moved somewhere new.",
  primaryCta: { label: "Back to Home", href: "/" },
  secondaryCta: { label: "Browse Shop", href: "/shop" },
  suggestionsLabel: "Maybe you were looking for",
  suggestions: [
    { label: "Hair Serum", href: `/product/${placeholderProduct.slug}` },
    { label: "Track Order", href: "/track" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  whatsappCta: {
    text: "Or message us on",
    href: "https://wa.me/923000000000", // JANII G: real number
  },
} as const;





// ------------------------------------------------------------
// SHOP PAGE
// ------------------------------------------------------------
export const placeholderShop = {
  eyebrow: "The Collection",
  heading: "One serum, thoughtfully made.",
  subline:
    "We chose to launch with a single product so we could focus on quality, clear labelling, and honest communication. New additions will follow the same standard.",
  productBadge: "100ml • Hair Serum",
} as const;




// ------------------------------------------------------------
// PRODUCT DETAIL PAGE (PDP)
// ------------------------------------------------------------
export const placeholderProductDetails = {
  benefits: [
    "Nourishes dry, tired strands",
    "Tames frizz and flyaways",
    "Adds a natural, healthy shine",
  ],
  trustBadges: [
    "Free delivery across Pakistan",
    "Cash on Delivery",
    "Real confirmation call",
  ],
  accordions: [
    {
      title: "Description",
      content: "A lightweight, plant-based hair serum designed for everyday care. It absorbs quickly without leaving a greasy residue, making your hair feel soft, smooth, and manageable. Suitable for all hair types, especially dry and frizzy hair.",
    },
    {
      title: "Key Ingredients",
      content: "Argan Oil (nourishment), Jojoba Oil (scalp balance), Vitamin E (protection), Rosemary Extract (strength).",
    },
    {
      title: "How to Use",
      content: "Apply 2–3 drops to clean, damp hair. Warm between palms and distribute evenly through the mid-lengths and ends. Do not rinse. Use daily or as needed.",
    },
    {
      title: "Full Ingredients (INCI)",
      content: "Aqua, Glycerin, Argania Spinosa (Argan) Kernel Oil, Simmondsia Chinensis (Jojoba) Seed Oil, Tocopherol (Vitamin E), Rosmarinus Officinalis (Rosemary) Leaf Extract, Panthenol, Sodium Hyaluronate, Phenoxyethanol, Ethylhexylglycerin, Parfum.",
    },
    {
      title: "Suitable for / Avoid if",
      content: "Suitable for all hair types. Avoid if you have a known allergy to any of the listed ingredients. Patch test on a small area of skin before first use.",
    },
    {
      title: "Shipping & Returns",
      content: "Free delivery across Pakistan. Cash on Delivery available. Opened or used bottles cannot be returned for change of mind. Damaged or defective items will be replaced.",
    },
  ],
} as const;