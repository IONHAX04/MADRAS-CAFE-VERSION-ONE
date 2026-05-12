import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu as MenuIcon, X, Zap } from 'lucide-react';
import Logo from './Logo';
import { NAV_LEFT, NAV_RIGHT } from '../data/mock';

const Header = () => {
  const [open, setOpen] = useState(false);

  const linkBase = 'text-[#1a5e3a] font-display font-bold tracking-widest text-sm xl:text-base hover:opacity-70 transition-opacity';
  const activeStyle = ({ isActive }) => `${linkBase} ${isActive ? 'underline underline-offset-8 decoration-2' : ''}`;

  return (
    <header className="sj-header sticky top-0 z-50 bg-[#fee9ba] paper-texture border-b-2 border-[#1a5e3a]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between">
          {/* Left nav */}
          <nav className="hidden lg:flex items-center gap-x-12 xl:gap-x-16">
            {NAV_LEFT.map((item) => (
              <NavLink key={item.path} to={item.path} className={activeStyle}>
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Logo center */}
          <Link to="/" className="flex flex-col items-center py-4 scale-90 md:scale-100">
            <Logo className="w-[120px] md:w-[150px] lg:w-[180px]" />
          </Link>

          {/* Right nav */}
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
            className="lg:hidden p-2 text-[#1a5e3a]"
            aria-label="Toggle menu"
          >
            {open ? <X size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`
        lg:hidden fixed inset-0 top-[88px] bg-white z-[60] transition-transform duration-500
        ${open ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="p-8 flex flex-col gap-y-6">
          {[...NAV_LEFT, ...NAV_RIGHT].map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className="text-2xl font-display font-black text-[#1a5e3a] tracking-tight hover:pl-2 transition-all"
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
