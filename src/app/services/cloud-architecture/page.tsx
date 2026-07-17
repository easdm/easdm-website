import ScrollReveal from "@/components/ScrollReveal";

export default function CloudArchitecturePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-[#0A1A2F] text-white pt-32 pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal animation="slide-up">
            <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              Cloud Architecture & Azure Engineering
            </h1>
            <p className="text-sm md:text-base text-slate-200 max-w-3xl leading-relaxed">
              EAS designs, deploys, and optimizes Azure environments with
              enterprise-grade governance, security, and scalability.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6 space-y-8 text-sm md:text-base text-slate-700">
          <ScrollReveal animation="slide-up" className="delay-100">
            <h2 className="text-xl font-bold text-slate-900 mb-4">What We Deliver</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li>Azure subscription and resource group design</li>
              <li>Networking, VNets, and hybrid connectivity</li>
              <li>Identity integration with Entra ID</li>
              <li>Security baselines and policy enforcement</li>
              <li>Cost optimization and governance</li>
            </ul>
          </ScrollReveal>

          <ScrollReveal animation="slide-up" className="delay-200">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Engagement Models</h2>
            <p className="leading-relaxed">
              We support assessment, design, implementation, and ongoing
              optimization engagements tailored to your organization.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
