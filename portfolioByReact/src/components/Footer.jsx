import { useTheme } from "../context/ThemeContext";

function Footer() {
  const { theme } = useTheme();
  const year = new Date().getFullYear();

  return (
    <footer
      className={`border-t py-8 ${
        theme === "dark"
          ? "bg-slate-900/70 border-slate-700 text-slate-200"
          : "bg-slate-50/95 border-slate-200 text-slate-700"
      }`}
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <p className="text-sm">© {year} ABM Mejbha. All rights reserved.</p>

        <div className="flex items-center gap-4 text-sm">
          <a href="#hero" className="hover:text-teal-600 transition">
            Home
          </a>
          <a href="#projects" className="hover:text-teal-600 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-teal-600 transition">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
