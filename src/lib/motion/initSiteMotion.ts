import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let motionContext: gsap.Context | null = null;

export function initSiteMotion() {
  motionContext?.revert();
  motionContext = null;

  document.documentElement.classList.add("motion-js");

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  motionContext = gsap.context(() => {
    initHeader();
    initHero();
    initPageHero();
    initScrollReveal();
    initImageReveal();
    initAboutPortrait();
    initBeforeAfter();
    initProcessSteps();
    initFaq();
    initMobileBar();
  });

  ScrollTrigger.refresh();
  window.addEventListener("load", () => ScrollTrigger.refresh(), { once: true });
}

function initHeader() {
  const header = document.querySelector<HTMLElement>("[data-header]");
  if (!header) return;

  gsap.fromTo(header, { y: -10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, ease: "power2.out" });
}

function initHero() {
  const hero = document.querySelector<HTMLElement>("[data-hero]");
  if (!hero) return;

  const items = gsap.utils.toArray<HTMLElement>(hero.querySelectorAll("[data-hero-item]"));
  const slider =
    hero.querySelector<HTMLElement>("[data-before-after]") ??
    hero.querySelector<HTMLElement>("[data-hero-media]");

  if (!items.length) return;

  gsap.set(items, { clearProps: "animation" });

  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  tl.fromTo(
    items,
    { y: 56, opacity: 0 },
    { y: 0, opacity: 1, duration: 1.1, stagger: 0.14 }
  );

  if (slider) {
    gsap.set(slider, { clearProps: "animation" });
    tl.fromTo(
      slider,
      { x: 48, opacity: 0, scale: 0.96 },
      { x: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" },
      "-=0.65"
    );
  }
}

function initPageHero() {
  document.querySelectorAll<HTMLElement>("[data-page-hero]").forEach((hero) => {
    const items = gsap.utils.toArray<HTMLElement>(hero.querySelectorAll("[data-page-hero-item]"));
    const slot = hero.querySelector<HTMLElement>("[data-page-hero-slot]");

    if (!items.length) return;

    items.forEach((item) => gsap.set(item, { clearProps: "animation" }));

    const tl = gsap.timeline({ defaults: { ease: "power3.out" }, delay: 0.08 });

    tl.fromTo(items, { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.09 });

    if (slot) {
      gsap.set(slot, { clearProps: "animation" });
      tl.fromTo(slot, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.65 }, "-=0.45");
    }
  });
}

function initScrollReveal() {
  const presets: Array<{
    selector: string;
    from: gsap.TweenVars;
    duration?: number;
  }> = [
    { selector: "[data-reveal]", from: { y: 36, opacity: 0 } },
    { selector: "[data-reveal-left]", from: { x: -40, opacity: 0 } },
    { selector: "[data-reveal-right]", from: { x: 40, opacity: 0 } },
    { selector: "[data-reveal-fade]", from: { y: 12, opacity: 0 }, duration: 0.65 },
    { selector: "[data-reveal-scale]", from: { scale: 0.97, opacity: 0 }, duration: 0.8 },
  ];

  presets.forEach(({ selector, from, duration = 0.85 }) => {
    gsap.utils.toArray<HTMLElement>(selector).forEach((el) => {
      gsap.fromTo(
        el,
        from,
        {
          x: 0,
          y: 0,
          scale: 1,
          opacity: 1,
          duration,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        }
      );
    });
  });

  gsap.utils.toArray<HTMLElement>("[data-reveal-stagger]").forEach((container) => {
    const items = gsap.utils.toArray<HTMLElement>(
      container.querySelectorAll("[data-reveal-item]")
    );
    if (!items.length) return;

    gsap.fromTo(
      items,
      { y: 36, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.75,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
          start: "top 85%",
          once: true,
        },
      }
    );
  });

  gsap.utils.toArray<HTMLElement>("[data-hover-lift]").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, { y: -5, duration: 0.28, ease: "power2.out", overwrite: "auto" });
    });
    card.addEventListener("mouseleave", () => {
      gsap.to(card, { y: 0, duration: 0.32, ease: "power2.out", overwrite: "auto" });
    });
  });

  gsap.utils.toArray<HTMLElement>("[data-hover-glow]").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      gsap.to(el, {
        boxShadow: "0 16px 40px -12px rgba(230, 168, 30, 0.22)",
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto",
      });
    });
    el.addEventListener("mouseleave", () => {
      gsap.to(el, { boxShadow: "0 0 0 rgba(0,0,0,0)", duration: 0.35, ease: "power2.out", overwrite: "auto" });
    });
  });
}

