import React from 'react';

const Imprint = () => {
  return (
    <div className="bg-[#f6e0b0] min-h-screen">
      <section className="bg-[#1a5e3a] paper-texture py-20 px-6 text-center">
        <h1 className="font-display font-black text-white text-5xl md:text-7xl tracking-tight uppercase">Imprint</h1>
        <p className="font-script text-white text-2xl md:text-4xl mt-4">Corporate Information</p>
      </section>

      <section className="max-w-4xl mx-auto py-20 px-6">
        <div className="bg-white p-8 md:p-12 shadow-xl rounded-none border-t-8 border-[#1a5e3a] paper-texture content-styles">
          <h2 className="font-display font-black text-3xl text-[#1a5e3a] mb-8 tracking-tight">LEGAL DISCLOSURE</h2>
          
          <div className="prose prose-neutral max-w-none space-y-8 text-neutral-700 leading-relaxed">
            <div>
              <h3 className="font-display font-bold text-xl text-neutral-800 uppercase tracking-wide mb-2">Company Name</h3>
              <p>Madras Cafe Inc.</p>
            </div>

            <div>
              <h3 className="font-display font-bold text-xl text-neutral-800 uppercase tracking-wide mb-2">Registered Address</h3>
              <p>106 John St,<br />Toronto, Ontario M5V 2E1<br />Canada</p>
            </div>

            <div>
              <h3 className="font-display font-bold text-xl text-neutral-800 uppercase tracking-wide mb-2">Contact Details</h3>
              <p>Phone: 416-576-2959<br />Email: info@madrascafe.ca</p>
            </div>

            <div>
              <h3 className="font-display font-bold text-xl text-neutral-800 uppercase tracking-wide mb-2">Represented By</h3>
              <p>John Doe (President & CEO)</p>
            </div>

            <div>
              <h3 className="font-display font-bold text-xl text-neutral-800 uppercase tracking-wide mb-2">Business Registration</h3>
              <p>Registered in Ontario, Canada<br />Registration Number: 123456789</p>
            </div>

            <div className="pt-8 border-t border-neutral-100 italic text-sm">
              <p>Madras Cafe Inc. is a member of the Canadian Franchise Association (CFA).</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Imprint;
