export default function Hero() {
  return (
    <section className="bg-[#0A1A2F] text-white">
      <div className="mx-auto max-w-6xl px-6 py-20 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h1 className="text-3xl md:text-5xl font-semibold mb-6">
            Engineering the Modern Enterprise.
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-8">
            Cloud, Identity, Endpoint, and Application Solutions for organizations
            that demand security, scale, and precision.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#services"
              className="rounded-md bg-[#0066CC] px-6 py-3 text-sm font-medium hover:bg-[#009BFF] transition"
            >
              Explore Services
            </a>
            <a
              href="#contact"
              className="rounded-md border border-slate-400 px-6 py-3 text-sm font-medium hover:bg-white hover:text-[#0A1A2F] transition"
            >
              Contact EAS
            </a>
          </div>
        </div>
        <div className="flex-1">
          <div className="relative h-64 md:h-80 rounded-xl bg-gradient-to-br from-[#0066CC] via-[#009BFF] to-[#0A1A2F] overflow-hidden">
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top,_#ffffff,_transparent_60%)]" />
            <div className="absolute bottom-6 left-6 right-6 text-sm text-slate-100">
              <p className="font-medium">Enterprise Cloud & Identity Architecture</p>
              <p className="text-xs text-slate-200 mt-2">
                Azure · Entra ID · Intune · Microsoft 365 · Custom Web & Mobile Apps
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
