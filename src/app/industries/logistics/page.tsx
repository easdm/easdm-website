import ScrollReveal from "@/components/ScrollReveal";

export default function LogisticsIndustryPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-[#0A1A2F] text-white pt-32 pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal animation="slide-up">
            <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              Logistics
            </h1>
            <p className="text-sm md:text-base text-slate-200 max-w-3xl leading-relaxed">
              EAS LLC engineers high-performance cloud databases and secure endpoint platforms for global supply chains and transportation systems.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6 space-y-8 text-sm md:text-base text-slate-700">
          <ScrollReveal animation="slide-up" className="delay-100">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Key Challenges</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li>Real-time shipment tracking database synchronization</li>
              <li>Managing mobile scanners and driver terminal device states</li>
              <li>SLA-critical cloud and backend application hosting</li>
            </ul>
          </ScrollReveal>

          <ScrollReveal animation="slide-up" className="delay-200">
            <h2 className="text-xl font-bold text-slate-900 mb-4">How EAS Helps</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li>High-availability Azure database structures and serverless functions</li>
              <li>Microsoft Intune templates for rugged hand-held devices and tablets</li>
              <li>Identity federation and SSO linking freight and distribution networks</li>
            </ul>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
