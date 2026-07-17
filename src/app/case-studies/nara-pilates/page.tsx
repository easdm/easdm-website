import ScrollReveal from "@/components/ScrollReveal";

export default function NaraPilatesCaseStudyPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-[#0A1A2F] text-white pt-32 pb-16">
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

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6 space-y-8 text-sm md:text-base text-slate-700">
          <ScrollReveal animation="slide-up" className="delay-100">
            <h2 className="text-xl font-bold text-slate-900 mb-2">Problem</h2>
            <p className="leading-relaxed">
              Nara Pilates needed to transition from legacy spreadsheets and manual schedule coordination to a modern, self-service member booking portal.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="slide-up" className="delay-200">
            <h2 className="text-xl font-bold text-slate-900 mb-2">Solution</h2>
            <p className="leading-relaxed">
              EAS LLC created a custom web interface using Next.js, integrating scheduling systems and payment integrations. We emphasized a clean layout with custom animations reflecting the studio’s design-focused brand.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="slide-up" className="delay-300">
            <h2 className="text-xl font-bold text-slate-900 mb-2">Outcome</h2>
            <p className="leading-relaxed">
              A premium client experience that reduced booking admin work by 80% and increased online reservations.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
