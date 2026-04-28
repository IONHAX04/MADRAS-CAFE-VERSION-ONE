import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import MenuItemGrid from '../components/MenuItemGrid';
import { CONES, SHAKES, SUNDAES, SANDWICHES } from '../data/mock';

const tabs = [
  { name: 'DOSAS', path: '/menu/dosas', label: 'Dosas', items: CONES },
  { name: 'BEVERAGES', path: '/menu/beverages', label: 'Beverages', items: SHAKES },
  { name: 'SWEETS', path: '/menu/sweets', label: 'Sweets', items: SUNDAES },
  { name: 'SNACKS', path: '/menu/snacks', label: 'Snacks', items: SANDWICHES },
];

const Menu = ({ section = 'dosas' }) => {
  const { pathname } = useLocation();
  const activeTab = tabs.find((t) => pathname.includes(t.path.split('/')[2])) || tabs[0];

  return (
    <div>
      {/* Tabs sub-nav */}
      <div className="bg-[#1a5e3a] paper-texture border-t border-white/30">
        <div className="max-w-5xl mx-auto px-6 py-5 flex flex-wrap items-center justify-center gap-3 md:gap-6">
          {tabs.map((t) => {
            const isActive = activeTab.name === t.name;
            return (
              <Link
                key={t.path}
                to={t.path}
                className={`font-display font-bold tracking-widest text-sm md:text-base px-4 py-2 transition-all ${
                  isActive
                    ? 'bg-white text-[#1a5e3a]'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                {t.name}
              </Link>
            );
          })}
        </div>
      </div>
      <MenuItemGrid items={activeTab.items} label={activeTab.label} />
    </div>
  );
};

export default Menu;
