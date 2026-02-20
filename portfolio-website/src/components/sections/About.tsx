import { motion } from 'framer-motion';
import { Code2, Layers, Smartphone, Terminal, ArrowRight, MapPin, Briefcase } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const HIGHLIGHTS = [
  {
    icon: Code2,
    label: 'Frontend',
    value: 'React & Next.js',
    color: 'text-blue-400',
    bg: 'bg-blue-500/8',
    border: 'border-blue-500/20',
  },
  {
    icon: Layers,
    label: 'Backend',
    value: 'Node.js & NestJS',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/8',
    border: 'border-emerald-500/20',
  },
  {
    icon: Smartphone,
    label: 'Mobile',
    value: 'Flutter (iOS & Android)',
    color: 'text-purple-400',
    bg: 'bg-purple-500/8',
    border: 'border-purple-500/20',
  },
  {
    icon: Terminal,
    label: 'DevOps',
    value: 'Docker & CI/CD',
    color: 'text-orange-400',
    bg: 'bg-orange-500/8',
    border: 'border-orange-500/20',
  },
];

const STATS = [
  { value: '3+',  label: 'Years of Experience', suffix: '' },
  { value: '15',  label: 'Projects Delivered',  suffix: '+' },
  { value: '10',  label: 'Technologies Mastered', suffix: '+' },
  { value: '100', label: 'Client Satisfaction',  suffix: '%' },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="About Me"
          title="Passionate about"
          highlight="building things"
          description="A Full Stack Developer who cares deeply about code quality, user experience, and shipping products that make an impact."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* ── Left: Text ──────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Meta info */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#111120] border border-[#1e1e35] text-slate-400 text-xs font-medium">
                <MapPin size={11} className="text-indigo-400" />
                Pakistan 🇵🇰
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#111120] border border-[#1e1e35] text-slate-400 text-xs font-medium">
                <Briefcase size={11} className="text-indigo-400" />
                Open to remote opportunities
              </span>
            </div>

            <div className="space-y-5 text-slate-300 leading-relaxed">
              <p>
                I'm a <span className="text-slate-100 font-semibold">Full Stack Developer</span> with over
                3 years of experience crafting high-quality web and mobile applications. My journey
                started with frontend development and has since evolved to cover the entire stack — from
                database design to deploying production systems.
              </p>
              <p>
                I specialise in building with <span className="text-indigo-400 font-medium">React</span>,{' '}
                <span className="text-indigo-400 font-medium">Next.js</span>, and{' '}
                <span className="text-indigo-400 font-medium">Node.js</span> on the web, and{' '}
                <span className="text-purple-400 font-medium">Flutter</span> for mobile. I take
                pride in writing clean, maintainable code and building systems that scale gracefully.
              </p>
              <p>
                When I'm not coding, I'm exploring new technologies, contributing to open source, or
                levelling up my understanding of system design and software architecture.
              </p>
            </div>

            {/* Expertise bullets */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {HIGHLIGHTS.map(({ icon: Icon, label, value, color, bg, border }) => (
                <motion.div
                  key={label}
                  className={`flex items-center gap-3 p-3 rounded-xl ${bg} border ${border}`}
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                >
                  <div className={`w-8 h-8 rounded-lg ${bg} border ${border} flex items-center justify-center shrink-0`}>
                    <Icon size={16} className={color} />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs">{label}</p>
                    <p className="text-slate-200 text-sm font-semibold">{value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-3">
              <motion.a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-sm shadow-lg shadow-indigo-500/20 border border-indigo-500/20"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
              >
                See My Work
                <ArrowRight size={16} />
              </motion.a>
              <motion.a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-transparent text-slate-300 font-semibold text-sm border border-slate-600/50 hover:border-indigo-500/40 hover:text-white transition-all"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
              >
                Download CV
              </motion.a>
            </div>
          </motion.div>

          {/* ── Right: Stats ────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col gap-6"
          >
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map(({ value, label, suffix }, i) => (
                <motion.div
                  key={label}
                  className="p-6 rounded-2xl bg-[#0d0d18] border border-[#1e1e35] text-center group hover:border-indigo-500/30 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -3 }}
                  style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
                >
                  <div className="text-4xl font-black gradient-text mb-1">
                    {value}{suffix}
                  </div>
                  <div className="text-slate-400 text-sm font-medium">{label}</div>
                </motion.div>
              ))}
            </div>

            {/* Profile card */}
            <motion.div
              className="p-6 rounded-2xl bg-[#0d0d18] border border-[#1e1e35] relative overflow-hidden"
              whileHover={{ borderColor: 'rgba(99,102,241,0.3)' }}
              style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-600/5 blur-[60px] rounded-full" />
              <div className="relative">
                <h4 className="text-slate-100 font-bold text-lg mb-4">What I bring to the table</h4>
                <ul className="space-y-3">
                  {[
                    '🚀  Production-ready, scalable code',
                    '🎨  Eye for design & user experience',
                    '📱  Mobile-first, fully responsive',
                    '⚡  Performance-optimised solutions',
                    '🔒  Security-conscious development',
                    '🤝  Clear communication & collaboration',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-slate-400 text-sm">
                      <span className="mt-0.5 shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
