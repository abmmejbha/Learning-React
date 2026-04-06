import { useTheme } from "../context/ThemeContext";

function Projects() {
  const { theme } = useTheme();

  const projects = [
    {
      name: "People Search App",
      description:
        "A React app to search people using an external API and show detailed results.",
      tech: ["React", "API"],
      github:
        "https://github.com/abmmejbha/Learning-React/tree/master/06-searchPeople",
    },
    {
      name: "Currency Converter",
      description:
        "A simple converter that fetches exchange rates and converts between currencies.",
      tech: ["React", "JavaScript", "API"],
      github:
        "https://github.com/abmmejbha/Learning-React/tree/master/05-currencyConverter",
    },
    {
      name: "Hospital Management System",
      description:
        "A management project for handling patient records, appointments, and basic workflows.",
      tech: ["C", "File Handling"],
      github:
        "https://github.com/abmmejbha/Practice-Codes-2024/tree/main/C_Practice/projects",
    },
  ];

  return (
    <section
      id="projects"
      className={`scroll-mt-20 section-fade py-16 ${
        theme === "dark"
          ? "bg-transparent"
          : "bg-linear-to-b from-amber-50/70 to-rose-50/40"
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className="brand-font text-3xl font-bold mb-6">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className={`card-elevated rounded-2xl p-5 border ${
                theme === "dark"
                  ? "bg-slate-800/75 border-slate-700 text-slate-100"
                  : "bg-white/95 border-amber-200 text-slate-900 shadow-[0_12px_30px_-22px_rgba(245,158,11,0.42)]"
              }`}
            >
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p
                className={`text-sm mb-4 leading-relaxed ${
                  theme === "dark" ? "text-slate-300" : "text-slate-600"
                }`}
              >
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((item) => (
                  <span
                    key={`${project.name}-${item}`}
                    className={`text-xs px-2 py-1 rounded-full ${
                      theme === "dark"
                        ? "bg-slate-700 text-slate-200"
                        : "bg-amber-50 text-amber-800"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-700"
              >
                View Code
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
