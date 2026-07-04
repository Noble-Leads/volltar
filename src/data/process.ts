export type ProcessStep = {
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    title: "Tell me about the job",
    description:
      "Send a message, WhatsApp or email with a short description. Photos of the area or the problem are always helpful and make quoting faster.",
  },
  {
    title: "Straightforward quote",
    description:
      "I will let you know what is involved, what it will cost and when I can fit it in. If it is outside what I can take on, I will say so upfront.",
  },
  {
    title: "Tidy, careful work",
    description:
      "Dust sheets down, mess cleaned up and the finish checked before I leave. Your home should look the same as when I arrived, minus the problem.",
  },
  {
    title: "Job signed off",
    description:
      "We walk through what was done together so you are happy with it. If anything needs tweaking after the visit, get in touch and we will sort it.",
  },
];
