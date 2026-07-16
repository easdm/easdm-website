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
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Services</h2>
        <p className="text-sm text-slate-600 mb-8">
          From strategic consulting to hands-on engineering, EAS LLC delivers secure,
          scalable solutions across cloud, identity, endpoint, and applications.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-lg border border-slate-200 p-5 hover:border-[#0066CC] hover:shadow-md transition"
            >
              <h3 className="text-sm font-semibold mb-2">{service.title}</h3>
              <p className="text-xs text-slate-600 mb-4">{service.description}</p>
              <a
                href="#"
                className="text-xs font-semibold text-[#0066CC] hover:text-[#009BFF]"
              >
                Learn more
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
