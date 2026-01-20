import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import LocalTrust from "@/components/LocalTrust";
import Steps from "@/components/Steps";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <Navbar />
      <div
        style={{
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 80px)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 80px)',
        }}
      >
        <Hero />
        <Features />
        <LocalTrust />
        <Steps />
        <Pricing />
        <Footer />
      </div>
    </main>
  );
}
