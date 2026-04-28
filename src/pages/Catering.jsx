import React, { useState } from 'react';
import { useToast } from '../hooks/use-toast';
import { Cake, Users, Sparkles, Calendar } from 'lucide-react';

const Catering = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: '', email: '', date: '', guests: '', notes: '' });

  const onChange = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    toast({ title: 'Inquiry received!', description: "We'll be in touch about your event soon." });
    setForm({ name: '', email: '', date: '', guests: '', notes: '' });
  };

  return (
    <div className="bg-white">
      <section className="bg-[#1a5e3a] paper-texture py-20 px-6 text-center">
        <h1 className="font-display font-black text-white text-5xl md:text-7xl tracking-tight">CATERING</h1>
        <p className="font-script text-white text-2xl md:text-4xl mt-3">Bring The Authentic Taste</p>
      </section>

      <section className="max-w-5xl mx-auto py-20 px-6 paper-texture">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: Users, title: 'WEDDINGS', text: 'Make your big day extra sweet with custom live dosa stations.' },
            { icon: Cake, title: 'CORPORATE', text: 'Reward your team with the most over-the-top dessert experience.' },
            { icon: Sparkles, title: 'PARTIES', text: 'Birthdays, baby showers, graduations — we bring the wow factor.' },
          ].map((b) => (
            <div key={b.title} className="text-center p-6 bg-white border-2 border-neutral-100 hover:border-[#1a5e3a] transition-colors">
              <b.icon size={36} className="mx-auto text-[#1a5e3a]" />
              <h3 className="mt-4 font-display font-bold tracking-widest text-neutral-800">{b.title}</h3>
              <p className="mt-3 text-sm text-neutral-600 leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>

        <h2 className="text-center font-display font-black text-3xl md:text-4xl tracking-tight text-neutral-800 mb-2">REQUEST A QUOTE</h2>
        <p className="text-center text-neutral-600 mb-10">Tell us about your event and we'll get back to you with the holy details.</p>

        <form onSubmit={submit} className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <input required value={form.name} onChange={onChange('name')} placeholder="Your Name" className="px-4 py-3 border-2 border-neutral-200 focus:outline-none focus:border-[#1a5e3a] transition-colors" />
          <input required type="email" value={form.email} onChange={onChange('email')} placeholder="Email Address" className="px-4 py-3 border-2 border-neutral-200 focus:outline-none focus:border-[#1a5e3a] transition-colors" />
          <div className="relative">
            <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input required type="date" value={form.date} onChange={onChange('date')} className="w-full pl-10 pr-4 py-3 border-2 border-neutral-200 focus:outline-none focus:border-[#1a5e3a] transition-colors" />
          </div>
          <input required type="number" min="1" value={form.guests} onChange={onChange('guests')} placeholder="# of Guests" className="px-4 py-3 border-2 border-neutral-200 focus:outline-none focus:border-[#1a5e3a] transition-colors" />
          <textarea value={form.notes} onChange={onChange('notes')} placeholder="Tell us about your event" rows="4" className="md:col-span-2 px-4 py-3 border-2 border-neutral-200 focus:outline-none focus:border-[#1a5e3a] transition-colors resize-none" />
          <button type="submit" className="md:col-span-2 px-8 py-3 bg-[#1a5e3a] hover:bg-[#4CAFAE] text-white font-display font-bold tracking-widest text-sm transition-colors">
            SEND INQUIRY
          </button>
        </form>
      </section>
    </div>
  );
};

export default Catering;
