import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../data/projects';
import ProjectCard from '../project/ProjectCard';
import SectionTitle from '../ui/SectionTitle';

type Filter = 'all' | 'web' | 'mobile';

const FILTERS: { value: Filter; label: string; emoji: string }[] = [
  { value: 'all',    label: 'All Projects', emoji: '⚡' },
  { value: 'web',    label: 'Web',          emoji: '🌐' },
  { value: 'mobile', label: 'Mobile',       emoji: '📱' },
];

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('all');

  const visible = filter === 'all'
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-indigo-600/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/5 blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Portfolio"
          title="Featured"
          highlight="Projects"
          description="A selection of projects that showcase my skills across web and mobile development. Each built with care, scalability, and UX in mind."
        />

        {/* ── Filter tabs ──────────────────────────────────── */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {FILTERS.map(({ value, label, emoji }) => (
            <motion.button
              key={value}
              onClick={() => setFilter(value)}
              className={`relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
                filter === value
                  ? 'text-white'
                  : 'text-slate-400 bg-[#111120] border border-[#1e1e35] hover:text-slate-200 hover:border-indigo-500/30'
              }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {filter === value && (
                <motion.span
                  layoutId="filter-bg"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 border border-indigo-500/30 shadow-lg shadow-indigo-500/20"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative">{emoji}</span>
              <span className="relative">{label}</span>
              <span className={`relative ml-1 px-1.5 py-0.5 rounded-md text-[10px] font-bold ${
                filter === value ? 'bg-white/15 text-white' : 'bg-[#1e1e35] text-slate-500'
              }`}>
                {value === 'all' ? projects.length : projects.filter((p) => p.category === value).length}
              </span>
            </motion.button>
          ))}
        </div>

        {/* ── Project grid ─────────────────────────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {visible.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {visible.length === 0 && (
          <div className="text-center py-24 text-slate-500">
            No projects in this category yet.
          </div>
        )}

        {/* ── GitHub CTA ──────────────────────────────────── */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-slate-500 text-sm mb-4">
            More projects available on GitHub
          </p>
          <motion.a
            href="https://github.com/msaqlain-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#111120] border border-[#1e1e35] text-slate-300 hover:text-white hover:border-indigo-500/30 text-sm font-medium transition-all duration-300"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            View All on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
