import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { Link } from "react-router-dom";
import { DOSA_UTHAPAM } from "../data/mock";
import banner4 from "../assets/banners/BANNER4.jpg";

const PANELS = [
  {
    kind: "intro",
    eyebrow: "Chapter 01",
    title: "A Weekend Kitchen,",
    titleAccent: "A South Indian Story.",
    body: "Experience the true essence of Madras. We open our doors every Friday (06:00 PM - 10:00 PM), Saturday and Sunday (10:00 AM - 11:00 PM) to bring you the freshest, most authentic flavors of the south.",
    cta: { label: "View Opening Time", to: "/contact" },
    bg: "bg-[#fee9ba]",
    image: banner4,
  },
  {
    kind: "menu",
    eyebrow: "Chapter 02",
    title: "Crispy & Golden.",
    titleAccent: "Pure Tradition.",
    body: "Simplicity on a plate. Golden brown, perfectly crisp Dosas and Vadais served with our signature chutneys. The authentic taste of Madras, crafted with love and served with tradition.",
    cta: { label: "See the Menu", to: "/menu" },
    bg: "bg-[#1a5e3a] text-[#fee9ba]",
    items: DOSA_UTHAPAM.slice(0, 2), // Fewer items for a "crispy" look
  },
];

export default function StickyHorizontalScroll() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    mass: 0.35,
    restDelta: 0.0005,
  });

  const x = useTransform(
    smoothProgress,
    [0, 1],
    ["0vw", `-${(PANELS.length - 1) * 100}vw`]
  );

  return (
    <>
      <section
        ref={ref}
        className="relative hidden md:block"
        style={{ height: `${PANELS.length * 140}vh` }}
      >
        <div className="sticky top-[64px] h-[calc(100vh-64px)] w-screen overflow-hidden">
          <motion.div
            style={{ x }}
            className="flex h-full"
          >
            {PANELS.map((p, i) => (
              <Panel key={i} panel={p} index={i} />
            ))}
          </motion.div>


        </div>
      </section>

      <section className="md:hidden">
        {PANELS.map((p, i) => (
          <div key={i} className={`min-h-[calc(100vh-64px)] w-full ${p.bg}`}>
            <Panel panel={p} index={i} mobile />
          </div>
        ))}
      </section>
    </>
  );
}

function ProgressBlip({ index, progress, total }) {
  const denom = Math.max(1, total - 1);
  const start = index === 0 ? 0 : (index - 0.5) / denom;
  const end = (index + 0.5) / denom;
  const clampedStart = Math.max(0, start);
  const clampedEnd = Math.min(1, end);
  const w = useTransform(
    progress,
    [clampedStart, clampedEnd],
    ["0%", "100%"],
    { clamp: true }
  );
  return (
    <div className="relative h-[3px] w-10 bg-[#1a5e3a]/20">
      <motion.div style={{ width: w }} className="absolute inset-y-0 left-0 bg-[#f4b700]" />
    </div>
  );
}

function Panel({ panel, index, mobile = false }) {
  return (
    <div
      className={`flex-shrink-0 w-screen h-full ${panel.bg} relative ${
        mobile ? "py-12 px-6" : "px-10 md:px-20"
      }`}
    >
      <div className={`max-w-7xl mx-auto h-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center`}>
        <div className="z-10">
          <p className="text-[11px] font-bold tracking-[0.4em] uppercase mb-6 opacity-80">
            {panel.eyebrow}
          </p>
          <h2
            className="font-display leading-[0.92] text-5xl md:text-7xl"
          >
            {panel.title}
            <br />
            <span className="font-decorative italic font-medium">
              {panel.titleAccent}
            </span>
          </h2>
          <p className="mt-7 text-lg md:text-xl leading-relaxed max-w-xl opacity-90">
            {panel.body}
          </p>
          <Link
            to={panel.cta.to}
            className={`btn-sweep mt-10 inline-block px-8 py-4 text-[12px] ${
              panel.kind === "menu"
                ? "border-[#f4b700] text-[#f4b700]"
                : "border-[#1a5e3a] text-[#1a5e3a]"
            }`}
          >
            {panel.cta.label}
          </Link>
        </div>

        {panel.image && (
          <div className="relative img-hover h-[60vh] md:h-[70vh] border-[6px] border-[#1a5e3a] shadow-[16px_16px_0_#f4b700]">
            <img
              src={panel.image}
              alt={panel.title}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {panel.kind === "menu" && (
          <div className="grid grid-cols-2 gap-4 md:gap-6 mt-10 md:mt-0">
            {panel.items.map((m) => (
              <div
                key={m.id}
                className="img-hover bg-white p-3 border-[3px] border-[#f4b700]"
              >
                <div className="aspect-square overflow-hidden">
                  <img src={m.image} alt={m.name} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="pt-3 pb-1 flex items-baseline justify-between gap-3 text-[#1a5e3a]">
                  <p className="font-display text-lg leading-tight">
                    {m.name}
                  </p>
                  <span className="text-xs font-bold whitespace-nowrap">
                    {m.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
