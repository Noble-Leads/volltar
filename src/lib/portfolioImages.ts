import type { ImageMetadata } from "astro";

const images = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/portfolio/**/*.{jpg,jpeg,png,webp}",
  { eager: true }
);

/** Resolve a portfolio image by its path relative to /src/assets/portfolio/. */
export function getPortfolioImage(path: string): ImageMetadata | undefined {
  return images[`/src/assets/portfolio/${path}`]?.default;
}
