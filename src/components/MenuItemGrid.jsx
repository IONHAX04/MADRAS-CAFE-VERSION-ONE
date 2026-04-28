import React from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '../hooks/use-toast';
import { LOCATIONS } from '../data/mock';

const MenuItemGrid = ({ items, label }) => {
  const { toast } = useToast();

  return (
    <section className="bg-white paper-texture py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-script text-[#5BC2C1] text-6xl md:text-8xl leading-none">{label}</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {items.map((item) => (
            <article key={item.id} className="group flex flex-col items-center text-center">
              <div className="relative w-full aspect-square overflow-hidden bg-[#7DD3D2]">
                {item.limited && (
                  <span className="absolute top-4 right-4 z-10 bg-[#5BC2C1] text-white rounded-full w-20 h-20 flex flex-col items-center justify-center text-[11px] font-display font-bold tracking-wide leading-tight">
                    LIMITED<br />TIME!
                  </span>
                )}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-6 font-display font-bold tracking-widest text-neutral-800 text-base md:text-lg">{item.name}</h3>
              <p className="mt-3 text-neutral-600 text-sm leading-relaxed max-w-xs">{item.description}</p>
              <button
                onClick={() => toast({ title: 'Added to favourites', description: `${item.name} — we'll save this for you.` })}
                className="mt-4 text-xs font-display tracking-widest text-[#5BC2C1] hover:text-[#4CAFAE] transition-colors"
              >
                SAVE TO FAVOURITES
              </button>
            </article>
          ))}
        </div>

        {/* Choose location */}
        <div className="max-w-md mx-auto mt-20 text-center">
          <label className="block font-display tracking-widest text-neutral-700 text-sm mb-3">CHOOSE LOCATION:</label>
          <select
            onChange={(e) => {
              if (e.target.value) toast({ title: 'Location selected', description: e.target.options[e.target.selectedIndex].text });
            }}
            className="w-full px-4 py-3 border-2 border-neutral-300 bg-white text-neutral-800 focus:outline-none focus:border-[#5BC2C1] transition-colors"
          >
            <option value="">Choose Location:</option>
            {LOCATIONS.map((loc) => (
              <option key={loc.id} value={loc.id}>{loc.name}</option>
            ))}
          </select>
          <Link to="/locations" className="inline-block mt-6 text-sm font-display tracking-widest text-[#5BC2C1] hover:text-[#4CAFAE] underline underline-offset-4">
            VIEW ALL LOCATIONS
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MenuItemGrid;
