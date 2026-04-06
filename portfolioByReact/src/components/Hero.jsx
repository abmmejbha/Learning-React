import { useTheme } from "../context/ThemeContext";

function Hero() {
  const { theme } = useTheme();
  return (
    <section
      id="hero"
      className={`scroll-mt-20 section-fade relative overflow-hidden py-20 md:py-28 ${
        theme === "dark" ? "bg-slate-900/40" : "bg-white/50"
      }`}
    >
      <div
        className={`pointer-events-none absolute -top-20 -right-16 h-56 w-56 rounded-full blur-3xl ${
          theme === "dark" ? "bg-teal-400/20" : "bg-teal-300/40"
        }`}
      />
      <div className="container mx-auto px-4">
        <span
          className={`inline-flex rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-widest ${
            theme === "dark"
              ? "bg-teal-900/70 text-teal-200"
              : "bg-teal-100 text-teal-700"
          }`}
        >
          Frontend Journey
        </span>
        <h1 className="brand-font mt-5 text-4xl font-bold leading-tight md:text-6xl">
          ABM Mejbha
        </h1>
        <p
          className={`mt-4 text-lg md:text-xl ${theme === "dark" ? "text-slate-200" : "text-slate-700"}`}
        >
          CSE Student & Aspiring Frontend Developer
        </p>
        <p
          className={`mt-2 text-base ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}
        >
          BUBT, 3rd Year
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="neon-soft-btn rounded-xl border bg-teal-600 px-5 py-3 text-sm font-semibold text-white hover:shadow-lg transition-all duration-300 hover:bg-teal-700"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className={` rounded-xl border px-5 py-3 text-sm font-semibold transition-all duration-300 ${
              theme === "dark"
                ? "border-slate-600 text-slate-100 hover:bg-slate-800"
                : "border-slate-300 text-slate-700 hover:bg-slate-100"
            }`}
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
