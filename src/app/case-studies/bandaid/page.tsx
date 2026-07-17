import ScrollReveal from "@/components/ScrollReveal";

export default function BandAidCaseStudyPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-[#0A1A2F] text-white pt-32 pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal animation="slide-up">
            <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              Case Study: BandAid Company
            </h1>
            <p className="text-sm md:text-base text-slate-200 max-w-3xl leading-relaxed">
              Constructing a modern digital identity, scheduling ecosystem, and local deployment pipeline for a growing service brand.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6 space-y-8 text-sm md:text-base text-slate-700">
          <ScrollReveal animation="slide-up" className="delay-100">
            <h2 className="text-xl font-bold text-slate-900 mb-2">Problem</h2>
            <p className="leading-relaxed">
              BandAid Company required an online platform to display services, coordinate customer inquiries, manage scheduling, and establish local branding.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="slide-up" className="delay-200">
            <h2 className="text-xl font-bold text-slate-900 mb-2">Solution</h2>
            <p className="leading-relaxed">
              EAS LLC engineered a responsive website featuring integrated lead capture workflows and customized booking scheduling widgets. We deployed the stack to a cost-effective cloud provider and built structured automation triggers for email notifications.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="slide-up" className="delay-300">
            <h2 className="text-xl font-bold text-slate-900 mb-2">Outcome</h2>
            <p className="leading-relaxed">
              A clean, modern brand interface that automated customer bookings and significantly improved local business visibility.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
