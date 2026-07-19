import ScrollReveal from "@/components/ScrollReveal";

export default function HealthcareIndustryPage() {
  return (
    <main className="min-h-screen bg-transparent text-white">
      <section className="bg-[#0A1A2F]/40/40 backdrop-blur-md border-b border-white/5 text-white pt-32 pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal animation="slide-up">
            <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              Healthcare
            </h1>
            <p className="text-sm md:text-base text-slate-200 max-w-3xl leading-relaxed">
              EAS designs secure and compliant cloud and endpoint environments for healthcare organizations, protecting sensitive patient data.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-transparent py-16">
        <div className="mx-auto max-w-6xl px-6 space-y-8 text-sm md:text-base text-slate-300">
          <ScrollReveal animation="slide-up" className="delay-100">
            <h2 className="text-xl font-bold text-white mb-4">Key Challenges</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li>HIPAA compliance and PHI (Protected Health Information) security</li>
              <li>EHR (Electronic Health Record) system integration and access controls</li>
              <li>Secure medical tablets, workstations, and endpoint governance</li>
            </ul>
          </ScrollReveal>

          <ScrollReveal animation="slide-up" className="delay-200">
            <h2 className="text-xl font-bold text-white mb-4">How EAS Helps</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li>HIPAA-compliant Azure governance and cloud landing zones</li>
              <li>Entra ID identity governance, MFA, and secure patient/staff portals</li>
              <li>Intune configuration profiles for clinical and administrative endpoints</li>
            </ul>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
