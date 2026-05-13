import React, { useState, useEffect } from 'react';

import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu as MenuIcon, X, Zap } from 'lucide-react';
import Logo from './Logo';
import { NAV_LEFT, NAV_RIGHT } from '../data/mock';

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


  const linkBase = 'text-[#1a5e3a] font-display font-bold tracking-widest text-sm xl:text-base hover:opacity-70 transition-opacity';
  const activeStyle = ({ isActive }) => `${linkBase} ${isActive ? 'underline underline-offset-8 decoration-2' : ''}`;

  return (
    <header className={`sj-header sticky top-0 z-[100] bg-[#fee9ba] paper-texture border-b-2 border-[#1a5e3a] transition-all duration-500 ${scrolled ? 'py-2 shadow-md' : 'py-8 md:py-8'}`}>
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
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
            <Link to="/" className={`flex flex-col items-center transition-all duration-500 ${scrolled ? 'scale-75 md:scale-90' : 'scale-90 md:scale-125'}`}>
              <Logo className="w-[100px] md:w-[150px] lg:w-[180px]" />
            </Link>
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

      <div className={`
        lg:hidden fixed inset-0 ${scrolled ? 'top-[64px]' : 'top-[112px]'} bg-[#fee9ba] paper-texture z-[110] transition-all duration-500 ease-in-out shadow-2xl
        ${open ? 'translate-x-0 opacity-100 visible' : 'translate-x-full opacity-0 invisible'}
      `}>

        <div className="p-10 flex flex-col gap-y-10 h-full overflow-y-auto pt-16">
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
