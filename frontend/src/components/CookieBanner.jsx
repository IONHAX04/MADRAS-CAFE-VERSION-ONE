import React, { useEffect, useState } from 'react';

const CookieBanner = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('sj_cookies');
    if (!accepted) setShow(true);
  }, []);

  const accept = () => {
    localStorage.setItem('sj_cookies', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-xs bg-[#f3eee9] shadow-lg p-5 text-neutral-800 text-sm leading-relaxed">
      <p>By using this website, you agree to our use of cookies. We use cookies to provide you with a great experience and to help our website run effectively.</p>
      <a href="/privacy" className="underline mt-2 inline-block text-neutral-700">More Info</a>
      <button
        onClick={accept}
        className="mt-3 block bg-neutral-800 text-white px-4 py-2 font-display tracking-widest text-xs hover:bg-neutral-700 transition-colors"
      >
        OK
      </button>
    </div>
  );
};

export default CookieBanner;
