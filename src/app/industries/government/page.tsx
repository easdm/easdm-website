import ScrollReveal from "@/components/ScrollReveal";
import BackButton from "@/components/BackButton";

export default function GovernmentIndustryPage() {
  return (
    <main className="min-h-screen bg-transparent text-white">
      <section className="bg-[#0A1A2F]/40 backdrop-blur-md border-b border-white/5 text-white pt-32 pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <BackButton fallbackPath="/industries" />
          <ScrollReveal animation="slide-up">
            <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              Government
            </h1>
            <p className="text-sm md:text-base text-slate-200 max-w-3xl leading-relaxed">
              EAS supports government agencies with secure, compliant, and
              modern digital infrastructure across cloud, identity, and endpoints.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-transparent py-16">
        <div className="mx-auto max-w-6xl px-6 space-y-8 text-sm md:text-base text-slate-300">
          <ScrollReveal animation="slide-up" className="delay-100">
            <h2 className="text-xl font-bold text-white mb-4">Key Challenges</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li>Strict compliance and regulatory requirements</li>
              <li>Legacy systems and modernization constraints</li>
              <li>Secure remote access and endpoint control</li>
            </ul>
          </ScrollReveal>

          <ScrollReveal animation="slide-up" className="delay-200">
            <h2 className="text-xl font-bold text-white mb-4">How EAS Helps</h2>
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
