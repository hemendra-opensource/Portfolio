import { motion } from "framer-motion";
import { BookOpen, Target, Sparkles, Code, Brain, Database, Cloud } from "lucide-react";

const STRENGTHS = [
  { title: "Full Stack Web Dev", desc: "Building responsive, modern, scalable MERN web applications.", icon: Code, color: "text-accent-orange" },
  { title: "AI & RAG Systems", desc: "Constructing intelligent QA tools utilizing LangChain and Vector DBs.", icon: Brain, color: "text-accent-cyan" },
  { title: "Data Engineering", desc: "Developing efficient ETL pipelines and analytical dashboards.", icon: Database, color: "text-accent-purple" },
  { title: "Cloud Computing", desc: "Designing scalable cloud solutions using AWS and Azure platforms.", icon: Cloud, color: "text-white" }
];

const TIMELINE_DATA = [
  {
    year: "2023",
    title: "B.Tech CSE Journey Begins",
    institution: "Computer Science & Engineering",
    description: "Started B.Tech path. Built basic foundations in programming (C, C++), Object-Oriented Design, and computer hardware."
  },
  {
    year: "Mid 2024",
    title: "MERN Stack Mastery",
    institution: "Self-Paced Web Development",
    description: "Dived deep into modern web development, mastering HTML5, CSS3, JavaScript (ES6+), React.js, Node.js, and MongoDB."
  },
  {
    year: "Late 2024",
    title: "Java DSA & Problem Solving Focus",
    institution: "Coding Profiles Mastery",
    description: "Intensified algorithmic skills in Java, solving 500+ data structure and algorithm challenges on LeetCode and GFG."
  },
  {
    year: "Early 2026",
    title: "First Professional Footsteps",
    institution: "Code-A-Nova & Edunet Foundation",
    description: "Started Frontend Internship at Code-A-Nova (React workflows) and AI & Cloud Internship at Edunet Foundation."
  },
  {
    year: "Mid 2026 - Present",
    title: "AI & Data Science Exploration",
    institution: "CBSOT Internship & Research",
    description: "Joined CBSOT as a Data Science Intern. Building RAG applications with LangChain, vector lookup engines, and processing large datasets."
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 max-w-7xl mx-auto px-6 relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-xs uppercase tracking-widest text-accent-cyan font-bold mb-2">About Me</h2>
        <h3 className="text-3xl md:text-4xl font-extrabold text-white dark:text-white light:text-slate-800 tracking-tight">
          Engineering Intelligent Solutions
        </h3>
        <div className="w-16 h-1 bg-gradient-to-r from-accent-orange to-accent-cyan mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side: Bio & Objective */}
        <div className="lg:col-span-6 flex flex-col gap-6 text-left">
          {/* Card 1: Bio */}
          <div className="glass-panel p-8 rounded-3xl border relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent-orange/5 rounded-full blur-xl -z-10" />
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-accent-orange/15 text-accent-orange border border-accent-orange/20">
                <BookOpen size={20} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white dark:text-white light:text-slate-800 mb-2">Who I Am</h4>
                <p className="text-sm text-text-secondary-dark dark:text-text-secondary-dark light:text-slate-600 leading-relaxed">
                  I am a Computer Science &amp; Engineering student who is highly passionate about the convergence of Full Stack Software Development and Intelligent Data Engineering. My journey is driven by a desire to craft responsive user interfaces, design solid server-side architectures, and build cognitive solutions using Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG).
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Objective */}
          <div className="glass-panel p-8 rounded-3xl border relative overflow-hidden group">
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-accent-cyan/5 rounded-full blur-xl -z-10" />
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/20">
                <Target size={20} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white dark:text-white light:text-slate-800 mb-2">Career Objective</h4>
                <p className="text-sm text-text-secondary-dark dark:text-text-secondary-dark light:text-slate-600 leading-relaxed">
                  To become a highly skilled Software Engineer and AI-driven Data Professional. I aim to join a forward-thinking product engineering team where I can apply my expertise in MERN stack development, API designs, data warehousing, and AI modeling to build high-impact digital products.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Strengths Grid */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-mono tracking-widest uppercase text-accent-purple font-semibold mb-2 flex items-center gap-2">
              <Sparkles size={16} /> CORE FOCUS AREAS
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {STRENGTHS.map((strength, idx) => {
                const Icon = strength.icon;
                return (
                  <div 
                    key={idx} 
                    className="glass-panel p-5 rounded-2xl border text-left flex flex-col gap-2 hover:border-accent-purple/40 transition-colors"
                  >
                    <div className={`${strength.color} w-fit`}>
                      <Icon size={20} />
                    </div>
                    <h5 className="text-base font-bold text-white dark:text-white light:text-slate-800">{strength.title}</h5>
                    <p className="text-[13px] text-text-secondary-dark dark:text-text-secondary-dark light:text-slate-500 leading-relaxed">
                      {strength.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Side: Vertical Timeline */}
        <div className="lg:col-span-6 text-left">
          <h4 className="text-sm font-mono tracking-widest uppercase text-accent-cyan font-semibold mb-8 pl-4 border-l-2 border-accent-cyan">
            LEARNING TIMELINE
          </h4>

          <div className="relative border-l border-white/10 dark:border-white/10 light:border-slate-200 ml-4 pl-8 flex flex-col gap-8">
            {TIMELINE_DATA.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Bullet indicator */}
                <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-[#0d111e] dark:bg-[#0d111e] light:bg-white border-2 border-accent-cyan flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-accent-orange to-accent-purple" />
                </div>

                <div className="glass-panel p-6 rounded-2xl border hover:border-white/20 transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono font-bold bg-accent-cyan/10 text-accent-cyan px-2 py-0.5 rounded border border-accent-cyan/20">
                      {item.year}
                    </span>
                    <span className="text-xs text-text-secondary-dark dark:text-text-secondary-dark light:text-slate-400 font-mono">
                      {item.institution}
                    </span>
                  </div>
                  <h5 className="text-sm font-bold text-white dark:text-white light:text-slate-800 mb-2">
                    {item.title}
                  </h5>
                  <p className="text-xs text-text-secondary-dark dark:text-text-secondary-dark light:text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
