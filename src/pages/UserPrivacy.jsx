import React from 'react';

const UserPrivacy = () => {
  return (
    <div className="bg-[#fee9ba] min-h-screen">
      <section className="bg-[#1a5e3a] paper-texture py-20 px-6 text-center">
        <h1 className="font-display font-black text-white text-5xl md:text-7xl tracking-tight uppercase">Privacy Policy</h1>
        <p className="font-script text-white text-2xl md:text-4xl mt-4">Your privacy matters to us</p>
      </section>

      <section className="max-w-4xl mx-auto py-20 px-6">
        <div className="bg-white p-8 md:p-12 shadow-xl rounded-none border-t-8 border-[#1a5e3a] paper-texture content-styles">
          <h2 className="font-display font-black text-3xl text-[#1a5e3a] mb-8 tracking-tight">PRIVACY STATEMENT</h2>
          
          <div className="prose prose-neutral max-w-none space-y-6 text-neutral-700 leading-relaxed text-sm md:text-base">
            <p className="font-bold italic">Effective Date: April 29, 2026</p>
            
            <p>
              This Privacy Policy describes how Madras Cafe ("we", "us", or "our") collects, uses, and shares your personal information when you visit our website, use our mobile application, or visit our restaurant.
            </p>

            <h3 className="font-display font-bold text-xl text-neutral-800 pt-4 uppercase tracking-wide">1. INFORMATION WE COLLECT</h3>
            <p>
              We collect information that you provide directly to us, such as when you create an account, place an order, sign up for our newsletter, or contact us for support. This information may include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact information (name, email address, phone number, mailing address)</li>
              <li>Payment information (credit card details, billing address)</li>
              <li>Order history and preferences</li>
            </ul>

            <h3 className="font-display font-bold text-xl text-neutral-800 pt-4 uppercase tracking-wide">2. HOW WE USE YOUR INFORMATION</h3>
            <p>
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about your orders and accounts</li>
              <li>Send you promotional materials and newsletters (you can opt-out at any time)</li>
              <li>Improve our services and develop new features</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h3 className="font-display font-bold text-xl text-neutral-800 pt-4 uppercase tracking-wide">3. SHARING YOUR INFORMATION</h3>
            <p>
              We do not sell your personal information. We may share your information with third-party service providers who perform services on our behalf, such as payment processing, delivery, and data analysis.
            </p>

            <h3 className="font-display font-bold text-xl text-neutral-800 pt-4 uppercase tracking-wide">4. YOUR CHOICES</h3>
            <p>
              You have the right to access, correct, or delete your personal information. You can also opt-out of receiving promotional communications from us by following the instructions in those communications.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserPrivacy;