function initImageReveal() {
  gsap.utils.toArray<HTMLElement>("[data-reveal-image]").forEach((el) => {
    gsap.fromTo(
      el,
      { scale: 1.05, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.95,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 92%",
          once: true,
        },
      }
    );
  });
}

function initAboutPortrait() {
  document.querySelectorAll<HTMLElement>("[data-about-portrait]").forEach((root) => {
    const figure = root.querySelector<HTMLElement>(".about-portrait-figure");
    const caption = root.querySelector<HTMLElement>(".about-portrait-caption");
    const chips = gsap.utils.toArray<HTMLElement>(root.querySelectorAll(".about-portrait-chip"));
    const blobs = gsap.utils.toArray<HTMLElement>(root.querySelectorAll(".about-portrait-blob"));

    if (!figure) return;

    chips.forEach((chip) => gsap.set(chip, { clearProps: "animation" }));

    const entrance = gsap.timeline({ defaults: { ease: "power2.out" } });

    entrance
      .fromTo(figure, { y: 32, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 })
      .fromTo(caption, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55 }, "-=0.5")
      .fromTo(
        chips,
        { y: 22, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.14 },
        "-=0.4"
      );

    const chipFloat = [
      { y: 12, duration: 2.8, delay: 0 },
      { y: -14, duration: 3.2, delay: 0.3 },
      { y: 10, duration: 2.9, delay: 0.6 },
    ];

    chips.forEach((chip, index) => {
      const cfg = chipFloat[index] ?? chipFloat[0];
      gsap.to(chip, {
        y: cfg.y,
        duration: cfg.duration,
        delay: cfg.delay,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    });

    blobs.forEach((blob) => gsap.set(blob, { clearProps: "animation" }));

    const blobDrift = [
      { x: 18, y: 10, scale: 1.08, duration: 5, delay: 0 },
      { x: -14, y: -8, scale: 1.1, duration: 4.5, delay: 0.4 },
      { x: 12, y: -12, scale: 1.06, duration: 5.5, delay: 0.8 },
    ];

    blobs.forEach((blob, index) => {
      const cfg = blobDrift[index] ?? blobDrift[0];
      gsap.to(blob, {
        x: cfg.x,
        y: cfg.y,
        scale: cfg.scale,
        duration: cfg.duration,
        delay: cfg.delay,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    });
  });
}

function initProcessSteps() {
  document.querySelectorAll<HTMLElement>("[data-process-steps]").forEach((section) => {
    const track = section.querySelector<HTMLElement>("[data-process-track]");
    const steps = gsap.utils.toArray<HTMLElement>(section.querySelectorAll("[data-process-step]"));
    const cards = gsap.utils.toArray<HTMLElement>(section.querySelectorAll("[data-process-card]"));
    const badges = gsap.utils.toArray<HTMLElement>(section.querySelectorAll("[data-process-badge]"));
    const lineFill = section.querySelector<HTMLElement>("[data-process-line-fill]");
    const lineFillMobile = section.querySelector<HTMLElement>("[data-process-line-fill-mobile]");

    if (!track || !steps.length) return;

    cards.forEach((card) => gsap.set(card, { clearProps: "animation" }));
    badges.forEach((badge) => gsap.set(badge, { clearProps: "animation" }));

    gsap.set(cards, { opacity: 0.45, y: 16 });
    gsap.set(badges, { scale: 0.85, opacity: 0 });
    if (lineFill) gsap.set(lineFill, { scaleX: 0, transformOrigin: "left center" });
    if (lineFillMobile) gsap.set(lineFillMobile, { scaleY: 0, transformOrigin: "top center" });

    let activeIndex = 0;

    const setActiveStep = (index: number) => {
      activeIndex = index;

      cards.forEach((card, i) => {
        card.classList.toggle("process-step-card--active", i === index);
        card.classList.toggle("process-step-card--past", i < index);
      });

      badges.forEach((badge, i) => {
        gsap.to(badge, {
          scale: i === index ? 1.1 : i < index ? 1 : 0.9,
          duration: 0.35,
          ease: "back.out(1.6)",
          overwrite: "auto",
        });
      });

      cards.forEach((card, i) => {
        gsap.to(card, {
          opacity: i <= index ? 1 : 0.45,
          y: i === index ? -4 : 0,
          duration: 0.35,
          ease: "power2.out",
          overwrite: "auto",
        });
      });
    };

    gsap.fromTo(
      badges,
      { scale: 0.6, opacity: 0 },
      {
        scale: 0.9,
        opacity: 1,
        duration: 0.55,
        stagger: 0.1,
        ease: "back.out(1.8)",
        scrollTrigger: {
          trigger: track,
          start: "top 85%",
          once: true,
        },
      }
    );

    gsap.fromTo(
      cards,
      { y: 36, opacity: 0 },
      {
        y: 0,
        opacity: 0.45,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: track,
          start: "top 85%",
          once: true,
        },
        onComplete: () => setActiveStep(0),
      }
    );

    if (lineFill) {
      gsap.to(lineFill, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: track,
          start: "top 68%",
          end: "bottom 42%",
          scrub: 0.5,
        },
      });
    }

    if (lineFillMobile) {
      gsap.to(lineFillMobile, {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: track,
          start: "top 72%",
          end: "bottom 38%",
          scrub: 0.5,
        },
      });
    }

    steps.forEach((step, i) => {
      ScrollTrigger.create({
        trigger: step,
        start: "top 70%",
        end: "bottom 30%",
        onEnter: () => setActiveStep(i),
        onEnterBack: () => setActiveStep(i),
      });
    });

    cards.forEach((card, i) => {
      card.addEventListener("mouseenter", () => {
        setActiveStep(i);
        gsap.to(card, { y: -6, duration: 0.25, ease: "power2.out", overwrite: "auto" });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          y: activeIndex === i ? -4 : 0,
          duration: 0.28,
          ease: "power2.out",
          overwrite: "auto",
        });
      });
    });
  });
}

