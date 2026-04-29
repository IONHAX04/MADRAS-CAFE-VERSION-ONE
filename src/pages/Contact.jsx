import React from 'react';

const Contact = () => {
  return (
    <div className="bg-[#f6e0b0] min-h-screen">
      <section className="bg-[#1a5e3a] paper-texture py-20 px-6 text-center">
        <h1 className="font-display font-black text-white text-5xl md:text-7xl tracking-tight uppercase">Contact Us</h1>
        <p className="font-script text-white text-2xl md:text-4xl mt-4">We'd love to hear from you</p>
      </section>

      <section className="max-w-4xl mx-auto py-20 px-6">
        <div className="bg-white p-8 md:p-12 shadow-xl rounded-none border-t-8 border-[#1a5e3a] paper-texture">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display font-black text-3xl text-[#1a5e3a] mb-6 tracking-tight">GET IN TOUCH</h2>
              <p className="text-neutral-700 mb-8 leading-relaxed">
                Whether you have a question about our menu, want to book a catering event, or just want to say hi, feel free to reach out to us.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-display font-bold text-sm tracking-widest text-neutral-500 uppercase">Address</h3>
                  <p className="text-neutral-800 font-medium">106 John St, Toronto, Ontario</p>
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm tracking-widest text-neutral-500 uppercase">Phone</h3>
                  <p className="text-neutral-800 font-medium">416-576-2959</p>
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm tracking-widest text-neutral-500 uppercase">Email</h3>
                  <p className="text-neutral-800 font-medium">hello@madrascafe.ca</p>
                </div>
              </div>
            </div>

            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full px-4 py-3 border-2 border-neutral-200 focus:border-[#1a5e3a] outline-none transition-colors"
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full px-4 py-3 border-2 border-neutral-200 focus:border-[#1a5e3a] outline-none transition-colors"
              />
              <input 
                type="text" 
                placeholder="Subject" 
                className="w-full px-4 py-3 border-2 border-neutral-200 focus:border-[#1a5e3a] outline-none transition-colors"
              />
              <textarea 
                placeholder="Message" 
                rows="5" 
                className="w-full px-4 py-3 border-2 border-neutral-200 focus:border-[#1a5e3a] outline-none transition-colors"
              ></textarea>
              <button 
                type="submit" 
                className="w-full bg-[#1a5e3a] text-white font-display font-bold py-4 tracking-widest hover:bg-[#4CAFAE] transition-colors"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
