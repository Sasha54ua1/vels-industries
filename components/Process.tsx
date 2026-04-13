"use client";

import { useFadeIn } from "./useFadeIn";
import { useLang } from "@/lib/LanguageContext";

export default function Process() {
  const { t } = useLang();
  const label = useFadeIn(0), title = useFadeIn(100);
  const s0 = useFadeIn(100), s1 = useFadeIn(200), s2 = useFadeIn(300), s3 = useFadeIn(400);
  const fades = [s0, s1, s2, s3];

  return (
    <section style={{ padding: "120px 0", background: "#080808", borderTop: "1px solid #1E1E1E" }}>
      <div className="container">
        <p ref={label.ref} style={{ ...label.style, fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9A84C", fontWeight: 500, marginBottom: "16px" }}>{t.process.label}</p>
        <h2 ref={title.ref} style={{ ...title.style, fontSize: "clamp(30px, 4vw, 50px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#F5F5F5", marginBottom: "64px" }}>{t.process.title}</h2>
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", top: "27px", left: "27px", right: "27px", height: "1px", background: "#1E1E1E" }} className="conn" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "28px", position: "relative", zIndex: 1 }} className="process-grid">
            {t.process.steps.map((step, i) => (
              <div key={step.num} ref={fades[i].ref} style={fades[i].style}>
                <div style={{ width: "54px", height: "54px", border: "1px solid #C9A84C", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", color: "#C9A84C", letterSpacing: "0.1em", fontWeight: 500, background: "#080808", marginBottom: "24px", borderRadius: "50%" }}>{step.num}</div>
                <h3 style={{ fontSize: "17px", fontWeight: 600, color: "#F5F5F5", marginBottom: "10px" }}>{step.title}</h3>
                <p style={{ fontSize: "14px", color: "#6B6B6B", lineHeight: 1.7 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){.process-grid{grid-template-columns:1fr 1fr!important}.conn{display:none}}@media(max-width:480px){.process-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
