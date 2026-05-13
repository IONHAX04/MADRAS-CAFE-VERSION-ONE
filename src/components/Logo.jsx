import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo/latestLogo.png';
import headerLogoImg from '../assets/logo/latestHeaderLogo.png';


const Logo = ({ size = 'h-16 md:h-16', variant = 'w', className = '' }) => {
  const src = variant === 'w' ? headerLogoImg : logoImg;

  return (
    <Link to="/" className={`sj-logo inline-block ${className}`}>
      <img src={src} alt="Madras Cafe" className={`${size} object-contain`} />
    </Link>
  );
};

export default Logo;
