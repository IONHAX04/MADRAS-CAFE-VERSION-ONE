import React from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '../hooks/use-toast';

const MenuItemGrid = ({ items, label }) => {
  return (
    <section className="bg-[#fee9ba] paper-texture py-8 md:py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 py-8">
          <h1 className="font-script text-[#1a5e3a] text-6xl md:text-8xl leading-none">{label}</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item) => (
            <article key={item.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col border border-neutral-100">
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                {item.limited && (
                  <span className="absolute top-3 right-3 z-10 bg-[#1a5e3a] text-white rounded-full w-14 h-14 flex flex-col items-center justify-center text-[9px] font-display font-bold tracking-wide leading-tight shadow-lg">
                    LIMITED<br />TIME!
                  </span>
                )}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-display font-bold tracking-widest text-[#1a5e3a] text-lg mb-2 uppercase">{item.name}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed line-clamp-1">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuItemGrid;
