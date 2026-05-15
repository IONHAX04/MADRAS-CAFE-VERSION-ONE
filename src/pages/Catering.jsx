import React, { useState } from 'react';
import { useToast } from '../hooks/use-toast';
import { Cake, Users, Sparkles, Calendar } from 'lucide-react';

const Catering = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: '', email: '', phone: '', date: '', guests: '', eventType: 'Wedding', notes: '' });

  const onChange = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    toast({ title: 'Inquiry received!', description: "We'll be in touch about your event soon." });
    setForm({ name: '', email: '', phone: '', date: '', guests: '', eventType: 'Wedding', notes: '' });
  };

  const getWhatsAppMsg = () => {
    const msg = `Hello Madras Cafe, I am interested in catering services.
Name: ${form.name}
Event: ${form.eventType}
Date: ${form.date}
Guests: ${form.guests}
Phone: ${form.phone}
Email: ${form.email || 'N/A'}
Notes: ${form.notes}`;
    return encodeURIComponent(msg);
  };

  return (
    <div className="bg-[#fee9ba] pt-[70px]">
      <section className="bg-[#1a5e3a] paper-texture py-12 px-6 text-center">
        <h1 className="font-display font-black text-white text-4xl md:text-7xl tracking-tight uppercase">CATERING</h1>
        <p className="font-script text-white text-xl md:text-4xl mt-3">Bring The Authentic Taste</p>
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
          <input type="email" value={form.email} onChange={onChange('email')} placeholder="Email Address (Optional)" className="px-4 py-3 border-2 border-neutral-200 focus:outline-none focus:border-[#1a5e3a] transition-colors" />
          <input required type="tel" value={form.phone} onChange={onChange('phone')} placeholder="Mobile Number" className="px-4 py-3 border-2 border-neutral-200 focus:outline-none focus:border-[#1a5e3a] transition-colors" />
          
          <select 
            required 
            value={form.eventType} 
            onChange={onChange('eventType')} 
            className="px-4 py-3 border-2 border-neutral-200 focus:outline-none focus:border-[#1a5e3a] transition-colors bg-white"
          >
            <option value="Wedding">Wedding</option>
            <option value="Corporate">Corporate</option>
            <option value="Party">Party</option>
            <option value="Other">Other</option>
          </select>

          <div className="relative">
            <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input required type="date" value={form.date} onChange={onChange('date')} className="w-full pl-10 pr-4 py-3 border-2 border-neutral-200 focus:outline-none focus:border-[#1a5e3a] transition-colors" />
          </div>
          <input required type="number" min="1" value={form.guests} onChange={onChange('guests')} placeholder="# of Guests" className="px-4 py-3 border-2 border-neutral-200 focus:outline-none focus:border-[#1a5e3a] transition-colors" />
          <textarea value={form.notes} onChange={onChange('notes')} placeholder="Tell us about your event" rows="4" className="md:col-span-2 px-4 py-3 border-2 border-neutral-200 focus:outline-none focus:border-[#1a5e3a] transition-colors resize-none" />
          
          <button type="submit" className="md:col-span-2 px-8 py-3 bg-[#1a5e3a] hover:bg-[#4CAFAE] text-white font-display font-bold tracking-widest text-sm transition-colors">
            SEND INQUIRY
          </button>
          
          <div className="md:col-span-2 text-center mt-6">
            <p className="text-neutral-500 font-display font-bold text-xs tracking-widest mb-4">OR CHAT WITH US DIRECTLY</p>
            <a 
              href={`https://wa.me/41763953921?text=${getWhatsAppMsg()}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-display font-bold tracking-widest text-sm transition-colors rounded-none shadow-lg"
            >
              WHATSAPP INQUIRY
            </a>
            <p className="mt-4 text-[#1a5e3a] font-bold">+41 76 395 39 21</p>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Catering;
