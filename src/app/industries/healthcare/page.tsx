import ScrollReveal from "@/components/ScrollReveal";

export default function HealthcareIndustryPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-[#0A1A2F] text-white pt-32 pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal animation="slide-up">
            <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              Healthcare
            </h1>
            <p className="text-sm md:text-base text-slate-200 max-w-3xl leading-relaxed">
              EAS LLC designs secure and compliant cloud and endpoint environments for healthcare organizations, protecting sensitive patient data.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6 space-y-8 text-sm md:text-base text-slate-700">
          <ScrollReveal animation="slide-up" className="delay-100">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Key Challenges</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li>HIPAA compliance and PHI (Protected Health Information) security</li>
              <li>EHR (Electronic Health Record) system integration and access controls</li>
              <li>Secure medical tablets, workstations, and endpoint governance</li>
            </ul>
          </ScrollReveal>

          <ScrollReveal animation="slide-up" className="delay-200">
            <h2 className="text-xl font-bold text-slate-900 mb-4">How EAS Helps</h2>
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
