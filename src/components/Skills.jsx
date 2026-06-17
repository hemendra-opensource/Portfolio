import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const CATEGORIES = ["All", "Languages", "Web Dev", "Data Engineering", "Databases", "Cloud", "AI & ML", "Tools"];

const SKILLS = [
  { name: "HTML5", category: "Web Dev", level: 92, color: "#e34f26" },
  { name: "CSS3", category: "Web Dev", level: 88, color: "#264de4" },
  { name: "JavaScript", category: "Web Dev", level: 85, color: "#00f0ff" },
  { name: "React.js", category: "Web Dev", level: 85, color: "#61dafb" },
  { name: "Node.js", category: "Web Dev", level: 80, color: "#3c873a" },
  { name: "Express.js", category: "Web Dev", level: 78, color: "#ffffff" },
  { name: "MongoDB", category: "Web Dev", level: 75, color: "#4db33d" },
  { name: "Java", category: "Languages", level: 80, color: "#00758f" },
  { name: "Python", category: "Languages", level: 78, color: "#150458" },
  { name: "C++", category: "Languages", level: 70, color: "#004482" },
  { name: "MySQL", category: "Databases", level: 80, color: "#00758f" },
  { name: "C", category: "Languages", level: 68, color: "#003b57" },
  { name: "Pandas", category: "Data Engineering", level: 40, color: "#150458" },
  { name: "NumPy", category: "Data Engineering", level: 40, color: "#4dabcf" },
  { name: "ETL Pipelines", category: "Data Engineering", level: 40, color: "#b026ff" },
  { name: "Data Warehousing", category: "Data Engineering", level: 50, color: "#ff6b00" },
 
  { name: "SQLite", category: "Databases", level: 72, color: "#003b57" },
  { name: "Vector Databases", category: "Databases", level: 50, color: "#00f0ff" },
  { name: "AWS", category: "Cloud", level: 68, color: "#ff9900" },
//  { name: "Azure", category: "Cloud", level: 62, color: "#0089d6" },
  { name: "Machine Learning", category: "AI & ML", level: 70, color: "#b026ff" },
  { name: "RAG", category: "AI & ML", level: 72, color: "#00f0ff" },
  { name: "LLMs", category: "AI & ML", level: 70, color: "#ff6b00" },
  { name: "LangChain", category: "AI & ML", level: 68, color: "#1c3c3c" },
  { name: "LangFlow", category: "AI & ML", level: 60, color: "#b026ff" },
  { name: "Git", category: "Tools", level: 85, color: "#f05032" },
  { name: "GitHub", category: "Tools", level: 85, color: "#ffffff" },
  { name: "Docker", category: "Tools", level: 60, color: "#2496ed" },
  { name: "VS Code", category: "Tools", level: 92, color: "#007acc" },
  { name: "Postman", category: "Tools", level: 70, color: "#ff6b00" },
  { name: "Antigravity", category: "Tools", level: 90, color: "#00f0ff" },
];

function SkillBar({ name, level, color, inView }) {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-white dark:text-white light:text-slate-700">{name}</span>
        <span className="text-xs font-mono" style={{ color }}>{level}%</span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : "0%" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}88, ${color})`, boxShadow: `0 0 8px ${color}55` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  const filtered = activeCategory === "All" ? SKILLS : SKILLS.filter(s => s.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setInView(false);
    const t = setTimeout(() => setInView(true), 50);
    return () => clearTimeout(t);
  }, [activeCategory]);

  return (
    <section id="skills" className="py-20 max-w-7xl mx-auto px-6" ref={sectionRef}>
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-xs uppercase tracking-widest text-accent-cyan font-bold mb-2">Tech Arsenal</h2>
        <h3 className="text-3xl md:text-4xl font-extrabold text-white dark:text-white light:text-slate-800 tracking-tight">
          Skills & Technologies
        </h3>
        <div className="w-16 h-1 bg-gradient-to-r from-accent-orange to-accent-cyan mx-auto mt-4 rounded-full" />
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer border ${
              activeCategory === cat
                ? "bg-gradient-to-r from-accent-orange to-accent-purple text-white border-transparent shadow-md shadow-accent-orange/20 scale-105"
                : "glass-panel text-text-secondary-dark dark:text-text-secondary-dark light:text-slate-500 hover:border-accent-cyan/30 hover:text-accent-cyan"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filtered.map((skill, idx) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.04 }}
            className="glass-panel p-5 rounded-2xl border glass-card-hover"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: skill.color, boxShadow: `0 0 8px ${skill.color}` }} />
              <span className="text-[10px] uppercase tracking-widest font-mono text-text-secondary-dark dark:text-text-secondary-dark light:text-slate-400">
                {skill.category}
              </span>
            </div>
            <SkillBar name={skill.name} level={skill.level} color={skill.color} inView={inView} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
