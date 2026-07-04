import type { ImageMetadata } from "astro";
import portraitWomanA from "../assets/testimonials/portrait-woman-a.jpg";
import portraitManA from "../assets/testimonials/portrait-man-a.jpg";
import portraitWomanB from "../assets/testimonials/portrait-woman-b.jpg";
import portraitManB from "../assets/testimonials/portrait-man-b.jpg";
import portraitCouple from "../assets/testimonials/portrait-couple.jpg";

export type TestimonialAvatarId =
  | "portrait-woman-a"
  | "portrait-man-a"
  | "portrait-woman-b"
  | "portrait-man-b"
  | "portrait-couple";

export const testimonialAvatars: Record<TestimonialAvatarId, ImageMetadata> = {
  "portrait-woman-a": portraitWomanA,
  "portrait-man-a": portraitManA,
  "portrait-woman-b": portraitWomanB,
  "portrait-man-b": portraitManB,
  "portrait-couple": portraitCouple,
};
