export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 text-white">
      <div className="absolute inset-0 opacity-80 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:36px_36px]" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-24 md:flex-row md:items-center md:py-32">
        <div className="flex-1">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
            EAS LLC • Enterprise Application Solutions
          </p>
          <h1 className="mb-6 max-w-3xl text-4xl font-semibold leading-tight text-white md:text-6xl">
            Future-ready technology for modern industry.
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-slate-300 md:text-xl">
            We design cloud, identity, endpoint, and application ecosystems that help organizations move faster with confidence.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#services"
              className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-cyan-300"
            >
              Explore Services
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Contact EAS
            </a>
          </div>
        </div>
        <div className="flex-1">
          <div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-[#060d19]/90 p-6 shadow-[0_0_90px_rgba(0,153,255,0.15)] backdrop-blur">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,153,255,0.18),_transparent_50%)]" />
            <div className="relative space-y-4">
              <div className="h-2 w-24 rounded-full bg-cyan-400/80" />
              <div className="grid gap-3 md:grid-cols-2">
                {[
                  "Azure Strategy",
                  "Entra ID Modernization",
                  "Intune & Endpoint",
                  "Custom Digital Platforms",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/6 p-4 text-sm text-slate-200">
                    {item}
                  </div>
                ))}
              </div>
              <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-sm text-cyan-100">
                <p className="font-semibold">Secure by design. Scalable by nature.</p>
                <p className="mt-1 text-cyan-50/80">Cloud • Identity • Endpoint • Applications</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
