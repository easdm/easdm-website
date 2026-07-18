'use client';

import React, { useState } from 'react';
import ScrollReveal from "@/components/ScrollReveal";

export default function SupportPage() {
  const [supportArea, setSupportArea] = useState('azure');
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen bg-[#050B14] text-white pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        
        {submitted ? (
          <ScrollReveal animation="slide-up">
            <div className="max-w-2xl mx-auto bg-[#0A1A2F] text-white border border-white/10 shadow-2xl rounded-2xl p-8 py-16 text-center space-y-6">
              <div className="w-16 h-16 bg-[#00E5FF]/10 border border-[#00E5FF]/30 rounded-full flex items-center justify-center mx-auto animate-pulse">
                <svg className="w-8 h-8 text-[#00E5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold tracking-tight">Ticket Submitted Successfully</h3>
              <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                Your request has been routed to the priority support queue. Response SLA is governed by your active contract terms.
              </p>
            </div>
          </ScrollReveal>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left Sidebar Info */}
            <ScrollReveal animation="slide-up" className="lg:col-span-1 space-y-6">
              <div className="bg-[#0A1A2F]/50 border border-white/5 shadow-xl rounded-2xl p-6 space-y-6">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Priority Support SLA
                  </h3>
                  <p className="text-sm text-slate-300">
                    We offer standard 8x5 business support and premium 24x7 coverage depending on your active Service Level Agreement.
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Escalation Email
                  </h3>
                  <a href="mailto:support@easdm.com" className="text-[#00E5FF] hover:text-white text-sm font-semibold transition-colors">
                    support@easdm.com
                  </a>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Authorized Access
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    This portal is restricted to registered EAS customer tenants. Unverified ticket submissions are flagged for review.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Support Portal Form */}
            <div className="lg:col-span-2">
              <ScrollReveal animation="slide-up" className="delay-100">
                <div className="bg-[#0A1A2F] border border-white/10 shadow-2xl rounded-2xl overflow-hidden">
                  <div className="bg-gradient-to-r from-[#0066CC] to-[#009BFF] px-8 py-6">
                    <h2 className="text-2xl font-bold tracking-tight text-white">EAS Client Support Portal</h2>
                    <p className="text-xs text-slate-100 mt-1">Authorized corporate access and priority incident submission.</p>
                  </div>
                  
                  <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="p-8 space-y-6">
                    {/* Credentials */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                          Corporate Email Address
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="user@enterprise.com"
                          className="w-full bg-white/5 border border-white/10 focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                          SSO Portal Password
                        </label>
                        <input
                          type="password"
                          required
                          placeholder="••••••••"
                          className="w-full bg-white/5 border border-white/10 focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Support Category Dropdown */}
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Select Support Infrastructure Category
                      </label>
                      <div className="relative">
                        <select
                          value={supportArea}
                          onChange={(e) => setSupportArea(e.target.value)}
                          className="w-full bg-[#0A1A2F] border border-white/10 focus:border-[#00E5FF] rounded-lg px-4 py-3 text-sm text-white focus:outline-none appearance-none transition-all cursor-pointer font-semibold"
                        >
                          <option value="azure">Azure Cloud Infrastructure Support</option>
                          <option value="entra">Entra ID & Zero-Trust Governance</option>
                          <option value="intune">Intune Endpoint Management & Provisioning</option>
                          <option value="m365">Microsoft 365 Tenant Support</option>
                          <option value="custom">Custom Software & DevOps Maintenance</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Incident description */}
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Provide Incident Details
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Please detail the issue, error codes, and symptoms..."
                        className="w-full bg-white/5 border border-white/10 focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] rounded-lg px-4 py-3 text-sm text-white focus:outline-none transition-all"
                      />
                    </div>

                    {/* Submit Section */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/5">
                      <span className="text-[10px] text-slate-500 font-mono">
                        🔐 Session logged under Active Audit SLA.
                      </span>
                      <button
                        type="submit"
                        className="w-full sm:w-auto rounded-lg bg-[#0066CC] hover:bg-[#009BFF] border border-white/10 px-8 py-3 text-sm font-bold text-white transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer shadow-lg shadow-[#0066CC]/20"
                      >
                        Authenticate & Open Ticket
                      </button>
                    </div>
                  </form>
                </div>
              </ScrollReveal>
            </div>
          </div>
        )}

      </div>
    </main>
  );
}
