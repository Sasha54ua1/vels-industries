"use client";

import { useEffect } from "react";

export default function AnimationInit() {
  useEffect(() => {
    const activate = (el: Element, delay: number) => {
      setTimeout(() => el.classList.add("visible"), delay);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const els = Array.from(entry.target.querySelectorAll<Element>(".fade-up"));
          els.forEach((el, i) => activate(el, i * 110));
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -30px 0px" }
    );

    // Wait for DOM to be fully painted, then observe
    const init = () => {
      document.querySelectorAll("section, footer").forEach((el) => observer.observe(el));
    };

    // Small delay to ensure all components have rendered
    const timer = setTimeout(init, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return null;
}
