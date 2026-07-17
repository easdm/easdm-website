import ScrollReveal from "@/components/ScrollReveal";

export default function StartupsIndustryPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-[#0A1A2F] text-white pt-32 pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal animation="slide-up">
            <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              Startups
            </h1>
            <p className="text-sm md:text-base text-slate-200 max-w-3xl leading-relaxed">
              EAS delivers scalable cloud-native architectures and fast-deploying custom application stacks to turn startup ideas into scalable products.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6 space-y-8 text-sm md:text-base text-slate-700">
          <ScrollReveal animation="slide-up" className="delay-100">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Key Challenges</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li>Deploying features rapidly while maintaining code quality</li>
              <li>Setting up scalable hosting and database pipelines</li>
              <li>Securing initial intellectual property and founder developer machines</li>
            </ul>
          </ScrollReveal>

          <ScrollReveal animation="slide-up" className="delay-200">
            <h2 className="text-xl font-bold text-slate-900 mb-4">How EAS Helps</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li>Next.js, Firebase, and native mobile development (Kotlin/Swift) support</li>
              <li>Automated CI/CD workflows and serverless deployments (Firebase App Hosting)</li>
              <li>Lightweight Intune and Entra ID controls that secure developers without adding friction</li>
            </ul>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
