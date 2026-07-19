import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-transparent text-white">
      <section className="bg-[#0A1A2F]/40 backdrop-blur-md border-b border-white/5 text-white pt-32 pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal animation="slide-up">
            <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              About EAS
            </h1>
            <p className="text-sm md:text-base text-slate-200 max-w-3xl leading-relaxed">
              Enterprise Application Solutions focused on cloud, identity,
              endpoint, and bespoke application engineering.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-transparent py-16">
        <div className="mx-auto max-w-6xl px-6 space-y-8 text-sm md:text-base text-slate-300">
          <ScrollReveal animation="slide-up" className="delay-100">
            <h2 className="text-xl font-bold text-white mb-2">Our Vision</h2>
            <p className="leading-relaxed">
              To be a trusted engineering partner for organizations modernizing
              their digital infrastructure and applications, combining security,
              scalability, and precision.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="slide-up" className="delay-200">
            <h2 className="text-xl font-bold text-white mb-2">Founder</h2>
            <p className="leading-relaxed">
              EAS is led by an architect with deep experience in Microsoft
              365, Azure, Entra ID, Intune, endpoint management, and custom web
              and mobile development (specializing in full-stack serverless systems).
            </p>
          </ScrollReveal>

          <ScrollReveal animation="slide-up" className="delay-300">
            <h2 className="text-xl font-bold text-white mb-2">How We Work</h2>
            <p className="leading-relaxed">
              We combine strategic consulting with hands-on engineering, from
              design and implementation to deployment, version packaging, and ongoing maintenance.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
