'use client';

import { useMemo, useState } from 'react';
import {
  CalendarDays, Users, DollarSign, Hotel, Phone, Mail, UserRound, Globe2, RotateCcw, SendHorizontal,
} from 'lucide-react';
import HeroBanner from '@/components/Home/Banner';

const TAILOR_SHEET_URL = process.env.NEXT_PUBLIC_TAILOR_SHEET_URL || '';

type Option = { label: string; value: string };

export default function TailorPage() {
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState<{type:'ok'|'err', msg:string}|null>(null);

  const travelWithOptions: Option[] = useMemo(() => ([
    { label: 'Solo', value: 'Solo' },
    { label: 'Couple', value: 'Couple' },
    { label: 'Family', value: 'Family' },
    { label: 'Friends', value: 'Friends' },
    { label: 'Company/Group', value: 'Company' },
  ]), []);

  const durationOptions: Option[] = useMemo(() => ([
    '2–3 Days','4–6 Days','7–10 Days','11–14 Days','15+ Days',
  ].map(t => ({label: t, value: t}))), []);

  const budgetPlaceholder = '($ - USD) excluding international flights';

  const findUsOptions: Option[] = useMemo(() => ([
    'Google','Facebook','TikTok','Friend/Referral','Other',
  ].map(t => ({label:t, value:t}))), []);

  const countryOptions: Option[] = useMemo(() => ([
    'Vietnam','United States','Australia','Singapore','Japan','France','Germany','India','United Kingdom','Canada','Other',
  ].map(t => ({label:t, value:t}))), []);

  /** Submit về Google Sheet */
  async function onSubmit(form: HTMLFormElement) {
    if (!TAILOR_SHEET_URL) {
      setToast({type:'err', msg:'Chưa cấu hình NEXT_PUBLIC_TAILOR_SHEET_URL'});
      return;
    }
    setSubmitting(true);
    setToast(null);
    try {
      const data = new FormData(form);

      // Gộp checkbox destinations => chuỗi
      const dests = ['Vietnam','Laos','Cambodia'].filter(d => data.get(d) === 'on').join(', ');

      const payload = {
        destinations: String("Vietnam"),
        timestamp: new Date().toISOString(),
        travel_with: String(data.get('travel_with') || ''),
        start_date: String(data.get('start_date') || ''),
        duration: String(data.get('duration') || ''),
        budget: String(data.get('budget') || ''),
        hotel: String(data.get('hotel') || ''),
        adults: String(data.get('adults') || ''),
        children_5_10: String(data.get('children_5_10') || ''),
        infants_0_4: String(data.get('infants_0_4') || ''),
        notes: String(data.get('notes') || ''),

        title: String(data.get('title') || ''),
        name: String(data.get('name') || ''),
        email: String(data.get('email') || ''),
        phone: String(data.get('phone') || ''),
        hear_about: String(data.get('hear_about') || ''),
        country: String(data.get('country') || ''),
      };

      const res = await fetch(TAILOR_SHEET_URL, {
        method: 'POST',
        headers: { 'Content-Type': "text/plain;charset=utf-8" }, // tránh preflight
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setToast({type:'ok', msg:'Gửi yêu cầu thành công! Chúng tôi sẽ liên hệ trong 2 giờ.'});
      alert('✅ Your inquiry has been sent! We’ll get back to you soon.');
      form.reset();
    } catch (e:any) {
      setToast({type:'err', msg:`Gửi thất bại. ${e?.message || ''}`});
    } finally {
      setSubmitting(false);
      form.reset();
    }
  }

  return (
    <section className="mx-auto w-full py-10  md:py-14">
        <HeroBanner />
      <h1 className="text-center mt-8 text-3xl font-extrabold md:text-5xl">
        Tailor My Trip
      </h1>

      {/* TOAST */}
      {toast && (
        <div className={`mt-6 rounded-xl p-4 text-sm ${toast.type === 'ok' ? 'bg-green-50 text-green-700 ring-1 ring-green-200' : 'bg-rose-50 text-rose-700 ring-1 ring-rose-200'}`}>
          {toast.msg}
        </div>
      )}

      <form
        className="mt-8 space-y-10 px-12 sm:px-6 md:px-12 lg:px-36"
        onSubmit={(e) => { e.preventDefault(); onSubmit(e.currentTarget); }}
        onReset={(e)=>{ /* just clear toast */ setToast(null); }}
      >
        {/* ====== SECTION 1 ====== */}
        <div className="rounded-3xl bg-white p-6 ring-1 ring-neutral-200 shadow-sm">
          <SectionHeader index={1} title="Your Travel Plan" subtitle="Let us know your condition and wish! The more information you give, the better we tailor the itinerary to your needs." />

          <div className="mt-6 grid grid-cols-1 gap-6">
            {/* Destinations */}
            <FieldLabel label="Which destinations are you interested in?" required />
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {['Vietnam','Laos','Cambodia'].map((d) => (
                <label key={d} className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white px-4 py-3 hover:bg-neutral-50">
                  <input type="checkbox" name={d} className="h-4 w-4" />
                  <span className="font-medium">{d}</span>
                </label>
              ))}
            </div>

            {/* travel with + date + duration */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <Select label="Who will be travelling with you?" name="travel_with" required options={travelWithOptions} />
              <Input label="Preferred start date of your trip" name="start_date" type="date" icon={<CalendarDays className="h-4 w-4" />} />
              <Select label="Duration of your trip" name="duration" required options={durationOptions} />
            </div>

            {/* budget */}
            <Input label="Estimated Budget (per person)" name="budget" placeholder={budgetPlaceholder} icon={<DollarSign className="h-4 w-4" />} />

            {/* hotel */}
            <FieldLabel label="Preferred hotel standard" required />
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-4">
              {['3-Star','4-Star','5-Star','Suite/Villa'].map(v => (
                <label key={v} className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white px-4 py-3 hover:bg-neutral-50">
                  <input type="radio" name="hotel" value={v} className="h-4 w-4" />
                  <span className="font-medium">{v}</span>
                </label>
              ))}
            </div>

            {/* numbers */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <Input label="Number of Adults" name="adults" type="number" min="0" icon={<Users className="h-4 w-4" />} required />
              <Input label="Number of Children (5–10)" name="children_5_10" type="number" min="0" icon={<Users className="h-4 w-4" />} />
              <Input label="Number of Infants (0–4)" name="infants_0_4" type="number" min="0" icon={<Users className="h-4 w-4" />} />
            </div>

            <Textarea label="Anything else we should know?" name="notes" placeholder="Tell us about your dream itinerary, dietary needs, preferred hotels or anything else." />
          </div>
        </div>

        {/* ====== SECTION 2 ====== */}
        <div className="rounded-3xl bg-white p-6 ring-1 ring-neutral-200 shadow-sm">
          <SectionHeader index={2} title="Your Personal Information" subtitle="We respect your privacy — your information is used to tailor your trip and communicate with you." />

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            <Select label="Title" name="title" required options={['Mr.','Ms.','Mrs.','Mx.'].map(t=>({label:t, value:t}))} />
            <Input label="Your Name" name="name" placeholder="Your name" icon={<UserRound className="h-4 w-4" />} required />
            <Input label="Email" name="email" type="email" placeholder="name@domain.com" icon={<Mail className="h-4 w-4" />} required />
            <Input label="Phone/Whatsapp Number" name="phone" placeholder="Your phone number with country code" icon={<Phone className="h-4 w-4" />} required />
            <Select label="How did you find us?" name="hear_about" options={findUsOptions} />
            <Select label="Country of Residence" name="country" required iconLeft={<Globe2 className="h-4 w-4" />} options={countryOptions} />
          </div>

          <div className="mt-6 flex flex-col-reverse items-stretch gap-3 md:flex-row md:items-center md:justify-between">
            <button type="reset" className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-2.5 font-semibold text-neutral-700 hover:bg-neutral-50">
              <RotateCcw className="h-4 w-4" /> Reset
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white shadow-sm hover:bg-blue-700 disabled:opacity-60"
            >
              {submitting ? 'Sending...' : 'Get My Tailor-Made Itinerary'}
              <SendHorizontal className="h-4 w-4" />
            </button>
          </div>
        </div>
      </form>

      {/* ====== Process ====== */}
      <ProcessBlock />

    </section>
  );
}

/* ---------- small pieces ---------- */

function SectionHeader({ index, title, subtitle }:{index:number; title:string; subtitle?:string}) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700 ring-1 ring-blue-200">
        {index}
      </span>
      <div>
        <h2 className="text-xl font-extrabold md:text-2xl">{title}</h2>
        {subtitle && <p className="mt-1 text-sm text-neutral-600">{subtitle}</p>}
      </div>
    </div>
  );
}

function FieldLabel({ label, required }:{label:string; required?:boolean}) {
  return (
    <div className="text-sm font-semibold text-neutral-800">
      {label} {required && <span className="text-blue-600">*</span>}
    </div>
  );
}

function Input({
  label, name, type='text', placeholder, icon, min,
  required,
}:{label:string; name:string; type?:string; placeholder?:string; icon?:React.ReactNode; min?:string; required?:boolean}) {
  return (
    <label className="group block">
      <span className="mb-1.5 block text-sm font-semibold text-neutral-800">
        {label} {required && <span className="text-blue-600">*</span>}
      </span>
      <div className="relative">
        {icon && <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">{icon}</span>}
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          min={min}
          required={required}
          className={`w-full rounded-xl border border-neutral-200 bg-white px-3 py-2.5 text-[15px] outline-none placeholder:text-neutral-400 focus:border-blue-300 focus:ring-4 focus:ring-blue-100 ${icon ? 'pl-9' : ''}`}
        />
      </div>
    </label>
  );
}

function Select({
  label, name, options, required, iconLeft,
}:{label:string; name:string; options:Option[]; required?:boolean; iconLeft?:React.ReactNode}) {
  return (
    <label className="group block">
      <span className="mb-1.5 block text-sm font-semibold text-neutral-800">
        {label} {required && <span className="text-blue-600">*</span>}
      </span>
      <div className="relative">
        {iconLeft && <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">{iconLeft}</span>}
        <select
          name={name}
          required={required}
          className={`w-full appearance-none rounded-xl border border-neutral-200 bg-white px-3 py-2.5 text-[15px] outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-100 ${iconLeft ? 'pl-9' : ''}`}
        >
          <option value="">—Please choose an option—</option>
          {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
        <svg viewBox="0 0 24 24" className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </label>
  );
}

function Textarea({label, name, placeholder}:{label:string; name:string; placeholder?:string}) {
  return (
    <label className="group block">
      <span className="mb-1.5 block text-sm font-semibold text-neutral-800">{label}</span>
      <textarea
        name={name}
        placeholder={placeholder}
        rows={5}
        className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2.5 text-[15px] outline-none placeholder:text-neutral-400 focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
      />
    </label>
  );
}

/* ---------- Process ---------- */
function ProcessBlock() {
  const steps = [
    {
      icon: (
        <svg viewBox="0 0 24 24" className="h-12 w-12 text-blue-600" fill="currentColor">
          <path d="M7 7h10v2H7zM7 11h10v2H7zM7 15h7v2H7z" />
        </svg>
      ),
      title: 'Imagine Your Dream Trip',
      desc: 'Tell us about your travel dreams, personal preferences, and aspirations – we’re here to bring them to life.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="h-12 w-12 text-blue-600" fill="currentColor">
          <path d="M3 5h18v2H3zm2 4h14v10H5z" />
        </svg>
      ),
      title: 'Collaborate and Refine',
      desc: 'Work closely with your consultant, sharing feedback to create your ideal itinerary.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="h-12 w-12 text-blue-600" fill="currentColor">
          <path d="M12 1l9 4-9 4-9-4 9-4zm0 7l9 4-9 4-9-4 9-4zm0 7l9 4-9 4-9-4 9-4z" />
        </svg>
      ),
      title: 'Securely book your trip',
      desc: 'Confirm your itinerary and place a deposit to secure your journey.',
    },
  ];

  return (
    <div className="mx-auto mt-16 max-w-6xl text-center">
      <span className="rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-red-700 ring-1 ring-blue-200">
        Our Consultant Process
      </span>
      <h3 className="mt-4 text-3xl font-extrabold md:text-4xl">
        How we make your dream trip come true
      </h3>

      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
        {steps.map((s, i) => (
          <div key={i} className="rounded-3xl bg-white p-6 ring-1 ring-neutral-200 shadow-sm">
            <div className="mt-4 text-lg font-semibold">{s.title}</div>
            <p className="mt-2 text-neutral-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


function FAQRow({ q, a }:{q:string; a:string}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-5 md:p-6">
      <button onClick={()=>setOpen(v=>!v)} className="flex w-full items-center justify-between text-left">
        <span className="text-lg font-semibold">{q}</span>
        <span className={`inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 transition-transform ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      <div className={`grid transition-[grid-template-rows] duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden pt-3 text-neutral-600">{a}</div>
      </div>
    </div>
  );
}
