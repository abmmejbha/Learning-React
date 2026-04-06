import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

function Navbar() {

  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 border-b px-4 py-3 backdrop-blur ${
        theme === "dark"
          ? "bg-slate-900/80 border-slate-700 text-slate-100"
          : "bg-white/80 border-slate-200 text-slate-800"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between gap-4">
        <h1 className="brand-font text-xl md:text-2xl font-bold tracking-tight">
          ABM Mejbha
        </h1>

        <button
          className={`md:hidden px-3 py-2 rounded-lg text-sm font-semibold ${
            theme === "dark"
              ? "bg-teal-600 text-white hover:bg-teal-500"
              : "bg-teal-600 text-white hover:bg-teal-700"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          Menu
        </button>

        {isOpen && (
          <div
            className={`absolute top-full left-0 right-0 mx-2 mt-2 rounded-2xl border p-4 shadow-lg md:hidden ${
              theme === "dark"
                ? "bg-slate-900 border-slate-700"
                : "bg-white border-slate-200"
            }`}
          >
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-md px-3 py-2 font-medium transition ${
                    theme === "dark" ? "hover:bg-slate-800" : "hover:bg-teal-50"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}

        <div className="hidden md:flex items-center gap-6 text-sm font-semibold">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative transition-all duration-300 ease-out after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:duration-300 after:transition-all hover:after:w-full ${
                theme === "dark"
                  ? "text-slate-100 after:bg-teal-400"
                  : "text-slate-700 after:bg-teal-600"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          onClick={toggleTheme}
          className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
            theme === "dark"
              ? "bg-amber-400 text-slate-900 hover:bg-amber-300"
              : "bg-slate-800 text-slate-100 hover:bg-slate-700"
          }`}
        >
          Toggle Theme
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
