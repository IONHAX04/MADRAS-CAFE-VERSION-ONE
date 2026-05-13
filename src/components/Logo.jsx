import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo/latestLogo.png';
import headerLogoImg from '../assets/logo/latestHeaderLogo.png';


const Logo = ({ size = 'h-16 md:h-16', variant = 'w', className = '' }) => {
  const src = variant === 'w' ? headerLogoImg : logoImg;

  return (
    <img src={src} alt="Madras Cafe" className={`sj-logo object-contain ${size} ${className}`} />
  );
};


export default Logo;
