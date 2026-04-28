import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import MenuItemGrid from '../components/MenuItemGrid';
import { CONES, SHAKES, SUNDAES, SANDWICHES } from '../data/mock';

const tabs = [
  { name: 'CONES', path: '/menu/cones', label: 'Cones', items: CONES },
  { name: 'SHAKES', path: '/menu/shakes', label: 'Shakes', items: SHAKES },
  { name: 'SUNDAES', path: '/menu/sundaes', label: 'Sundaes', items: SUNDAES },
  { name: 'SANDWICHES', path: '/menu/sandwiches', label: 'Sandwiches', items: SANDWICHES },
];

const Menu = ({ section = 'cones' }) => {
  const { pathname } = useLocation();
  const activeTab = tabs.find((t) => pathname.includes(t.name.toLowerCase())) || tabs[0];

  return (
    <div>
      {/* Tabs sub-nav */}
      <div className="bg-[#5BC2C1] paper-texture border-t border-white/30">
        <div className="max-w-5xl mx-auto px-6 py-5 flex flex-wrap items-center justify-center gap-3 md:gap-6">
          {tabs.map((t) => {
            const isActive = activeTab.name === t.name;
            return (
              <Link
                key={t.path}
                to={t.path}
                className={`font-display font-bold tracking-widest text-sm md:text-base px-4 py-2 transition-all ${
                  isActive
                    ? 'bg-white text-[#5BC2C1]'
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
