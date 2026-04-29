import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_SLIDES, PROMO_TILES } from '../data/mock';
import banner4 from '../assets/banners/BANNER4.jpg';
import banner5 from '../assets/banners/BANNER5.jpg';
import banner6 from '../assets/banners/BANNER6.jpg';
import f11 from '../assets/images/food11.jpg';
import f15 from '../assets/images/food15.jpg';
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
    <div className="bg-[#f6e0b0]">
      {/* Hero Carousel */}
      <section className="relative bg-[#1a5e3a] overflow-hidden">
        <div className="relative h-[55vh] md:h-[78vh] min-h-[420px] max-h-[820px]">
          {HERO_SLIDES.map((slide, idx) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-10 md:bottom-16 flex flex-col items-center text-center px-6">
                <h1 className="font-display font-black text-white text-3xl md:text-5xl tracking-tight drop-shadow-lg">{slide.title}</h1>
                <p className="text-white font-display tracking-widest mt-3 text-sm md:text-base drop-shadow">{slide.subtitle}</p>
                <Link to={slide.link} className="mt-6 inline-block bg-[#f6e0b0] text-[#1a5e3a] hover:bg-white px-8 py-3 font-display font-bold tracking-widest text-sm transition-colors">
                  {slide.cta}
                </Link>
              </div>
            </div>
          ))}

          {/* Controls */}
          <button
            aria-label="Previous slide"
            onClick={() => setCurrent((c) => (c - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/30 hover:bg-white/60 backdrop-blur text-white hover:text-[#1a5e3a] flex items-center justify-center transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            aria-label="Next slide"
            onClick={() => setCurrent((c) => (c + 1) % HERO_SLIDES.length)}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/30 hover:bg-white/60 backdrop-blur text-white hover:text-[#1a5e3a] flex items-center justify-center transition-colors"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`h-2 transition-all duration-300 ${idx === current ? 'w-8 bg-[#f6e0b0]' : 'w-2 bg-white/60'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Soft Serve Heading */}
      <section className="bg-[#1a5e3a] paper-texture pt-16 pb-0 px-6 text-center">
        <h2 className="font-display font-black text-white text-5xl md:text-7xl tracking-tight">SOUTH INDIAN</h2>
        <p className="font-script text-white text-3xl md:text-5xl mt-2">Check Out The Menu</p>
      </section>

      {/* Cones row image */}
      <section className="bg-[#1a5e3a]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 py-16 px-6">
          <img src={banner4} alt="Madras Cafe authentic dosas" className="w-full h-[400px] md:h-[500px] object-cover rounded-md shadow-2xl" />
          <img src={banner6} alt="Madras Cafe specialties" className="w-full h-[400px] md:h-[500px] object-cover rounded-md shadow-2xl" />
        </div>
        <div className="text-center pb-16 px-6">
          <Link to="/menu" className="inline-block bg-[#f6e0b0] text-[#1a5e3a] hover:bg-white px-10 py-4 font-display font-bold tracking-widest text-sm transition-colors">
            VIEW THE FULL MENU
          </Link>
        </div>
      </section>

      {/* Promo tiles */}
      <section className="bg-[#f6e0b0] paper-texture py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROMO_TILES.map((tile, i) => (
            <Link to={tile.link} key={i} className="group block relative overflow-hidden bg-neutral-200">
              <div className="aspect-[4/5]">
                <img src={tile.image} alt={tile.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <h3 className="font-display font-black text-2xl tracking-tight">{tile.title}</h3>
                <p className="font-display tracking-widest text-xs mt-2 group-hover:underline underline-offset-4">{tile.cta} →</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Big banner image */}
      <section className="bg-[#1a5e3a]">
        <img src={banner5} alt="Madras Cafe banner" className="w-full block" />
      </section>

      {/* Gallery Collage */}
      <section className="bg-[#f6e0b0] paper-texture py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-black text-[#1a5e3a] text-5xl md:text-7xl tracking-tight mb-4">OUR GALLERY</h2>
            <div className="h-1.5 w-32 bg-[#1a5e3a] mx-auto"></div>
            <p className="font-script text-[#1a5e3a] text-2xl md:text-4xl mt-6">A Taste of Tradition in Every Frame</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px] md:auto-rows-[300px]">
            <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-xl shadow-lg">
              <img src={g1} alt="South Indian Platter" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
            </div>
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img src={g2} alt="Filter Coffee" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
            </div>
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img src={g3} alt="Indian Sweets" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
            </div>
            <div className="md:col-span-2 relative group overflow-hidden rounded-xl shadow-lg">
              <img src={g4} alt="Cafe Ambiance" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
            </div>
          </div>

          {/* Section 2: Culinary Process & Snacks */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[250px] mt-4">
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img src={g5} alt="Dosa Process" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
            </div>
            <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-xl shadow-lg">
              <img src={g8} alt="Chef Action" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
            </div>
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img src={g6} alt="South Indian Snacks" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
            </div>
          </div>

          {/* Section 3: Drinks & Social */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px] mt-4">
            <div className="md:col-span-2 relative group overflow-hidden rounded-xl shadow-lg">
              <img src={g7} alt="Refreshing Drinks" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
            </div>
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img src={f11} alt="Food Close-up 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
            </div>
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img src={f15} alt="Sweets Close-up" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <a href="https://instagram.com/madrascafe" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-[#1a5e3a] text-white hover:bg-[#4CAFAE] px-10 py-4 font-display font-bold tracking-widest text-sm transition-all transform hover:-translate-y-1">
              FOLLOW US ON INSTAGRAM
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
