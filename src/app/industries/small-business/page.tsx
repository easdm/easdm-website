import ScrollReveal from "@/components/ScrollReveal";
import BackButton from "@/components/BackButton";

export default function SmallBusinessIndustryPage() {
  return (
    <main className="min-h-screen bg-transparent text-white">
      <section className="bg-[#0A1A2F]/40 backdrop-blur-md border-b border-white/5 text-white pt-32 pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <BackButton fallbackPath="/industries" />
          <ScrollReveal animation="slide-up">
            <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              Small Business
            </h1>
            <p className="text-sm md:text-base text-slate-200 max-w-3xl leading-relaxed">
              EAS constructs enterprise-grade digital foundations for growing businesses, keeping systems secure, simple, and affordable.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-transparent py-16">
        <div className="mx-auto max-w-6xl px-6 space-y-8 text-sm md:text-base text-slate-300">
          <ScrollReveal animation="slide-up" className="delay-100">
            <h2 className="text-xl font-bold text-white mb-4">Key Challenges</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li>Managing IT overhead and resource constraints</li>
              <li>Implementing robust cyber security protection without enterprise budgets</li>
              <li>Simplifying employee onboarding and basic workstation management</li>
            </ul>
          </ScrollReveal>

          <ScrollReveal animation="slide-up" className="delay-200">
            <h2 className="text-xl font-bold text-white mb-4">How EAS Helps</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li>M365 Business Premium configurations including basic Intune controls</li>
              <li>Affordable Entra ID security defaults and SSO integrations</li>
              <li>Self-service computer setups utilizing Windows Autopilot</li>
            </ul>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
