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
      <div className="pointer-events-none fixed top-16 left-0 right-0 z-40 h-10 w-full bg-gradient-to-b from-slate-950 to-transparent" />
      <Hero />
      <Features />
      <LocalTrust />
      <Steps />
      <Pricing />
      <Footer />
    </main>
  );
}
