import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFAB = () => {
  const whatsappNumber = '41763953921'; 
  const message = encodeURIComponent('Hello Madras Cafe, I would like to make an inquiry.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[200] bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-2xl hover:bg-[#128C7E] transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={24} className="fill-current" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 font-display font-bold text-sm whitespace-nowrap">
        CHAT WITH US
      </span>
    </a>
  );
};

export default WhatsAppFAB;
