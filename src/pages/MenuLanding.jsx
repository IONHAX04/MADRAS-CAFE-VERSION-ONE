import React from 'react';
import { Link } from 'react-router-dom';
import { CONES, SHAKES, SUNDAES, SANDWICHES } from '../data/mock';

const Card = ({ to, title, image, count }) => (
  <Link to={to} className="group relative block overflow-hidden bg-[#7DD3D2]">
    <div className="aspect-[4/5]">
      <img src={image} alt={title} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" />
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
      <section className="bg-[#5BC2C1] paper-texture py-20 px-6 text-center">
        <h1 className="font-display font-black text-white text-5xl md:text-7xl tracking-tight">THE MENU</h1>
        <p className="font-script text-white text-2xl md:text-4xl mt-3">All Your Prayers, Answered</p>
      </section>

      <section className="max-w-7xl mx-auto py-20 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 paper-texture">
        <Card to="/menu/cones" title="CONES" image={CONES[0].image} count={CONES.length} />
        <Card to="/menu/shakes" title="SHAKES" image={SHAKES[0].image} count={SHAKES.length} />
        <Card to="/menu/sundaes" title="SUNDAES" image={SUNDAES[0].image} count={SUNDAES.length} />
        <Card to="/menu/sandwiches" title="SANDWICHES" image={SANDWICHES[0].image} count={SANDWICHES.length} />
      </section>
    </div>
  );
};

export default MenuLanding;
