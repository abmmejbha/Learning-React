import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

function IconGitHub(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 0.5C5.4.5 0 5.9 0 12.5c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.2.8-.5v-2c-3.3.7-4-1.6-4-1.6-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.8-1.5 1.7-2.1-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.4 1.2a11.6 11.6 0 0 1 6.2 0c2.4-1.5 3.4-1.2 3.4-1.2.6 1.7.2 3 .1 3.3.8.9 1.2 2 1.2 3.3 0 4.5-2.8 5.4-5.4 5.7.9.8 1.6 2.2 1.6 4.4v6.5c0 .3.2.6.8.5C20.6 22.3 24 17.8 24 12.5 24 5.9 18.6.5 12 .5z" />
    </svg>
  );
}

function IconLinkedIn(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 11-.002 5.002A2.5 2.5 0 014.98 3.5zM3 9h4v12H3zM9 9h3.8v1.6h.1c.5-.9 1.8-1.8 3.6-1.8 3.8 0 4.5 2.5 4.5 5.8V21H19v-5.2c0-1.3 0-3-1.8-3-1.8 0-2.1 1.4-2.1 2.9V21H9V9z" />
    </svg>
  );
}

function IconTwitter(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M23 4.6c-.7.3-1.5.6-2.3.8.8-.5 1.4-1.3 1.7-2.2-.8.5-1.6.8-2.6 1-1.4-1.5-3.8-1.6-5.3-.2-1 .9-1.3 2.2-1 3.4-3.8-.2-7.2-2-9.5-5-.9 1.6-.3 3.6 1.2 4.6-.6 0-1.2-.2-1.6-.5v.1c0 1.9 1.3 3.5 3 3.9-.5.1-1 .1-1.5 0 .4 1.2 1.4 2.2 2.6 2.3-1 .8-2.2 1.2-3.6 1.2h-.7c1.3.9 2.9 1.4 4.6 1.4 5.5 0 8.5-4.6 8.5-8.6v-.4c.6-.4 1.2-.9 1.6-1.5-.6.3-1.3.6-2 .7z" />
    </svg>
  );
}

function UpButton() {
  const { theme } = useTheme();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 220);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      title="Back to top"
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-md transition-transform duration-200 ${
        visible
          ? "scale-100 opacity-100"
          : "scale-75 opacity-0 pointer-events-none"
      } ${theme === "dark" ? "bg-slate-800 text-slate-100" : "bg-white text-slate-900"}`}
    >
      ↑
    </button>
  );
}

function Footer() {
  const { theme } = useTheme();
  const year = new Date().getFullYear();

  const baseBg =
    theme === "dark"
      ? "bg-slate-900/70 border-slate-700 text-slate-200"
      : "bg-slate-50/95 border-slate-200 text-slate-700";
  const brandBg =
    theme === "dark"
      ? "bg-slate-700 text-white"
      : "bg-slate-200 text-slate-800";

  return (
    <>
      <footer
        role="contentinfo"
        className={`border-t py-10 md:py-12 ${baseBg}`}
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div
                className={`w-10 h-10 rounded-full ${brandBg} flex items-center justify-center font-semibold`}
              >
                AB
              </div>
              <div>
                <p className="text-sm">
                  © {year} ABM Mejbha. All rights reserved.
                </p>
                <p className="text-xs text-muted mt-0.5 hidden md:block">
                  Designed & built with React.
                </p>
              </div>
            </div>
          </div>

          <nav
            aria-label="footer navigation"
            className="flex items-center justify-center gap-3 text-sm text-slate-600 dark:text-slate-300"
          >
            <a
              href="#hero"
              className="px-2 py-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800/40 transition"
            >
              Home
            </a>
            <span className="hidden md:inline">•</span>
            <a
              href="#projects"
              className="px-2 py-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800/40 transition"
            >
              Projects
            </a>
            <span className="hidden md:inline">•</span>
            <a
              href="#contact"
              className="px-2 py-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800/40 transition"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center justify-center md:justify-end gap-3">
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/abmmejbha"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-slate-200/20 dark:hover:bg-slate-700/30 transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-400/60"
                aria-label="GitHub"
                title="GitHub"
              >
                <IconGitHub className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-slate-200/20 dark:hover:bg-slate-700/30 transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-400/60"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <IconLinkedIn className="w-5 h-5" />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-slate-200/20 dark:hover:bg-slate-700/30 transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-400/60"
                aria-label="Twitter"
                title="Twitter"
              >
                <IconTwitter className="w-5 h-5" />
              </a>
            </div>

            <a
              href="#top"
              className="text-sm ml-2 hover:text-slate-900 dark:hover:text-slate-100 transition"
              aria-label="Back to top"
              title="Back to top"
            >
              ↑ Top
            </a>
          </div>
        </div>
      </footer>
      <UpButton />
    </>
  );
}

export default Footer;
