import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Heart } from 'lucide-react';
import { INSTAGRAM_FEED } from '../data/mock';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="sj-footer">

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
      <section className="bg-[#fff9e6] paper-texture">
        <div className="max-w-7xl mx-auto px-6 py-16 text-[#1a5e3a] text-center">
          <div className="mb-10 flex justify-center">
            <Logo size="h-24 md:h-32" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="font-display font-black text-xl mb-4 uppercase tracking-tight">Visit Us</h3>
              <p className="font-display font-bold text-sm leading-relaxed max-w-xs mx-auto">
                <a 
                  href="https://maps.app.goo.gl/9m5yR6yXmXmXmXmX6" 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:opacity-70 transition-opacity"
                >
                  Uetlibergstrasse 30,<br />
                  8045 Zürich, Switzerland
                </a>
              </p>
            </div>

            <div>
              <h3 className="font-display font-black text-xl mb-4 uppercase tracking-tight">Opening Hours</h3>
              <p className="font-display font-bold tracking-widest text-sm mb-1">FRIDAY: 06:00 PM - 10:00 PM</p>
              <p className="font-display font-bold tracking-widest text-sm">SAT & SUN: 10:00 AM - 11:00 PM</p>
            </div>

            <div>
              <h3 className="font-display font-black text-xl mb-4 uppercase tracking-tight">Contact</h3>
              <p className="font-display font-bold text-sm mb-1">
                <a href="tel:+41763953921" className="hover:opacity-70 transition-opacity">
                  +41 76 395 39 21
                </a>
              </p>
              <p className="font-display font-bold text-sm">
                <a href="mailto:hello@madrascafe.ch" className="hover:opacity-70 transition-opacity">
                  hello@madrascafe.ch
                </a>
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-5 mb-10">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="w-12 h-12 rounded-full border-2 border-[#1a5e3a] flex items-center justify-center hover:bg-[#1a5e3a] hover:text-white transition-colors">
              <Facebook size={20} />
            </a>
            <a href="https://instagram.com/madrascafe" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-12 h-12 rounded-full border-2 border-[#1a5e3a] flex items-center justify-center hover:bg-[#1a5e3a] hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10 font-display tracking-widest text-xs md:text-sm font-bold mb-8">
            <Link to="/contact" className="hover:opacity-70 transition-opacity">CONTACT US</Link>
            <Link to="/accessibility" className="hover:opacity-70 transition-opacity">ACCESSIBILITY</Link>
            <Link to="/privacy" className="hover:opacity-70 transition-opacity">PRIVACY POLICY</Link>
            <Link to="/terms" className="hover:opacity-70 transition-opacity">LEGAL TERMS AND CONDITIONS</Link>
          </div>

          <p className="text-xs md:text-sm tracking-wide mt-3 opacity-80 font-bold">© {new Date().getFullYear()} Madras Cafe Inc.</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
