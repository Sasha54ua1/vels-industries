"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/LanguageContext";
import { Lang } from "@/lib/i18n";

const LANGS: { code: Lang; label: string }[] = [
  { code: "uk", label: "УКР" },
  { code: "ru", label: "РУС" },
  { code: "en", label: "ENG" },
];

export default function Header() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.solutions, href: "#solutions" },
    { label: t.nav.cases, href: "#clients" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      transition: "background 0.4s, backdrop-filter 0.4s, border-color 0.4s",
      background: scrolled ? "rgba(8,8,8,0.88)" : "transparent",
      backdropFilter: scrolled ? "blur(14px)" : "none",
      borderBottom: scrolled ? "1px solid #1E1E1E" : "1px solid transparent",
    }}>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}>
        {/* Logo */}
        <a href="#" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "5px" }}>
          <span style={{ fontSize: "22px", fontWeight: 700, color: "#F5F5F5", letterSpacing: "0.08em" }}>VELS</span>
          <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#C9A84C", display: "inline-block", marginBottom: "10px" }} />
        </a>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "36px" }} className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} style={{ color: "#6B6B6B", textDecoration: "none", fontSize: "14px", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F5F5F5")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#6B6B6B")}
            >
              {link.label}
            </a>
          ))}

          {/* Language switcher */}
          <div style={{ display: "flex", gap: "2px", border: "1px solid #1E1E1E", borderRadius: "3px", overflow: "hidden" }}>
            {LANGS.map((l) => (
              <button key={l.code} onClick={() => setLang(l.code)} style={{
                padding: "5px 10px", border: "none", cursor: "pointer", fontSize: "11px", fontWeight: 500, letterSpacing: "0.06em",
                background: lang === l.code ? "#C9A84C" : "transparent",
                color: lang === l.code ? "#080808" : "#6B6B6B",
                transition: "background 0.2s, color 0.2s",
                fontFamily: "inherit",
              }}>
                {l.label}
              </button>
            ))}
          </div>

          <a href="#contact" style={{
            padding: "9px 20px", border: "1px solid #C9A84C", color: "#C9A84C",
            textDecoration: "none", fontSize: "13px", fontWeight: 500, letterSpacing: "0.05em",
            borderRadius: "2px", transition: "background 0.2s, color 0.2s",
          }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#C9A84C"; e.currentTarget.style.color = "#080808"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#C9A84C"; }}
          >
            {t.nav.cta}
          </a>
        </nav>

        {/* Mobile burger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="mobile-burger"
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: "8px" }}>
          <span style={{ display: "block", width: "24px", height: "1px", background: "#F5F5F5", marginBottom: "6px", transition: "transform 0.3s", transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none" }} />
          <span style={{ display: "block", width: "24px", height: "1px", background: "#F5F5F5", marginBottom: "6px", opacity: menuOpen ? 0 : 1, transition: "opacity 0.3s" }} />
          <span style={{ display: "block", width: "24px", height: "1px", background: "#F5F5F5", transition: "transform 0.3s", transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: "#080808", borderTop: "1px solid #1E1E1E", padding: "24px 40px 32px" }}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
              style={{ display: "block", color: "#6B6B6B", textDecoration: "none", fontSize: "18px", marginBottom: "20px" }}>
              {link.label}
            </a>
          ))}
          {/* Mobile lang switcher */}
          <div style={{ display: "flex", gap: "2px", marginBottom: "24px", width: "fit-content", border: "1px solid #1E1E1E", borderRadius: "3px", overflow: "hidden" }}>
            {LANGS.map((l) => (
              <button key={l.code} onClick={() => setLang(l.code)} style={{
                padding: "7px 14px", border: "none", cursor: "pointer", fontSize: "12px", fontWeight: 500,
                background: lang === l.code ? "#C9A84C" : "transparent",
                color: lang === l.code ? "#080808" : "#6B6B6B",
                fontFamily: "inherit",
              }}>
                {l.label}
              </button>
            ))}
          </div>
          <a href="#contact" onClick={() => setMenuOpen(false)}
            style={{ display: "inline-block", padding: "10px 24px", border: "1px solid #C9A84C", color: "#C9A84C", textDecoration: "none", fontSize: "14px" }}>
            {t.nav.cta}
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) { .desktop-nav { display: none !important; } .mobile-burger { display: block !important; } }
      `}</style>
    </header>
  );
}
