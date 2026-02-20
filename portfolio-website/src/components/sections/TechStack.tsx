import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { techCategories } from '../../data/techStack';
import SectionTitle from '../ui/SectionTitle';

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const badgeVariants: Variants = {
  hidden:   { opacity: 0, scale: 0.85, y: 10 },
  visible:  { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  exit:     { opacity: 0, scale: 0.85, y: -10, transition: { duration: 0.2 } },
};

export default function TechStack() {
  const [active, setActive] = useState<string>('all');

  const filtered = active === 'all'
    ? techCategories
    : techCategories.filter((c) => c.id === active);

  return (
    <section id="tech-stack" className="section-padding relative overflow-hidden">
      {/* BG glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-64 bg-purple-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Tech Stack"
          title="Tools I"
          highlight="work with"
          description="A curated set of technologies I use to build modern, performant applications."
        />

        {/* ── Filter tabs ─────────────────────────────────── */}
        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {[
            { id: 'all', label: 'All' },
            ...techCategories.map((c) => ({ id: c.id, label: c.label })),
          ].map(({ id, label }) => (
            <motion.button
              key={id}
              onClick={() => setActive(id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${
                active === id
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25 border border-indigo-400/30'
                  : 'bg-[#111120] text-slate-400 border border-[#1e1e35] hover:text-slate-200 hover:border-indigo-500/30'
              }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {label}
            </motion.button>
          ))}
        </div>

        {/* ── Categories grid ─────────────────────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            {filtered.map((category) => (
              <motion.div
                key={category.id}
                className="p-5 rounded-2xl bg-[#0d0d18] border border-[#1e1e35] hover:border-indigo-500/25 transition-all duration-300 group"
                style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.25)' }}
                whileHover={{ y: -4 }}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-[#1e1e35]">
                  <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${category.gradient} flex items-center justify-center shrink-0 opacity-90`}>
                    <div className="w-3 h-3 rounded-full bg-white/80" />
                  </div>
                  <h3 className={`font-bold text-sm ${category.textColor}`}>
                    {category.label}
                  </h3>
                  <span className="ml-auto text-slate-600 text-xs font-medium">
                    {category.techs.length}
                  </span>
                </div>

                {/* Tech badges */}
                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                >
                  {category.techs.map((tech) => (
                    <motion.span
                      key={tech.name}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-200 hover:scale-105 cursor-default"
                      style={{
                        background: tech.bg,
                        borderColor: `${tech.color}30`,
                        color: tech.color,
                      }}
                      variants={badgeVariants}
                      whileHover={{
                        scale: 1.06,
                        boxShadow: `0 0 14px ${tech.color}30`,
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: tech.color }}
                      />
                      {tech.name}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ── Bottom banner ─────────────────────────────────── */}
        <motion.div
          className="mt-16 p-6 rounded-2xl bg-gradient-to-r from-indigo-500/8 to-purple-500/8 border border-indigo-500/15 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-slate-400 text-sm">
            Always learning ·{' '}
            <span className="text-indigo-400 font-medium">Currently exploring</span>{' '}
            <span className="text-slate-300 font-semibold">AI/LLM integrations, tRPC, and Bun</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
