import React from 'react';
import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

const Logo = ({ size = 'md' }) => {
  const sizes = {
    sm: { text: 'text-2xl', bolt: 18 },
    md: { text: 'text-3xl md:text-4xl', bolt: 26 },
    lg: { text: 'text-5xl md:text-6xl', bolt: 36 },
  };
  const s = sizes[size];

  return (
    <Link to="/" className="sj-logo group inline-flex flex-col items-center justify-center leading-none select-none">
      <span className={`block font-display font-black tracking-tight text-white ${s.text}`}>SWEET</span>
      <span className={`flex items-center justify-center font-display font-black tracking-tight text-white ${s.text}`}>
        <span>JE</span>
        <Zap size={s.bolt} className="fill-white text-white -mx-0.5 rotate-12 transition-transform group-hover:rotate-0" strokeWidth={1.5} />
        <span>US</span>
      </span>
    </Link>
  );
};

export default Logo;
