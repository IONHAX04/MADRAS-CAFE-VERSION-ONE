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


// Original Gallery images
import g1 from '../assets/gallery/gallery1.png';
import g2 from '../assets/gallery/gallery2.png';
import g3 from '../assets/gallery/gallery3.png';
import g4 from '../assets/gallery/gallery4.png';
import g5 from '../assets/gallery/gallery5.png';
import g6 from '../assets/gallery/gallery6.png';
import g7 from '../assets/gallery/gallery7.png';
import g8 from '../assets/gallery/gallery8.png';

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % HERO_SLIDES.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="bg-[#fee9ba] relative">
      {/* Hero Carousel - STICKY Section */}
      <section className="relative md:sticky top-0 h-[85vh] md:h-screen bg-[#fee9ba] overflow-hidden z-0">
        <div className="relative h-full w-full">
          {HERO_SLIDES.map((slide, idx) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
              <div className="absolute inset-x-0 top-6 md:top-12 flex flex-col items-center text-center px-6">

                <h1 className="font-display font-black text-[#1a5e3a] text-4xl md:text-8xl tracking-tight">{slide.title}</h1>
                <p className="text-[#1a5e3a] font-display tracking-[0.3em] mt-4 text-sm md:text-2xl uppercase font-bold">{slide.subtitle}</p>
              </div>
              <div className="absolute inset-x-0 bottom-20 md:bottom-24 flex justify-center z-30">

                <Link to={slide.link} className="inline-block bg-[#f4b700] text-[#1a5e3a] hover:bg-white px-12 py-5 font-display font-bold tracking-widest text-sm transition-all transform hover:scale-105 shadow-2xl border-2 border-[#1a5e3a]">
                  {slide.cta}
                </Link>
              </div>
            </div>
          ))}

          {/* Controls */}
          <button
            aria-label="Previous slide"
            onClick={() => setCurrent((c) => (c - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
            className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-md text-white flex items-center justify-center transition-all border border-white/20"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            aria-label="Next slide"
            onClick={() => setCurrent((c) => (c + 1) % HERO_SLIDES.length)}
            className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-md text-white flex items-center justify-center transition-all border border-white/20"
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
        </div>
      </section>

      {/* Main Content Sections - Overlays the sticky hero */}
      <div className="relative z-10 bg-[#fee9ba] shadow-[0_-20px_50px_rgba(0,0,0,0.15)]">
        
        {/* Secondary Hero Section (Sticky Horizontal Scroll - 2 Chapters) */}
        <StickyHorizontalScroll />

        {/* Soft Serve Heading */}
        <section className="bg-[#1a5e3a] paper-texture pt-12 md:pt-20 pb-0 px-6 text-center border-t-4 border-[#f4b700]">
          <h2 className="font-display font-black text-white text-5xl md:text-8xl tracking-tight uppercase">SOUTH INDIAN</h2>
          <p className="font-script text-[#f4b700] text-4xl md:text-6xl mt-4">Check Out The Menu</p>
        </section>

        {/* Banner Images Section - Full Screen Coverage */}
        <section className="bg-[#1a5e3a] pb-12 md:pb-20 min-h-screen flex flex-col justify-center">
          <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-12 px-6 w-full">
            <div className="overflow-hidden h-auto">
              <img src={thirdHero1} alt="Madras Cafe authentic" className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="overflow-hidden h-auto">
              <img src={thirdHero2} alt="Madras Cafe specialties" className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700" />
            </div>
          </div>


          <div className="text-center px-6 mt-8">
            <Link to="/menu" className="inline-block bg-[#f4b700] text-[#1a5e3a] hover:bg-white px-12 py-5 font-display font-bold tracking-[0.2em] text-sm transition-all transform hover:scale-105 shadow-xl">
              VIEW THE FULL MENU
            </Link>
          </div>
        </section>

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

        {/* Properly Fitted Gallery */}
        <section className="bg-[#fee9ba] paper-texture py-24 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display font-black text-[#1a5e3a] text-5xl md:text-7xl tracking-tight mb-4">OUR GALLERY</h2>
              <div className="h-1.5 w-32 bg-[#f4b700] mx-auto"></div>
              <p className="font-display font-bold text-[#1a5e3a] text-xl md:text-2xl mt-6 uppercase tracking-[0.2em]">A Taste of Tradition in Every Frame</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[300px]">
              <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-xl shadow-lg h-[300px] md:h-auto">
                <img src={g1} alt="South Indian Platter" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
              </div>
              <div className="relative group overflow-hidden rounded-xl shadow-lg h-[250px] md:h-auto">
                <img src={g2} alt="Filter Coffee" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
              </div>
              <div className="relative group overflow-hidden rounded-xl shadow-lg h-[250px] md:h-auto">
                <img src={g3} alt="Indian Sweets" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
              </div>
              <div className="md:col-span-2 relative group overflow-hidden rounded-xl shadow-lg h-[250px] md:h-auto">
                <img src={g4} alt="Cafe Ambiance" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
              </div>
            </div>

            {/* Section 2 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[250px] mt-4">
              <div className="relative group overflow-hidden rounded-xl shadow-lg h-[250px] md:h-auto">
                <img src={g5} alt="Dosa Process" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
              </div>
              <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-xl shadow-lg h-[300px] md:h-auto">
                <img src={g8} alt="Chef Action" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
              </div>
              <div className="relative group overflow-hidden rounded-xl shadow-lg h-[250px] md:h-auto">
                <img src={g6} alt="South Indian Snacks" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
              </div>
            </div>

            {/* Section 3 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[250px] mt-4">
              <div className="md:col-span-2 relative group overflow-hidden rounded-xl shadow-lg h-[250px] md:h-auto">
                <img src={g7} alt="Refreshing Drinks" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
              </div>
              <div className="relative group overflow-hidden rounded-xl shadow-lg h-[250px] md:h-auto">
                <img src={g2} alt="Food Close-up 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
              </div>
              <div className="relative group overflow-hidden rounded-xl shadow-lg h-[250px] md:h-auto">
                <img src={g3} alt="Sweets Close-up" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
