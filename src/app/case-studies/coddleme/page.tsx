import ScrollReveal from "@/components/ScrollReveal";
import BackButton from "@/components/BackButton";

export default function CoddleMeCaseStudyPage() {
  return (
    <main className="min-h-screen bg-transparent text-white">
      <section className="bg-[#0A1A2F]/40 backdrop-blur-md border-b border-white/5 text-white pt-32 pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <BackButton fallbackPath="/clients" />
          <ScrollReveal animation="slide-up">
            <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              Case Study: CoddleMe
            </h1>
            <p className="text-sm md:text-base text-slate-200 max-w-3xl leading-relaxed">
              A bespoke web and mobile application built with Next.js, Firebase,
              and native Android/iOS to deliver a modern care experience.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-transparent py-16">
        <div className="mx-auto max-w-6xl px-6 space-y-8 text-sm md:text-base text-slate-300">
          <ScrollReveal animation="slide-up" className="delay-100">
            <h2 className="text-xl font-bold text-white mb-2">Problem</h2>
            <p className="leading-relaxed">
              CoddleMe needed a secure, scalable platform to connect users with
              care providers, featuring real-time chat, video calling, and a mobile-first UX.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="slide-up" className="delay-200">
            <h2 className="text-xl font-bold text-white mb-2">Solution</h2>
            <p className="leading-relaxed">
              EAS designed and implemented a full-stack solution using
              Next.js SSR, Firebase Hosting, App Hosting, Firestore, and native
              Android (Kotlin/Compose) and iOS (Swift/SwiftUI) clients. We integrated a unified WebRTC signaling layer over WebSockets and provisioned custom Google Cloud STUN/TURN servers to guarantee connection rates.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="slide-up" className="delay-300">
            <h2 className="text-xl font-bold text-white mb-2">Outcome</h2>
            <p className="leading-relaxed">
              A highly performant, authenticated platform featuring real-time messaging and voice/video calling synchronised seamlessly across Web, Android, and iOS.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
