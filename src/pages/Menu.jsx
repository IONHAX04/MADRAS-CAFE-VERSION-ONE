import React, { useRef } from 'react';
import MenuItemGrid from '../components/MenuItemGrid';
import { IDLY_VADA, DOSA_UTHAPAM, SNACKS_TIFFIN, SWEETS_DRINKS } from '../data/mock';

import dosaImg from "../assets/menucard/dosa.jpg"
import idlyImg from "../assets/menucard/idly.jpg"
import snacksImg from "../assets/menucard/snacks.jpg"
import sweetsImg from "../assets/menucard/sweets.jpg"

const categories = [
  { id: 'dosas', name: 'DOSA & UTHAPAM', label: 'Dosa & Uthapam', items: DOSA_UTHAPAM, image: dosaImg },
  { id: 'idly', name: 'IDLY & VADA', label: 'Idly & Vada', items: IDLY_VADA, image: idlyImg },
  { id: 'snacks', name: 'SNACKS & TIFFIN', label: 'Snacks & Tiffin', items: SNACKS_TIFFIN, image: snacksImg },
  { id: 'sweets', name: 'SWEETS & DRINKS', label: 'Sweets & Drinks', items: SWEETS_DRINKS, image: sweetsImg },
];

const Card = ({ title, image, count, onClick }) => (
  <button onClick={onClick} className="group relative block overflow-hidden bg-[#f6e0b0] w-full text-left">
    <div className="aspect-[4/5]">
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
    </div>
    <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
      <h3 className="font-display font-black text-2xl md:text-3xl tracking-tight">{title}</h3>
      <p className="text-xs font-display tracking-widest opacity-90 mt-1">{count} ITEMS →</p>
    </div>
  </button>
);

const Menu = () => {
  const sectionRefs = useRef({});

  const scrollToSection = (id) => {
    const element = sectionRefs.current[id];
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-[#f6e0b0] pt-[100px]">
      {/* Header Section */}
      <section className="bg-[#f6e0b0] paper-texture py-20 px-6 text-center border-b border-[#1a5e3a]/10">
        <h1 className="font-display font-black text-[#1a5e3a] text-5xl md:text-7xl tracking-tight">THE MENU</h1>
        <p className="font-script text-[#1a5e3a] text-2xl md:text-4xl mt-3">Authentic Flavors, Delivered</p>
      </section>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto py-8 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 paper-texture">
        {categories.map((cat) => (
          <Card 
            key={cat.id}
            title={cat.name} 
            image={cat.image} 
            count={cat.items.length} 
            onClick={() => scrollToSection(cat.id)}
          />
        ))}
      </section>

      {/* Menu Items Sections */}
      <div className="pb-12">
        {categories.map((cat, idx) => (
          <div 
            key={cat.id} 
            ref={(el) => (sectionRefs.current[cat.id] = el)}
            className="scroll-mt-24"
          >
            <MenuItemGrid 
              items={cat.items} 
              label={cat.label} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
