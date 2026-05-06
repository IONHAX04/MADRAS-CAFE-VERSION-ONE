import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '../components/ui/carousel';
import StickyHorizontalScroll from '../components/StickyHorizontalScroll';
import { HERO_SLIDES, PROMO_TILES } from '../data/mock';
import banner1 from '../assets/homeCarousel/banner1.jpeg';
import banner2 from '../assets/homeCarousel/banner2.jpeg';
import banner3 from '../assets/homeCarousel/banner3.jpeg';
import menu1 from '../assets/homeCarousel/menu1.jpeg';
import menu2 from '../assets/homeCarousel/menu2.jpeg';
import banner5 from '../assets/home/secondary-banner.jpeg';
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
      subtitle_start: 'Authentic',
      subtitle_mid: 'tradition in',
      subtitle_end: 'every bite.',
      image: banner1,
      link: '/menu',
    },
    {
      id: 2,
      subtitle_start: 'Thin, golden',
      subtitle_mid: 'and perfectly',
      subtitle_end: 'spiced.',
      image: banner2,
      link: '/menu',
    },
    {
      id: 3,
      subtitle_start: 'Soft cakes',
      subtitle_mid: 'with secret',
      subtitle_end: 'spices.',
      image: banner3,
      link: '/menu',
    }
  ];

  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % NEW_HERO_SLIDES.length), 8000);
    return () => clearInterval(t);
  }, [NEW_HERO_SLIDES.length]);

  return (
    <div className="bg-[#f6e0b0] relative">
      {/* Hero Section - Fixed height on mobile to avoid browser toolbar issues */}
      <section className="relative md:sticky top-0 h-[650px] md:h-[90vh] bg-[#feee8c] overflow-hidden z-0">
        <div className="relative h-full w-full">
          {NEW_HERO_SLIDES.map((slide, idx) => (
            <div
              key={slide.id}
              className="absolute inset-0 transition-transform duration-[1800ms] ease-[cubic-bezier(0.7,0,0.3,1)] bg-[#feee8c]"
              style={{
                transform: idx === current ? 'translateX(0)' : (idx < current ? 'translateX(0)' : 'translateX(100%)'),
                zIndex: idx,
                visibility: (idx <= current) ? 'visible' : 'hidden'
              }}
            >
              {/* Background Image/Element aligned to the right */}
              <div className="absolute inset-0 flex items-center justify-end pointer-events-none overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.subtitle_start}
                  className={`w-auto h-[70%] md:h-[90%] object-contain transition-transform duration-[6000ms] ease-out ${idx === current ? 'scale-110 translate-x-0' : 'scale-100 translate-x-20'}`}
                />
              </div>

              {/* Content aligned to the left */}
              <div className="absolute inset-0 flex items-center z-20 px-6 md:px-24">
                <div className={`max-w-4xl transition-all duration-1000 delay-300 ${idx === current ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  <h1 className="font-decorative text-[#1a5e3a] text-5xl md:text-8xl drop-shadow-2xl leading-[1.6] mb-8 flex flex-wrap gap-x-6 gap-y-2">
                    <span className="border-b-2 border-[#1a5e3a]/40 pb-1">{slide.subtitle_start}</span>
                    <span className="border-b-2 border-[#1a5e3a]/40 pb-1">{slide.subtitle_mid}</span>
                    <span className="text-[#d97706] border-b-2 border-[#d97706]/40 pb-1">{slide.subtitle_end}</span>
                  </h1>
                  <Link
                    to={slide.link}
                    className="inline-block bg-[#f4b700] text-[#1a5e3a] hover:bg-white px-10 py-4 font-nav font-bold tracking-widest text-sm transition-all transform hover:scale-105 shadow-xl"
                  >
                    EXPLORE MENU
                  </Link>
                </div>
              </div>

            </div>
          ))}

          {/* Controls */}
          <button
            aria-label="Previous slide"
            onClick={() => setCurrent((c) => (c - 1 + NEW_HERO_SLIDES.length) % NEW_HERO_SLIDES.length)}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#1a5e3a]/10 hover:bg-[#1a5e3a]/20 backdrop-blur-sm text-[#1a5e3a] flex items-center justify-center transition-all border border-[#1a5e3a]/20"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            aria-label="Next slide"
            onClick={() => setCurrent((c) => (c + 1) % NEW_HERO_SLIDES.length)}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#1a5e3a]/10 hover:bg-[#1a5e3a]/20 backdrop-blur-sm text-[#1a5e3a] flex items-center justify-center transition-all border border-[#1a5e3a]/20"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      </section>
      {/* Main Content Sections - Overlay above sticky hero */}
      <div className="relative z-10">
        {/* Soft Serve Heading */}
        <section className="bg-[#feee8c] paper-texture pt-16 pb-0 px-6 text-center border-t-8 border-[#1a5e3a] shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
          <p className="font-display font-bold text-[#1a5e3a] text-4xl md:text-3xl mt-1 uppercase tracking-widest">ZURICH</p>
          <h2 className="font-display font-black text-[#1a5e3a] text-5xl md:text-7xl tracking-tight">SOUTH INDIAN</h2>
          <p className="font-display font-bold text-[#1a5e3a] text-xl md:text-3xl mt-4 uppercase tracking-widest">Check Out The Menu</p>
        </section>

        <StickyHorizontalScroll />

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
                  <p className="font-nav tracking-widest text-xs mt-2 group-hover:underline underline-offset-4">{tile.cta} →</p>
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

            {/* Section 2: Culinary Process & Snacks */}
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

            {/* Section 3: Drinks & Social */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[250px] mt-4">
              <div className="md:col-span-2 relative group overflow-hidden rounded-xl shadow-lg h-[250px] md:h-auto">
                <img src={g7} alt="Refreshing Drinks" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
              </div>
              <div className="relative group overflow-hidden rounded-xl shadow-lg h-[250px] md:h-auto">
                <img src={f11} alt="Food Close-up 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
              </div>
              <div className="relative group overflow-hidden rounded-xl shadow-lg h-[250px] md:h-auto">
                <img src={f15} alt="Sweets Close-up" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
              </div>
            </div>

          </div>
        </section>
      </div> {/* End relative z-10 */}
    </div>
  );
};

export default Home;
