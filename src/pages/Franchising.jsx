import React, { useState } from 'react';
import { useToast } from '../hooks/use-toast';
import { TrendingUp, Award, Users, ArrowRight } from 'lucide-react';

const Franchising = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: '', email: '', city: '', message: '' });

  const submit = (e) => {
    e.preventDefault();
    toast({ title: 'Application received', description: "We'll get back to you about franchising soon." });
    setForm({ name: '', email: '', city: '', message: '' });
  };

  const onChange = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  return (
    <div className="bg-white">
      <section className="bg-[#5BC2C1] paper-texture py-20 px-6 text-center">
        <h1 className="font-display font-black text-white text-5xl md:text-7xl tracking-tight">FRANCHISING</h1>
        <p className="font-script text-white text-2xl md:text-4xl mt-3">Join The Holy Family</p>
      </section>

      <section className="max-w-6xl mx-auto py-20 px-6 paper-texture">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {[
            { icon: TrendingUp, title: 'PROVEN BRAND', text: 'A cult-followed dessert brand with explosive social media presence.' },
            { icon: Award, title: 'AWARD WINNING', text: 'Recognized by the Canadian Franchise Association for excellence.' },
            { icon: Users, title: 'FULL SUPPORT', text: 'From site selection to opening day, we are with you every step.' },
          ].map((b) => (
            <div key={b.title} className="p-8 bg-white border-2 border-neutral-100 hover:border-[#5BC2C1] transition-colors text-center">
              <b.icon size={40} className="mx-auto text-[#5BC2C1]" />
              <h3 className="mt-4 font-display font-bold tracking-widest text-neutral-800">{b.title}</h3>
              <p className="mt-3 text-sm text-neutral-600 leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-display font-black text-3xl md:text-4xl tracking-tight text-neutral-800 mb-4">OWN A SWEET JESUS</h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Sweet Jesus is a category-disrupting brand built around extreme, instagrammable soft serve experiences.
              We're expanding fast and looking for passionate operators to grow with us.
            </p>
            <ul className="space-y-3 text-neutral-700">
              {['Initial investment from $300K', 'Comprehensive training program', 'Marketing & operations support', 'Prime real estate selection assistance'].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <ArrowRight size={16} className="text-[#5BC2C1] mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <form onSubmit={submit} className="bg-neutral-50 p-8 space-y-4">
            <h3 className="font-display font-bold tracking-widest text-neutral-800 mb-4">REQUEST INFORMATION</h3>
            <input required value={form.name} onChange={onChange('name')} placeholder="Your Name" className="w-full px-4 py-3 border-2 border-neutral-200 focus:outline-none focus:border-[#5BC2C1] transition-colors bg-white" />
            <input required type="email" value={form.email} onChange={onChange('email')} placeholder="Email Address" className="w-full px-4 py-3 border-2 border-neutral-200 focus:outline-none focus:border-[#5BC2C1] transition-colors bg-white" />
            <input required value={form.city} onChange={onChange('city')} placeholder="Target City / Region" className="w-full px-4 py-3 border-2 border-neutral-200 focus:outline-none focus:border-[#5BC2C1] transition-colors bg-white" />
            <textarea value={form.message} onChange={onChange('message')} placeholder="Tell us about your background" rows="4" className="w-full px-4 py-3 border-2 border-neutral-200 focus:outline-none focus:border-[#5BC2C1] transition-colors bg-white resize-none" />
            <button type="submit" className="w-full px-8 py-3 bg-[#5BC2C1] hover:bg-[#4CAFAE] text-white font-display font-bold tracking-widest text-sm transition-colors">SUBMIT APPLICATION</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Franchising;
