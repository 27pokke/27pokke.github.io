const root = document.documentElement;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealElements = [...document.querySelectorAll(".reveal")];

root.classList.add("js");

if (!reduceMotion && "IntersectionObserver" in window) {
  try {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8%", threshold: 0.08 },
    );

    root.classList.add("reveal-ready");
    revealElements.forEach((element) => revealObserver.observe(element));
  } catch {
    root.classList.remove("reveal-ready");
    revealElements.forEach((element) => element.classList.add("is-visible"));
  }
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

const navigationLinks = [...document.querySelectorAll('nav a[href^="#"]')];
const sectionTargets = navigationLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if ("IntersectionObserver" in window && sectionTargets.length) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;
      for (const link of navigationLinks) {
        const isCurrent = link.getAttribute("href") === `#${visible.target.id}`;
        if (isCurrent) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
      }
    },
    { rootMargin: "-30% 0px -55%", threshold: [0, 0.15, 0.5] },
  );

  sectionTargets.forEach((section) => sectionObserver.observe(section));
}
