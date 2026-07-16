import Hero from "@/components/Hero";
import FeaturedInsights from "@/components/FeaturedInsights";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import CaseStudies from "@/components/CaseStudies";
import Mission from "@/components/Mission";
import Values from "@/components/Values";
import Careers from "@/components/Careers";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Hero />
      <FeaturedInsights />
      <Services />
      <Industries />
      <CaseStudies />
      <Mission />
      <Values />
      <Careers />
      <Footer />
    </main>
  );
}
