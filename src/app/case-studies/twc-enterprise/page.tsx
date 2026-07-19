import ScrollReveal from "@/components/ScrollReveal";

export default function TwcEnterpriseCaseStudyPage() {
  return (
    <main className="min-h-screen bg-transparent text-white">
      <section className="bg-[#0A1A2F]/40/40 backdrop-blur-md border-b border-white/5 text-white pt-32 pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal animation="slide-up">
            <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              Case Study: TWC Enterprise Work
            </h1>
            <p className="text-sm md:text-base text-slate-200 max-w-3xl leading-relaxed">
              Modernizing cloud identity governance, endpoint controls, and software packaging rings for a large-scale workforce.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-transparent py-16">
        <div className="mx-auto max-w-6xl px-6 space-y-8 text-sm md:text-base text-slate-300">
          <ScrollReveal animation="slide-up" className="delay-100">
            <h2 className="text-xl font-bold text-white mb-2">Problem</h2>
            <p className="leading-relaxed">
              TWC Enterprise struggled with decentralized domain structures, inconsistent device configuration profiles, and legacy application deployment pipelines.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="slide-up" className="delay-200">
            <h2 className="text-xl font-bold text-white mb-2">Solution</h2>
            <p className="leading-relaxed">
              EAS restructured their identity tenant using Microsoft Entra ID and Conditional Access policies. We configured Intune and Windows Autopilot for device management and designed automated MSI/IntuneWin packaging pipelines for software deployment.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="slide-up" className="delay-300">
            <h2 className="text-xl font-bold text-white mb-2">Outcome</h2>
            <p className="leading-relaxed">
              A standardized, Zero Trust cloud posture that secured the corporate network, enabled zero-touch device provisioning, and automated app rollouts.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
