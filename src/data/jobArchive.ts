/**
 * Archive folder names (often in Polish) mapped to English job titles.
 * Folder names live at the Voltar project root — use this when adding case studies.
 * `portfolioSlug` is set when a written case study exists on the site.
 */
export type JobArchiveEntry = {
  folder: string;
  title: string;
  location?: string;
  portfolioSlug?: string;
};

export const jobArchive: JobArchiveEntry[] = [
  {
    folder: "2020.11.21 - 18 Shearwater Lane kuchnia",
    title: "Kitchen backsplash, sockets & tiling — 18 Shearwater Lane",
    location: "Chesterfield area",
    portfolioSlug: "shearwater-kitchen-upgrade",
  },
  {
    folder: "2021.01.19 (012021-01) - 94 Albert Road, rumuni łazienka",
    title: "Bathroom work — 94 Albert Road (Romanian tenants)",
    location: "Northampton area",
  },
  {
    folder: "2021.03.14 - Właz na strych u Kasi i Włodka +światło i kawałek podłogi",
    title: "Loft hatch, light & floor section — Kasia & Wlodek",
  },
  {
    folder: "2021.04.04 - Mita, prąd w garażu i 4 światła na dworze",
    title: "Garage power & four outdoor lights",
    location: "Northampton",
    portfolioSlug: "outdoor-lighting-garage",
  },
  {
    folder: "2021.04.06 - Salon beauty - nowe światło, blat z umywalką i gniazdko",
    title: "Beauty salon — new light, sink counter & socket",
    location: "Northampton",
    portfolioSlug: "beauty-salon-fitout",
  },
  {
    folder: "2021.04.25 - 36 Inham Close, Corby NN18 8NA, Wymiana bezpieczników w Corby",
    title: "Fuse replacement — 36 Inham Close",
    location: "Corby",
  },
  {
    folder: "2021.05.15 - 146 Albert Road, Tenanci Mity - okap w kuchni",
    title: "Kitchen extractor hood — 146 Albert Road",
    location: "Northampton",
    portfolioSlug: "kitchen-extractor",
  },
  {
    folder: "2021.07.03 - 78 Alexandra Road, strych",
    title: "Loft / attic work — 78 Alexandra Road",
  },
  {
    folder: "2021.08.07 (082021-01) - 123 Highfield Road, Mita - instalacja kamer i AP",
    title: "CCTV & access point install — 123 Highfield Road",
    location: "Northampton",
    portfolioSlug: "cctv-camera-install",
  },
  {
    folder: "2021.09.04 - Tata Josego, gniazdka na płasko ze ścianą",
    title: "Flush-mounted sockets — Dad Jose's property",
  },
  {
    folder: "2023.06.20 - Szopa taty Jose'go w Irchester gniazdka",
    title: "Sockets in Dad Jose's shed — Irchester",
    location: "Irchester",
  },
  {
    folder: "2023.09.03 - Naprawa kabla zjedzonego przez szczury",
    title: "Cable repair — rodent damage",
    portfolioSlug: "rat-damaged-cable-repair",
  },
  {
    folder: "2023.11.20 - Foot pedal toaster control unit box",
    title: "Foot-pedal toaster control unit repair",
  },
  {
    folder: "2024.02.07 - Broken trunking and light in car park",
    title: "Car park trunking & light repair",
  },
  {
    folder: "2024.02.19 - Broken grid switch for light",
    title: "Broken grid switch replacement",
  },
  {
    folder: "2024_03_21 - Outside light dla taty Becky",
    title: "Outside light — Becky's dad",
  },
  {
    folder: "2024_04_06 - Marta strych podłoga ze światłem",
    title: "Loft boarding & light — Marta",
  },
  {
    folder: "2025_02_08 - 24 Highfield Drive, Mansfield (Światło na strychu, Nowy właz)",
    title: "Loft light & new hatch — 24 Highfield Drive",
    location: "Mansfield",
    portfolioSlug: "loft-hatch-lighting",
  },
  {
    folder: "2025_03_03 - 28 Tennyson Road - shelf, outside light & socket",
    title: "Shelf, outside light & socket — 28 Tennyson Road",
    location: "Wellingborough",
    portfolioSlug: "shelf-install",
  },
  {
    folder: "2025_03_29 - Strych u taty Becky, 14 Dainty Groove",
    title: "Loft work — 14 Dainty Grove (Becky's dad)",
  },
];
