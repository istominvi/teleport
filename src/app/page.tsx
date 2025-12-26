import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <Navbar />

      {/* Placeholder content to demonstrate scrolling/sticky header */}
      <section className="flex flex-col items-center justify-center px-4 pt-32 pb-16 text-center sm:pt-48 lg:pt-56">
        <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl">
          <span className="block bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            TelePort™
          </span>
          <span className="block mt-2 text-4xl sm:text-6xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Доступ без границ
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
          Безопасный, анонимный и сверхбыстрый доступ к интернету. Технологии будущего для вашей свободы сегодня.
        </p>
      </section>

      {/* Spacer to allow scrolling */}
      <div className="h-[200vh]"></div>
    </main>
  );
}
