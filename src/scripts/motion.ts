import { animate } from "motion/mini";
import { inView, stagger } from "motion";

// Motion handles the staggered entrances; the hero uses pure CSS so LCP is never delayed.
if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
  for (const group of document.querySelectorAll<HTMLElement>("[data-stagger]")) {
    const children = [...group.children] as HTMLElement[];
    const below = group.getBoundingClientRect().top > innerHeight;
    if (!below) continue;

    for (const child of children) child.style.opacity = "0";
    inView(
      group,
      () => {
        animate(
          children,
          { opacity: [0, 1], y: [24, 0] },
          { duration: 0.7, delay: stagger(0.07), ease: [0.22, 1, 0.36, 1] },
        );
      },
      { margin: "0px 0px -15% 0px" },
    );
  }
}
