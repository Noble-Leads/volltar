export type IconName = "bolt" | "lightbulb" | "home" | "wrench" | "fire" | "camera";

export type Service = {
  slug: string;
  title: string;
  blurb: string;
  icon: IconName;
  featured?: boolean;
  /** Portfolio case study linked from the card. */
  portfolioSlug?: string;
  /** Optional card thumbnail under /src/assets/services/ — overrides portfolio cover. */
  cardImage?: string;
  /** CSS object-position for the card thumbnail, e.g. "center 30%". */
  cardImagePosition?: string;
  /** Optional before/after slider on the service card image area. */
  cardBeforeAfter?: {
    before: string;
    after: string;
    beforeAlt: string;
    afterAlt: string;
  };
  examples: string[];
};

export const services: Service[] = [
  {
    slug: "smart-home-lighting-cctv",
    title: "Lighting, CCTV & Home Tech",
    blurb:
      "The work I focus on most: CCTV and security, lighting done properly, HiFi and AV setup, plus networks, WiFi and home cloud if you want storage or remote access sorted without the faff.",
    icon: "camera",
    featured: true,
    portfolioSlug: "cctv-camera-install",
    cardImage: "smart-home-lighting-cctv.jpg",
    examples: [
      "Whole-home CCTV with labelled cabling and remote viewing",
      "Indoor, outdoor and feature lighting",
      "HiFi, speakers and TV / AV wiring",
      "Mesh WiFi, access points and wired network points",
      "NAS, home cloud and backup setup",
      "Smart switches, dimmers and home automation",
    ],
  },
  {
    slug: "sockets-switches",
    title: "Sockets & Switches",
    blurb:
      "Adding, moving or replacing sockets and switches around the home, including outside points for sheds, garages and gardens.",
    icon: "bolt",
    portfolioSlug: "beauty-salon-fitout",
    cardImage: "sockets-switches.jpg",
    examples: [
      "Extra kitchen sockets for appliances",
      "Outdoor sockets for sheds and garages",
      "Replacing old switches and faceplates",
      "Moving sockets to more useful positions",
      "Grid switches and fused spurs for appliances",
    ],
  },
  {
    slug: "loft-and-attic",
    title: "Loft & Attic Work",
    blurb:
      "Loft hatches, boarding, lighting and general loft improvements, done tidily and with dust sheets down.",
    icon: "home",
    portfolioSlug: "loft-hatch-lighting",
    cardImage: "loft-attic.jpg",
    cardBeforeAfter: {
      before: "loft-before.jpg",
      after: "loft-after.jpg",
      beforeAlt: "Loft before new boarding and lighting",
      afterAlt: "Loft after flooring and light fitted",
    },
    examples: [
      "New drop-down loft ladders and enlarged hatches",
      "Loft lighting on its own switch",
      "Loft boarding for usable storage space",
      "Loft hatches trimmed and finished flush",
      "General loft access improvements",
    ],
  },
  {
    slug: "outdoor-lighting",
    title: "Outdoor Lighting",
    blurb:
      "Security lights, porch lights and garden lighting fitted neatly, with cabling routed out of sight wherever possible.",
    icon: "lightbulb",
    portfolioSlug: "outdoor-lighting-garage",
    cardImage: "outdoor-lighting.jpg",
    examples: [
      "Motion-sensor security lights front and rear",
      "Porch and back-door lighting",
      "Garage and driveway floodlights",
      "Garden lighting with tidy cable routing",
      "Replacing failed or outdated outside fittings",
    ],
  },
  {
    slug: "general-repairs",
    title: "General Repairs & Home Improvements",
    blurb:
      "The everyday handyman jobs: tiling, flat-pack furniture, shelving, small fixes and the kind of work that needs someone careful rather than rushed.",
    icon: "wrench",
    portfolioSlug: "rat-damaged-cable-repair",
    cardImage: "general-repairs.jpg",
    examples: [
      "Wall and splashback tiling",
      "Flat-pack furniture assembly (IKEA and similar)",
      "Shelving and bracket mounting",
      "Damaged cable repairs",
      "Small carpentry and fixing jobs",
      "Multiple small jobs in one visit",
    ],
  },
  {
    slug: "kitchen-bathroom-fittings",
    title: "Kitchen & Bathroom Fittings",
    blurb:
      "Extractor fans, under cabinet lighting and fittings around kitchens and bathrooms, fitted cleanly and finished properly.",
    icon: "fire",
    portfolioSlug: "shearwater-kitchen-upgrade",
    examples: [
      "Chimney extractor hoods and splashbacks",
      "Kitchen extractor wiring chased into walls",
      "Under-cabinet and plinth LED lighting",
      "Bathroom extractor fans",
      "Countertop and vanity fittings",
    ],
  },
];

export const featuredService = services.find((s) => s.featured)!;
export const standardServices = services.filter((s) => !s.featured);
