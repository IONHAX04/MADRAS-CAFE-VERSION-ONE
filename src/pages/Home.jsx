import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_SLIDES, PROMO_TILES } from '../data/mock';
import StickyHorizontalScroll from '../components/StickyHorizontalScroll';

// Hero Placeholder
// (Import removed as images are now handled in mock.js)


// Original Banners
import banner5 from '../assets/home/secondary-banner.jpeg';


import thirdHero1 from '../assets/home/ThirdHeroOne.jpeg';
import thirdHero2 from '../assets/home/ThirdHeroTwo.jpeg';


// Gallery imports removed

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % HERO_SLIDES.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="bg-[#fee9ba] relative">
      {/* Hero Carousel - STICKY Section */}
      <section className="relative md:sticky top-0 h-[100dvh] bg-[#fee9ba] overflow-hidden z-0">
        <div 
          className="flex w-full h-full transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {HERO_SLIDES.map((slide) => (
            <div
              key={slide.id}
              className="relative min-w-full h-full"
            >
              <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
              <div className="absolute inset-x-0 top-6 md:top-12 flex flex-col items-center text-center px-6">

                <h1 className="font-display font-black text-[#1a5e3a] text-3xl md:text-5xl lg:text-6xl tracking-tight">{slide.title}</h1>
                <p className="text-[#1a5e3a] font-display tracking-[0.4em] mt-4 text-xs md:text-lg uppercase font-bold opacity-80">{slide.subtitle}</p>


              </div>
              <div className="absolute inset-x-0 bottom-20 md:bottom-24 flex justify-center z-30">

                <Link to={slide.link} className="inline-block bg-[#f4b700] text-[#1a5e3a] hover:bg-white px-12 py-5 font-display font-bold tracking-widest text-sm transition-all transform hover:scale-105 shadow-2xl border-2 border-[#1a5e3a]">
                  {slide.cta}
                </Link>
              </div>
            </div>
          ))}

        </div>

        {/* Controls */}
        <button
          aria-label="Previous slide"
          onClick={() => setCurrent((c) => (c - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
          className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 z-[100] w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-md text-white flex items-center justify-center transition-all border border-white/20"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          aria-label="Next slide"
          onClick={() => setCurrent((c) => (c + 1) % HERO_SLIDES.length)}
          className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-[100] w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-md text-white flex items-center justify-center transition-all border border-white/20"
        >
          <ChevronRight size={32} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`h-1.5 transition-all duration-300 rounded-full ${idx === current ? 'w-12 bg-[#f4b700]' : 'w-3 bg-white/40'}`}
            />
          ))}
        </div>

      </section>

      {/* Main Content Sections - Overlays the sticky hero */}
      <div className="relative z-10 bg-[#fee9ba] shadow-[0_-20px_50px_rgba(0,0,0,0.15)]">
        
        {/* Secondary Hero Section (Sticky Horizontal Scroll - 2 Chapters) */}
        <StickyHorizontalScroll />



        {/* Promo tiles */}
        <section className="bg-[#fee9ba] paper-texture py-24 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROMO_TILES.map((tile, i) => (
              <Link to={tile.link} key={i} className="group block relative overflow-hidden bg-neutral-200 rounded-lg shadow-lg">
                <div className="aspect-[4/5]">
                  <img src={tile.image} alt={tile.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                  <h3 className="font-display font-black text-2xl md:text-3xl tracking-tight">{tile.title}</h3>
                  <p className="font-display tracking-[0.2em] text-[10px] mt-3 group-hover:translate-x-2 transition-transform uppercase font-bold text-[#f4b700]">{tile.cta} →</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Big banner image */}
        <section className="bg-[#1a5e3a] relative overflow-hidden">
          <img src={banner5} alt="Madras Cafe banner" className="w-full block object-cover opacity-90" />
          <div className="absolute inset-0 bg-[#1a5e3a]/10" />
        </section>

      </div>
    </div>
  );
};

export default Home;
