import React, { useState, useEffect } from 'react';

import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu as MenuIcon, X, Zap } from 'lucide-react';
import Logo from './Logo';
import { NAV_LEFT, NAV_RIGHT } from '../data/mock';
import TopBanner from './TopBanner';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const linkBase = 'text-[#1a5e3a] font-display font-bold tracking-[0.2em] text-[10px] xl:text-[12px] hover:opacity-70 transition-opacity uppercase';


  const activeStyle = ({ isActive }) => `${linkBase} ${isActive ? 'underline underline-offset-8 decoration-2' : ''}`;

  return (
    <header className={`sj-header sticky top-0 z-[100] bg-[#fee9ba] paper-texture border-b-2 border-[#1a5e3a] transition-all duration-500 ${scrolled ? 'shadow-md' : ''}`}>
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 py-2">
        <div className="flex items-center justify-between lg:grid lg:grid-cols-3">

          {/* Left nav */}
          <nav className="hidden lg:flex items-center gap-x-12 xl:gap-x-16 justify-start">
            {NAV_LEFT.map((item) => (
              <NavLink key={item.path} to={item.path} className={activeStyle}>
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Logo center/left */}
          <div className="flex justify-start lg:justify-center">
            <Link to="/" className="flex flex-col items-center transition-all duration-500 scale-90 md:scale-100">
              <Logo className="w-[80px] md:w-[150px] lg:w-[180px]" />
            </Link>
          </div>

          {/* Mobile catchy text */}
          <div className="lg:hidden flex-1 px-4 text-center">
            <p className="font-display font-black text-[#1a5e3a] text-[10px] leading-tight uppercase line-clamp-2 tracking-tighter">
              Authentic South Indian <br /> Flavor in Zürich
            </p>
          </div>




          {/* Right nav & Mobile trigger container */}
          <div className="flex justify-end items-center">
            <nav className="hidden lg:flex items-center gap-x-12 xl:gap-x-16">
              {NAV_RIGHT.map((item) => (
                <NavLink key={item.path} to={item.path} className={activeStyle}>
                  {item.name}
                </NavLink>
              ))}
            </nav>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 text-[#1a5e3a] border-2 border-[#1a5e3a] rounded-md bg-[#f4b700]/10 hover:bg-[#f4b700]/20 transition-colors"
              aria-label="Toggle menu"
            >
              {open ? <X size={24} /> : <MenuIcon size={24} />}
            </button>

          </div>
        </div>

      </div>
      
      <TopBanner />

      <div className={`
        lg:hidden fixed inset-0 top-0 bg-[#fee9ba] paper-texture z-[110] transition-all duration-500 ease-in-out
        ${open ? 'translate-x-0 opacity-100 visible' : 'translate-x-full opacity-0 invisible'}
      `}>
        {/* Mobile Drawer Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b-2 border-[#1a5e3a]/10">
          <div className="flex justify-start">
            <Logo className="w-[110px]" />
          </div>
          <button
            onClick={() => setOpen(false)}
            className="p-2 text-[#1a5e3a] border-2 border-[#1a5e3a] rounded-md bg-[#f4b700]/10"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-10 flex flex-col gap-y-10 h-full overflow-y-auto">
          {[...NAV_LEFT, ...NAV_RIGHT].map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className="text-4xl font-display font-black text-[#1a5e3a] tracking-tight hover:translate-x-4 transition-all duration-300"
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>


    </header>
  );
};

export default Header;
