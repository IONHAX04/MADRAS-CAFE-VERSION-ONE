import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { Link } from "react-router-dom";
import { DOSA_UTHAPAM } from "../data/mock";
import menu1 from "../assets/homeCarousel/menu1.jpeg";
import menu2 from "../assets/homeCarousel/menu2.jpeg";

const PANELS = [
  {
    kind: "intro",
    eyebrow: "Chapter 01",
    title: "A small kitchen,",
    titleAccent: "a long table.",
    body: "Madras Cafe is a sixty-year-old room in Mylapore. We cook the south of India the way our grandmothers did — slowly, quietly, with a brass davarah on the counter that has never left.",
    cta: { label: "Read the Story", to: "/menu" },
    bg: "bg-[#feee8c]",
    image: menu1,
  },
  {
    kind: "menu",
    eyebrow: "Chapter 02",
    title: "Twenty-five plates.",
    titleAccent: "One bill of fare.",
    body: "Three regions, four meals a day. Ghee Roast Dosas, Chettinad Biryani, Bisi Bele Bath, and a coffee that takes a minute and a half to pour.",
    cta: { label: "See the Menu", to: "/menu" },
    bg: "bg-[#1a5e3a] text-white",
    items: DOSA_UTHAPAM.slice(0, 4),
  },
  {
    kind: "lifestyle",
    eyebrow: "Chapter 03",
    title: "Loud floor.",
    titleAccent: "Loud kitchen.",
    body: "Our team is six. The menu is twenty-five plates. We open the doors at half past seven and light the first stove with a match — the way we always have.",
    cta: { label: "Find a Location", to: "/locations" },
    bg: "bg-[#f4b700] text-[#1a5e3a]",
    image: menu2,
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
        <div className="sticky top-0 h-screen w-screen overflow-hidden">
          <motion.div
            style={{ x }}
            className="flex h-full"
          >
            {PANELS.map((p, i) => (
              <Panel key={i} panel={p} index={i} />
            ))}
          </motion.div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20 bg-white/80 backdrop-blur-md px-5 py-3 border-2 border-[#1a5e3a]">
            {PANELS.map((_, i) => (
              <ProgressBlip key={i} index={i} progress={smoothProgress} total={PANELS.length} />
            ))}
            <span className="ml-3 font-bold text-[10px] tracking-[0.4em] uppercase text-[#1a5e3a]">
              Scroll →
            </span>
          </div>
        </div>
      </section>

      <section className="md:hidden">
        {PANELS.map((p, i) => (
          <div key={i} className={`min-h-screen w-full ${p.bg}`}>
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
        mobile ? "py-24 px-6" : "px-10 md:px-20"
      }`}
    >
      <div className={`max-w-7xl mx-auto h-full grid grid-cols-1 ${
        panel.kind === "menu" ? "" : "md:grid-cols-2"
      } gap-12 md:gap-20 items-center`}>
        <div>
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
          <div className="grid grid-cols-2 gap-5 md:gap-7 max-w-2xl md:absolute md:right-20 md:top-1/2 md:-translate-y-1/2 md:w-[44%] mt-10 md:mt-0">
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
                    {m.price || "₹ 180"}
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
