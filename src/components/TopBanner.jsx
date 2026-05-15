import React from 'react';
import { MapPin } from 'lucide-react';

const TopBanner = () => {
  return (
    <div className="bg-[#1a5e3a] text-[#fee9ba] py-2 px-4 overflow-hidden relative">
      <div className="max-w-[1600px] mx-auto flex items-center justify-center gap-2 text-[10px] md:text-xs font-display font-bold tracking-[0.1em] uppercase animate-pulse-subtle">
        <MapPin size={14} className="text-[#f4b700]" />
        <span>Uetlibergstrasse 30, 8045 Zürich, Switzerland</span>
      </div>
    </div>
  );
};

export default TopBanner;
