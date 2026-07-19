const values = [
  {
    title: "Security First",
    description:
      "Identity, access, and endpoint security are foundational to every engagement.",
  },
  {
    title: "Scalability by Design",
    description:
      "Architectures built to grow with your organization, not constrain it.",
  },
  {
    title: "Operational Excellence",
    description:
      "Deployment, maintenance, and monitoring that keep systems reliable.",
  },
];

import ScrollReveal from "./ScrollReveal";

export default function Values() {
  return (
    <section className="bg-transparent text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <ScrollReveal animation="slide-up">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4 tracking-tight">Our Commitment</h2>
          <p className="text-base text-slate-300 mb-12 max-w-2xl">
            We build secure, scalable, and sustainable digital ecosystems that empower
            organizations and protect users.
          </p>
        </ScrollReveal>
        
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value, index) => (
            <ScrollReveal 
              key={value.title} 
              animation="scale-up" 
              className={`delay-${index * 100}`}
            >
              <div
                className="rounded-xl bg-[#0A1A2F]/40 backdrop-blur-md p-6 border border-white/5 hover:border-[#009BFF]/30 transition-all duration-300 shadow-xl hover:shadow-[#009BFF]/5 card-interactive h-full"
              >
                <h3 className="text-base font-bold text-slate-200 mb-3">{value.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{value.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
