import React from 'react';

const Terms = () => {
  return (
    <div className="bg-[#f6e0b0] min-h-screen">
      <section className="bg-[#1a5e3a] paper-texture py-20 px-6 text-center">
        <h1 className="font-display font-black text-white text-5xl md:text-7xl tracking-tight uppercase">Terms & Conditions</h1>
        <p className="font-script text-white text-2xl md:text-4xl mt-4">Legal guidelines for our guests</p>
      </section>

      <section className="max-w-4xl mx-auto py-20 px-6">
        <div className="bg-white p-8 md:p-12 shadow-xl rounded-none border-t-8 border-[#1a5e3a] paper-texture content-styles">
          <h2 className="font-display font-black text-3xl text-[#1a5e3a] mb-8 tracking-tight">TERMS OF USE</h2>
          
          <div className="prose prose-neutral max-w-none space-y-6 text-neutral-700 leading-relaxed text-sm md:text-base">
            <p className="font-bold italic">Last Updated: April 29, 2026</p>
            
            <p>
              By accessing or using the Madras Cafe website and services, you agree to be bound by these Terms and Conditions.
            </p>

            <h3 className="font-display font-bold text-xl text-neutral-800 pt-4 uppercase tracking-wide">1. USE OF SERVICES</h3>
            <p>
              You agree to use our services only for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use and enjoyment of the services by, any third party.
            </p>

            <h3 className="font-display font-bold text-xl text-neutral-800 pt-4 uppercase tracking-wide">2. INTELLECTUAL PROPERTY</h3>
            <p>
              All content on our website, including text, graphics, logos, and images, is the property of Madras Cafe or its content suppliers and is protected by intellectual property laws.
            </p>

            <h3 className="font-display font-bold text-xl text-neutral-800 pt-4 uppercase tracking-wide">3. LIMITATION OF LIABILITY</h3>
            <p>
              Madras Cafe will not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or the inability to use our services.
            </p>

            <h3 className="font-display font-bold text-xl text-neutral-800 pt-4 uppercase tracking-wide">4. MODIFICATIONS</h3>
            <p>
              We reserve the right to modify these Terms and Conditions at any time. Your continued use of the services after any such modifications constitutes your acceptance of the new Terms and Conditions.
            </p>
            
            <h3 className="font-display font-bold text-xl text-neutral-800 pt-4 uppercase tracking-wide">5. GOVERNING LAW</h3>
            <p>
              These Terms and Conditions are governed by and construed in accordance with the laws of Ontario, Canada.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
