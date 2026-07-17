const industries = [
  { name: "Government", href: "/industries/government" },
  { name: "Healthcare", href: "/industries/healthcare" },
  { name: "Education", href: "/industries/education" },
  { name: "Retail", href: "/industries/retail" },
  { name: "Logistics", href: "/industries/logistics" },
  { name: "Professional Services", href: "/industries/professional-services" },
  { name: "Small Business", href: "/industries/small-business" },
  { name: "Startups", href: "/industries/startups" },
];

import ScrollReveal from "./ScrollReveal";

export default function Industries() {
  return (
    <section id="industries" className="bg-[#F3F4F6]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <ScrollReveal animation="slide-up">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">Industries We Serve</h2>
          <p className="text-base text-slate-600 mb-10 max-w-2xl">
            EAS LLC supports organizations across sectors that rely on secure, modern
            digital infrastructure.
          </p>
        </ScrollReveal>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => (
            <ScrollReveal 
              key={industry.name} 
              animation="scale-up" 
              className={`delay-${(index % 4) * 75}`}
            >
              <div
                className="rounded-xl bg-white p-6 border border-slate-100 card-interactive shadow-sm h-full flex flex-col justify-between"
              >
                <p className="text-base font-bold text-slate-900">{industry.name}</p>
                <a
                  href={industry.href}
                  className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-[#0066CC] hover:text-[#009BFF] group"
                >
                  Learn more
                  <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform">&rarr;</span>
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
