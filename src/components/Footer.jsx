import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Heart } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="sj-footer">


      {/* Pink footer */}
      <section className="bg-[#f4b700] paper-texture">
        <div className="max-w-7xl mx-auto px-6 py-12 text-[#1a5e3a] text-center">
          <div className="mb-10 flex justify-center">
            <Logo size="h-24 md:h-32" variant="y" />
          </div>
          <div className="flex items-center justify-center gap-5 mb-10">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="w-12 h-12 rounded-full border-2 border-[#1a5e3a] flex items-center justify-center hover:bg-[#1a5e3a] hover:text-white transition-colors">
              <Facebook size={20} />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noreferrer" aria-label="Pinterest" className="w-12 h-12 rounded-full border-2 border-[#1a5e3a] flex items-center justify-center hover:bg-[#1a5e3a] hover:text-white transition-colors">
              <Heart size={20} />
            </a>

          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10 font-display tracking-widest text-sm md:text-base font-bold mb-8">
            <Link to="/contact" className="hover:opacity-70 transition-opacity">CONTACT US</Link>
            <Link to="/accessibility" className="hover:opacity-70 transition-opacity">ACCESSIBILITY</Link>
            <Link to="/privacy" className="hover:opacity-70 transition-opacity">PRIVACY POLICY</Link>
            <Link to="/terms" className="hover:opacity-70 transition-opacity">LEGAL TERMS AND CONDITIONS</Link>
            <Link to="/imprint" className="hover:opacity-70 transition-opacity">IMPRINT</Link>
          </div>

          <p className="text-sm md:text-base tracking-wide font-bold">A proud member of the CFA</p>
          <p className="text-sm md:text-base tracking-wide mt-3 font-bold">© {new Date().getFullYear()} Madras Cafe Inc.</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
