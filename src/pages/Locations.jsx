import React from 'react';
import { LOCATIONS } from '../data/mock';
import { Phone, MapPin, Clock } from 'lucide-react';

const Locations = () => {
  return (
    <div className="bg-white paper-texture pt-[100px]">
      <section className="bg-[#feee8c] paper-texture py-20 px-6 text-center border-b border-[#1a5e3a]/10">
        <h1 className="font-display font-black text-[#1a5e3a] text-5xl md:text-7xl tracking-tight">LOCATIONS</h1>
        <p className="font-script text-[#1a5e3a] text-2xl md:text-4xl mt-3">Find Your Madras Cafe</p>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LOCATIONS.map((loc) => (
            <div key={loc.id} className="bg-white border-2 border-neutral-200 hover:border-[#1a5e3a] transition-colors p-6 group">
              <h3 className="font-display font-bold tracking-widest text-neutral-800 text-base md:text-lg group-hover:text-[#1a5e3a] transition-colors">
                {loc.name}
              </h3>

              <div className="mt-4 space-y-3 text-sm text-neutral-700">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-[#1a5e3a] mt-0.5 flex-shrink-0" />
                  <span>{loc.address}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={16} className="text-[#1a5e3a] mt-0.5 flex-shrink-0" />
                  <a href={`tel:${loc.phone}`} className="hover:text-[#1a5e3a] transition-colors">{loc.phone}</a>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={16} className="text-[#1a5e3a] mt-0.5 flex-shrink-0" />
                  <ul className="space-y-1">
                    {loc.hours.map((h) => <li key={h}>{h}</li>)}
                  </ul>
                </div>
              </div>

              <a
                href={`https://www.google.com/maps?q=${encodeURIComponent(loc.address)}`}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block text-xs font-display tracking-widest text-[#1a5e3a] hover:text-[#4CAFAE] underline underline-offset-4"
              >
                VIEW ON MAP
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Locations;
