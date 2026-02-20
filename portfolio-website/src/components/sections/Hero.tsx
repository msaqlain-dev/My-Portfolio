import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, Download, Sparkles } from 'lucide-react';
import { useTypewriter } from '../../hooks/useTypewriter';

const ROLES = [
  'Full Stack Developer',
  'React & Next.js Engineer',
  'Node.js Developer',
  'Flutter Developer',
  'TypeScript Enthusiast',
];

const SOCIAL = [
  { icon: Github,   href: 'https://github.com/msaqlain-dev',                   label: 'GitHub'   },
  { icon: Linkedin, href: 'https://linkedin.com/in/msaqlain',                  label: 'LinkedIn' },
  { icon: Mail,     href: 'mailto:saqlain.dev@gmail.com',                      label: 'Email'    },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};
const itemVariants: Variants = {
  hidden:   { opacity: 0, y: 30 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function Hero() {
  const role = useTypewriter(ROLES);

  const handleScrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden dot-grid"
    >
      {/* ── Background orbs ───────────────────────────────────────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Orb 1 — blue/indigo */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 700,
            height: 700,
            top: '-15%',
            left: '-10%',
            background: 'radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 65%)',
            filter: 'blur(40px)',
          }}
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Orb 2 — purple */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 600,
            height: 600,
            bottom: '-10%',
            right: '-8%',
            background: 'radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 65%)',
            filter: 'blur(50px)',
          }}
          animate={{ x: [0, -35, 0], y: [0, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        />
        {/* Orb 3 — cyan accent */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 400,
            height: 400,
            top: '40%',
            left: '50%',
            background: 'radial-gradient(circle, rgba(34,211,238,0.07) 0%, transparent 65%)',
            filter: 'blur(60px)',
          }}
          animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
        />
      </div>

      {/* ── Content ──────────────────────────────────────────────── */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Label chip */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/8 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wider uppercase mb-8"
        >
          <Sparkles size={12} className="animate-pulse" />
          Available for new opportunities
          <Sparkles size={12} className="animate-pulse" />
        </motion.div>

        {/* Greeting */}
        <motion.p
          variants={itemVariants}
          className="text-slate-400 text-lg sm:text-xl font-light mb-3"
        >
          Hello, World! 👋 I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 leading-none"
        >
          <span className="text-slate-100">Muhammad </span>
          <span className="gradient-text">Saqlain</span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          variants={itemVariants}
          className="h-10 sm:h-12 flex items-center justify-center mb-8"
        >
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-300">
            {role}
            <span className="cursor-blink" />
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-12"
        >
          I build{' '}
          <span className="text-slate-200 font-medium">scalable web applications</span> and{' '}
          <span className="text-slate-200 font-medium">cross-platform mobile apps</span> with
          clean architecture and beautiful UIs. Turning complex problems into elegant solutions.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-base shadow-2xl shadow-indigo-500/25 border border-indigo-400/20 overflow-hidden"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            {/* Shimmer on hover */}
            <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 skew-x-12" />
            <span className="relative">View My Projects</span>
            <motion.span
              className="relative text-lg"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              →
            </motion.span>
          </motion.a>

          <motion.a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-transparent text-slate-200 font-semibold text-base border border-slate-600/50 hover:border-indigo-500/50 hover:text-white hover:bg-indigo-500/5 transition-all duration-300"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            <Download size={18} />
            Download CV
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-4"
        >
          {SOCIAL.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className="w-11 h-11 rounded-2xl bg-[#111120]/60 backdrop-blur-sm border border-[#1e1e35] flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/40 hover:bg-indigo-500/8 transition-all duration-300"
              whileHover={{ scale: 1.12, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </motion.div>

        {/* Stats strip */}
        <motion.div
          variants={itemVariants}
          className="mt-16 flex flex-wrap items-center justify-center gap-8"
        >
          {[
            { value: '3+',  label: 'Years Experience' },
            { value: '15+', label: 'Projects Built'   },
            { value: '10+', label: 'Technologies'      },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl sm:text-3xl font-black gradient-text">{value}</div>
              <div className="text-slate-500 text-xs font-medium mt-0.5">{label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ─────────────────────────────────────── */}
      <motion.button
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors cursor-pointer"
        onClick={handleScrollDown}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
}
