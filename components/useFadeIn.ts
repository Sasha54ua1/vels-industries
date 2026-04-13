"use client";

// useFadeIn — reusable scroll-triggered fade-up animation hook.
// Uses IntersectionObserver so the animation fires once when the element
// enters the viewport, then disconnects to avoid repeated callbacks.
// Inline styles (not CSS classes) are used intentionally to avoid conflicts
// with Tailwind v4 utility classes.

import { useEffect, useRef, useState } from "react";

export function useFadeIn(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Optional stagger delay so sibling elements animate in sequence
          setTimeout(() => setVisible(true), delay);
          observer.disconnect(); // fire once only
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  // Returns inline styles: invisible + shifted down → visible + in place
  const style: React.CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(28px)",
    transition: "opacity 0.7s ease, transform 0.7s ease",
  };

  return { ref, style };
}
