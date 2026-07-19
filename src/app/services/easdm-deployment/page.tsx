import ScrollReveal from "@/components/ScrollReveal";
import BackButton from "@/components/BackButton";

export default function EasdmDeploymentPage() {
  return (
    <main className="min-h-screen bg-transparent text-white">
      <section className="bg-[#0A1A2F]/40 backdrop-blur-md border-b border-white/5 text-white pt-32 pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <BackButton fallbackPath="/services" />
          <ScrollReveal animation="slide-up">
            <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              Enterprise Application Deployment (EASDM)
            </h1>
            <p className="text-sm md:text-base text-slate-200 max-w-3xl leading-relaxed">
              EAS manages the complete application lifecycle, ensuring packaging, versioning, rollout, and monitoring scale with precision.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-transparent py-16">
        <div className="mx-auto max-w-6xl px-6 space-y-8 text-sm md:text-base text-slate-300">
          <ScrollReveal animation="slide-up" className="delay-100">
            <h2 className="text-xl font-bold text-white mb-4">What We Deliver</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li>Application packaging (MSI, MSIX, IntuneWin)</li>
              <li>Rollout orchestration and ring-based delivery</li>
              <li>Version control, deprecation, and update lifecycle</li>
              <li>Monitoring, usage analytics, and compliance reporting</li>
              <li>Maintenance support contracts and SLA management</li>
            </ul>
          </ScrollReveal>

          <ScrollReveal animation="slide-up" className="delay-200">
            <h2 className="text-xl font-bold text-white mb-4">Engagement Models</h2>
            <p className="leading-relaxed">
              We package custom and commercial software, manage enterprise-wide rollouts, coordinate deprecations, and offer ongoing monitoring and SLA support.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
