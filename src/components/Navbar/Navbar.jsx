import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

// Must match the mobile menu's framer-motion transition duration below.
const MENU_CLOSE_MS = 250;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTarget = (href) => {
    const id = href.replace("#", "");
    const target = document.getElementById(id);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.pushState(null, "", href);
  };

  const handleNavClick = (href) => (e) => {
    e.preventDefault();

    if (open) {
      // Mobile menu is open: close it first, then wait for its collapse
      // animation to finish before measuring/scrolling — otherwise the
      // target's position is measured against the old (taller) layout.
      setOpen(false);
      window.setTimeout(() => scrollToTarget(href), MENU_CLOSE_MS);
    } else {
      scrollToTarget(href);
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-[9999] transition-all duration-300 ${
        scrolled ? "bg-parchment/90 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-content mx-auto flex items-center justify-between px-6 md:px-10 h-16 md:h-20"
        aria-label="Primary"
      >
        
        <a  href="#home"
          onClick={handleNavClick("#home")}
          className="font-display text-ink text-lg font-semibold tracking-tight"
        >
          Nandan Mali
        </a>

        <ul className="hidden lg:flex items-center gap-9">
          {links.map((link) => (
            <li key={link.href}>
              
              <a  href={link.href}
                onClick={handleNavClick(link.href)}
                className="relative text-sm text-ink/70 hover:text-ink transition-colors group"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 w-0 h-px bg-copper transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" onClick={handleNavClick("#contact")} className="hidden lg:inline-flex btn-primary">
          Let's work together
        </a>

        <button
          type="button"
          className="lg:hidden text-ink text-2xl"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: MENU_CLOSE_MS / 1000 }}
            className="lg:hidden bg-parchment border-t border-line overflow-hidden"
          >
            <ul className="flex flex-col px-2 py-2">
              {links.map((link) => (
                <li key={link.href}>
                  
                  <a  href={link.href}
                    onClick={handleNavClick(link.href)}
                    className="block w-full px-4 py-3.5 text-ink/80 text-base"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="px-6 pb-6 pt-2">
              <a href="#contact" onClick={handleNavClick("#contact")} className="btn-primary w-full">
                Let's work together
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}