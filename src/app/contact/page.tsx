'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  const [customerType, setCustomerType] = useState<'prompt' | 'new'>('prompt');
  const router = useRouter();

  // Read query parameters in a client-safe way for static exports
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('type') === 'new') {
        setCustomerType('new');
      }
    }
  }, []);

  return (
    <main className="bg-transparent text-white pt-24 pb-12 flex-grow min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <div>
          <ScrollReveal animation="slide-up">
            <button 
              onClick={() => router.push('/getintouch')}
              className="mb-8 flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              &larr; Back to Selection
            </button>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-slate-300 mb-12 max-w-3xl leading-relaxed">
              We’re here to support your enterprise application needs. Reach out and our team will respond promptly.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <ScrollReveal animation="slide-up" className="delay-100">
              <ContactSidebar />
            </ScrollReveal>
            <div className="md:col-span-2">
              <ScrollReveal animation="slide-up" className="delay-200">
                <MultiStepInquiryForm />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function ContactSidebar() {
  return (
    <aside className="bg-[#0A1A2F]/40 backdrop-blur-md border border-white/5 shadow-2xl rounded-2xl p-8 space-y-8">
      <div>
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
          Business Hours
        </h3>
        <p className="text-slate-200 font-semibold">Monday – Friday</p>
        <p className="text-slate-400 text-sm mt-1">9:00 AM – 5:00 PM EST</p>
      </div>

      <div>
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
          Email
        </h3>
        <a href="mailto:support@easdm.com" className="text-[#009BFF] hover:text-white font-semibold transition-colors">
          support@easdm.com
        </a>
      </div>

      <div>
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
          Location
        </h3>
        <p className="text-slate-200 font-semibold">Argyle, TX</p>
      </div>
    </aside>
  );
}

function MultiStepInquiryForm() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Split description by whitespace to count words
  const wordCount = message.trim().split(/\s+/).filter(Boolean).length;
  const isWordCountValid = wordCount <= 30;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-[#0A1A2F]/40 backdrop-blur-md border border-white/5 shadow-2xl rounded-2xl p-8 text-center py-16 space-y-4">
        <div className="w-16 h-16 bg-[#009BFF]/10 border border-[#009BFF]/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-[#009BFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white">Thank You!</h3>
        <p className="text-slate-300 max-w-md mx-auto text-sm">
          Your inquiry has been successfully received. A consultant from the EAS team will reach out to you shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[#0A1A2F]/40 backdrop-blur-md border border-white/5 shadow-2xl rounded-2xl p-8">
      {/* Step Indicators */}
      <div className="flex items-center justify-between mb-10 relative">
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-white/5 -z-10" />
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-2 bg-[#0A1A2F] px-2 rounded-full border border-white/5">
            <div
              className={`h-7 w-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                step === s
                  ? "bg-[#009BFF] text-white shadow-md shadow-[#009BFF]/20"
                  : step > s
                  ? "bg-emerald-500 text-white"
                  : "bg-white/5 text-slate-500"
              }`}
            >
              {step > s ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                s
              )}
            </div>
            <span
              className={`text-xs font-bold tracking-wide uppercase hidden sm:inline pr-2 ${
                step === s ? "text-slate-855" : "text-slate-400"
              }`}
            >
              {s === 1 ? "About You" : s === 2 ? "Your Needs" : "Submit"}
            </span>
          </div>
        ))}
      </div>

      {/* Step 1 */}
      {step === 1 && (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">
              Step 1: About You
            </h3>
            <p className="text-xs text-slate-400">Please provide your contact coordinates.</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#0A1A2F]/60 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#009BFF] focus:ring-1 focus:ring-[#009BFF] transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="john.doe@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#0A1A2F]/60 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#009BFF] focus:ring-1 focus:ring-[#009BFF] transition-all"
              />
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <button
              onClick={() => name && email && setStep(2)}
              disabled={!name || !email}
              className="px-6 py-3 bg-[#0066CC] disabled:bg-white/5 disabled:text-slate-500 disabled:cursor-not-allowed hover:bg-[#009BFF] text-white rounded-lg text-sm font-bold transition-all hover:shadow-lg hover:shadow-[#009BFF]/20 cursor-pointer"
            >
              Next Step &rarr;
            </button>
          </div>
        </div>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">
              Step 2: Your Needs
            </h3>
            <p className="text-xs text-slate-400">Describe your request in 30 words or less.</p>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Requested Services Description
            </label>
            <textarea
              rows={4}
              required
              placeholder="Quick description of service requested..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`w-full bg-[#0A1A2F]/60 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-all ${
                isWordCountValid 
                  ? 'border border-white/10 focus:border-[#009BFF] focus:ring-[#009BFF]' 
                  : 'border border-red-500 focus:border-red-500 focus:ring-red-500'
              }`}
            />
            <div className="flex justify-between items-center mt-2">
              <span className={`text-[10px] font-bold uppercase tracking-wider ${
                isWordCountValid ? 'text-slate-400' : 'text-red-500 font-extrabold'
              }`}>
                {wordCount} / 30 words
              </span>
              {!isWordCountValid && (
                <span className="text-[10px] text-red-500 font-bold">
                  ⚠️ Description exceeds the 30-word limit.
                </span>
              )}
            </div>
          </div>

          <div className="flex justify-between pt-4">
            <button
              onClick={() => setStep(1)}
              className="px-6 py-3 border border-white/10 hover:border-white/20 text-slate-400 hover:text-white rounded-lg text-sm font-bold transition-colors cursor-pointer"
            >
              &larr; Back
            </button>
            <button
              onClick={() => message && isWordCountValid && setStep(3)}
              disabled={!message || !isWordCountValid}
              className="px-6 py-3 bg-[#0066CC] disabled:bg-white/5 disabled:text-slate-500 disabled:cursor-not-allowed hover:bg-[#009BFF] text-white rounded-lg text-sm font-bold transition-all hover:shadow-lg hover:shadow-[#009BFF]/20 cursor-pointer"
            >
              Next Step &rarr;
            </button>
          </div>
        </div>
      )}

      {/* Step 3 */}
      {step === 3 && (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">
              Step 3: Submit Inquiry
            </h3>
            <p className="text-xs text-slate-400">Please review your details before submitting.</p>
          </div>

          <div className="bg-[#0A1A2F]/30 rounded-lg p-5 border border-white/5 space-y-3 text-sm">
            <div className="grid grid-cols-3">
              <span className="text-slate-400 font-bold uppercase text-[10px] tracking-wide">Name:</span>
              <span className="col-span-2 text-slate-200 font-semibold">{name}</span>
            </div>
            <div className="grid grid-cols-3">
              <span className="text-slate-400 font-bold uppercase text-[10px] tracking-wide">Email:</span>
              <span className="col-span-2 text-slate-200 font-semibold">{email}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-slate-400 font-bold uppercase text-[10px] tracking-wide">Description:</span>
              <span className="text-slate-300 bg-[#0A1A2F]/50 border border-white/5 rounded p-3 mt-1 whitespace-pre-wrap">{message}</span>
            </div>
          </div>

          <div className="flex justify-between pt-4">
            <button
              onClick={() => setStep(2)}
              className="px-6 py-3 border border-white/10 hover:border-white/20 text-slate-400 hover:text-white rounded-lg text-sm font-bold transition-colors cursor-pointer"
            >
              &larr; Back
            </button>
            <button
              onClick={handleSubmit}
              className="px-8 py-3 bg-[#0066CC] hover:bg-[#009BFF] text-white rounded-lg text-sm font-bold transition-all hover:shadow-lg hover:shadow-[#009BFF]/20 cursor-pointer"
            >
              Submit Inquiry
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
