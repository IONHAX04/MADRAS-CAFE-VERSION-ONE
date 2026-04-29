import React from 'react';
import { Link } from 'react-router-dom';
import { IDLY_VADA, DOSA_UTHAPAM, SNACKS_TIFFIN, SWEETS_DRINKS } from '../data/mock';

const Card = ({ to, title, image, count }) => (
  <Link to={to} className="group relative block overflow-hidden bg-[#f6e0b0]">
    <div className="aspect-[4/5]">
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
    </div>
    <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
      <h3 className="font-display font-black text-2xl md:text-3xl tracking-tight">{title}</h3>
      <p className="text-xs font-display tracking-widest opacity-90 mt-1">{count} ITEMS →</p>
    </div>
  </Link>
);

const MenuLanding = () => {
  return (
    <div className="bg-white">
      <section className="bg-[#1a5e3a] paper-texture py-20 px-6 text-center">
        <h1 className="font-display font-black text-white text-5xl md:text-7xl tracking-tight">THE MENU</h1>
        <p className="font-script text-white text-2xl md:text-4xl mt-3">Authentic Flavors, Delivered</p>
      </section>

      <section className="max-w-7xl mx-auto py-20 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 paper-texture">
        <Card to="/menu/dosas" title="DOSA & UTHAPAM" image={DOSA_UTHAPAM[0].image} count={DOSA_UTHAPAM.length} />
        <Card to="/menu/idly" title="IDLY & VADA" image={IDLY_VADA[0].image} count={IDLY_VADA.length} />
        <Card to="/menu/snacks" title="SNACKS & TIFFIN" image={SNACKS_TIFFIN[0].image} count={SNACKS_TIFFIN.length} />
        <Card to="/menu/sweets" title="SWEETS & DRINKS" image={SWEETS_DRINKS[0].image} count={SWEETS_DRINKS.length} />
      </section>
    </div>
  );
};

export default MenuLanding;
