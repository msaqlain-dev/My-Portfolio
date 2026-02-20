import { motion } from 'framer-motion';
import { Github, ExternalLink, Globe } from 'lucide-react';
import DeviceMockup from './DeviceMockup';
import ScreenshotSlider from './ScreenshotSlider';
import type { Project } from '../../data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { title, description, category, techStack, github, live, screenshots, featured } = project;

  return (
    <motion.article
      className="group relative flex flex-col rounded-2xl overflow-hidden border border-[#1e1e35] bg-[#0d0d18] hover:border-indigo-500/30 transition-all duration-500"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -4 }}
      style={{
        boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
      }}
    >
      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: 'inset 0 0 0 1px rgba(99,102,241,0.2), 0 0 40px rgba(99,102,241,0.08)' }}
      />

      {/* Featured badge */}
      {featured && (
        <div className="absolute top-3 left-3 z-30 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-gradient-to-r from-indigo-500/80 to-purple-500/80 backdrop-blur-sm border border-indigo-400/20 text-white">
          ✦ Featured
        </div>
      )}

      {/* ── Device mockup area ─────────────────────────────── */}
      <div className={`relative bg-gradient-to-b from-[#0a0a14] to-[#0d0d1a] ${
        category === 'mobile' ? 'py-8 px-8 flex justify-center' : 'p-6'
      }`}>
        {/* Subtle radial glow behind mockup */}
        <div className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            background: category === 'mobile'
              ? 'radial-gradient(ellipse at center, rgba(168,85,247,0.15) 0%, transparent 65%)'
              : 'radial-gradient(ellipse at center, rgba(99,102,241,0.12) 0%, transparent 65%)',
          }}
        />
        <div className={`relative z-10 ${category === 'mobile' ? '' : 'w-full'}`}>
          <DeviceMockup type={category === 'mobile' ? 'mobile' : 'desktop'}>
            <ScreenshotSlider
              screenshots={screenshots}
              title={title}
              category={category}
            />
          </DeviceMockup>
        </div>
      </div>

      {/* ── Project info ───────────────────────────────────── */}
      <div className="flex flex-col flex-1 p-6">
        {/* Category tag */}
        <span className={`inline-flex w-fit items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold mb-3 ${
          category === 'mobile'
            ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
            : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
        }`}>
          {category === 'mobile' ? '📱' : '🌐'}
          {category === 'mobile' ? 'Mobile App' : 'Web App'}
        </span>

        <h3 className="text-slate-100 font-bold text-xl mb-2 group-hover:text-white transition-colors">
          {title}
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg bg-[#111120] border border-[#1e1e35] text-slate-400 text-xs font-medium hover:text-slate-200 hover:border-indigo-500/30 transition-all duration-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-4 border-t border-[#1e1e35]">
          <motion.a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#111120] border border-[#1e1e35] text-slate-300 hover:text-white hover:border-slate-500 text-sm font-medium transition-all duration-200"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Github size={15} />
            Source
          </motion.a>

          {live && (
            <motion.a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600/80 to-purple-600/80 border border-indigo-500/30 text-white text-sm font-medium hover:from-indigo-500/90 hover:to-purple-500/90 transition-all duration-200 shadow-lg shadow-indigo-500/10"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Globe size={15} />
              Live Demo
              <ExternalLink size={11} className="opacity-70" />
            </motion.a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
