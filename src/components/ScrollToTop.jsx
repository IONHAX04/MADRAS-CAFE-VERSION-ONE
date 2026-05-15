import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 md:bottom-28 md:right-8 z-[200] bg-[#1a5e3a] text-white p-3 md:p-4 rounded-full shadow-2xl border-2 border-[#f4b700] hover:bg-[#f4b700] hover:text-[#1a5e3a] transition-all duration-300 transform hover:scale-110"

          aria-label="Scroll to top"
        >
          <ArrowUp size={24} className="md:w-6 md:h-6 w-5 h-5" />
        </button>

      )}
    </>
  );
};

export default ScrollToTop;
