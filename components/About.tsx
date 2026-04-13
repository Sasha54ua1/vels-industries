"use client";

// About — company stats (left column) + narrative text (right column).
// Each stat card fades in with a staggered delay for a cascading effect.

import { useFadeIn } from "./useFadeIn";
import { useLang } from "@/lib/LanguageContext";

export default function About() {
  const { t } = useLang();
  const label = useFadeIn(0), s0 = useFadeIn(100), s1 = useFadeIn(200), s2 = useFadeIn(300), text = useFadeIn(150);
  const fades = [s0, s1, s2];

  return (
    <section id="about" style={{ padding: "120px 0", background: "#080808", borderTop: "1px solid #1E1E1E" }}>
      <div className="wrap">
        <p ref={label.ref} style={{ ...label.style, fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9A84C", fontWeight: 500, marginBottom: "60px" }}>{t.about.label}</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }} className="about-grid">
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            {t.about.stats.map((s, i) => (
              <div key={i} ref={fades[i].ref} style={{ ...fades[i].style, borderBottom: "1px solid #1E1E1E", paddingBottom: "36px" }}>
                <div style={{ fontSize: "clamp(48px, 6vw, 80px)", fontWeight: 700, color: "#C9A84C", lineHeight: 1, letterSpacing: "-0.03em", marginBottom: "10px" }}>{s.value}</div>
                <div style={{ fontSize: "14px", color: "#6B6B6B" }}>{s.label}</div>
              </div>
            ))}
          </div>
          <div ref={text.ref} style={text.style}>
            <h2 style={{ fontSize: "clamp(30px, 4vw, 50px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#F5F5F5", marginBottom: "24px" }}>
              {t.about.title1}<br /><span style={{ color: "#C9A84C" }}>{t.about.title2}</span>{t.about.title3}
            </h2>
            <p style={{ fontSize: "16px", color: "#6B6B6B", lineHeight: 1.8, marginBottom: "18px" }}>{t.about.p1}</p>
            <p style={{ fontSize: "16px", color: "#6B6B6B", lineHeight: 1.8 }}>{t.about.p2}</p>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr!important;gap:40px!important}}`}</style>
    </section>
  );
}
