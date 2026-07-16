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

export default function Values() {
  return (
    <section className="bg-[#F3F4F6]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Our Commitment</h2>
        <p className="text-sm text-slate-600 mb-8">
          We build secure, scalable, and sustainable digital ecosystems that empower
          organizations and protect users.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-lg bg-white p-5 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-sm font-semibold mb-2">{value.title}</h3>
              <p className="text-xs text-slate-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
