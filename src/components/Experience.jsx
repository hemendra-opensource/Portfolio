import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const EXPERIENCES = [
  {
    role: "Data Science Intern",
    company: "CBSOT",
    period: "2025 – Present",
    type: "Current",
    location: "Remote",
    color: "#00f0ff",
    responsibilities: [
      "Performing comprehensive data preprocessing and exploratory data analysis on large-scale datasets",
      "Deriving actionable data-driven insights to support decision-making processes",
      "Building predictive models using supervised and unsupervised Machine Learning algorithms",
      "Developing data visualization dashboards to present complex findings clearly"
    ],
    tech: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Matplotlib"]
  },
  {
    role: "AI & Cloud Intern",
    company: "Edunet Foundation",
    period: "2024",
    type: "Completed",
    location: "Remote",
    color: "#b026ff",
    responsibilities: [
      "Worked on cutting-edge AI and cloud computing projects using industry-grade tools",
      "Built and deployed intelligent solutions leveraging modern AI APIs and frameworks",
      "Explored cloud deployment strategies for scalable application hosting",
      "Collaborated in agile teams and documented technical implementations thoroughly"
    ],
    tech: ["AWS", "Azure", "Machine Learning", "Python", "Cloud Services"]
  },
  {
    role: "Frontend Developer Intern",
    company: "Code-A-Nova",
    period: "2024",
    type: "Completed",
    location: "Remote",
    color: "#ff6b00",
    responsibilities: [
      "Designed and developed highly responsive, pixel-perfect user interfaces with React.js",
      "Implemented modern, reusable React component libraries to improve development efficiency",
      "Optimized web performance metrics (Lighthouse scores) for improved user experience",
      "Collaborated closely with UI/UX designers and backend engineers to ship production features"
    ],
    tech: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 max-w-7xl mx-auto px-6 relative">
      <div className="absolute w-[350px] h-[350px] rounded-full bg-accent-orange/6 blur-[120px] bottom-10 left-0 -z-10" />

      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-xs uppercase tracking-widest text-accent-cyan font-bold mb-2">Work History</h2>
        <h3 className="text-3xl md:text-4xl font-extrabold text-white dark:text-white light:text-slate-800 tracking-tight">
          Professional Experience
        </h3>
        <div className="w-16 h-1 bg-gradient-to-r from-accent-orange to-accent-cyan mx-auto mt-4 rounded-full" />
      </div>

      <div className="relative">
        {/* Vertical timeline line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan/30 via-accent-purple/30 to-transparent -translate-x-1/2" />

        <div className="flex flex-col gap-12">
          {EXPERIENCES.map((exp, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative md:w-[calc(50%-2rem)] ${isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}
              >
                {/* Timeline dot - desktop */}
                <div
                  className="hidden md:flex absolute top-6 w-5 h-5 rounded-full border-2 items-center justify-center bg-[#0d111e] z-10"
                  style={{
                    borderColor: exp.color,
                    [isLeft ? "right" : "left"]: "-2.75rem",
                    boxShadow: `0 0 12px ${exp.color}60`
                  }}
                >
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: exp.color }} />
                </div>

                {/* Card */}
                <div className="glass-panel rounded-3xl border p-8 relative overflow-hidden group hover:border-white/20 transition-all duration-300">
                  <div
                    className="absolute top-0 left-0 w-1 h-full rounded-l-3xl"
                    style={{ background: `linear-gradient(to bottom, ${exp.color}, ${exp.color}00)` }}
                  />
                  <div className="absolute top-0 right-0 w-20 h-20 rounded-full blur-2xl opacity-10 -z-10"
                    style={{ background: exp.color }} />

                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="text-xs font-mono px-2 py-0.5 rounded border"
                          style={{ color: exp.color, borderColor: `${exp.color}40`, backgroundColor: `${exp.color}10` }}
                        >
                          {exp.type}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-white dark:text-white light:text-slate-800">{exp.role}</h4>
                      <p className="text-base font-semibold" style={{ color: exp.color }}>{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1 text-xs text-text-secondary-dark font-mono">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={12} /> {exp.period}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin size={12} /> {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <ul className="flex flex-col gap-2 mb-6">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary-dark dark:text-text-secondary-dark light:text-slate-600">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: exp.color }} />
                        {r}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-white/5 border border-white/10 text-text-secondary-dark dark:text-text-secondary-dark light:text-slate-500"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
