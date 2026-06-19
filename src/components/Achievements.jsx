import { motion } from "framer-motion";

const ACHIEVEMENTS = [
  {
    icon: "🏅",
    title: "IBM SkillBuild Certifications",
    desc: "Completed multiple IBM SkillBuild courses covering AI, cloud fundamentals, and enterprise technologies.",
    color: "#0062ff",
    badge: "IBM Certified"
  },
  {
    icon: "⚡",
    title: "30-Hour Hackathon Participant",
    desc: "Competed in an intensive 30-hour hackathon, building and pitching a full-stack solution under pressure.",
    color: "#ff6b00",
    badge: "Hackathon"
  },
  {
    icon: "🌐",
    title: "Active Open-Source Learner",
    desc: "Continuously contributing to open-source learning communities, exploring GitHub repos and documentation.",
    color: "#4db33d",
    badge: "Open Source"
  },
  {
    icon: "🚀",
    title: "AI & Cloud Project Contributor",
    desc: "Built and deployed real-world AI and Cloud Computing projects during academic and internship programs.",
    color: "#00f0ff",
    badge: "AI / Cloud"
<<<<<<< HEAD
  },
  {
    icon: "🎯",
    title: "Assessment participation conducted by EISystems Technologies",
    desc: "I was placed among the top 21% of the 7,500 students who registered for the test..",
    color: "#9D00FF",
    badge: "AI / Cloud"
=======
>>>>>>> e3474c2e21ea9ed59e935952fdf9c708aa27cee3
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-xs uppercase tracking-widest text-accent-cyan font-bold mb-2">Recognition</h2>
        <h3 className="text-3xl md:text-4xl font-extrabold text-white dark:text-white light:text-slate-800 tracking-tight">
          Achievements & Milestones
        </h3>
        <div className="w-16 h-1 bg-gradient-to-r from-accent-orange to-accent-cyan mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {ACHIEVEMENTS.map((a, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="glass-panel rounded-3xl border p-8 relative overflow-hidden group cursor-default"
            style={{ borderColor: `${a.color}20` }}
          >
            {/* Background glow */}
            <div
              className="absolute -top-12 -right-12 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10"
              style={{ backgroundColor: a.color }}
            />

            <div className="flex items-start gap-5">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 border"
                style={{ backgroundColor: `${a.color}15`, borderColor: `${a.color}30` }}
              >
                {a.icon}
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h4 className="text-base font-bold text-white dark:text-white light:text-slate-800">{a.title}</h4>
                  <span
                    className="text-[10px] font-mono font-bold px-2 py-0.5 rounded border uppercase tracking-wider"
                    style={{ color: a.color, borderColor: `${a.color}40`, backgroundColor: `${a.color}10` }}
                  >
                    {a.badge}
                  </span>
                </div>
                <p className="text-sm text-text-secondary-dark dark:text-text-secondary-dark light:text-slate-500 leading-relaxed">
                  {a.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
