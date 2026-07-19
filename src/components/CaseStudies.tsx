const cases = [
  {
    title: "CoddleMe",
    description:
      "Full-stack SSR + native mobile app powered by Firebase and App Hosting.",
    href: "/case-studies/coddleme",
  },
  {
    title: "BandAid Company",
    description:
      "Business website, branding, and deployment for a growing service company.",
    href: "/case-studies/bandaid",
  },
  {
    title: "Nara Pilates",
    description:
      "Fitness studio website with scheduling, branding, and modern UX.",
    href: "/case-studies/nara-pilates",
  },
  {
    title: "TWC Enterprise Work",
    description:
      "Identity, cloud, endpoint engineering, and enterprise application deployment.",
    href: "/case-studies/twc-enterprise",
  },
];

import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function CaseStudies() {
  return (
    <section className="bg-transparent text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <ScrollReveal animation="slide-up">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4 tracking-tight">Client Success Stories</h2>
          <p className="text-base text-slate-300 mb-12 max-w-2xl">
            Real-world projects that demonstrate EAS’s approach to secure, scalable,
            and modern solutions.
          </p>
        </ScrollReveal>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {cases.map((item, index) => (
            <ScrollReveal 
              key={item.title} 
              animation="slide-up" 
              className={`delay-${index * 100}`}
            >
              <article
                className="rounded-xl bg-[#0A1A2F]/40 backdrop-blur-md border border-white/5 p-6 hover:border-[#009BFF]/30 transition-all duration-300 card-interactive shadow-xl hover:shadow-[#009BFF]/5 h-full flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-bold text-slate-200 mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-400 mb-6 leading-relaxed">{item.description}</p>
                </div>
                <Link
                  href={item.href}
                  className="text-xs font-semibold text-[#009BFF] hover:text-white transition-colors"
                >
                  Read more &rarr;
                </Link>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
