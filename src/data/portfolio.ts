export type PortfolioImage = {
  /** Path relative to /src/assets/portfolio/ */
  src: string;
  alt: string;
  caption?: string;
};

export type PortfolioJob = {
  slug: string;
  title: string;
  location: string;
  serviceTag: string;
  /** One-line hook used on cards and listings. */
  summary: string;
  /** Cover image path relative to /src/assets/portfolio/ */
  image: string;
  /** When the job was completed, shown on cards. */
  completed?: string;
  /** Quick facts shown at the top of the case study. */
  facts: { label: string; value: string }[];
  /** The situation the customer came to Volltar with. */
  challenge: string;
  /** How the job was approached and carried out. Each entry is a paragraph. */
  approach: string[];
  /** The finished outcome. */
  result: string;
  /** Full gallery, including the cover image. */
  gallery: PortfolioImage[];
};

export const portfolioJobs: PortfolioJob[] = [
  {
    slug: "cctv-camera-install",
    title: "Whole-Home CCTV & Network Install",
    location: "Northampton",
    serviceTag: "Smart Home, Lighting & CCTV",
    summary:
      "A full CCTV and wired network setup for a rental property, with labelled cabling, remote viewing and a tidy comms cupboard.",
    image: "cctv-camera-install/photo-1.jpg",
    completed: "2025",
    facts: [
      { label: "Service", value: "Smart Home & CCTV" },
      { label: "Property", value: "Rental house" },
      { label: "Location", value: "Northampton" },
      { label: "Scope", value: "Cameras, network points & comms cupboard" },
    ],
    challenge:
      "The owner of a rental property wanted proper security coverage of the entrances and garden, plus reliable wifi throughout the house. There was no structured cabling in place, so cameras, access points and network points all had to be run from scratch without leaving trailing wires or drilling more holes than necessary.",
    approach: [
      "I planned the camera positions around the entrances and garden first, then worked out the cleanest cable routes back to a central point. Cabling was run along the roofline and dressed neatly into the property so nothing was left hanging or exposed outside.",
      "Inside, each run was terminated at labelled network points and brought back to a single comms cupboard. The switch, NVR and UniFi Protect gear were stacked and cable-managed so it is obvious what goes where if anything ever needs checking.",
      "A ceiling-mounted access point was added to give strong, even wifi across the floors, wired back to the same cupboard rather than relying on a plug-in extender.",
    ],
    result:
      "The property now has full CCTV coverage that can be viewed remotely, solid wifi throughout, and a comms cupboard that is clearly labelled and easy to maintain. Everything is wired in properly rather than bodged, so it will keep working reliably for tenants for years.",
    gallery: [
      {
        src: "cctv-camera-install/photo-1.jpg",
        alt: "External camera cabling routed neatly along the wall and dressed into the property",
        caption: "Outdoor cabling run tight to the wall and fed cleanly through, with no trailing wires.",
      },
      {
        src: "cctv-camera-install/photo-2.jpg",
        alt: "Comms cupboard with labelled patch panel, network switch and CCTV recorder",
        caption: "Central comms cupboard: labelled patch panel, switch and UniFi Protect recorder, all cable managed.",
      },
      {
        src: "cctv-camera-install/photo-3.jpg",
        alt: "Ceiling access point and wall network points fitted flush",
        caption: "Wired access point for strong wifi, alongside flush-fitted network points.",
      },
      {
        src: "cctv-camera-install/photo-4.jpg",
        alt: "CCTV cabling clipped neatly along the loft joists",
        caption: "In the loft, cable runs were clipped along the joists rather than left loose.",
      },
    ],
  },
  {
    slug: "outdoor-lighting-garage",
    title: "Garage Power & Four Outside Lights",
    location: "Northampton",
    serviceTag: "Outdoor Lighting",
    summary:
      "Power restored to a detached garage and four security lights added around the property, with cabling kept tidy on the brickwork.",
    image: "outdoor-lighting-garage/photo-3.jpg",
    completed: "2025",
    facts: [
      { label: "Service", value: "Outdoor Lighting & Power" },
      { label: "Property", value: "Detached garage & grounds" },
      { label: "Location", value: "Northampton" },
      { label: "Scope", value: "Garage sockets & 4 exterior lights" },
    ],
    challenge:
      "The detached garage had lost power and the outside of the property was dark, which made the driveway and rear access feel unsafe after dark. The customer wanted usable power back in the garage and lighting that would come on where it was needed.",
    approach: [
      "Power was restored to the garage and new sockets were fitted flush to the brickwork so tools and equipment could be run without extension leads snaking across the floor.",
      "Four exterior lights were then positioned around the property to cover the driveway, side access and rear. Cable runs were kept tight to the brickwork and routed along mortar lines so they stay out of the way and out of sight as much as possible.",
      "Each fitting was tested at night to make sure the coverage actually lit the areas that mattered, rather than just being mounted and left.",
    ],
    result:
      "The garage is usable again with proper sockets, and the outside of the property is well lit and far safer to move around after dark. The cabling is neat enough that it disappears against the brick in daylight.",
    gallery: [
      {
        src: "outdoor-lighting-garage/photo-2.jpg",
        alt: "Exterior security light switched on at night, mounted to brickwork",
        caption: "One of four exterior lights, tested at night to confirm it covers the right area.",
      },
      {
        src: "outdoor-lighting-garage/photo-3.jpg",
        alt: "Garage exterior in daylight with cabling run neatly along the wall",
        caption: "Cable runs kept tight to the wall so they stay discreet in daylight.",
      },
      {
        src: "outdoor-lighting-garage/photo-1.jpg",
        alt: "New sockets fitted to the garage brickwork with tidy cabling",
        caption: "Power restored inside the garage with new sockets fitted to the brickwork.",
      },
    ],
  },
  {
    slug: "loft-hatch-lighting",
    title: "New Loft Hatch, Ladder & Light",
    location: "Mansfield",
    serviceTag: "Loft & Attic Work",
    summary:
      "An awkward old loft hatch replaced with a proper drop-down ladder and a new light fitted in the loft, making storage safe and easy.",
    image: "loft-hatch-lighting/photo-1.jpg",
    completed: "2024",
    facts: [
      { label: "Service", value: "Loft & Attic Work" },
      { label: "Property", value: "Terraced house" },
      { label: "Location", value: "Mansfield" },
      { label: "Scope", value: "New hatch, ladder & loft light" },
    ],
    challenge:
      "The existing loft access was a small, awkward hatch with no ladder and no light, so the loft was effectively unusable for storage. Getting up there meant balancing on furniture in the dark, which was neither safe nor practical.",
    approach: [
      "The old hatch was taken out and replaced with a larger opening and a proper drop-down loft ladder, trimmed and finished so it sits flush with the landing ceiling when closed.",
      "A new light was wired into the loft and put on its own switch, so the space is lit the moment you go up rather than relying on a torch.",
      "Dust sheets went down on the landing and everything was cleaned up afterwards, so the only change the customer was left with was the improvement itself.",
    ],
    result:
      "The loft is now genuinely usable storage. The ladder folds away neatly, the new light makes the space safe to move around in, and getting up there is a two-second job instead of a hassle.",
    gallery: [
      {
        src: "loft-hatch-lighting/photo-1.jpg",
        alt: "New drop-down loft ladder extended through the finished hatch onto the landing",
        caption: "New drop-down ladder and enlarged hatch, finished flush with the landing ceiling.",
      },
      {
        src: "loft-hatch-lighting/photo-2.jpg",
        alt: "New light fitting wired into the loft space",
        caption: "A new light wired into the loft so the space is lit as soon as you go up.",
      },
      {
        src: "loft-hatch-lighting/photo-3.jpg",
        alt: "New loft light switch fitted neatly",
        caption: "The loft light on its own switch for easy, safe access.",
      },
    ],
  },
  {
    slug: "kitchen-extractor",
    title: "Kitchen Extractor & Splashback Fitting",
    location: "Northampton",
    serviceTag: "Kitchen & Bathroom Fittings",
    summary:
      "A new stainless steel chimney extractor and matching splashback fitted above the hob, with cabling chased in and made good.",
    image: "kitchen-extractor/photo-2.jpg",
    completed: "2024",
    facts: [
      { label: "Service", value: "Kitchen Fittings" },
      { label: "Property", value: "Rental kitchen" },
      { label: "Location", value: "Northampton" },
      { label: "Scope", value: "Extractor hood & splashback" },
    ],
    challenge:
      "The kitchen had no proper extraction over the hob and the customer wanted a clean, modern chimney hood along with a stainless splashback. The catch was routing the power and getting the cabling hidden rather than surface-run across the wall.",
    approach: [
      "The wall was chased out so the supply cable could be run back to a fused point and buried, keeping the finished wall clean with nothing surface-mounted around the hood.",
      "The stainless steel chimney hood was mounted level and centred over the hob, with the splashback panel fitted behind it to protect the wall and tie the look together.",
      "Once everything was wired, tested and working, the chased channels were filled and made good ready for decoration.",
    ],
    result:
      "The kitchen now has a proper extractor that clears steam and cooking smells, finished with a tidy stainless splashback. Because the cabling was chased in rather than run on the surface, the finished result looks like it was always meant to be there.",
    gallery: [
      {
        src: "kitchen-extractor/photo-2.jpg",
        alt: "Finished stainless steel chimney extractor and splashback above the hob",
        caption: "The finished chimney hood and stainless splashback, mounted level and centred over the hob.",
      },
      {
        src: "kitchen-extractor/photo-1.jpg",
        alt: "Close view of the fitted extractor hood and splashback",
        caption: "Clean finish where the hood meets the splashback and wall.",
      },
      {
        src: "kitchen-extractor/photo-3.jpg",
        alt: "Wall chased out for the extractor cabling before being made good",
        caption: "Behind the scenes: the cable chased into the wall so nothing is surface-run.",
      },
    ],
  },
  {
    slug: "shelf-install",
    title: "Shelf, Outside Light & Socket",
    location: "Wellingborough",
    serviceTag: "General Repairs & Home Improvements",
    summary:
      "A multi-part visit covering a securely mounted shelf, a new outside light by the back door and an extra socket, all in one trip.",
    image: "shelf-install/photo-2.jpg",
    completed: "2024",
    facts: [
      { label: "Service", value: "General Home Improvements" },
      { label: "Property", value: "Modern semi" },
      { label: "Location", value: "Wellingborough" },
      { label: "Scope", value: "Shelf, outside light & socket" },
    ],
    challenge:
      "This was a mix of smaller jobs the customer had been putting off: a shelf that needed mounting properly, an extra socket, and a light by the back door so the entrance was not pitch black in the evenings. Rather than book three separate visits, they wanted it all done in one.",
    approach: [
      "The shelf was fixed with the brackets set into solid fixings and levelled so it can actually take weight, not just sit there for show.",
      "A new socket was added where the customer needed it, and the outside light was wired in by the back door with the cable run kept tight to the brickwork.",
      "The outside light was checked after dark to make sure it properly lit the door and step, so coming and going in the evening is safe.",
    ],
    result:
      "Three jobs sorted in a single visit: a shelf that holds its weight, a socket where it was needed, and a back door that is no longer a dark trip hazard at night. Tidy fixings throughout and no mess left behind.",
    gallery: [
      {
        src: "shelf-install/photo-2.jpg",
        alt: "New outside light switched on above the back door at night",
        caption: "The new outside light checked after dark, lighting the door and step.",
      },
      {
        src: "shelf-install/photo-3.jpg",
        alt: "Exterior cable run kept tight to the brickwork feeding the new light and socket",
        caption: "Cabling for the light and socket kept tight to the brickwork.",
      },
      {
        src: "shelf-install/photo-1.jpg",
        alt: "Close view of the shelf bracket fixed securely to the wall",
        caption: "Shelf brackets fixed into solid fixings and levelled to take real weight.",
      },
    ],
  },
  {
    slug: "shearwater-kitchen-upgrade",
    title: "Kitchen Backsplash, Sockets & Tiling",
    location: "Chesterfield area",
    serviceTag: "Kitchen & Bathroom Fittings",
    summary:
      "Grey tile backsplash fitted behind the hob, sockets repositioned and finished cleanly — the before-and-after on the homepage.",
    image: "shearwater-kitchen/photo-2.jpg",
    completed: "2020",
    facts: [
      { label: "Service", value: "Kitchen fittings & sockets" },
      { label: "Property", value: "Semi-detached house" },
      { label: "Location", value: "18 Shearwater Lane" },
      { label: "Scope", value: "Tile splashback, sockets & finish" },
    ],
    challenge:
      "The kitchen needed a proper tile splashback behind the hob and the socket layout did not suit where the customer wanted appliances. Old tiling had to come off cleanly and the electrics needed sorting before the new grey tiles went up.",
    approach: [
      "Existing tiles and fixings were removed carefully so the wall was flat and ready for the new splashback, with dust sheets down throughout.",
      "Sockets were repositioned where they would sit correctly behind the finished worktop and hob layout, with cabling dressed neatly inside the back boxes.",
      "The grey tile splashback was fitted and finished around the sockets so the faceplates sit flush and level with the new surface.",
    ],
    result:
      "A kitchen that looks deliberately finished rather than patched together — new splashback, sockets in the right places, and the sort of tidy detail work that shows in the photos.",
    gallery: [
      {
        src: "shearwater-kitchen/photo-1.jpg",
        alt: "Kitchen at Shearwater Lane before the backsplash and socket upgrade",
        caption: "Before: old splashback removed and wall prepared for the upgrade.",
      },
      {
        src: "shearwater-kitchen/photo-2.jpg",
        alt: "Kitchen after new grey tile backsplash and sockets fitted",
        caption: "After: grey tile splashback with sockets finished flush to the tiles.",
      },
      {
        src: "shearwater-kitchen/photo-3.jpg",
        alt: "Socket back boxes cut into the grey tile splashback with wiring dressed ready for faceplates",
        caption: "Sockets cut into the new splashback — wiring dressed and ready for the faceplates.",
      },
      {
        src: "shearwater-kitchen/photo-4.jpg",
        alt: "Kitchen tiling and fittings during the job",
        caption: "Work in progress — wall prepared and tiling under way.",
      },
    ],
  },
  {
    slug: "rat-damaged-cable-repair",
    title: "Rat-Damaged Cable Repaired & Made Safe",
    location: "East Midlands",
    serviceTag: "General Repairs",
    summary:
      "Emergency repair where rodents had chewed through a cable — fault found, damaged section replaced and the circuit made safe again.",
    image: "rat-cable-repair/photo-1.jpg",
    completed: "2023",
    facts: [
      { label: "Service", value: "Cable repair" },
      { label: "Cause", value: "Rodent damage" },
      { label: "Priority", value: "Urgent make-safe" },
      { label: "Outcome", value: "Circuit restored safely" },
    ],
    challenge:
      "A cable had been chewed through by rats, leaving an intermittent fault that needed finding and fixing properly — not just taped over. The customer needed the circuit safe and working again without unnecessary upheaval.",
    approach: [
      "The fault was traced along the run until the damaged section was found and the extent of the rodent damage confirmed.",
      "The chewed cable was cut back to sound copper, re-terminated and the join made properly rather than left as a temporary fix.",
      "The repair was tested before the circuit was switched back on, and the customer was talked through what had failed and what to watch for.",
    ],
    result:
      "Power restored safely with a proper repair on the damaged section. The sort of urgent job where you need someone to turn up, diagnose it properly and leave it safe — not just patch it.",
    gallery: [
      {
        src: "rat-cable-repair/photo-1.jpg",
        alt: "Ceiling opened up where rats had chewed through the cable run",
        caption: "Access holes cut in the ceiling to reach the section the rats had chewed through.",
      },
      {
        src: "rat-cable-repair/photo-2.jpg",
        alt: "Damaged cable exposed before repair",
        caption: "The damaged section cut back to sound cable before re-termination.",
      },
      {
        src: "rat-cable-repair/photo-3.jpg",
        alt: "Cable repair in progress",
        caption: "Repair under way — proper termination rather than a temporary bodge.",
      },
      {
        src: "rat-cable-repair/photo-4.jpg",
        alt: "Finished cable repair made safe",
        caption: "Circuit tested and made safe before handover.",
      },
    ],
  },
  {
    slug: "beauty-salon-fitout",
    title: "Beauty Salon — Lighting, Sink Counter & Socket",
    location: "Northampton",
    serviceTag: "Sockets & Switches",
    summary:
      "New lighting, a counter with sink and a socket fitted for a beauty salon — commercial work finished cleanly around wet-area fittings.",
    image: "beauty-salon-fitout/photo-1.jpg",
    completed: "2021",
    facts: [
      { label: "Service", value: "Lighting & fittings" },
      { label: "Property", value: "Commercial salon" },
      { label: "Location", value: "Northampton" },
      { label: "Scope", value: "Light, counter, sink & socket" },
    ],
    challenge:
      "A beauty salon needed better lighting for treatment work, a proper counter with sink fitted, and a socket where the equipment would actually be used — all in a working commercial space that had to stay usable.",
    approach: [
      "New lighting was planned to suit the treatment area rather than just adding the brightest fitting available — even light where staff and clients need it.",
      "The counter and sink were fitted with cabling routed sensibly for a wet-area setup, and a socket added where the equipment would sit day to day.",
      "Everything was tested and left tidy — important in a salon that cannot afford downtime or mess on the shop floor.",
    ],
    result:
      "A salon that works properly for daily treatments: good light, a usable sink counter and power where it is needed. Commercial jobs need the same tidy finish as domestic work, just on a tighter schedule.",
    gallery: [
      {
        src: "beauty-salon-fitout/photo-1.jpg",
        alt: "Finished beauty salon treatment area with new lighting",
        caption: "Finished treatment area with new lighting for day-to-day salon work.",
      },
      {
        src: "beauty-salon-fitout/photo-2.jpg",
        alt: "Salon counter and sink fitting during installation",
        caption: "Counter and sink area — cabling planned around wet-area use.",
      },
      {
        src: "beauty-salon-fitout/photo-3.jpg",
        alt: "Socket and fittings installed at the salon counter",
        caption: "Socket positioned where salon equipment would actually be used.",
      },
      {
        src: "beauty-salon-fitout/photo-4.jpg",
        alt: "Close view of salon lighting and finished fittings",
        caption: "Lighting and fittings finished cleanly for a working commercial space.",
      },
    ],
  },
];

export function getPortfolioJob(slug: string): PortfolioJob | undefined {
  return portfolioJobs.find((job) => job.slug === slug);
}
