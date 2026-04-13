"use client";

// Solutions — interactive accordion-style section.
// Left column: clickable list of solution items; active item gets a gold left border.
// Right column: detail panel that updates when a different item is selected.
// `active` state holds the id of the currently selected solution ("01", "02", …).

import { useState } from "react";
import { useFadeIn } from "./useFadeIn";
import { useLang } from "@/lib/LanguageContext";

export default function Solutions() {
  const { t } = useLang();
  const [active, setActive] = useState("01");
  const label = useFadeIn(0), title = useFadeIn(100);
  const cur = t.solutions.items.find((s) => s.id === active) ?? t.solutions.items[0];

  return (
    <section id="solutions" style={{ padding: "120px 0", background: "#111111", borderTop: "1px solid #1E1E1E" }}>
      <div className="wrap">
        <p ref={label.ref} style={{ ...label.style, fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9A84C", fontWeight: 500, marginBottom: "16px" }}>{t.solutions.label}</p>
        <h2 ref={title.ref} style={{ ...title.style, fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#F5F5F5", marginBottom: "64px" }}>
          {t.solutions.title1}<br /><span style={{ color: "#C9A84C" }}>{t.solutions.title2}</span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }} className="solutions-grid">
          <div style={{ border: "1px solid #1E1E1E", background: "#080808" }}>
            {t.solutions.items.map((s) => (
              <div key={s.id} onClick={() => setActive(s.id)} style={{ padding: "28px 32px", borderBottom: "1px solid #1E1E1E", cursor: "pointer", background: active === s.id ? "rgba(201,168,76,0.05)" : "transparent", borderLeft: active === s.id ? "3px solid #C9A84C" : "3px solid transparent", transition: "background 0.2s" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <span style={{ fontSize: "11px", color: "#C9A84C", letterSpacing: "0.1em", marginBottom: "6px", display: "block" }}>{s.id}</span>
                    <span style={{ fontSize: "16px", fontWeight: active === s.id ? 600 : 400, color: active === s.id ? "#F5F5F5" : "#6B6B6B" }}>{s.title}</span>
                  </div>
                  <span style={{ color: "#C9A84C", fontSize: "18px", transform: active === s.id ? "rotate(45deg)" : "none", transition: "transform 0.2s" }}>+</span>
                </div>
              </div>
            ))}
          </div>
          <div style={{ border: "1px solid #1E1E1E", background: "#080808", padding: "48px 40px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <span style={{ fontSize: "11px", color: "#C9A84C", letterSpacing: "0.15em", marginBottom: "16px", display: "block" }}>{cur.id}</span>
            <h3 style={{ fontSize: "26px", fontWeight: 700, color: "#F5F5F5", marginBottom: "20px", lineHeight: 1.2 }}>{cur.title}</h3>
            <p style={{ fontSize: "15px", color: "#6B6B6B", lineHeight: 1.8, marginBottom: "32px" }}>{cur.desc}</p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {cur.tags.map((tag) => (
                <span key={tag} style={{ padding: "5px 12px", border: "1px solid #1E1E1E", fontSize: "11px", color: "#6B6B6B", letterSpacing: "0.05em", borderRadius: "2px" }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.solutions-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
