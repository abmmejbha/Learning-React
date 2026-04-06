import { useTheme } from "../context/ThemeContext";

function Skills() {
  const { theme } = useTheme();
  const skills = [
    { name: "HTML", level: "comfortable" },
    { name: "CSS", level: "comfortable" },
    { name: "JavaScript", level: "comfortable" },
    { name: "C", level: "comfortable" },
    { name: "C++", level: "comfortable" },
    { name: "React", level: "learning" },
  ];

  return (
    <section
      id="skills"
      className={`scroll-mt-20 section-fade py-16 ${
        theme === "dark"
          ? "bg-transparent"
          : "bg-linear-to-b from-emerald-50/70 to-cyan-50/50"
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className="brand-font text-3xl font-bold mb-6">Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`card-elevated rounded-2xl border p-4 ${
                theme === "dark"
                  ? "border-slate-700 bg-slate-800/70 text-slate-100"
                  : "border-emerald-200 bg-white/95 text-slate-900 shadow-[0_12px_30px_-22px_rgba(16,185,129,0.4)]"
              }`}
            >
              <h3 className="text-lg font-semibold">{skill.name}</h3>
              <p
                className={`mt-2 inline-flex rounded-full px-3 py-1 text-xs font-semibold capitalize ${
                  skill.level === "learning"
                    ? theme === "dark"
                      ? "bg-amber-900/70 text-amber-200"
                      : "bg-amber-100 text-amber-700"
                    : theme === "dark"
                      ? "bg-emerald-900/70 text-emerald-200"
                      : "bg-emerald-100 text-emerald-700"
                }`}
              >
                {skill.level}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
