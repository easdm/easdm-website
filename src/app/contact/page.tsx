'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal animation="slide-up">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-800 mb-6">
            Contact EAS
          </h1>
          <p className="text-lg text-slate-600 mb-12 max-w-3xl leading-relaxed">
            We’re here to support your enterprise application needs. Reach out and our team will respond promptly.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Sidebar */}
          <ScrollReveal animation="slide-up" className="delay-100">
            <ContactSidebar />
          </ScrollReveal>

          {/* Form */}
          <div className="md:col-span-2">
            <ScrollReveal animation="slide-up" className="delay-200">
              <MultiStepInquiryForm />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </main>
  );
}

function ContactSidebar() {
  return (
    <aside className="bg-white shadow-md rounded-xl p-8 border border-slate-100 space-y-8">
      <div>
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
          Business Hours
        </h3>
        <p className="text-slate-700 font-semibold">Monday – Friday</p>
        <p className="text-slate-500 text-sm mt-1">9:00 AM – 5:00 PM EST</p>
      </div>

      <div>
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
          Email
        </h3>
        <a href="mailto:support@easdm.com" className="text-[#0066CC] hover:text-[#009BFF] font-semibold transition-colors">
          support@easdm.com
        </a>
      </div>

      <div>
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
          Location
        </h3>
        <p className="text-slate-700 font-semibold">Lawrenceville, GA</p>
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white shadow-md rounded-xl p-8 border border-slate-100 text-center py-16 space-y-4">
        <div className="w-16 h-16 bg-[#0066CC]/10 border border-[#009BFF]/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-[#0066CC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-slate-800">Thank You!</h3>
        <p className="text-slate-600 max-w-md mx-auto text-sm">
          Your inquiry has been successfully received. A consultant from the EAS team will reach out to you shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-md rounded-xl p-8 border border-slate-100">
      {/* Step Indicators */}
      <div className="flex items-center justify-between mb-10 relative">
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-slate-100 -z-10" />
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-2 bg-white px-2">
            <div
              className={`h-7 w-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                step === s
                  ? "bg-[#0066CC] text-white shadow-md shadow-[#0066CC]/20"
                  : step > s
                  ? "bg-emerald-500 text-white"
                  : "bg-slate-100 text-slate-400"
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
              className={`text-xs font-bold tracking-wide uppercase hidden sm:inline ${
                step === s ? "text-slate-850" : "text-slate-400"
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
            <h3 className="text-xl font-bold text-slate-850 mb-1">
              Step 1: About You
            </h3>
            <p className="text-xs text-slate-400">Please provide your contact coordinates.</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#0066CC] focus:ring-1 focus:ring-[#0066CC] transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="john.doe@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#0066CC] focus:ring-1 focus:ring-[#0066CC] transition-all"
              />
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <button
              onClick={() => name && email && setStep(2)}
              disabled={!name || !email}
              className="px-6 py-3 bg-[#0066CC] disabled:bg-slate-200 disabled:cursor-not-allowed hover:bg-[#009BFF] text-white rounded-lg text-sm font-bold transition-all hover:shadow-lg hover:shadow-[#0066CC]/20 cursor-pointer"
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
            <h3 className="text-xl font-bold text-slate-850 mb-1">
              Step 2: Your Needs
            </h3>
            <p className="text-xs text-slate-400">Describe your IT or application needs.</p>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Project Description
            </label>
            <textarea
              rows={5}
              required
              placeholder="Tell us about your project requirements, goals, and timelines..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#0066CC] focus:ring-1 focus:ring-[#0066CC] transition-all"
            />
          </div>

          <div className="flex justify-between pt-4">
            <button
              onClick={() => setStep(1)}
              className="px-6 py-3 border border-slate-200 hover:border-slate-350 text-slate-600 rounded-lg text-sm font-bold transition-colors cursor-pointer"
            >
              &larr; Back
            </button>
            <button
              onClick={() => message && setStep(3)}
              disabled={!message}
              className="px-6 py-3 bg-[#0066CC] disabled:bg-slate-200 disabled:cursor-not-allowed hover:bg-[#009BFF] text-white rounded-lg text-sm font-bold transition-all hover:shadow-lg hover:shadow-[#0066CC]/20 cursor-pointer"
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
            <h3 className="text-xl font-bold text-slate-850 mb-1">
              Step 3: Submit Inquiry
            </h3>
            <p className="text-xs text-slate-400">Please review your coordinates before sending.</p>
          </div>

          <div className="bg-slate-50 rounded-lg p-5 border border-slate-100 space-y-3 text-sm">
            <div className="grid grid-cols-3">
              <span className="text-slate-455 font-semibold">Name:</span>
              <span className="col-span-2 text-slate-800 font-medium">{name}</span>
            </div>
            <div className="grid grid-cols-3">
              <span className="text-slate-455 font-semibold">Email:</span>
              <span className="col-span-2 text-slate-800 font-medium">{email}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-slate-455 font-semibold">Message:</span>
              <span className="text-slate-700 bg-white border border-slate-150 rounded p-3 mt-1 whitespace-pre-wrap">{message}</span>
            </div>
          </div>

          <div className="flex justify-between pt-4">
            <button
              onClick={() => setStep(2)}
              className="px-6 py-3 border border-slate-200 hover:border-slate-350 text-slate-600 rounded-lg text-sm font-bold transition-colors cursor-pointer"
            >
              &larr; Back
            </button>
            <button
              onClick={handleSubmit}
              className="px-8 py-3 bg-[#0066CC] hover:bg-[#009BFF] text-white rounded-lg text-sm font-bold transition-all hover:shadow-lg hover:shadow-[#0066CC]/20 cursor-pointer"
            >
              Submit Inquiry
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
