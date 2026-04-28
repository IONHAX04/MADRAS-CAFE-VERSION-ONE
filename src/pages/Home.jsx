import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_SLIDES, PROMO_TILES } from '../data/mock';

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % HERO_SLIDES.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Carousel */}
      <section className="relative bg-[#5BC2C1] overflow-hidden">
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
                <Link to={slide.link} className="mt-6 inline-block bg-white text-[#5BC2C1] hover:bg-neutral-100 px-8 py-3 font-display font-bold tracking-widest text-sm transition-colors">
                  {slide.cta}
                </Link>
              </div>
            </div>
          ))}

          {/* Controls */}
          <button
            aria-label="Previous slide"
            onClick={() => setCurrent((c) => (c - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/30 hover:bg-white/60 backdrop-blur text-white hover:text-neutral-800 flex items-center justify-center transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            aria-label="Next slide"
            onClick={() => setCurrent((c) => (c + 1) % HERO_SLIDES.length)}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/30 hover:bg-white/60 backdrop-blur text-white hover:text-neutral-800 flex items-center justify-center transition-colors"
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
                className={`h-2 transition-all duration-300 ${idx === current ? 'w-8 bg-white' : 'w-2 bg-white/60'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Soft Serve Heading */}
      <section className="bg-[#5BC2C1] paper-texture pt-16 pb-0 px-6 text-center">
        <h2 className="font-display font-black text-white text-5xl md:text-7xl tracking-tight">SOFT SERVE</h2>
        <p className="font-script text-white text-3xl md:text-5xl mt-2">Check Out The Menu</p>
      </section>

      {/* Cones row image */}
      <section className="bg-[#5BC2C1]">
        <img src="https://images.squarespace-cdn.com/content/v1/57239a2801dbaedc4e8a8405/1666712841043-QOK5VVWDF5WO0XMB7EHY/The+answers+to+all+your+prayers%2C+all+in+a+single+pimped+out+cone.+%281%29.png?format=2500w" alt="Sweet Jesus pimped out cones" className="w-full max-w-5xl mx-auto block" />
        <div className="text-center pb-16 px-6">
          <Link to="/menu" className="inline-block bg-white text-[#5BC2C1] hover:bg-neutral-100 px-10 py-4 font-display font-bold tracking-widest text-sm transition-colors">
            VIEW THE FULL MENU
          </Link>
        </div>
      </section>

      {/* Promo tiles */}
      <section className="bg-white paper-texture py-20 px-6">
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
      <section className="bg-[#5BC2C1]">
        <img src="https://images.squarespace-cdn.com/content/v1/57239a2801dbaedc4e8a8405/1719250460844-JJI09SSNLKA5JDT8DD9L/SJ_WebsiteBanner+%281%29.jpg?format=2500w" alt="Sweet Jesus banner" className="w-full block" />
      </section>

      {/* CTA strip */}
      <section className="bg-white paper-texture py-20 px-6 text-center">
        <h2 className="font-display font-black text-4xl md:text-6xl tracking-tight text-neutral-800">ORDER NOW</h2>
        <p className="text-neutral-600 mt-3 max-w-xl mx-auto">Track and manage your order online.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#" onClick={(e) => e.preventDefault()} className="px-8 py-3 bg-[#5BC2C1] hover:bg-[#4CAFAE] text-white font-display font-bold tracking-widest text-sm transition-colors">ORDER DELIVERY</a>
          <a href="#" onClick={(e) => e.preventDefault()} className="px-8 py-3 bg-neutral-800 hover:bg-neutral-700 text-white font-display font-bold tracking-widest text-sm transition-colors">ORDER PICKUP</a>
        </div>
      </section>
    </div>
  );
};

export default Home;
