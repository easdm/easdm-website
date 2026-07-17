const services = [
  {
    title: "Cloud Architecture & Azure Engineering",
    description:
      "Design, deploy, and optimize Azure environments with enterprise-grade governance.",
    href: "/services/cloud-architecture",
  },
  {
    title: "Identity & Security (Entra ID)",
    description:
      "Zero Trust, Conditional Access, MFA, SSO, and identity modernization.",
    href: "/services/identity-security",
  },
  {
    title: "Endpoint Management & Intune",
    description:
      "Device compliance, Autopilot, app deployment, and secure endpoint lifecycle.",
    href: "/services/endpoint-management",
  },
  {
    title: "Microsoft 365 Modern Workplace",
    description:
      "Teams, SharePoint, Exchange Online, compliance, and tenant migrations.",
    href: "/services/m365-modern-workplace",
  },
  {
    title: "Enterprise Application Deployment (EASDM)",
    description:
      "Packaging, rollout, versioning, monitoring, and maintenance contracts.",
    href: "/services/easdm-deployment",
  },
  {
    title: "Custom Web & Mobile Development",
    description:
      "Next.js, Firebase, Android, iOS, CI/CD pipelines, and hosting.",
    href: "/services/custom-development",
  },
];

import ScrollReveal from "./ScrollReveal";

export default function Services() {
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <ScrollReveal animation="slide-up">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">Services</h2>
          <p className="text-base text-slate-600 mb-12 max-w-2xl">
            From strategic consulting to hands-on engineering, EAS LLC delivers secure,
            scalable solutions across cloud, identity, endpoint, and applications.
          </p>
        </ScrollReveal>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ScrollReveal 
              key={service.title} 
              animation="slide-up" 
              className={`delay-${(index % 3) * 100}`}
            >
              <article
                className="rounded-xl border border-slate-200 p-6 card-interactive h-full flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-sm text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                </div>
                <a
                  href={service.href}
                  className="text-xs font-bold text-[#0066CC] hover:text-[#009BFF] inline-flex items-center gap-1 group transition-colors"
                >
                  Learn more
                  <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform">&rarr;</span>
                </a>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
