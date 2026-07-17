import ScrollReveal from "@/components/ScrollReveal";

export default function ProfessionalServicesIndustryPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-[#0A1A2F] text-white pt-32 pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal animation="slide-up">
            <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              Professional Services
            </h1>
            <p className="text-sm md:text-base text-slate-200 max-w-3xl leading-relaxed">
              EAS LLC delivers modern cloud collaboration workspaces and secure client access controls for consulting, finance, and legal firms.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6 space-y-8 text-sm md:text-base text-slate-700">
          <ScrollReveal animation="slide-up" className="delay-100">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Key Challenges</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li>Securing proprietary client information and intellectual property</li>
              <li>Enabling secure, external file-sharing and client collaboration</li>
              <li>Governing identity and endpoints for hybrid and remote consultants</li>
            </ul>
          </ScrollReveal>

          <ScrollReveal animation="slide-up" className="delay-200">
            <h2 className="text-xl font-bold text-slate-900 mb-4">How EAS Helps</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li>M365 external sharing policies and information protection setup</li>
              <li>Conditional Access and Entra ID setup to govern consultant logins</li>
              <li>Autopilot-provisioned laptops utilizing Intune config benchmarks</li>
            </ul>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
