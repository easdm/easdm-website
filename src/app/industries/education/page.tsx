import ScrollReveal from "@/components/ScrollReveal";

export default function EducationIndustryPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-[#0A1A2F] text-white pt-32 pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal animation="slide-up">
            <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              Education
            </h1>
            <p className="text-sm md:text-base text-slate-200 max-w-3xl leading-relaxed">
              EAS LLC engineers modern, secure collaboration spaces and endpoint structures for schools and educational systems.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6 space-y-8 text-sm md:text-base text-slate-700">
          <ScrollReveal animation="slide-up" className="delay-100">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Key Challenges</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li>FERPA compliance and student information protection</li>
              <li>Scaling virtual classrooms and collaboration tools reliably</li>
              <li>Managing diverse school-issued laptops and student endpoints</li>
            </ul>
          </ScrollReveal>

          <ScrollReveal animation="slide-up" className="delay-200">
            <h2 className="text-xl font-bold text-slate-900 mb-4">How EAS Helps</h2>
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
