import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Code2 } from "lucide-react";

const GitHubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

import attendanceImg from "../assets/project_attendance.png";
import edupathImg from "../assets/project_edupath.png";
import ragImg from "../assets/project_rag.png";
import iicImg from "../assets/project_iic.png";

const PROJECTS = [
  {
    id: 1,
    title: "CR Attendance System",
    subtitle: "Smart Attendance Management Platform",
    description: "A smart attendance management platform designed to simplify attendance tracking and record maintenance for colleges. Features role-based authentication, real-time analytics, batch management, and automated report generation.",
    image: attendanceImg,
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    tagColors: ["#61dafb", "#3c873a", "#ffffff", "#4db33d"],
    github: "https://github.com/hemendra-opensource",
    highlights: ["Role-Based Access Control", "Real-Time Analytics Dashboard", "Automated Attendance Reports", "Batch & Subject Management"]
  },
  {
    id: 2,
    title: "EduPath AI",
    subtitle: "AI-Powered Educational Guidance Platform",
    description: "An AI-powered educational guidance platform that helps students discover personalized learning paths and career recommendations. Uses intelligent profiling to recommend courses, certifications, and career tracks aligned with student goals.",
    image: edupathImg,
    tags: ["AI", "React.js", "Node.js", "MongoDB"],
    tagColors: ["#b026ff", "#61dafb", "#3c873a", "#4db33d"],
    github: "https://github.com/hemendra-opensource",
    highlights: ["Personalized Learning Paths", "AI Career Counselling", "Course Recommendations", "Progress Tracking"]
  },
  {
    id: 3,
    title: "RAG-Based Question Answering",
    subtitle: "Intelligent Document-Aware QA System",
    description: "An intelligent document-based question answering application using Retrieval-Augmented Generation and LLMs. Users can upload PDFs or documents and receive contextually accurate answers using vector search and LLM response generation.",
    image: ragImg,
    tags: ["Python", "LangChain", "Vector Database", "LLMs"],
    tagColors: ["#4dabcf", "#1c3c3c", "#00f0ff", "#ff6b00"],
    github: "https://github.com/hemendra-opensource",
    highlights: ["Document Ingestion Pipeline", "Vector Search (FAISS/Chroma)", "LLM Answer Generation", "Context-Aware Responses"]
  },
  {
    id: 4,
    title: "IIC-CLUB",
    subtitle: "Innovation & Incubation Club Portal",
    description: "A full-featured Innovation and Incubation Club portal for managing idea submissions, mentorship, event management, and student innovation tracking. Streamlines the entire innovation lifecycle from ideation to prototype tracking.",
    image: iicImg,
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    tagColors: ["#61dafb", "#3c873a", "#ffffff", "#4db33d"],
    github: "https://github.com/hemendra-opensource",
    highlights: ["Idea Submission Portal", "Mentorship Matching", "Event Management", "Innovation Tracking Dashboard"]
  }
];

function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 20 }}
          className="relative max-w-3xl w-full glass-panel rounded-3xl border border-white/10 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header Image */}
          <div className="relative h-52 overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d111e] via-black/40 to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-xl bg-black/50 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 cursor-pointer transition-all"
            >
              <X size={16} />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-8">
            <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
            <p className="text-sm text-accent-cyan font-mono mb-4">{project.subtitle}</p>
            <p className="text-sm text-text-secondary-dark leading-relaxed mb-6">{project.description}</p>

            {/* Key Highlights */}
            <h4 className="text-xs uppercase tracking-widest text-accent-purple font-bold mb-3">Key Features</h4>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {project.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-text-secondary-dark">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan flex-shrink-0" />
                  {h}
                </div>
              ))}
            </div>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-xs font-mono font-semibold border"
                  style={{ color: project.tagColors[i], borderColor: `${project.tagColors[i]}40`, backgroundColor: `${project.tagColors[i]}10` }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-medium text-white hover:bg-white/10 flex items-center justify-center gap-2 transition-all"
              >
                <GitHubIcon size={16} /> View Code
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-accent-orange to-accent-purple text-sm font-medium text-white hover:opacity-90 flex items-center justify-center gap-2 transition-all"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 max-w-7xl mx-auto px-6 relative">
      {/* Background Glow */}
      <div className="absolute w-[400px] h-[400px] rounded-full bg-accent-purple/8 blur-[130px] top-10 right-0 -z-10" />

      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-xs uppercase tracking-widest text-accent-cyan font-bold mb-2">Featured Work</h2>
        <h3 className="text-3xl md:text-4xl font-extrabold text-white dark:text-white light:text-slate-800 tracking-tight">
          Projects & Case Studies
        </h3>
        <div className="w-16 h-1 bg-gradient-to-r from-accent-orange to-accent-cyan mx-auto mt-4 rounded-full" />
        <p className="mt-4 text-sm text-text-secondary-dark">
          Click on any card to view detailed project information
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            onClick={() => setSelectedProject(project)}
            className="glass-panel rounded-3xl border border-white/10 overflow-hidden cursor-pointer group hover:border-accent-cyan/30 hover:-translate-y-2 transition-all duration-300"
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d111e] via-black/30 to-transparent" />

              {/* Hover overlay button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="px-4 py-2 rounded-full bg-accent-cyan/20 backdrop-blur-sm border border-accent-cyan/40 text-accent-cyan text-xs font-semibold flex items-center gap-2">
                  <Code2 size={14} /> View Details
                </div>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold border"
                    style={{ color: project.tagColors[i], borderColor: `${project.tagColors[i]}40`, backgroundColor: `${project.tagColors[i]}10` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h4 className="text-lg font-bold text-white dark:text-white light:text-slate-800 mb-1">{project.title}</h4>
              <p className="text-xs font-mono text-accent-cyan mb-3">{project.subtitle}</p>
              <p className="text-sm text-text-secondary-dark leading-relaxed line-clamp-2">{project.description}</p>

              <div className="flex items-center gap-3 mt-5 pt-5 border-t border-white/5 dark:border-white/5 light:border-slate-200">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1.5 text-xs font-medium text-text-secondary-dark hover:text-white dark:hover:text-white light:hover:text-slate-900 transition-colors"
                >
                  <GitHubIcon size={14} /> GitHub
                </a>
                <div className="ml-auto text-xs text-accent-cyan font-semibold group-hover:underline flex items-center gap-1">
                  View Case Study <ExternalLink size={12} />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
