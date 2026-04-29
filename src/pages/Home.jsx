import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, UtensilsCrossed, Coffee, Star, Heart, Flame, Sprout } from 'lucide-react';
import { HERO_SLIDES, PROMO_TILES } from '../data/mock';
import banner4 from '../assets/banners/BANNER4.jpg';
import banner5 from '../assets/banners/BANNER5.jpg';
import banner6 from '../assets/banners/BANNER6.jpg';
import hb1 from '../assets/home/banner1.png';
import hb2 from '../assets/home/banner2.png';
import hb3 from '../assets/home/banner3.png';
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

  const NEW_HERO_SLIDES = [
    {
      id: 1,
      title_start: 'CRISPY',
      title_highlight: 'SOUTH INDIAN',
      title_end: 'SNACKS',
      subtitle: 'From crispy medhu vadas to authentic chutneys — experience tradition in every bite.',
      image: hb1,
      link: '/menu/idly',
      cta: '',
    },
    {
      id: 2,
      title_start: 'THE PERFECT',
      title_highlight: 'MASALA',
      title_end: 'DOSA',
      subtitle: 'Thin, golden-brown and stuffed with our signature spiced potato masala.',
      image: hb2,
      link: '/menu/dosas',
      cta: '',
    },
    {
      id: 3,
      title_start: 'SIGNATURE',
      title_highlight: 'SAMBAR',
      title_end: 'IDLY',
      subtitle: 'Soft steamed rice cakes tossed in our secret lentil spice blend.',
      image: hb3,
      link: '/menu/idly',
      cta: '',
    }
  ];

  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % NEW_HERO_SLIDES.length), 6000);
    return () => clearInterval(t);
  }, [NEW_HERO_SLIDES.length]);

  return (
    <div className="bg-[#f6e0b0] relative">
      {/* Hero Section - Sticky Base */}
      <section className="sticky top-0 h-screen bg-[#1a5e3a] overflow-hidden z-0">
        <div className="relative h-full w-full overflow-hidden">
          <div 
            className="flex h-full transition-transform duration-[1000ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {NEW_HERO_SLIDES.map((slide, idx) => (
              <div
                key={slide.id}
                className="min-w-full h-full relative"
              >
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                   <img 
                    src={slide.image} 
                    alt={slide.title} 
                    className={`w-auto h-[55%] md:h-[70%] object-contain transition-transform duration-[3000ms] ease-out ${idx === current ? 'scale-110 translate-y-10' : 'scale-100 translate-y-20'}`} 
                  />
                </div>
                <div className="absolute inset-x-0 top-20 md:top-32 flex flex-col items-center text-center px-6 z-20">
                  <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f6e0b0]/30 bg-black/10 backdrop-blur-sm">
                    <span className="text-[#f6e0b0] text-[10px] md:text-xs font-display font-bold tracking-[0.3em] uppercase leading-none">✦ Since 1962 ✦</span>
                  </div>
                  <h1 className="font-display font-black text-white text-5xl md:text-9xl tracking-tighter drop-shadow-2xl uppercase leading-none italic">
                    {slide.title}
                  </h1>
                  <p className="text-white font-script italic mt-6 text-2xl md:text-4xl drop-shadow-md opacity-90">
                    {slide.subtitle}
                  </p>
                </div>

                {/* Floating Toppings (Icons) */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  {/* Yellow Cutlery */}
                  <div className={`absolute top-[15%] left-[10%] transition-all duration-1000 ${idx === current ? 'opacity-40 scale-100' : 'opacity-10 scale-50'}`}>
                    <div className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-[#f4b700] flex items-center justify-center text-[#1a5e3a] shadow-2xl animate-bounce" style={{ animationDuration: '4s' }}>
                      <UtensilsCrossed size={36} className="w-6 h-6 md:w-10 md:h-10" />
                    </div>
                  </div>
                  {/* White Coffee */}
                  <div className={`absolute bottom-[25%] right-[10%] transition-all duration-1000 delay-300 ${idx === current ? 'opacity-40 scale-100' : 'opacity-10 scale-50'}`}>
                    <div className="w-14 h-14 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center text-[#1a5e3a] shadow-2xl animate-pulse" style={{ animationDuration: '6s' }}>
                      <Coffee size={44} className="w-8 h-8 md:w-12 md:h-12" />
                    </div>
                  </div>
                  {/* Gold Star */}
                  <div className={`absolute top-[40%] right-[15%] transition-all duration-1000 delay-500 ${idx === current ? 'opacity-30 scale-100 rotate-12' : 'opacity-10 scale-0'}`}>
                    <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-[#f4b700] flex items-center justify-center text-[#1a5e3a] shadow-xl animate-spin" style={{ animationDuration: '10s' }}>
                      <Star size={30} className="w-5 h-5 md:w-8 md:h-8" fill="currentColor" />
                    </div>
                  </div>
                  {/* White Heart */}
                  <div className={`absolute bottom-[40%] left-[15%] transition-all duration-1000 delay-700 ${idx === current ? 'opacity-30 scale-100 -rotate-12' : 'opacity-10 scale-0'}`}>
                    <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center text-red-500 shadow-xl animate-pulse" style={{ animationDuration: '3s' }}>
                      <Heart size={30} className="w-5 h-5 md:w-8 md:h-8" fill="currentColor" />
                    </div>
                  </div>
                  {/* Spicy Flame */}
                  <div className={`absolute top-[20%] right-[30%] transition-all duration-1000 delay-200 ${idx === current ? 'opacity-20 scale-100' : 'opacity-10 scale-0'}`}>
                    <Flame size={40} className="text-[#f4b700]" fill="currentColor" />
                  </div>
                  {/* Fresh Sprout */}
                  <div className={`absolute bottom-[15%] left-[35%] transition-all duration-1000 delay-400 ${idx === current ? 'opacity-20 scale-100' : 'opacity-10 scale-0'}`}>
                    <Sprout size={40} className="text-[#f6e0b0]" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <button
            aria-label="Previous slide"
            onClick={() => setCurrent((c) => (c - 1 + NEW_HERO_SLIDES.length) % NEW_HERO_SLIDES.length)}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white flex items-center justify-center transition-all border border-white/20"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            aria-label="Next slide"
            onClick={() => setCurrent((c) => (c + 1) % NEW_HERO_SLIDES.length)}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white flex items-center justify-center transition-all border border-white/20"
          >
            <ChevronRight size={32} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
            {NEW_HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`h-1.5 transition-all duration-500 rounded-full ${idx === current ? 'w-12 bg-[#f6e0b0]' : 'w-4 bg-white/30'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Sections - Overlay above sticky hero */}
      <div className="relative z-10">
        {/* Soft Serve Heading */}
        <section className="bg-[#1a5e3a] paper-texture pt-16 pb-0 px-6 text-center border-t-8 border-[#f4b700] shadow-[0_-20px_50px_rgba(0,0,0,0.3)]">
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
      </div> {/* End relative z-10 */}
    </div>
  );
};

export default Home;
