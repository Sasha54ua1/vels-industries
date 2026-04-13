"use client";

import { useState } from "react";
import { useFadeIn } from "./useFadeIn";
import { useLang } from "@/lib/LanguageContext";

export default function Contact() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [sent, setSent] = useState(false);
  const left = useFadeIn(0), right = useFadeIn(200);

  const inputStyle: React.CSSProperties = { width: "100%", background: "transparent", border: "none", borderBottom: "1px solid #1E1E1E", padding: "14px 0", fontSize: "15px", color: "#F5F5F5", outline: "none", transition: "border-color 0.2s", fontFamily: "inherit" };

  return (
    <section id="contact" style={{ padding: "120px 0", background: "#080808", borderTop: "1px solid #1E1E1E" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "100px", alignItems: "start" }} className="contact-grid">
          <div ref={left.ref} style={left.style}>
            <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9A84C", fontWeight: 500, marginBottom: "24px" }}>{t.contact.label}</p>
            <h2 style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.03em", color: "#F5F5F5", marginBottom: "24px" }}>
              {t.contact.title1}<br /><span style={{ color: "#C9A84C" }}>{t.contact.title2}</span>
            </h2>
            <p style={{ fontSize: "15px", color: "#6B6B6B", lineHeight: 1.8, maxWidth: "360px", marginBottom: "44px" }}>{t.contact.sub}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <a href="mailto:hello@vels.ai" style={{ fontSize: "14px", color: "#6B6B6B", textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")} onMouseLeave={(e) => (e.currentTarget.style.color = "#6B6B6B")}>
                <span style={{ width: "20px", height: "1px", background: "#C9A84C" }} />hello@vels.ai
              </a>
              <a href="https://t.me/vels_industries" style={{ fontSize: "14px", color: "#6B6B6B", textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")} onMouseLeave={(e) => (e.currentTarget.style.color = "#6B6B6B")}>
                <span style={{ width: "20px", height: "1px", background: "#C9A84C" }} />Telegram
              </a>
            </div>
          </div>
          <div ref={right.ref} style={right.style}>
            {sent ? (
              <div style={{ border: "1px solid #C9A84C", padding: "64px 48px", textAlign: "center" }}>
                <div style={{ fontSize: "36px", marginBottom: "16px", color: "#C9A84C" }}>✓</div>
                <h3 style={{ fontSize: "22px", fontWeight: 600, color: "#F5F5F5", marginBottom: "12px" }}>{t.contact.successTitle}</h3>
                <p style={{ fontSize: "14px", color: "#6B6B6B" }}>{t.contact.successSub}</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                {(["name", "email", "company", "message"] as const).map((field) => (
                  <div key={field}>
                    <label style={{ fontSize: "11px", color: "#6B6B6B", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "4px" }}>{t.contact.fields[field]}</label>
                    {field === "message" ? (
                      <textarea required rows={4} style={{ ...inputStyle, resize: "none" }} placeholder={t.contact.placeholders[field]}
                        value={form[field]} onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                        onFocus={(e) => (e.target.style.borderBottomColor = "#C9A84C")} onBlur={(e) => (e.target.style.borderBottomColor = "#1E1E1E")} />
                    ) : (
                      <input required={field !== "company"} type={field === "email" ? "email" : "text"} style={inputStyle} placeholder={t.contact.placeholders[field]}
                        value={form[field]} onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                        onFocus={(e) => (e.target.style.borderBottomColor = "#C9A84C")} onBlur={(e) => (e.target.style.borderBottomColor = "#1E1E1E")} />
                    )}
                  </div>
                ))}
                <button type="submit" style={{ padding: "16px 32px", background: "#C9A84C", color: "#080808", border: "none", fontSize: "14px", fontWeight: 600, letterSpacing: "0.05em", cursor: "pointer", fontFamily: "inherit", borderRadius: "2px", alignSelf: "flex-start" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#E8C97A")} onMouseLeave={(e) => (e.currentTarget.style.background = "#C9A84C")}>
                  {t.contact.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.contact-grid{grid-template-columns:1fr!important;gap:48px!important}}`}</style>
    </section>
  );
}
