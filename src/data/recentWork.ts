import type { ImageMetadata } from "astro";
import { getPortfolioImage } from "../lib/portfolioImages";
import { portfolioJobs } from "./portfolio";

export type RecentWorkPhoto = {
  src: ImageMetadata;
  alt: string;
  caption: string;
  location?: string;
};

/** Photos for the homepage “recent work” strip — real jobs, rotated as new ones are added. */
export function getRecentWorkPhotos(): RecentWorkPhoto[] {
  const picks: { jobSlug: string; galleryIndex: number }[] = [
    { jobSlug: "shearwater-kitchen-upgrade", galleryIndex: 1 },
    { jobSlug: "cctv-camera-install", galleryIndex: 1 },
    { jobSlug: "rat-damaged-cable-repair", galleryIndex: 0 },
    { jobSlug: "loft-hatch-lighting", galleryIndex: 0 },
    { jobSlug: "beauty-salon-fitout", galleryIndex: 0 },
    { jobSlug: "outdoor-lighting-garage", galleryIndex: 0 },
    { jobSlug: "kitchen-extractor", galleryIndex: 2 },
  ];

  return picks.flatMap(({ jobSlug, galleryIndex }) => {
    const job = portfolioJobs.find((j) => j.slug === jobSlug);
    if (!job) return [];

    const galleryItem = job.gallery[galleryIndex];
    const imagePath = galleryItem?.src ?? job.image;
    const src = getPortfolioImage(imagePath);
    if (!src) return [];

    return [
      {
        src,
        alt: galleryItem?.alt ?? job.title,
        caption: galleryItem?.caption ?? job.summary,
        location: job.location,
      },
    ];
  });
}
