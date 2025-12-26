import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <Navbar />
      <Hero />

      {/* Spacer to allow scrolling if needed later, or can be removed if content fits */}
      {/* <div className="h-[50vh]"></div> */}
    </main>
  );
}
