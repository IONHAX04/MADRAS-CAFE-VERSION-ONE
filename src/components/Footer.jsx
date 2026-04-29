import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Heart } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import { INSTAGRAM_FEED } from '../data/mock';
import Logo from './Logo';

const Footer = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    toast({
      title: 'Thank you!',
      description: `You're now signed up with ${email}. Delicious treats incoming.`,
    });
    setEmail('');
  };

  return (
    <footer className="sj-footer">
      {/* Mailing list */}
      <section className="bg-[#f6e0b0] paper-texture py-20 px-6 border-t border-neutral-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-black text-4xl md:text-5xl tracking-tight text-neutral-800 mb-2">MAILING LIST</h2>
          <p className="font-display tracking-widest text-neutral-700 mb-8 text-sm md:text-base">SIGN UP FOR EXCLUSIVE UPDATES & DEALS</p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email Address"
              className="flex-1 px-5 py-3 border-2 border-neutral-300 bg-white text-neutral-800 focus:outline-none focus:border-[#1a5e3a] transition-colors rounded-none"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-[#1a5e3a] hover:bg-[#4CAFAE] text-white font-display font-bold tracking-widest text-sm transition-colors rounded-none"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </section>

      {/* Instagram */}
      <section className="bg-[#f6e0b0] paper-texture py-16 px-6">
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

      {/* Pink footer */}
      <section className="bg-[#f4b700] paper-texture">
        <div className="max-w-7xl mx-auto px-6 py-12 text-white text-center">
          <div className="mb-10 flex justify-center">
            <Logo size="h-24 md:h-32" variant="y" />
          </div>
          <div className="flex items-center justify-center gap-5 mb-10">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-[#f4b700] transition-colors">
              <Facebook size={20} />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noreferrer" aria-label="Pinterest" className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-[#f4b700] transition-colors">
              <Heart size={20} />
            </a>
            <a href="https://instagram.com/madrascafe" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-[#f6e0b0] hover:text-[#f4b700] transition-colors">
              <Instagram size={20} />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10 font-display tracking-widest text-xs md:text-sm font-bold mb-8">
            <Link to="/contact" className="hover:opacity-70 transition-opacity">CONTACT US</Link>
            <Link to="/accessibility" className="hover:opacity-70 transition-opacity">ACCESSIBILITY</Link>
            <Link to="/privacy" className="hover:opacity-70 transition-opacity">PRIVACY POLICY</Link>
            <Link to="/terms" className="hover:opacity-70 transition-opacity">LEGAL TERMS AND CONDITIONS</Link>
            <Link to="/imprint" className="hover:opacity-70 transition-opacity">IMPRINT</Link>
          </div>

          <p className="text-xs md:text-sm tracking-wide opacity-90">A proud member of the CFA</p>
          <p className="text-xs md:text-sm tracking-wide mt-3 opacity-90">© {new Date().getFullYear()} Madras Cafe Inc.</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
