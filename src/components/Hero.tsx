export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-transparent text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,153,255,0.22),_transparent_35%)]" />
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-24 md:flex-row md:items-center md:py-32">
        <div className="flex-1">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            EAS LLC • Enterprise Application Solutions
          </p>
          <h1 className="mb-6 text-4xl font-semibold leading-tight md:text-6xl">
            Designing the next era of enterprise technology.
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-slate-300 md:text-xl">
            We engineer secure cloud, identity, endpoint, and application platforms for organizations ready to scale with confidence.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#services"
              className="rounded-full bg-cyan-500 px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-cyan-400"
            >
              Explore Services
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Contact EAS
            </a>
          </div>
        </div>
        <div className="flex-1">
          <div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-slate-950/60 p-6 shadow-[0_0_80px_rgba(0,153,255,0.15)] backdrop-blur">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,153,255,0.25),_transparent_45%)]" />
            <div className="relative space-y-4">
              <div className="h-2 w-24 rounded-full bg-cyan-400/80" />
              <div className="grid gap-3 md:grid-cols-2">
                {[
                  "Azure Architecture",
                  "Entra ID Modernization",
                  "Intune Governance",
                  "Custom App Delivery",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
                    {item}
                  </div>
                ))}
              </div>
              <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-sm text-cyan-100">
                <p className="font-semibold">Enterprise-grade execution</p>
                <p className="mt-1 text-cyan-50/80">Cloud • Identity • Endpoint • Application engineering</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
