import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, TrendingUp } from "lucide-react";

const COURSES = [
  "Data Structures & Algorithms",
  "Database Management Systems",
  "Computer Networks",
  "Operating Systems",
  "Software Engineering",
  "Object-Oriented Programming",
  "Machine Learning Fundamentals",
  "Cloud Computing Basics"
];

function AnimatedCounter({ target, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const inViewRef = useRef(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !inViewRef.current) {
        inViewRef.current = true;
        let start = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(parseFloat(start.toFixed(1)));
          }
        }, 16);
      }
    }, { threshold: 0.3 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref} className="font-bold text-white dark:text-white light:text-slate-800">
      {count}{suffix}
    </span>
  );
}

export default function Education() {
  return (
    <section id="education" className="py-20 max-w-7xl mx-auto px-6 relative">
      <div className="absolute w-[350px] h-[350px] rounded-full bg-accent-purple/6 blur-[130px] bottom-10 right-10 -z-10" />

      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-xs uppercase tracking-widest text-accent-cyan font-bold mb-2">Academic Background</h2>
        <h3 className="text-3xl md:text-4xl font-extrabold text-white dark:text-white light:text-slate-800 tracking-tight">
          Education
        </h3>
        <div className="w-16 h-1 bg-gradient-to-r from-accent-orange to-accent-cyan mx-auto mt-4 rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass-panel rounded-3xl border border-accent-purple/20 p-8 md:p-12 relative overflow-hidden"
      >
        {/* Decorative gradient */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-orange via-accent-purple to-accent-cyan" />
        <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-accent-purple/5 blur-3xl -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Degree Info */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-accent-purple/15 text-accent-purple border border-accent-purple/20">
                <GraduationCap size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white dark:text-white light:text-slate-800 leading-snug">
                  Bachelor of Technology
                </h4>
                <p className="text-base font-semibold text-accent-cyan">Computer Science & Engineering</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="glass-panel px-5 py-4 rounded-2xl border flex flex-col text-center min-w-[120px]">
                <span className="text-xs font-mono text-text-secondary-dark mb-1">Duration</span>
                <span className="text-base font-bold text-white dark:text-white light:text-slate-800">2023 – 2027</span>
              </div>
              <div className="glass-panel px-5 py-4 rounded-2xl border flex flex-col text-center min-w-[120px]">
                <span className="text-xs font-mono text-text-secondary-dark mb-1">Semester</span>
                <span className="text-base font-bold text-white dark:text-white light:text-slate-800">7th (Current)</span>
              </div>
              <div className="glass-panel px-5 py-4 rounded-2xl border flex flex-col text-center min-w-[120px]">
                <span className="text-xs font-mono text-text-secondary-dark mb-1">CGPA</span>
                <span className="text-base">
                  <AnimatedCounter target={7.5} suffix="/10" />
                </span>
              </div>
            </div>

            <div className="glass-panel p-5 rounded-2xl border flex items-center gap-4">
              <TrendingUp size={18} className="text-accent-orange flex-shrink-0" />
              <p className="text-sm text-text-secondary-dark leading-relaxed">
                Maintaining a consistent academic performance while simultaneously completing internships, building impactful projects, and earning industry certifications across AI, Cloud, and Full Stack domains.
              </p>
            </div>
<br />
            <div className="glass-panel p-5 rounded-2xl border flex items-center gap-4">
              <TrendingUp size={18} className="text-accent-blue flex-shrink-0" />
              <p className="text-sm text-text-secondary-dark leading-relaxed">
                Developed a strong foundation in Computer Science through coursework in Data Structures & Algorithms, Database Management Systems, Operating Systems, Computer Networks, and Software Engineering, while continuously applying theoretical concepts to real-world projects.
              </p>
            </div>
          </div>


          {/* Right: Coursework */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen size={16} className="text-accent-cyan" />
              <h5 className="text-sm font-mono tracking-widest uppercase text-accent-cyan font-bold">
                Relevant Coursework
              </h5>
            </div>
            <div className="flex flex-col gap-3">
              {COURSES.map((course, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.06 }}
                  className="flex items-center gap-3 glass-panel py-3 px-4 rounded-xl border hover:border-accent-purple/30 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-accent-orange to-accent-purple flex-shrink-0" />
                  <span className="text-sm text-text-secondary-dark dark:text-text-secondary-dark light:text-slate-600">{course}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
