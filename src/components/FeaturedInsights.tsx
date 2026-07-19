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
    <section className="bg-transparent text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-6 tracking-tight text-white">Featured Insights</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {insights.map((item) => (
            <article
              key={item.title}
              className="rounded-xl bg-[#0A1A2F]/40 backdrop-blur-md p-6 border border-white/5 hover:border-[#009BFF]/30 transition-all duration-300 shadow-xl hover:shadow-[#009BFF]/5 flex flex-col justify-between"
            >
              <div>
                <p className="text-xs font-semibold text-[#009BFF] uppercase mb-3 tracking-wider">
                  {item.label}
                </p>
                <h3 className="text-sm font-semibold text-slate-200 mb-6 leading-snug">{item.title}</h3>
              </div>
              <a
                href="#"
                className="text-xs font-semibold text-[#009BFF] hover:text-white transition-colors"
              >
                Read more &rarr;
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
