import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu as MenuIcon, X, Zap } from 'lucide-react';
import Logo from './Logo';
import { NAV_LEFT, NAV_RIGHT } from '../data/mock';

const Header = () => {
  const [open, setOpen] = useState(false);

  const linkBase = 'text-[#1a5e3a] font-nav font-bold tracking-widest text-sm xl:text-base hover:opacity-70 transition-opacity';
  const activeStyle = ({ isActive }) => `${linkBase} ${isActive ? 'underline underline-offset-8 decoration-2' : ''}`;

  return (
    <header className="sj-header sticky top-0 z-50 bg-[#f6e0b0] paper-texture border-b-2 border-[#1a5e3a]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between">
          {/* Left nav */}
          <nav className="hidden lg:flex items-center gap-10 flex-1">
            {NAV_LEFT.map((item) => (
              <NavLink key={item.path} to={item.path} className={activeStyle}>
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Logo center */}
          <div className="flex-shrink-0 mx-auto lg:mx-6">
            <Logo size="h-20 md:h-20" />
          </div>

          {/* Right nav */}
          <nav className="hidden lg:flex items-center gap-10 flex-1 justify-end">
            {NAV_RIGHT.map((item) => (
              <NavLink key={item.path} to={item.path} className={activeStyle}>
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="lg:hidden text-[#1a5e3a] p-2"
          >
            {open ? <X size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>

        {/* Mobile menu overlay */}
        {open && (
          <div className="fixed inset-0 z-[100] bg-[#fdfaf5] lg:hidden animate-in fade-in duration-300">
            <div className="p-6 h-full flex flex-col">
              <div className="flex items-center justify-between">
                <Logo size="h-16" />
                <button
                  onClick={() => setOpen(false)}
                  className="w-10 h-10 rounded-full bg-[#1a5e3a] flex items-center justify-center text-[#f4b700] shadow-lg transition-transform hover:scale-110 active:scale-95"
                >
                  <X size={24} />
                </button>
              </div>
              
              <nav className="mt-16 flex flex-col gap-6 px-4">
                {[...NAV_LEFT, ...NAV_RIGHT].map((item, idx) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className="text-[#1a5e3a] font-nav font-black text-5xl tracking-tight uppercase hover:text-[#f4b700] transition-colors"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <span className="inline-block animate-in slide-in-from-left-8 duration-500 fill-mode-both">
                      {item.name}
                    </span>
                  </NavLink>
                ))}
              </nav>

              <div className="mt-auto pb-10 px-4">
                <p className="text-[#1a5e3a]/40 font-display font-bold tracking-widest text-xs uppercase">
                  © Madras Cafe
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
