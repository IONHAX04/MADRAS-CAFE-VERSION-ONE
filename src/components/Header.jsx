import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu as MenuIcon, X, Zap } from 'lucide-react';
import Logo from './Logo';
import { NAV_LEFT, NAV_RIGHT } from '../data/mock';

const Header = () => {
  const [open, setOpen] = useState(false);

  const linkBase = 'text-[#1a5e3a] font-display font-bold tracking-widest text-sm xl:text-base hover:opacity-70 transition-opacity';
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

        {/* Mobile drawer */}
        {open && (
          <div className="lg:hidden pb-6 flex flex-col items-center gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
            {[...NAV_LEFT, ...NAV_RIGHT].map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={linkBase}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
