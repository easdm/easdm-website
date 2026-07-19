import ScrollReveal from "@/components/ScrollReveal";

export default function EducationIndustryPage() {
  return (
    <main className="min-h-screen bg-transparent text-white">
      <section className="bg-[#0A1A2F]/40/40 backdrop-blur-md border-b border-white/5 text-white pt-32 pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal animation="slide-up">
            <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              Education
            </h1>
            <p className="text-sm md:text-base text-slate-200 max-w-3xl leading-relaxed">
              EAS engineers modern, secure collaboration spaces and endpoint structures for schools and educational systems.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-transparent py-16">
        <div className="mx-auto max-w-6xl px-6 space-y-8 text-sm md:text-base text-slate-300">
          <ScrollReveal animation="slide-up" className="delay-100">
            <h2 className="text-xl font-bold text-white mb-4">Key Challenges</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li>FERPA compliance and student information protection</li>
              <li>Scaling virtual classrooms and collaboration tools reliably</li>
              <li>Managing diverse school-issued laptops and student endpoints</li>
            </ul>
          </ScrollReveal>

          <ScrollReveal animation="slide-up" className="delay-200">
            <h2 className="text-xl font-bold text-white mb-4">How EAS Helps</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li>Microsoft 365 Education tenant configuration and safety governance</li>
              <li>Intune and Autopilot templates for student/faculty device provisioning</li>
              <li>Identity access solutions and single sign-on (SSO) for learning portals</li>
            </ul>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
