import React from 'react';
import { Link } from 'react-router-dom';
import { HERO_SLIDES, PROMO_TILES } from '../data/mock';
import StickyHorizontalScroll from '../components/StickyHorizontalScroll';

// Hero Placeholder
// (Import removed as images are now handled in mock.js)


import heroVideo from '../videos/2.mp4';


// Original Banners
import banner5 from '../assets/home/secondary-banner.jpeg';


import thirdHero1 from '../assets/home/ThirdHeroOne.jpeg';
import thirdHero2 from '../assets/home/ThirdHeroTwo.jpeg';


// Gallery imports removed

const Home = () => {
  const heroData = HERO_SLIDES[0];

  return (
    <div className="bg-[#fee9ba] relative">
      {/* Hero Section - STICKY Section */}
      <section className="relative md:sticky top-0 h-[80dvh] md:h-[100dvh] bg-black overflow-hidden z-0">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-70"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          {/* Subtle Gradient Overlay for Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />
        </div>

        <div className="relative z-10 w-full h-full">
          {/* Top Text Content */}
          <div className="absolute inset-x-0 top-12 md:top-24 flex flex-col items-center text-center px-6">
            <h1 className="font-display font-black text-white text-4xl md:text-5xl lg:text-6xl tracking-tight drop-shadow-2xl mb-4">
              {heroData.title}
            </h1>
            <p className="text-[#f4b700] font-display tracking-[0.4em] mt-2 text-xs md:text-lg uppercase font-bold drop-shadow-lg">
              {heroData.subtitle}
            </p>
          </div>
          
          {/* Bottom Button */}
          <div className="absolute inset-x-0 bottom-12 md:bottom-24 flex justify-center px-6">
            <Link to={heroData.link} className="inline-block bg-[#f4b700] text-[#1a5e3a] hover:bg-white px-10 py-4 font-display font-bold tracking-widest text-sm transition-all transform hover:scale-105 shadow-2xl border-2 border-[#1a5e3a]">
              {heroData.cta}
            </Link>
          </div>
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
