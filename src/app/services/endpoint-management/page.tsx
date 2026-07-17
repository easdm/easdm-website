import ScrollReveal from "@/components/ScrollReveal";

export default function EndpointManagementPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-[#0A1A2F] text-white pt-32 pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal animation="slide-up">
            <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              Endpoint Management & Intune
            </h1>
            <p className="text-sm md:text-base text-slate-200 max-w-3xl leading-relaxed">
              EAS engineers modern endpoint management infrastructures using Microsoft Intune to secure devices and automate provisioning.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6 space-y-8 text-sm md:text-base text-slate-700">
          <ScrollReveal animation="slide-up" className="delay-100">
            <h2 className="text-xl font-bold text-slate-900 mb-4">What We Deliver</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li>Microsoft Intune tenant setup and profile design</li>
              <li>Windows Autopilot configuration for zero-touch provisioning</li>
              <li>Compliance policies and conditional access sync</li>
              <li>Application packaging and dynamic rollouts</li>
              <li>Security baseline configurations and configuration profiles</li>
            </ul>
          </ScrollReveal>

          <ScrollReveal animation="slide-up" className="delay-200">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Engagement Models</h2>
            <p className="leading-relaxed">
              We deploy custom endpoint pilots, migrate co-managed systems, package and roll out software libraries, and construct endpoint security posture baselines.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
