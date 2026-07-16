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
    <section className="bg-[#F3F4F6]">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-xl md:text-2xl font-semibold mb-6">Featured Insights</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {insights.map((item) => (
            <article
              key={item.title}
              className="rounded-lg bg-white p-4 shadow-sm hover:shadow-md transition"
            >
              <p className="text-xs font-semibold text-[#0066CC] uppercase mb-2">
                {item.label}
              </p>
              <h3 className="text-sm font-medium mb-3">{item.title}</h3>
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
