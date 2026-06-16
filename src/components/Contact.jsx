import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, FileText, Copy, Check, Send } from 'lucide-react';
const GitHubIcon = ({ size = 16 }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>);
const LinkedinIcon = ({ size = 16 }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>);
import confetti from "canvas-confetti";

const CONTACT_CARDS = [
  {
    label: "Email",
    value: "sharmahemendra005@gmail.com",
    display: "sharmahemendra005@gmail.com",
    icon: Mail,
    color: "#ff6b00",
    link: "mailto:sharmahemendra005@gmail.com",
    copyable: true
  },
  {
    label: "WhatsApp",
    value: "+91 8439871360",
    display: "+91 8439871360",
    icon: MessageCircle,
    color: "#25d366",
    link: "https://wa.me/918439871360",
    copyable: true
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/hemendra-sharma60",
    display: "hemendra-sharma60",
    icon: LinkedinIcon,
    color: "#0a66c2",
    link: "https://www.linkedin.com/in/hemendra-sharma60",
    copyable: false
  },
  {
    label: "Resume",
    value: "https://drive.google.com/file/d/1Ha4ZBmB0yagcRyQ7XXlrvsuNlqdaFY7K/view",
    display: "View & Download",
    icon: FileText,
    color: "#b026ff",
    link: "https://drive.google.com/file/d/1Ha4ZBmB0yagcRyQ7XXlrvsuNlqdaFY7K/view?usp=drivesdk",
    copyable: false
  }
];

function ContactCard({ card }) {
  const [copied, setCopied] = useState(false);
  const Icon = card.icon;

  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(card.value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      className="glass-panel rounded-2xl border p-5 flex items-center gap-4 group transition-all duration-300 hover:-translate-y-1"
      style={{ borderColor: `${card.color}20` }}
    >
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 border"
        style={{ backgroundColor: `${card.color}15`, borderColor: `${card.color}30` }}
      >
        <Icon size={18} style={{ color: card.color }} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs font-mono text-text-secondary-dark mb-0.5">{card.label}</p>
        <a
          href={card.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-white dark:text-white light:text-slate-800 hover:underline truncate block"
        >
          {card.display}
        </a>
      </div>
      {card.copyable && (
        <button
          onClick={handleCopy}
          className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 cursor-pointer transition-all flex-shrink-0"
          title="Copy to Clipboard"
        >
          {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} className="text-text-secondary-dark" />}
        </button>
      )}
    </div>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission delay
    await new Promise((r) => setTimeout(r, 1800));

    setIsSubmitting(false);
    setSubmitted(true);

    // Celebration confetti
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#ff6b00", "#00f0ff", "#b026ff", "#ffffff"]
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className="text-xs font-mono text-text-secondary-dark mb-2 block">Your Name</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full glass-panel border rounded-xl px-4 py-3 text-sm text-white dark:text-white light:text-slate-800 placeholder:text-text-secondary-dark/40 focus:outline-none focus:border-accent-cyan/50 transition-colors bg-transparent"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="text-xs font-mono text-text-secondary-dark mb-2 block">Email Address</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="w-full glass-panel border rounded-xl px-4 py-3 text-sm text-white dark:text-white light:text-slate-800 placeholder:text-text-secondary-dark/40 focus:outline-none focus:border-accent-cyan/50 transition-colors bg-transparent"
          />
        </div>
      </div>
      <div>
        <label htmlFor="contact-subject" className="text-xs font-mono text-text-secondary-dark mb-2 block">Subject</label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          required
          value={formData.subject}
          onChange={handleChange}
          placeholder="Project Collaboration / Internship Opportunity"
          className="w-full glass-panel border rounded-xl px-4 py-3 text-sm text-white dark:text-white light:text-slate-800 placeholder:text-text-secondary-dark/40 focus:outline-none focus:border-accent-cyan/50 transition-colors bg-transparent"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="text-xs font-mono text-text-secondary-dark mb-2 block">Message</label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me about your project, opportunity, or just say hello!"
          className="w-full glass-panel border rounded-xl px-4 py-3 text-sm text-white dark:text-white light:text-slate-800 placeholder:text-text-secondary-dark/40 focus:outline-none focus:border-accent-cyan/50 transition-colors resize-none bg-transparent"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting || submitted}
        className="w-full py-3.5 rounded-xl font-semibold text-sm text-white cursor-pointer flex items-center justify-center gap-2 transition-all disabled:opacity-70"
        style={{
          background: submitted
            ? "linear-gradient(135deg, #059669, #10b981)"
            : "linear-gradient(135deg, #ff6b00, #b026ff)",
          boxShadow: "0 4px 20px rgba(176, 38, 255, 0.25)"
        }}
      >
        {isSubmitting ? (
          <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
        ) : submitted ? (
          <><Check size={16} /> Message Sent Successfully!</>
        ) : (
          <><Send size={16} /> Send Message</>
        )}
      </button>
    </form>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-20 max-w-7xl mx-auto px-6 relative">
      <div className="absolute w-[400px] h-[400px] rounded-full bg-accent-orange/6 blur-[130px] top-10 left-10 -z-10" />

      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-xs uppercase tracking-widest text-accent-cyan font-bold mb-2">Get In Touch</h2>
        <h3 className="text-3xl md:text-4xl font-extrabold text-white dark:text-white light:text-slate-800 tracking-tight">
          Let's Work Together
        </h3>
        <div className="w-16 h-1 bg-gradient-to-r from-accent-orange to-accent-cyan mx-auto mt-4 rounded-full" />
        <p className="mt-4 text-sm text-text-secondary-dark max-w-lg mx-auto">
          Whether you have a project idea, an internship opportunity, or just want to say hello — I'm always open to new connections!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left: Contact Info */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="glass-panel rounded-3xl border p-8 mb-2">
            <h4 className="text-sm font-mono tracking-widest uppercase text-accent-purple font-bold mb-6">
              DIRECT CONTACT
            </h4>
            <div className="flex flex-col gap-4">
              {CONTACT_CARDS.map((card, idx) => (
                <ContactCard key={idx} card={card} />
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="glass-panel rounded-3xl border p-6">
            <h4 className="text-xs font-mono tracking-widest uppercase text-text-secondary-dark mb-4">
              FIND ME ON
            </h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/hemendra-opensource"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 rounded-xl glass-panel border flex items-center justify-center gap-2 text-sm font-medium text-text-secondary-dark dark:text-text-secondary-dark light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:border-white/20 transition-all"
              >
                <GitHubIcon size={16} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/hemendra-sharma60"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 rounded-xl glass-panel border flex items-center justify-center gap-2 text-sm font-medium text-[#0a66c2] hover:bg-[#0a66c2]/10 hover:border-[#0a66c2]/40 transition-all"
              >
                <LinkedinIcon size={16} /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 glass-panel rounded-3xl border p-8 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-orange via-accent-purple to-accent-cyan" />
          <h4 className="text-sm font-mono tracking-widest uppercase text-accent-cyan font-bold mb-6">
            SEND A MESSAGE
          </h4>
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}
