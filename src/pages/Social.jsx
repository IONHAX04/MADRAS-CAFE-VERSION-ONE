import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Heart } from 'lucide-react';
import { INSTAGRAM_FEED } from '../data/mock';

const Social = () => {
  return (
    <div className="bg-white">
      <section className="bg-[#5BC2C1] paper-texture py-20 px-6 text-center">
        <h1 className="font-display font-black text-white text-5xl md:text-7xl tracking-tight">SOCIAL</h1>
        <p className="font-script text-white text-2xl md:text-4xl mt-3">Follow The Sweet Life</p>
      </section>

      <section className="max-w-5xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-6 paper-texture">
        {[
          { icon: Instagram, name: '@SWEETJESUS', url: 'https://instagram.com/sweetjesus', color: '#E1306C' },
          { icon: Facebook, name: '/SWEETJESUSCREAM', url: 'https://facebook.com', color: '#1877F2' },
          { icon: Heart, name: 'PINTEREST', url: 'https://pinterest.com', color: '#E60023' },
        ].map((s) => (
          <a key={s.name} href={s.url} target="_blank" rel="noreferrer" className="group bg-white border-2 border-neutral-200 hover:border-[#5BC2C1] p-8 text-center transition-colors">
            <s.icon size={36} className="mx-auto text-[#5BC2C1] group-hover:scale-110 transition-transform" />
            <p className="mt-4 font-display font-bold tracking-widest text-neutral-800 text-sm">{s.name}</p>
          </a>
        ))}
      </section>

      <section className="max-w-7xl mx-auto pb-24 px-6">
        <h2 className="text-center font-display font-black text-3xl md:text-4xl tracking-tight text-neutral-800 mb-8">LATEST POSTS</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {INSTAGRAM_FEED.map((src, i) => (
            <a key={i} href="https://instagram.com/sweetjesus" target="_blank" rel="noreferrer" className="group block aspect-square bg-neutral-200 overflow-hidden">
              <img src={src} alt="Sweet Jesus social post" loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Social;
