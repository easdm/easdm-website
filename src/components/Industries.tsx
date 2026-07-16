const industries = [
  "Government",
  "Healthcare",
  "Education",
  "Retail",
  "Logistics",
  "Professional Services",
  "Small Business",
  "Startups",
];

export default function Industries() {
  return (
    <section id="industries" className="bg-[#F3F4F6]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Industries We Serve</h2>
        <p className="text-sm text-slate-600 mb-8">
          EAS LLC supports organizations across sectors that rely on secure, modern
          digital infrastructure.
        </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <div
              key={industry}
              className="rounded-lg bg-white p-4 shadow-sm hover:shadow-md transition"
            >
              <p className="text-sm font-medium">{industry}</p>
              <a
                href="#"
                className="mt-2 inline-block text-xs font-semibold text-[#0066CC] hover:text-[#009BFF]"
              >
                Learn more
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
