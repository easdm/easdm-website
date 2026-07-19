import ScrollReveal from "@/components/ScrollReveal";

export default function NaraPilatesCaseStudyPage() {
  return (
    <main className="min-h-screen bg-transparent text-white">
      <section className="bg-[#0A1A2F]/40/40 backdrop-blur-md border-b border-white/5 text-white pt-32 pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal animation="slide-up">
            <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              Case Study: Nara Pilates
            </h1>
            <p className="text-sm md:text-base text-slate-200 max-w-3xl leading-relaxed">
              Designing a premium digital fitness experience with real-time class booking, client member profiles, and fluid styling.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-transparent py-16">
        <div className="mx-auto max-w-6xl px-6 space-y-8 text-sm md:text-base text-slate-300">
          <ScrollReveal animation="slide-up" className="delay-100">
            <h2 className="text-xl font-bold text-white mb-2">Problem</h2>
            <p className="leading-relaxed">
              Nara Pilates needed to transition from legacy spreadsheets and manual schedule coordination to a modern, self-service member booking portal.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="slide-up" className="delay-200">
            <h2 className="text-xl font-bold text-white mb-2">Solution</h2>
            <p className="leading-relaxed">
              EAS created a custom web interface using Next.js, integrating scheduling systems and payment integrations. We emphasized a clean layout with custom animations reflecting the studio’s design-focused brand.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="slide-up" className="delay-300">
            <h2 className="text-xl font-bold text-white mb-2">Outcome</h2>
            <p className="leading-relaxed">
              A premium client experience that reduced booking admin work by 80% and increased online reservations.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
