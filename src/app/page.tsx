import { Hero } from "@/components/home/Hero";
import { TrustedLogos } from "@/components/home/TrustedLogos";
import { Services } from "@/components/home/Services";
import { Portfolio } from "@/components/home/Portfolio";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { LoadCalculator } from "@/components/home/LoadCalculator";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Hero />
      <TrustedLogos />
      <Services />
      <Portfolio />
      <Testimonials />
      <LoadCalculator />
      <FAQ />
      {/* Other sections will go here */}
      <section className="py-20 text-center text-gray-400">
        Trust Logos • Services • Portfolio • Testimonials • FAQ • Footer
      </section>
    </main>
  );
}
