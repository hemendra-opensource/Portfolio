import { motion } from "framer-motion";
import { ExternalLink, Shield, Award } from "lucide-react";

const CERTS = [
  {
    title: "Google Cloud Technical Series",
    issuer: "Google Cloud",
    category: "Cloud",
    color: "#4285f4",
    link: "https://drive.google.com/file/d/1MzJinA9f4RROwWc622y3Ta7NjAd_TYuD/view?usp=drivesdk",
    icon: "☁️"
  },
  {
    title: "Generative AI",
    issuer: "Physics Wallah",
    category: "AI & ML",
    color: "#b026ff",
    link: "https://drive.google.com/file/d/1Ytd-M547E4xfnUcNxGjTdSSZD5VCPRrB/view?usp=drivesdk",
    icon: "🤖"
  },
  {
    title: "AI Foundation Associate",
    issuer: "Oracle University",
    category: "AI & ML",
    color: "#00f0ff",
    link: "https://drive.google.com/file/d/1g6UGcgpcmTY45iDC9CTyju9gTkDHsgKt/view?usp=drivesdk",
    icon: "🧠"
  },
  {
    title: "Introduction to C",
    issuer: "Udemy",
    category: "Programming",
    color: "#ff6b00",
    link: "https://drive.google.com/file/d/1H69e8EIl1-7VKXbpsUBpWNu-6u4bb0id/view?usp=drivesdk",
    icon: "💻"
  },
  {
    title: "AWS Solution Architect",
    issuer: "Amazon Web Services",
    category: "Cloud",
    color: "#ff9900",
    link: "https://drive.google.com/file/d/1WAK-3yERM-xHMZ-3NhM1Xidfc-8OQC7Q/view?usp=drivesdk",
    icon: "☁️"
  },
  {
    title: "GENERATIVE AI workshop",
    issuer: "EISystems Technologies in association with Cognizance IIT Roorkee",
    category: "AI & ML",
    color: "#FF007F",
    link: "https://drive.google.com/file/d/1DJHF1q0hSRERdmsoCxSDwHv545q3_Ggw/view?usp=drivesdk",
    icon: "֎🇦🇮"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 max-w-7xl mx-auto px-6 relative">
      <div className="absolute w-[350px] h-[350px] rounded-full bg-accent-cyan/6 blur-[120px] top-10 right-10 -z-10" />

      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-xs uppercase tracking-widest text-accent-cyan font-bold mb-2">Credentials</h2>
        <h3 className="text-3xl md:text-4xl font-extrabold text-white dark:text-white light:text-slate-800 tracking-tight">
          Certifications
        </h3>
        <div className="w-16 h-1 bg-gradient-to-r from-accent-orange to-accent-cyan mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {CERTS.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="glass-panel rounded-3xl border p-7 relative overflow-hidden group glass-card-hover cursor-default"
          >
            {/* Glow on hover */}
            <div
              className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 rounded-3xl"
              style={{ background: `radial-gradient(circle at top left, ${cert.color}15, transparent 70%)` }}
            />

            {/* Top Row */}
            <div className="flex items-start justify-between mb-6">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl border"
                style={{ backgroundColor: `${cert.color}15`, borderColor: `${cert.color}30` }}
              >
                {cert.icon}
              </div>
              <span
                className="text-[10px] font-mono font-bold px-2 py-1 rounded border uppercase tracking-wider"
                style={{ color: cert.color, borderColor: `${cert.color}40`, backgroundColor: `${cert.color}10` }}
              >
                {cert.category}
              </span>
            </div>

            {/* Cert Details */}
            <h4 className="text-base font-bold text-white dark:text-white light:text-slate-800 mb-1 leading-snug">
              {cert.title}
            </h4>
            <p className="text-xs font-mono text-text-secondary-dark dark:text-text-secondary-dark light:text-slate-500 mb-6">
              {cert.issuer}
            </p>

            {/* Divider */}
            <div className="border-t border-white/5 dark:border-white/5 light:border-slate-200 pt-5 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs text-emerald-500 font-semibold">
                <Shield size={12} /> Verified
              </div>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-semibold transition-all hover:underline"
                style={{ color: cert.color }}
              >
                <ExternalLink size={12} /> View Certificate
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
