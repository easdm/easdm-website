import ScrollReveal from "@/components/ScrollReveal";

export default function RetailIndustryPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-[#0A1A2F] text-white pt-32 pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal animation="slide-up">
            <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              Retail
            </h1>
            <p className="text-sm md:text-base text-slate-200 max-w-3xl leading-relaxed">
              EAS builds secure architectures and endpoint environments for retail networks, protecting point-of-sale data and transaction flows.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6 space-y-8 text-sm md:text-base text-slate-700">
          <ScrollReveal animation="slide-up" className="delay-100">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Key Challenges</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li>PCI DSS compliance and transaction system security</li>
              <li>Managing Point-of-Sale (POS) devices and inventory terminals</li>
              <li>Scaling custom e-commerce applications and digital customer systems</li>
            </ul>
          </ScrollReveal>

          <ScrollReveal animation="slide-up" className="delay-200">
            <h2 className="text-xl font-bold text-slate-900 mb-4">How EAS Helps</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li>Secure Azure hosting and database environments for transaction logs</li>
              <li>Intune profiles to lock down and manage POS endpoints and tablet kiosks</li>
              <li>Next.js and Firebase cloud application delivery for modern web e-commerce</li>
            </ul>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
