"use client";

import { useFadeIn } from "./useFadeIn";
import { useLang } from "@/lib/LanguageContext";

const techs = [
  { name: "OpenAI", desc: "GPT-4, Whisper, DALL·E" },
  { name: "LangChain", desc: "Agent orchestration" },
  { name: "Python", desc: "Core AI backend" },
  { name: "n8n", desc: "Workflow automation" },
  { name: "Pinecone", desc: "Vector database" },
  { name: "FastAPI", desc: "API layer" },
  { name: "Anthropic", desc: "Claude models" },
  { name: "Supabase", desc: "Real-time database" },
];

export default function Technologies() {
  const { t } = useLang();
  const label = useFadeIn(0), title = useFadeIn(100), desc = useFadeIn(150), grid = useFadeIn(200);

  return (
    <section style={{ padding: "100px 0", background: "#111111", borderTop: "1px solid #1E1E1E" }}>
      <div className="container">
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "52px", flexWrap: "wrap", gap: "20px" }}>
          <div>
            <p ref={label.ref} style={{ ...label.style, fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9A84C", fontWeight: 500, marginBottom: "12px" }}>{t.technologies.label}</p>
            <h2 ref={title.ref} style={{ ...title.style, fontSize: "clamp(26px, 3.5vw, 42px)", fontWeight: 700, letterSpacing: "-0.02em", color: "#F5F5F5" }}>{t.technologies.title}</h2>
          </div>
          <p ref={desc.ref} style={{ ...desc.style, fontSize: "14px", color: "#6B6B6B", maxWidth: "300px", lineHeight: 1.7 }}>{t.technologies.desc}</p>
        </div>
        <div ref={grid.ref} style={{ ...grid.style, display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1px", border: "1px solid #1E1E1E" }} className="tech-grid">
          {techs.map((tech) => (
            <div key={tech.name} style={{ padding: "28px 24px", background: "#080808", borderRight: "1px solid #1E1E1E", borderBottom: "1px solid #1E1E1E", transition: "background 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(201,168,76,0.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#080808")}
            >
              <div style={{ fontSize: "15px", fontWeight: 600, color: "#F5F5F5", marginBottom: "5px" }}>{tech.name}</div>
              <div style={{ fontSize: "12px", color: "#6B6B6B" }}>{tech.desc}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){.tech-grid{grid-template-columns:repeat(2,1fr)!important}}@media(max-width:480px){.tech-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
