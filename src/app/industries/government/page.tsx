import ScrollReveal from "@/components/ScrollReveal";

export default function GovernmentIndustryPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-[#0A1A2F] text-white pt-32 pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal animation="slide-up">
            <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              Government
            </h1>
            <p className="text-sm md:text-base text-slate-200 max-w-3xl leading-relaxed">
              EAS LLC supports government agencies with secure, compliant, and
              modern digital infrastructure across cloud, identity, and endpoints.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6 space-y-8 text-sm md:text-base text-slate-700">
          <ScrollReveal animation="slide-up" className="delay-100">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Key Challenges</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li>Strict compliance and regulatory requirements</li>
              <li>Legacy systems and modernization constraints</li>
              <li>Secure remote access and endpoint control</li>
            </ul>
          </ScrollReveal>

          <ScrollReveal animation="slide-up" className="delay-200">
            <h2 className="text-xl font-bold text-slate-900 mb-4">How EAS Helps</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li>Azure and Microsoft 365 architectures for public sector</li>
              <li>Entra ID governance and Zero Trust implementation</li>
              <li>Intune-based endpoint management and compliance</li>
            </ul>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
