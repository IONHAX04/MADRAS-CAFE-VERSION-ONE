import React from 'react';

const Accessibility = () => {
  return (
    <div className="bg-[#fee9ba] min-h-screen">
      <section className="bg-[#1a5e3a] paper-texture py-20 px-6 text-center">
        <h1 className="font-display font-black text-white text-5xl md:text-7xl tracking-tight uppercase">Accessibility</h1>
        <p className="font-script text-white text-2xl md:text-4xl mt-4">Committed to all our guests</p>
      </section>

      <section className="max-w-4xl mx-auto py-20 px-6">
        <div className="bg-white p-8 md:p-12 shadow-xl rounded-none border-t-8 border-[#1a5e3a] paper-texture content-styles">
          <h2 className="font-display font-black text-3xl text-[#1a5e3a] mb-8 tracking-tight">OUR COMMITMENT</h2>
          
          <div className="prose prose-neutral max-w-none space-y-6 text-neutral-700 leading-relaxed">
            <p>
              Madras Cafe is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
            </p>
            
            <h3 className="font-display font-bold text-xl text-neutral-800 pt-4 uppercase tracking-wide">Standard Compliance</h3>
            <p>
              The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. Madras Cafe is partially conformant with WCAG 2.1 level AA.
            </p>

            <h3 className="font-display font-bold text-xl text-neutral-800 pt-4 uppercase tracking-wide">Feedback</h3>
            <p>
              We welcome your feedback on the accessibility of Madras Cafe. Please let us know if you encounter accessibility barriers on our website:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Phone: 416-576-2959</li>
              <li>E-mail: accessibility@madrascafe.ca</li>
              <li>Postal address: 106 John St, Toronto, Ontario</li>
            </ul>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Accessibility;
