import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo/latestLogo.png';
import headerLogoImg from '../assets/logo/latestHeaderLogo.png';


const Logo = ({ size = 'h-18 md:h-16', className = '' }) => {
  return (
    <img src={logoImg} alt="Madras Cafe" className={`sj-logo object-contain ${size} ${className}`} />
  );
};


export default Logo;
