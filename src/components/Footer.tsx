export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0A1A2F] text-slate-200">
      <div className="mx-auto max-w-6xl px-6 py-10 grid gap-8 md:grid-cols-4">
        <div>
          <h3 className="text-sm font-semibold mb-3 text-white">EAS LLC</h3>
          <p className="text-xs">
            Enterprise Application Solutions — Cloud, Identity, Endpoint, and
            Application Engineering.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-semibold mb-2 text-white">Navigation</h4>
          <ul className="space-y-1 text-xs">
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#industries" className="hover:text-white">Industries</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold mb-2 text-white">Legal</h4>
          <ul className="space-y-1 text-xs">
            <li><a href="#" className="hover:text-white">Terms of Use</a></li>
            <li><a href="#" className="hover:text-white">Privacy Statement</a></li>
            <li><a href="#" className="hover:text-white">Accessibility</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold mb-2 text-white">Contact</h4>
          <p className="text-xs">
            Business inquiries: <span className="font-semibold">contact@easllc.example</span>
          </p>
        </div>
      </div>
      <div className="border-t border-slate-700">
        <div className="mx-auto max-w-6xl px-6 py-4 text-xs text-slate-400">
          © 2026 EAS LLC — Enterprise Application Solutions
        </div>
      </div>
    </footer>
  );
}
