"use client";

// Footer — site-wide footer with logo, navigation links, and contact info.
// Marked "use client" because it reads from LanguageContext (client-only React context).
// Copyright year is calculated dynamically so it never needs manual updating.

import { useLang } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#111111", borderTop: "1px solid #1E1E1E", padding: "60px 0 40px" }}>
      <div className="wrap">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "48px", flexWrap: "wrap", gap: "40px" }} className="footer-top">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "12px" }}>
              <span style={{ fontSize: "20px", fontWeight: 700, color: "#F5F5F5", letterSpacing: "0.08em" }}>VELS</span>
              <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#C9A84C", display: "inline-block", marginBottom: "10px" }} />
            </div>
            <p style={{ fontSize: "13px", color: "#6B6B6B", maxWidth: "240px", lineHeight: 1.7 }}>{t.footer.tagline}</p>
          </div>
          <div style={{ display: "flex", gap: "72px", flexWrap: "wrap" }}>
            <div>
              <p style={{ fontSize: "11px", color: "#C9A84C", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "20px" }}>{t.footer.company}</p>
              {t.footer.nav.map((item, i) => (
                <a key={item} href={t.footer.navHrefs[i]} style={{ display: "block", fontSize: "14px", color: "#6B6B6B", textDecoration: "none", marginBottom: "12px", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#F5F5F5")} onMouseLeave={(e) => (e.currentTarget.style.color = "#6B6B6B")}>{item}</a>
              ))}
            </div>
            <div>
              <p style={{ fontSize: "11px", color: "#C9A84C", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "20px" }}>{t.footer.contacts}</p>
              <a href="mailto:hello@vels.ai" style={{ display: "block", fontSize: "14px", color: "#6B6B6B", textDecoration: "none", marginBottom: "12px" }}>hello@vels.ai</a>
              <a href="https://t.me/vels_industries" style={{ display: "block", fontSize: "14px", color: "#6B6B6B", textDecoration: "none" }}>Telegram</a>
            </div>
          </div>
        </div>
        <div style={{ height: "1px", background: "#1E1E1E", marginBottom: "28px" }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
          <p style={{ fontSize: "12px", color: "#6B6B6B" }}>© {year} Vels Industries. {t.footer.copyright}</p>
          <p style={{ fontSize: "12px", color: "#6B6B6B" }}>{t.footer.slogan}</p>
        </div>
      </div>
      <style>{`@media(max-width:768px){.footer-top{flex-direction:column!important}}`}</style>
    </footer>
  );
}
