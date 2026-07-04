export type PlannedBlogPost = {
  slug: string;
  title: string;
  targetKeyword: string;
  description: string;
  why: string;
  research: string[];
};

/** SEO articles to write — publish as .md files in src/content/blog/ when ready. Use today's date for pubDate. */
export const plannedBlogPosts: PlannedBlogPost[] = [
  {
    slug: "home-cctv-installation-guide-uk",
    title: "Home CCTV Installation: Costs, Camera Types & What to Expect (UK)",
    targetKeyword: "home cctv installation uk / cctv installer near me",
    description:
      "A proper local guide covering wired vs wireless, NVR storage, typical costs, planning positions, and what a tidy install actually involves.",
    why:
      "Highest commercial intent of everything Volltar offers. You have a full case study with labelled comms cupboard photos — real proof beats generic advice.",
    research: [
      "Average UK install costs for 2, 4 and 8 camera systems (labour + hardware ranges, not one number)",
      "Wired PoE vs wifi/battery cameras — reliability, maintenance, and when each makes sense",
      "Legal basics: filming public pavement, neighbour boundaries, ICO registration (when it applies)",
      "Storage: NVR hard drive sizes, how long 1080p/4K footage is kept at typical settings",
      "What customers ask on forums (MoneySavingExpert, local Facebook groups) — use their exact phrases as H2s",
      "Hubert's real numbers: typical visit length, what pushes price up (long cable runs, loft routing, brick drilling)",
      "Local modifiers: Northampton, Leicester, Chesterfield, Wellingborough in examples — not stuffed, just natural",
    ],
  },
  {
    slug: "loft-hatch-ladder-installation-guide",
    title: "Loft Hatch & Drop-Down Ladder Installation: Sizes, Costs & What's Involved",
    targetKeyword: "loft hatch replacement / drop down loft ladder installation",
    description:
      "Everything a homeowner needs before booking: hatch sizes, ladder types, headroom, lighting, and what the finished job should look like.",
    why:
      "Specific job type with less competition than generic handyman terms. You have a Mansfield case study with ladder, hatch and loft light photos.",
    research: [
      "Standard UK hatch sizes and when an opening needs enlarging",
      "Drop-down ladder types (wood vs aluminium, weight limits, insulation caps)",
      "Building regs / fire considerations for loft hatches between garage and house (brief, accurate)",
      "Typical price ranges in the East Midlands for hatch swap vs hatch + ladder + light",
      "Common problems with old hatches (drafts, stuck panels, unsafe home-made boards)",
      "Whether boarding and lighting should be done in the same visit",
      "Photos from the Mansfield job: before access problem, finished ladder, switch placement",
    ],
  },
  {
    slug: "outdoor-security-lighting-installation-guide",
    title: "Outdoor Security Lighting: PIR vs Dusk-to-Dawn, Placement & Installation",
    targetKeyword: "outdoor security lighting installation / security lights fitted",
    description:
      "How to light a driveway, porch and back door properly — sensor types, lumens, cable routing, and testing at night.",
    why:
      "Steady local search volume, pairs with CCTV article, and you have strong before/after material (chasing/cabling vs finished night shot).",
    research: [
      "PIR vs dusk-to-dawn vs manual — when each is right (porch vs driveway vs rear access)",
      "Rough lumens guidance for driveway, porch and back door (avoid jargon overload)",
      "IP ratings for UK outdoor fittings — what actually matters in rain and frost",
      "Cable routing: surface trunking vs chasing vs roofline runs — pros/cons for brick and render",
      "Common mistakes (lights facing neighbours, glare on cameras, sensors pointing at trees)",
      "Typical cost for 1 light vs 3–4 around a property in your area",
      "Energy: LED vs old halogen replacements — running cost angle for SEO snippets",
    ],
  },
];
