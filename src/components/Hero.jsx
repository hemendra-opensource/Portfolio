import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FileText, ArrowUpRight, Award, Flame, Cpu, GraduationCap } from "lucide-react";

// Inline brand icons not in lucide-react bundle
const GitHubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

import avatarImg from "../assets/My_Avatar.png";

const TYPING_WORDS = [
  "Full Stack Developer (MERN)",
  "AI & GenAI Enthusiast",
  "Data Engineering Explorer",
  "Java DSA Problem Solver",
  "Cloud Solutions Builder"
];

const STATS = [
  { value: "100+", label: "DSA Problems Solved", icon: Flame, color: "text-accent-orange" },
  { value: "7.5", label: "B.Tech CGPA", icon: GraduationCap, color: "text-accent-purple" },
  { value: "3", label: "Internships Completed", icon: Award, color: "text-accent-cyan" },
  { value: "5+", label: "Projects Built", icon: Cpu, color: "text-white" }
];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect
  useEffect(() => {
    let timer;
    const fullWord = TYPING_WORDS[wordIndex];
    const speed = isDeleting ? 30 : 80;

    if (!isDeleting && currentText === fullWord) {
      // Pause at full word before deleting
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % TYPING_WORDS.length);
    } else {
      timer = setTimeout(() => {
        setCurrentText((prev) =>
          isDeleting ? prev.slice(0, -1) : fullWord.slice(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex]);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden max-w-7xl mx-auto px-6">
      {/* Background glow effects */}
      <div className="absolute w-[350px] h-[350px] rounded-full bg-accent-orange/10 blur-[120px] top-10 left-10 -z-10 animate-pulse-slow" />
      <div className="absolute w-[400px] h-[400px] rounded-full bg-accent-purple/10 blur-[130px] bottom-10 right-10 -z-10 animate-pulse-slow delay-200" />
      <div className="absolute w-[300px] h-[300px] rounded-full bg-accent-cyan/10 blur-[110px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 animate-pulse-slow delay-300" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Typographic Intro */}
        <div className="lg:col-span-7 flex flex-col text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit mb-6 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold tracking-wider uppercase text-emerald-400">Available for Opportunities</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4 leading-tight"
          >
            Hi, I'm <span className="gradient-text-all font-extrabold">Hemendra Sharma</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-10 text-lg md:text-xl font-bold text-accent-cyan mb-8 flex items-center"
          >
            <span className="typing-cursor border-r-2 border-accent-cyan pr-1">{currentText}</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-text-secondary-dark dark:text-text-secondary-dark light:text-text-secondary-light text-base md:text-lg max-w-xl mb-10 leading-relaxed"
          >
            Passionate Computer Science student focused on building scalable web applications using the MERN stack while exploring Data Engineering, Artificial Intelligence, Cloud Computing, and Generative AI technologies. Dedicated to solving real-world problems through technology, innovation, and continuous learning.
          </motion.p>

          {/* Social Icons & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            <button
              onClick={() => handleScrollTo("projects")}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-accent-orange to-accent-purple text-white font-medium text-sm hover:opacity-90 shadow-md shadow-accent-orange/20 cursor-pointer flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              View Projects
              <ArrowUpRight size={16} />
            </button>

            <a
              href="https://drive.google.com/file/d/188rL5ceEIMTEYFbMU-UFFMoD7P2FyO0w/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 dark:text-white dark:hover:bg-white/10 light:text-slate-800 light:border-slate-200 light:hover:bg-slate-100 font-medium text-sm cursor-pointer flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <FileText size={16} />
              Download Resume
            </a>

            <button
              onClick={() => handleScrollTo("contact")}
              className="px-6 py-3 rounded-xl border border-accent-cyan/30 text-accent-cyan hover:bg-accent-cyan/5 font-medium text-sm cursor-pointer flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Social icons row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-6"
          >
            <a
              href="https://github.com/hemendra-opensource"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary-dark hover:text-white dark:hover:text-white light:hover:text-slate-900 transition-colors"
            >
                          <GitHubIcon size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/hemendra-sharma60"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary-dark hover:text-accent-cyan transition-colors"
            >
                          <LinkedinIcon size={20} />
            </a>
            <a
              href="https://leetcode.com/u/hemendra-opensource/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary-dark hover:text-accent-orange text-sm font-semibold tracking-wider transition-colors"
            >
              LeetCode
            </a>
            <a
              href="https://www.geeksforgeeks.org/profile/sharmahem54se"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary-dark hover:text-accent-purple text-sm font-semibold tracking-wider transition-colors"
            >
              GeeksforGeeks
            </a>
          </motion.div>
        </div>

        {/* Profile Card & Avatar */}
        <div className="lg:col-span-5 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-80 h-96 p-[1.5px] rounded-3xl bg-gradient-to-b from-accent-cyan/30 via-accent-purple/20 to-transparent shadow-xl"
          >
            {/* Inner Dashboard Card */}
            <div className="w-full h-full bg-[#0d111e]/90 light:bg-white rounded-[22px] p-6 flex flex-col justify-between overflow-hidden relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent-cyan/5 rounded-full blur-xl -z-10" />
              
              {/* Header style */}
              <div className="flex justify-between items-center text-xs font-mono text-white/30 dark:text-white/30 light:text-slate-400">
                <span>SYSTEM_STATUS</span>
                <span className="text-accent-cyan font-bold animate-pulse">ONLINE</span>
              </div>

              {/* Avatar Frame */}
              <div className="flex justify-center my-6 relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-accent-cyan via-accent-purple to-accent-orange opacity-40 rounded-full blur-xl scale-95 group-hover:scale-105 transition-transform duration-500" />
                <img
                  src={avatarImg}
                  alt="Hemendra Sharma"
                  className="w-44 h-44 rounded-full border border-white/10 dark:border-white/10 light:border-slate-200 object-cover shadow-2xl relative z-10 hover:rotate-3 transition-all duration-300"
                />
              </div>

              {/* Card Footer Details */}
              <div className="text-center">
                <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-800">Hemendra Sharma</h3>
                <p className="text-xs text-text-secondary-dark dark:text-text-secondary-dark light:text-slate-500 font-mono mt-1">
                  CSE B.Tech @ 2023 - 2027
                </p>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-accent-orange/10 text-accent-orange border border-accent-orange/20">
                    Full Stack
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">
                    AI/ML
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-accent-purple/10 text-accent-purple border border-accent-purple/20">
                    Cloud &amp; RAG
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Grid of Stats Counter */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {STATS.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className="glass-panel p-6 rounded-2xl border flex items-center gap-4 hover:scale-[1.03] transition-transform duration-300"
            >
              <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${stat.color}`}>
                <Icon size={20} />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-2xl font-bold text-white dark:text-white light:text-slate-800">{stat.value}</span>
                <span className="text-xs text-text-secondary-dark dark:text-text-secondary-dark light:text-slate-500 mt-0.5">{stat.label}</span>
              </div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}
