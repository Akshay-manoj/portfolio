"use client";

import { useEffect, useRef } from "react";

// Animated "engineering canvas" backdrop: drifting code particles +
// parallax floating glyphs. Sits behind all content and fully disables
// itself when the user prefers reduced motion.
const GLYPH_CHARS = ["0", "1", "<", ">", "{", "}", "/", ";", "=>", "[]"];
const FLOATIES = ["code", "data_object", "terminal", "database", "api", "change_history"];

export function BackgroundFX() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const canvas = canvasRef.current;
    const layer = layerRef.current;
    if (!canvas || !layer) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let raf = 0;

    type P = { x: number; y: number; char: string; size: number; sx: number; sy: number; o: number };
    let particles: P[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const count = Math.min(120, Math.floor((canvas.width * canvas.height) / 16000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        char: GLYPH_CHARS[Math.floor(Math.random() * GLYPH_CHARS.length)],
        size: Math.random() * 12 + 8,
        sx: (Math.random() - 0.5) * 0.4,
        sy: Math.random() * 0.4 + 0.1,
        o: Math.random() * 0.35 + 0.05,
      }));
    };
    resize();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.sx;
        p.y += p.sy;
        if (p.y > canvas.height) {
          p.y = -20;
          p.x = Math.random() * canvas.width;
        }
        if (p.x > canvas.width) p.x = 0;
        if (p.x < 0) p.x = canvas.width;
        ctx.fillStyle = `rgba(0, 62, 199, ${p.o})`;
        ctx.font = `${p.size}px ui-monospace, monospace`;
        ctx.fillText(p.char, p.x, p.y);
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    // Parallax for floating glyphs
    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const items = layer.querySelectorAll<HTMLElement>("[data-depth]");
      items.forEach((el) => {
        const depth = parseFloat(el.dataset.depth || "0.04");
        el.style.transform = `translate(${-(e.clientX - cx) * depth}px, ${-(e.clientY - cy) * depth}px)`;
      });
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 opacity-60"
      />
      <div
        ref={layerRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 hidden overflow-hidden md:block"
      >
        <span data-depth="0.05" className="material-symbols-outlined absolute left-[5%] top-[15%] text-6xl text-primary/10 transition-transform duration-500">
          {FLOATIES[0]}
        </span>
        <span data-depth="0.03" className="material-symbols-outlined absolute right-[8%] top-[42%] text-8xl text-primary/10 transition-transform duration-500">
          {FLOATIES[3]}
        </span>
        <span data-depth="0.06" className="material-symbols-outlined absolute bottom-[20%] left-[12%] text-7xl text-primary/10 transition-transform duration-500">
          {FLOATIES[2]}
        </span>
        <span data-depth="0.04" className="material-symbols-outlined absolute right-[15%] top-[72%] text-5xl text-primary/10 transition-transform duration-500">
          {FLOATIES[4]}
        </span>
        <span data-depth="0.05" className="material-symbols-outlined absolute left-[45%] top-[8%] text-6xl text-primary/10 transition-transform duration-500">
          {FLOATIES[1]}
        </span>
      </div>
    </>
  );
}
