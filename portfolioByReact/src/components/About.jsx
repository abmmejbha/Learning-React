import { useTheme } from "../context/ThemeContext";

function About() {
  const { theme } = useTheme();
  return (
    <section
      id="about"
      className={`scroll-mt-20 section-fade py-16 ${
        theme === "dark"
          ? "bg-transparent text-slate-100"
          : "bg-linear-to-b from-white/70 to-teal-50/40 text-slate-900"
      }`}
    >
      <div className="container mx-auto px-4">
        <div
          className={`card-elevated rounded-2xl border p-6 md:p-8 ${
            theme === "dark"
              ? "border-slate-700 bg-slate-800/70"
              : "border-teal-200 bg-white/95 shadow-[0_12px_30px_-22px_rgba(13,148,136,0.45)]"
          }`}
        >
          <h2 className="brand-font text-3xl font-bold mb-4">About Me</h2>
          <p
            className={`text-lg leading-relaxed mb-4 ${theme === "dark" ? "text-slate-200" : "text-slate-700"}`}
          >
            Currently I am studying CSE at BUBT and building my frontend
            development skills with React. I enjoy turning ideas into practical
            products, from web apps to small tools.
          </p>
          <p
            className={`text-lg leading-relaxed ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}
          >
            I am focused on creating clean, user-friendly interfaces and
            improving my engineering workflow through continuous learning and
            project-based practice.
          </p>
        </div>
      </div>
    </section>
  );
}
export default About;
