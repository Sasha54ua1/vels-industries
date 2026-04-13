"use client";

// Clients — two-part section: scrolling marquee of client logos (top)
// and a 2-column grid of case study cards (bottom).
// The marquee is achieved by duplicating the array and animating `translateX(-50%)`
// so it loops seamlessly without JavaScript.

import { useFadeIn } from "./useFadeIn";
import { useLang } from "@/lib/LanguageContext";

// Placeholder client names — replace with actual logos/names when available
const clientNames = ["Innovate Corp", "TechFlow", "DataPrime", "NexusAI", "Globex", "Synergy", "FutureScale", "OmniLogic"];

export default function Clients() {
  const { t } = useLang();
  const label1 = useFadeIn(0), label2 = useFadeIn(0), title2 = useFadeIn(100);
  const c0 = useFadeIn(100), c1 = useFadeIn(200), c2 = useFadeIn(150), c3 = useFadeIn(250);
  const cFades = [c0, c1, c2, c3];

  return (
    <section id="clients" style={{ padding: "120px 0", background: "#080808", borderTop: "1px solid #1E1E1E" }}>
      <div className="wrap">
        <p ref={label1.ref} style={{ ...label1.style, fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9A84C", fontWeight: 500, marginBottom: "44px" }}>{t.clients.label1}</p>
        <div style={{ overflow: "hidden", borderTop: "1px solid #1E1E1E", borderBottom: "1px solid #1E1E1E", padding: "26px 0", marginBottom: "96px" }}>
          <div style={{ display: "flex", gap: "72px", animation: "marquee 18s linear infinite", whiteSpace: "nowrap" }}>
            {[...clientNames, ...clientNames].map((c, i) => (
              <span key={i} style={{ fontSize: "17px", fontWeight: 600, color: "#6B6B6B", letterSpacing: "0.1em", textTransform: "uppercase", flexShrink: 0 }}>{c}</span>
            ))}
          </div>
        </div>
        <p ref={label2.ref} style={{ ...label2.style, fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9A84C", fontWeight: 500, marginBottom: "44px" }}>{t.clients.label2}</p>
        <h2 ref={title2.ref} style={{ ...title2.style, fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 700, letterSpacing: "-0.02em", color: "#F5F5F5", marginBottom: "52px" }}>
          {t.clients.title}<br /><span style={{ color: "#C9A84C" }}>{t.clients.titleGold}</span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }} className="cases-grid">
          {t.clients.cases.map((c, i) => (
            <div key={i} ref={cFades[i].ref} style={{ ...cFades[i].style, border: "1px solid #1E1E1E", padding: "36px 32px", background: "#111111", transition: "border-color 0.3s, transform 0.3s, opacity 0.7s ease" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#C9A84C"; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#1E1E1E"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <span style={{ display: "inline-block", padding: "4px 10px", border: "1px solid #C9A84C", color: "#C9A84C", fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "20px", borderRadius: "2px" }}>{c.tag}</span>
              <h3 style={{ fontSize: "19px", fontWeight: 600, color: "#F5F5F5", marginBottom: "10px", lineHeight: 1.3 }}>{c.title}</h3>
              <p style={{ fontSize: "14px", color: "#6B6B6B", lineHeight: 1.7 }}>{c.result}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}@media(max-width:768px){.cases-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
