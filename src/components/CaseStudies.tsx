const cases = [
  {
    title: "CoddleMe",
    description:
      "Full-stack SSR + native mobile app powered by Firebase and App Hosting.",
  },
  {
    title: "BandAid Company",
    description:
      "Business website, branding, and deployment for a growing service company.",
  },
  {
    title: "Nara Pilates",
    description:
      "Fitness studio website with scheduling, branding, and modern UX.",
  },
  {
    title: "TWC Enterprise Work",
    description:
      "Identity, cloud, endpoint engineering, and enterprise application deployment.",
  },
];

export default function CaseStudies() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Client Success Stories</h2>
        <p className="text-sm text-slate-600 mb-8">
          Real-world projects that demonstrate EAS LLC’s approach to secure, scalable,
          and modern solutions.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {cases.map((item) => (
            <article
              key={item.title}
              className="rounded-lg border border-slate-200 p-4 hover:border-[#0066CC] hover:shadow-md transition"
            >
              <h3 className="text-sm font-semibold mb-2">{item.title}</h3>
              <p className="text-xs text-slate-600 mb-3">{item.description}</p>
              <a
                href="#"
                className="text-xs font-semibold text-[#0066CC] hover:text-[#009BFF]"
              >
                Read more
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
