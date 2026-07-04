import type { ImageMetadata } from "astro";

const images = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/services/*.{jpg,jpeg,png,webp}",
  { eager: true }
);

/** Resolve a service card image by filename under /src/assets/services/. */
export function getServiceCardImage(filename: string): ImageMetadata | undefined {
  return images[`/src/assets/services/${filename}`]?.default;
}
