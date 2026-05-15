import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Heart } from 'lucide-react';
import { INSTAGRAM_FEED } from '../data/mock';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="sj-footer">
      {/* South Indian Header */}
      <section className="bg-[#1a5e3a] paper-texture py-12 px-6 text-center border-t-4 border-[#f4b700]">
        <h2 className="font-display font-black text-white text-3xl md:text-5xl tracking-tight uppercase">SOUTH INDIAN</h2>
        <p className="font-script text-[#f4b700] text-2xl md:text-4xl mt-4">Follow Our Journey</p>
      </section>

      {/* Instagram */}
      <section className="bg-[#fee9ba] paper-texture py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center font-display font-black text-3xl md:text-4xl tracking-tight text-neutral-800 mb-2">
            INSTAGRAM <a href="https://instagram.com/madrascafe" target="_blank" rel="noreferrer" className="text-[#1a5e3a] hover:opacity-70 transition-opacity">@MADRASCAFE</a>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 mt-8">
            {INSTAGRAM_FEED.map((src, idx) => (
              <a key={idx} href="https://instagram.com/madrascafe" target="_blank" rel="noreferrer" className="block aspect-square overflow-hidden bg-neutral-200 group">
                <img src={src} alt="Instagram post" loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <section className="bg-[#f4b700] paper-texture">
        <div className="max-w-7xl mx-auto px-6 py-12 text-white text-center">
          <div className="mb-10 flex justify-center">
            <Logo size="h-24 md:h-32" />
          </div>
          
          <div className="mb-10">
            <h3 className="font-display font-black text-xl mb-2">OPENING HOURS</h3>
            <p className="font-display font-bold tracking-widest text-sm">FRIDAY: 06:00 PM - 10:00 PM</p>
            <p className="font-display font-bold tracking-widest text-sm">SAT & SUN: 10:00 AM - 11:00 PM</p>
          </div>

          <div className="flex items-center justify-center gap-5 mb-10">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-[#f4b700] transition-colors">
              <Facebook size={20} />
            </a>
            <a href="https://instagram.com/madrascafe" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-[#fee9ba] hover:text-[#f4b700] transition-colors">
              <Instagram size={20} />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10 font-display tracking-widest text-xs md:text-sm font-bold mb-8">
            <Link to="/contact" className="hover:opacity-70 transition-opacity">CONTACT US</Link>
            <Link to="/accessibility" className="hover:opacity-70 transition-opacity">ACCESSIBILITY</Link>
            <Link to="/privacy" className="hover:opacity-70 transition-opacity">PRIVACY POLICY</Link>
            <Link to="/terms" className="hover:opacity-70 transition-opacity">LEGAL TERMS AND CONDITIONS</Link>
          </div>

          <p className="text-xs md:text-sm tracking-wide mt-3 opacity-90">© {new Date().getFullYear()} Madras Cafe Inc.</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
