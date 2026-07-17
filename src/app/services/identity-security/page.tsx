import ScrollReveal from "@/components/ScrollReveal";

export default function IdentitySecurityPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-[#0A1A2F] text-white pt-32 pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal animation="slide-up">
            <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              Identity & Security (Entra ID)
            </h1>
            <p className="text-sm md:text-base text-slate-200 max-w-3xl leading-relaxed">
              EAS LLC modernizes identity architectures to deliver robust access control and security baselines based on Zero Trust principles.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6 space-y-8 text-sm md:text-base text-slate-700">
          <ScrollReveal animation="slide-up" className="delay-100">
            <h2 className="text-xl font-bold text-slate-900 mb-4">What We Deliver</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li>Entra ID architecture, integration, and tenant config</li>
              <li>Zero Trust access controls and baseline policies</li>
              <li>Conditional Access and Multi-Factor Authentication (MFA)</li>
              <li>Single Sign-On (SSO) and federation</li>
              <li>Privileged Identity Management (PIM) and lifecycle rules</li>
            </ul>
          </ScrollReveal>

          <ScrollReveal animation="slide-up" className="delay-200">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Engagement Models</h2>
            <p className="leading-relaxed">
              We support directory assessments, security hardening, conditional access audits, and directory migrations suited to your enterprise needs.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