function initBeforeAfter() {
  document.querySelectorAll<HTMLElement>("[data-before-after]").forEach((root) => {
    const knob = root.querySelector<HTMLElement>(".before-after-knob");
    if (!knob) return;

    gsap.set(knob, { clearProps: "animation" });

    gsap.to(knob, {
      scale: 1.1,
      duration: 1.4,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    root.addEventListener("pointerdown", () => {
      gsap.to(knob, { scale: 1.18, duration: 0.15, ease: "power2.out", overwrite: "auto" });
    });
    const release = () => {
      gsap.to(knob, { scale: 1, duration: 0.25, ease: "power2.out", overwrite: "auto" });
    };
    root.addEventListener("pointerup", release);
    root.addEventListener("pointerleave", release);
  });
}

function initFaq() {
  document.querySelectorAll<HTMLDetailsElement>("[data-faq-item]").forEach((details) => {
    const panel = details.querySelector<HTMLElement>(".faq-answer");
    const icon = details.querySelector<HTMLElement>(".faq-icon");
    if (!panel) return;

    details.addEventListener("toggle", () => {
      if (details.open) {
        gsap.set(panel, { height: "auto" });
        const endHeight = panel.offsetHeight;
        gsap.fromTo(
          panel,
          { height: 0, opacity: 0 },
          {
            height: endHeight,
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
            onComplete: () => gsap.set(panel, { height: "auto" }),
          }
        );
        if (icon) gsap.to(icon, { rotation: 45, duration: 0.28, ease: "power2.out" });
      } else {
        gsap.to(panel, { height: 0, opacity: 0, duration: 0.28, ease: "power2.in" });
        if (icon) gsap.to(icon, { rotation: 0, duration: 0.28, ease: "power2.out" });
      }
    });

    if (!details.open) {
      gsap.set(panel, { height: 0, opacity: 0 });
    }
  });
}

function initMobileBar() {
  const bar = document.querySelector<HTMLElement>("[data-mobile-bar]");
  if (!bar) return;

  const mobile = window.matchMedia("(max-width: 767px)").matches;
  if (!mobile) return;

  gsap.fromTo(
    bar,
    { y: 80, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.6, delay: 0.5, ease: "power3.out" }
  );
}
