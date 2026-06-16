import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LOADING_STEPS = [
  "Initializing systems...",
  "Loading Full-Stack modules...",
  "Connecting to Vector Databases...",
  "Running Data Pipelines...",
  "Optimizing AI model parameters...",
  "Ready!"
];

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // Increment progress incrementally
        const increment = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 120);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    // Dynamically change steps based on progress
    const nextStepIndex = Math.min(
      Math.floor((progress / 100) * LOADING_STEPS.length),
      LOADING_STEPS.length - 1
    );
    if (nextStepIndex !== stepIndex) {
      setStepIndex(nextStepIndex);
    }

    if (progress === 100) {
      const timeout = setTimeout(() => {
        setVisible(false);
        setTimeout(() => {
          onComplete();
        }, 600); // Allow exit transition
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [progress, stepIndex, onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-bg-dark font-sans"
        >
          <div className="relative flex flex-col items-center max-w-md w-full px-6">
            {/* Pulsing Grid Background */}
            <div className="absolute inset-0 -z-10 grid-bg opacity-10" />

            {/* Glowing Accent Orbs */}
            <div className="absolute w-64 h-64 rounded-full bg-accent-purple/10 blur-[100px] -top-10 -left-10 animate-pulse-slow" />
            <div className="absolute w-64 h-64 rounded-full bg-accent-cyan/10 blur-[100px] -bottom-10 -right-10 animate-pulse-slow" />

            {/* Logo Icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-accent-orange via-accent-purple to-accent-cyan flex items-center justify-center p-[2px] mb-8 shadow-lg shadow-accent-cyan/10"
            >
              <div className="w-full h-full bg-bg-dark rounded-[14px] flex items-center justify-center">
                <span className="text-xl font-bold tracking-wider text-white">HS</span>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold tracking-tight text-white mb-2"
            >
              HEMENDRA SHARMA
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.3 }}
              className="text-sm tracking-widest text-text-secondary-dark uppercase mb-10"
            >
              Portfolio &amp; AI Systems
            </motion.p>

            {/* Progress Counter */}
            <div className="flex justify-between w-full mb-2 font-mono text-xs text-text-secondary-dark">
              <span className="transition-all duration-300">{LOADING_STEPS[stepIndex]}</span>
              <span className="text-accent-cyan font-bold">{progress}%</span>
            </div>

            {/* Progress Bar Container */}
            <div className="w-full h-[6px] bg-white/5 rounded-full overflow-hidden border border-white/10">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
                className="h-full bg-gradient-to-r from-accent-orange via-accent-purple to-accent-cyan shadow-[0_0_10px_rgba(0,240,255,0.5)]"
              />
            </div>

            {/* Tech Subtitles */}
            <div className="mt-8 flex gap-4 text-[10px] font-mono text-white/30">
              <span>RAG / LLM</span>
              <span>•</span>
              <span>MERN</span>
              <span>•</span>
              <span>DATA PIPELINES</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
