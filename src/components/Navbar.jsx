import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Certifications", id: "certifications" },
  { label: "Profiles", id: "profiles" },
  { label: "Contact", id: "contact" }
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Scroll Progress and Scrollspy logic
  useEffect(() => {
    const handleScroll = () => {
      // 1. Update Scroll Progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // 2. Scrollspy - Detect Active Section
      let currentSection = "home";
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the section top is near the top of the viewport
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = item.id;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Theme Sync on Mount and Changes
  useEffect(() => {
    // Check local storage or prefers-color-scheme
    const savedTheme = localStorage.getItem("theme");
    const preferDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "light") {
      setIsDarkMode(false);
      document.body.classList.add("light");
      document.documentElement.classList.add("light");
    } else {
      setIsDarkMode(true);
      document.body.classList.remove("light");
      document.documentElement.classList.remove("light");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      setIsDarkMode(false);
      document.body.classList.add("light");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      setIsDarkMode(true);
      document.body.classList.remove("light");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
  };

  const handleNavClick = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-40 glass-panel border-b transition-colors duration-500">
      {/* Scroll Progress Bar */}
      <div 
        className="h-[3px] bg-gradient-to-r from-accent-orange via-accent-purple to-accent-cyan transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div 
          onClick={() => handleNavClick("home")}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-accent-orange via-accent-purple to-accent-cyan p-[1.5px] shadow-sm shadow-accent-cyan/10 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#0d111e] rounded-[7px] flex items-center justify-center">
              <span className="text-xs font-bold text-white tracking-wide">HS</span>
            </div>
          </div>
          <span className="text-sm font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-accent-orange to-accent-cyan group-hover:opacity-80 transition-opacity">
            Hemendra Sharma
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-xs font-medium tracking-wider uppercase transition-colors hover:text-accent-cyan relative py-1 ${
                activeSection === item.id 
                  ? "text-accent-cyan" 
                  : "text-text-secondary-dark dark:text-text-secondary-dark light:text-text-secondary-light"
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-accent-orange to-accent-cyan rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Theme and Mobile Menu Controls */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 dark:text-white dark:hover:text-accent-cyan light:text-slate-800 light:hover:text-accent-orange transition-all cursor-pointer"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-text-secondary-dark dark:text-white light:text-slate-800 cursor-pointer"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-[67px] left-0 w-full bg-[#030408]/95 light:bg-slate-50/95 border-b border-white/10 light:border-slate-200 py-6 px-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-5 duration-300">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-left text-sm font-semibold tracking-widest uppercase py-2 border-b border-white/5 light:border-slate-200/50 ${
                activeSection === item.id 
                  ? "text-accent-cyan" 
                  : "text-text-secondary-dark dark:text-text-secondary-dark light:text-text-secondary-light"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
