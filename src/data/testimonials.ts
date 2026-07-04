import type { TestimonialAvatarId } from "../lib/testimonialAvatars";

export type Testimonial = {
  name: string;
  location: string;
  quote: string;
  service: string;
  rating?: number;
  avatarId: TestimonialAvatarId;
};

// Placeholder testimonials until real reviews are collected.
export const testimonials: Testimonial[] = [
  {
    name: "Rachel M.",
    location: "Chesterfield",
    quote:
      "Really pleased with the new lighting in our lounge. Hubert took the time to get the layout right and left everything spotless afterwards.",
    service: "Smart Home & Lighting",
    rating: 5,
    avatarId: "portrait-couple",
  },
  {
    name: "Dave P.",
    location: "Leicester",
    quote:
      "Had a CCTV system fitted and it works brilliantly. Clear explanation of everything before he started and a really neat job on the cabling.",
    service: "CCTV",
    rating: 5,
    avatarId: "portrait-man-a",
  },
  {
    name: "Sophie T.",
    location: "Wellingborough",
    quote:
      "Sorted out our loft hatch and added a light while he was up there. Turned up on time, worked cleanly and the price was fair.",
    service: "Loft & Attic Work",
    rating: 5,
    avatarId: "portrait-woman-b",
  },
  {
    name: "Mark H.",
    location: "Chesterfield",
    quote:
      "Booked Hubert for a few extra sockets in the kitchen. Tidy work, no mess left behind and happy to explain what he was doing.",
    service: "Sockets & Switches",
    rating: 5,
    avatarId: "portrait-man-b",
  },
  {
    name: "Anna K.",
    location: "Corby",
    quote:
      "Great attention to detail. You can tell he cares about doing the job properly rather than just getting it done quickly.",
    service: "General Repairs",
    rating: 5,
    avatarId: "portrait-woman-a",
  },
];

export function averageRating(items: Testimonial[]): number {
  if (!items.length) return 5;
  const total = items.reduce((sum, item) => sum + (item.rating ?? 5), 0);
  return Math.round((total / items.length) * 10) / 10;
}
