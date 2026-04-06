import { useTheme } from "../context/ThemeContext";

function Contact() {
  const { theme } = useTheme();

  const contacts = [
    {
      label: "Email",
      value: "abmmejbha@gmail.com",
      href: "mailto:abmmejbha@gmail.com",
    },
    {
      label: "GitHub",
      value: "github.com/abmmejbha",
      href: "https://github.com/abmmejbha",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/abm-mejbha-092786202",
      href: "https://www.linkedin.com/in/abm-mejbha-092786202/",
    },
  ];

  return (
    <section
      id="contact"
      className={`scroll-mt-20 section-fade py-16 ${
        theme === "dark"
          ? "bg-transparent"
          : "bg-linear-to-b from-sky-50/70 to-indigo-50/45"
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className="brand-font text-3xl font-bold mb-6">Contact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {contacts.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.label === "Email" ? "_self" : "_blank"}
              rel={item.label === "Email" ? undefined : "noreferrer"}
              className={`card-elevated block rounded-2xl border p-5 ${
                theme === "dark"
                  ? "bg-slate-800/75 border-slate-700 hover:bg-slate-800"
                  : "bg-white/95 border-sky-200 hover:bg-white shadow-[0_12px_30px_-22px_rgba(14,165,233,0.42)]"
              }`}
            >
              <p
                className={`text-xs mb-2 uppercase tracking-wide ${
                  theme === "dark" ? "text-slate-300" : "text-slate-500"
                }`}
              >
                {item.label}
              </p>
              <p className="font-semibold break-all">{item.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
