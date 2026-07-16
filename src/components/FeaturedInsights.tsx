const insights = [
  {
    label: "Insight",
    title: "Modern Identity: Why Entra ID Is the New Enterprise Standard",
  },
  {
    label: "Research",
    title: "Cloud-Led Innovation: How Azure Accelerates Digital Transformation",
  },
  {
    label: "Article",
    title: "Endpoint Security at Scale: Intune Best Practices for 2026",
  },
  {
    label: "Article",
    title: "Zero Trust in Practice: Conditional Access Strategies That Work",
  },
];

export default function FeaturedInsights() {
  return (
    <section className="bg-transparent">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-6 text-2xl font-semibold text-white">Featured Insights</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {insights.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
            >
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                {item.label}
              </p>
              <h3 className="mb-3 text-sm font-medium text-white">{item.title}</h3>
              <a href="#" className="text-xs font-semibold text-cyan-300 hover:text-cyan-200">
                Read more
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
