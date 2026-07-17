import ScrollReveal from "@/components/ScrollReveal";

export default function M365ModernWorkplacePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-[#0A1A2F] text-white pt-32 pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal animation="slide-up">
            <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              Microsoft 365 Modern Workplace
            </h1>
            <p className="text-sm md:text-base text-slate-200 max-w-3xl leading-relaxed">
              EAS delivers modern collaboration environments using Microsoft 365, ensuring security and seamless compliance.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6 space-y-8 text-sm md:text-base text-slate-700">
          <ScrollReveal animation="slide-up" className="delay-100">
            <h2 className="text-xl font-bold text-slate-900 mb-4">What We Deliver</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li>Exchange Online migrations and mail flow design</li>
              <li>SharePoint Online and Teams workspace structure</li>
              <li>Compliance, retention, and data loss prevention (DLP)</li>
              <li>Tenant-to-tenant migrations and mergers</li>
              <li>Governance, auditing, and threat protection config</li>
            </ul>
          </ScrollReveal>

          <ScrollReveal animation="slide-up" className="delay-200">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Engagement Models</h2>
            <p className="leading-relaxed">
              We design and coordinate tenant migrations, manage compliance setups, configure governance frameworks, and build secure collaboration architectures.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
