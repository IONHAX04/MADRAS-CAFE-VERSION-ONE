import React from 'react';
import { Link } from 'react-router-dom';
import logoBgW from '../assets/logo/logo_bg_w.png';
import logoBgY from '../assets/logo/latest.png';

const Logo = ({ size = 'h-16 md:h-16', variant = 'w' }) => {
  const src = variant === 'w' ? logoBgW : logoBgY;

  return (
    <Link to="/" className="sj-logo inline-block">
      <img src={src} alt="Madras Cafe" className={`${size} object-contain`} />
    </Link>
  );
};

export default Logo;
