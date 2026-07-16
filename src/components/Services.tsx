const services = [
  {
    title: "Cloud Architecture & Azure Engineering",
    description:
      "Design, deploy, and optimize Azure environments with enterprise-grade governance.",
  },
  {
    title: "Identity & Security (Entra ID)",
    description:
      "Zero Trust, Conditional Access, MFA, SSO, and identity modernization.",
  },
  {
    title: "Endpoint Management & Intune",
    description:
      "Device compliance, Autopilot, app deployment, and secure endpoint lifecycle.",
  },
  {
    title: "Microsoft 365 Modern Workplace",
    description:
      "Teams, SharePoint, Exchange Online, compliance, and tenant migrations.",
  },
  {
    title: "Enterprise Application Deployment (EASDM)",
    description:
      "Packaging, rollout, versioning, monitoring, and maintenance contracts.",
  },
  {
    title: "Custom Web & Mobile Development",
    description:
      "Next.js, Firebase, Android, iOS, CI/CD pipelines, and hosting.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-transparent">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Services</p>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">Secure transformation at enterprise speed.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-[1.5rem] border border-white/10 bg-[#07111f]/90 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-[#0b1630]"
            >
              <h3 className="mb-3 text-lg font-semibold text-white">{service.title}</h3>
              <p className="mb-4 text-sm text-slate-300">{service.description}</p>
              <a href="#" className="text-sm font-semibold text-cyan-300 hover:text-cyan-200">
                Learn more
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
