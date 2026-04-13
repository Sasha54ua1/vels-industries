"use client";

// WhatWeDo — three service cards rendered in a responsive grid.
// Cards lift 4 px and highlight their border on hover for interactivity.
// On mobile (<900 px) the grid collapses to a single column via inline <style>.

import { useFadeIn } from "./useFadeIn";
import { useLang } from "@/lib/LanguageContext";

export default function WhatWeDo() {
  const { t } = useLang();
  const label = useFadeIn(0), title = useFadeIn(100), c0 = useFadeIn(100), c1 = useFadeIn(220), c2 = useFadeIn(340);
  const cards = [c0, c1, c2];

  return (
    <section id="what-we-do" style={{ padding: "120px 0", background: "#111111", borderTop: "1px solid #1E1E1E" }}>
      <div className="wrap">
        <p ref={label.ref} style={{ ...label.style, fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9A84C", fontWeight: 500, marginBottom: "16px" }}>{t.whatWeDo.label}</p>
        <h2 ref={title.ref} style={{ ...title.style, fontSize: "clamp(34px, 5vw, 62px)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.03em", color: "#F5F5F5", marginBottom: "64px" }}>
          {t.whatWeDo.title1}<br /><span style={{ color: "#C9A84C" }}>{t.whatWeDo.title2}</span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "2px" }} className="services-grid">
          {t.whatWeDo.services.map((s, i) => (
            <div key={s.number} ref={cards[i].ref} style={{ ...cards[i].style, background: "#080808", padding: "44px 36px", border: "1px solid #1E1E1E", transition: "border-color 0.3s, transform 0.3s, opacity 0.7s ease" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#C9A84C"; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#1E1E1E"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <div style={{ fontSize: "11px", color: "#C9A84C", letterSpacing: "0.15em", marginBottom: "28px", fontWeight: 500 }}>{s.number}</div>
              <h3 style={{ fontSize: "21px", fontWeight: 600, color: "#F5F5F5", marginBottom: "14px", lineHeight: 1.3 }}>{s.title}</h3>
              <p style={{ fontSize: "14px", color: "#6B6B6B", lineHeight: 1.75 }}>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){.services-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
