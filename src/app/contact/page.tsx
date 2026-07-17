import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-[#0A1A2F] text-white pt-32 pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal animation="slide-up">
            <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              Contact EAS
            </h1>
            <p className="text-sm md:text-base text-slate-200 max-w-3xl leading-relaxed">
              Ready to discuss cloud, identity, endpoint, or bespoke application
              projects? Let’s talk.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal animation="slide-up" className="delay-100">
            <form className="space-y-6 max-w-lg">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-[#0066CC] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-[#0066CC] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  Message
                </label>
                <textarea
                  required
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-[#0066CC] transition-colors"
                  rows={5}
                />
              </div>
              <button
                type="submit"
                className="rounded-md bg-[#0066CC] px-8 py-3 text-sm font-bold text-white hover:bg-[#009BFF] transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#0066CC]/20 cursor-pointer"
              >
                Send Message &rarr;
              </button>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
