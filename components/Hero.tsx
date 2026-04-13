"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useLang } from "@/lib/LanguageContext";

export default function Hero() {
  const { t } = useLang();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const W = window.innerWidth, H = window.innerHeight;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 100);
    camera.position.z = 4;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H, false);
    renderer.setClearColor(0x000000, 0);

    const sphere = new THREE.Mesh(new THREE.IcosahedronGeometry(1.4, 3), new THREE.MeshBasicMaterial({ color: 0xc9a84c, wireframe: true, transparent: true, opacity: 0.4 }));
    scene.add(sphere);
    const inner = new THREE.Mesh(new THREE.IcosahedronGeometry(1.15, 2), new THREE.MeshStandardMaterial({ color: 0x110d04, metalness: 0.8, roughness: 0.3, transparent: true, opacity: 0.7 }));
    scene.add(inner);

    const N = 280, pos = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      const r = 2.0 + Math.random() * 1.6, theta = Math.random() * Math.PI * 2, phi = Math.acos(2 * Math.random() - 1);
      pos[i*3] = r*Math.sin(phi)*Math.cos(theta); pos[i*3+1] = r*Math.sin(phi)*Math.sin(theta); pos[i*3+2] = r*Math.cos(phi);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    const pts = new THREE.Points(geo, new THREE.PointsMaterial({ color: 0xe8c97a, size: 0.022, transparent: true, opacity: 0.7 }));
    scene.add(pts);

    scene.add(new THREE.AmbientLight(0xffffff, 0.4));
    const pl = new THREE.PointLight(0xc9a84c, 3, 10); pl.position.set(2, 2, 3); scene.add(pl);

    const onMouse = (e: MouseEvent) => { mouseRef.current.x = (e.clientX/W - 0.5)*2; mouseRef.current.y = -(e.clientY/H - 0.5)*2; };
    window.addEventListener("mousemove", onMouse);
    const onResize = () => { const w=window.innerWidth,h=window.innerHeight; camera.aspect=w/h; camera.updateProjectionMatrix(); renderer.setSize(w,h,false); };
    window.addEventListener("resize", onResize);

    let id: number; const t0 = performance.now();
    const loop = () => {
      id = requestAnimationFrame(loop);
      const t = (performance.now()-t0)*0.001, mx=mouseRef.current.x, my=mouseRef.current.y;
      sphere.rotation.y=t*0.13+mx*0.25; sphere.rotation.x=t*0.07+my*0.12;
      inner.rotation.y=-t*0.09; inner.rotation.z=t*0.05;
      pts.rotation.y=t*0.04+mx*0.08; pts.rotation.x=my*0.06;
      renderer.render(scene, camera);
    };
    loop();
    return () => { cancelAnimationFrame(id); window.removeEventListener("mousemove", onMouse); window.removeEventListener("resize", onResize); renderer.dispose(); };
  }, []);

  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden", background: "#080808" }}>
      <canvas ref={canvasRef} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1, pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 80% at 72% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)", zIndex: 2, pointerEvents: "none" }} />
      <div className="container" style={{ position: "relative", zIndex: 3, paddingTop: "80px" }}>
        <div style={{ maxWidth: "700px", paddingLeft: "3%" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#C9A84C", fontWeight: 500, marginBottom: "28px" }}>{t.hero.label}</p>
          <h1 style={{ fontSize: "clamp(50px, 6.5vw, 108px)", fontWeight: 700, lineHeight: 1.03, letterSpacing: "-0.03em", color: "#F5F5F5", marginBottom: "28px" }}>
            {t.hero.line1}<br />{t.hero.line2}<br /><span style={{ color: "#C9A84C" }}>{t.hero.line3}</span>
          </h1>
          <p style={{ fontSize: "17px", color: "#6B6B6B", maxWidth: "460px", lineHeight: 1.75, marginBottom: "44px" }}>{t.hero.sub}</p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <a href="#contact" style={{ display: "inline-block", padding: "14px 30px", background: "#C9A84C", color: "#080808", textDecoration: "none", fontSize: "14px", fontWeight: 600, letterSpacing: "0.04em", borderRadius: "2px" }}>{t.hero.cta1}</a>
            <a href="#solutions" style={{ display: "inline-block", padding: "14px 30px", border: "1px solid #1E1E1E", color: "#6B6B6B", textDecoration: "none", fontSize: "14px", letterSpacing: "0.04em", borderRadius: "2px" }}>{t.hero.cta2}</a>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", bottom: "36px", left: "50%", transform: "translateX(-50%)", zIndex: 3, display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <span style={{ fontSize: "9px", letterSpacing: "0.18em", color: "#6B6B6B", textTransform: "uppercase" }}>{t.hero.scroll}</span>
        <div style={{ width: "1px", height: "38px", background: "linear-gradient(to bottom, #C9A84C, transparent)" }} />
      </div>
    </section>
  );
}
