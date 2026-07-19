import ScrollReveal from "@/components/ScrollReveal";
import BackButton from "@/components/BackButton";

export default function CustomDevelopmentPage() {
  return (
    <main className="min-h-screen bg-transparent text-white">
      <section className="bg-[#0A1A2F]/40 backdrop-blur-md border-b border-white/5 text-white pt-32 pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <BackButton fallbackPath="/services" />
          <ScrollReveal animation="slide-up">
            <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              Custom Web & Mobile Development
            </h1>
            <p className="text-sm md:text-base text-slate-200 max-w-3xl leading-relaxed">
              EAS engineers custom high-performance web applications and native mobile applications leveraging modern serverless architectures.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-transparent py-16">
        <div className="mx-auto max-w-6xl px-6 space-y-8 text-sm md:text-base text-slate-300">
          <ScrollReveal animation="slide-up" className="delay-100">
            <h2 className="text-xl font-bold text-white mb-4">What We Deliver</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li>Next.js SSR and single-page web applications</li>
              <li>Firebase integration, Firestore database and authentication</li>
              <li>Native Android development using Kotlin and Jetpack Compose</li>
              <li>Native iOS development using Swift and SwiftUI</li>
              <li>CI/CD pipeline automation and App Hosting configurations</li>
            </ul>
          </ScrollReveal>

          <ScrollReveal animation="slide-up" className="delay-200">
            <h2 className="text-xl font-bold text-white mb-4">Engagement Models</h2>
            <p className="leading-relaxed">
              We design and construct bespoke full-stack applications, upgrade existing platforms, and provide consulting on mobile/web deployment models.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
