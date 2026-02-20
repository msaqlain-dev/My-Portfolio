import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, Globe, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import DeviceMockup from './DeviceMockup';
import ScreenshotSlider from './ScreenshotSlider';
import type { Project } from '../../data/projects';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

/* ─── Thumbnail ──────────────────────────────────────────────────────────── */
function Thumb({
  src,
  index,
  active,
  category,
  onClick,
}: {
  src: string;
  index: number;
  active: boolean;
  category: 'web' | 'mobile';
  onClick: () => void;
}) {
  const [error, setError] = useState(false);
  const isMobile = category === 'mobile';

  return (
    <motion.button
      onClick={onClick}
      className={`relative shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-200 ${
        active
          ? 'border-indigo-500 shadow-lg shadow-indigo-500/30'
          : 'border-[#1e1e35] hover:border-indigo-500/40'
      }`}
      style={{ width: isMobile ? '36px' : '80px', height: isMobile ? '78px' : '50px' }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Screenshot ${index + 1}`}
    >
      {error ? (
        <div
          className="absolute inset-0"
          style={{
            background:
              category === 'mobile'
                ? 'linear-gradient(135deg, #1a0e2e, #3b1960)'
                : 'linear-gradient(135deg, #1e1b4b, #312e81)',
          }}
        />
      ) : (
        <img
          src={src}
          alt={`Screenshot ${index + 1}`}
          className="w-full h-full object-cover object-top"
          onError={() => setError(true)}
          draggable={false}
        />
      )}
      {/* Active overlay */}
      {active && (
        <div className="absolute inset-0 bg-indigo-500/10 pointer-events-none" />
      )}
    </motion.button>
  );
}

/* ─── Modal ──────────────────────────────────────────────────────────────── */
export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { title, description, category, techStack, github, live, screenshots, featured } = project;

  const [currentIdx, setCurrentIdx] = useState(0);

  const handleIndexChange = useCallback((idx: number, _dir: number) => {
    setCurrentIdx(idx);
  }, []);

  const navigateBy = useCallback((dir: number) => {
    setCurrentIdx((prev) => (prev + dir + screenshots.length) % screenshots.length);
  }, [screenshots.length]);

  /* Lock body scroll */
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  /* ESC to close */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') navigateBy(1);
      if (e.key === 'ArrowLeft')  navigateBy(-1);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose, navigateBy]);

  const isMobile = category === 'mobile';

  return createPortal(
    <AnimatePresence>
      {/* ── Backdrop ─────────────────────────────────────────── */}
      <motion.div
        className="fixed inset-0 z-[300] flex items-center justify-center p-4 sm:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22 }}
        onClick={onClose}
        aria-modal="true"
        role="dialog"
        aria-label={`${title} screenshots`}
      >
        {/* Blur overlay */}
        <div className="absolute inset-0 bg-black/75 backdrop-blur-lg" />

        {/* ── Panel ───────────────────────────────────────────── */}
        <motion.div
          className="relative z-10 w-full max-w-5xl max-h-[92vh] flex flex-col rounded-2xl overflow-hidden border border-[#1e1e35] bg-[#0a0a12]"
          style={{ boxShadow: '0 40px 100px rgba(0,0,0,0.8), 0 0 0 1px rgba(99,102,241,0.08)' }}
          initial={{ opacity: 0, scale: 0.93, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.93, y: 24 }}
          transition={{ duration: 0.32, ease: [0.25, 0.46, 0.45, 0.94] }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* ── Header ─────────────────────────────────────── */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-[#1e1e35] shrink-0">
            {/* Category chip */}
            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold ${
                isMobile
                  ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                  : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
              }`}
            >
              {isMobile ? '📱' : '🌐'}
              {isMobile ? 'Mobile App' : 'Web App'}
            </span>

            <h2 className="text-slate-100 font-bold text-lg leading-tight flex-1">
              {title}
            </h2>

            {featured && (
              <span className="hidden sm:inline-flex px-2.5 py-1 rounded-full text-[10px] font-semibold bg-gradient-to-r from-indigo-500/80 to-purple-500/80 border border-indigo-400/20 text-white">
                ✦ Featured
              </span>
            )}

            {/* Close */}
            <motion.button
              onClick={onClose}
              className="w-8 h-8 rounded-xl bg-[#111120] border border-[#1e1e35] flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 transition-all"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              aria-label="Close modal"
            >
              <X size={15} />
            </motion.button>
          </div>

          {/* ── Body ───────────────────────────────────────── */}
          <div className="flex flex-col lg:flex-row flex-1 min-h-0 overflow-hidden">

            {/* Left: large mockup */}
            <div
              className="relative flex items-center justify-center dot-grid shrink-0 lg:w-[58%] p-8 lg:p-10"
              style={{
                background: 'linear-gradient(160deg, #07070e 0%, #0d0d1a 100%)',
                borderBottom: '1px solid #1e1e35',
              }}
            >
              {/* Radial glow behind mockup */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: isMobile
                    ? 'radial-gradient(ellipse at center, rgba(168,85,247,0.12) 0%, transparent 65%)'
                    : 'radial-gradient(ellipse at center, rgba(99,102,241,0.10) 0%, transparent 65%)',
                }}
              />

              {/* Keyboard arrows hint */}
              {screenshots.length > 1 && (
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/6 text-white/30 text-[10px] font-medium pointer-events-none">
                  <span>←</span>
                  <span>Use arrow keys</span>
                  <span>→</span>
                </div>
              )}

              {/* Prev / Next overlay buttons (desktop) */}
              {screenshots.length > 1 && (
                <>
                  <motion.button
                    onClick={() => navigateBy(-1)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-white/70 hover:text-white hover:bg-black/70 flex items-center justify-center transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Previous screenshot"
                  >
                    <ChevronLeft size={18} />
                  </motion.button>
                  <motion.button
                    onClick={() => navigateBy(1)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-white/70 hover:text-white hover:bg-black/70 flex items-center justify-center transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Next screenshot"
                  >
                    <ChevronRight size={18} />
                  </motion.button>
                </>
              )}

              <div className="relative z-10 w-full">
                <DeviceMockup type={isMobile ? 'mobile' : 'desktop'} large>
                  <ScreenshotSlider
                    screenshots={screenshots}
                    title={title}
                    category={category}
                    controlledIndex={currentIdx}
                    onControlledChange={handleIndexChange}
                  />
                </DeviceMockup>
              </div>
            </div>

            {/* Right: project info */}
            <div className="flex-1 overflow-y-auto lg:border-l border-[#1e1e35]">
              <div className="p-6 flex flex-col gap-6">
                {/* Description */}
                <div>
                  <h3 className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-2">
                    About
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{description}</p>
                </div>

                {/* Tech stack */}
                <div>
                  <h3 className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-3">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg bg-[#111120] border border-[#1e1e35] text-slate-300 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Screenshot counter */}
                {screenshots.length > 1 && (
                  <div>
                    <h3 className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-2">
                      Screenshots
                    </h3>
                    <p className="text-slate-500 text-sm">
                      {currentIdx + 1} of {screenshots.length}
                    </p>
                  </div>
                )}

                {/* Links */}
                <div>
                  <h3 className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-3">
                    Links
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <motion.a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#111120] border border-[#1e1e35] text-slate-300 hover:text-white hover:border-slate-500 text-sm font-medium transition-all"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Github size={15} />
                      Source Code
                    </motion.a>

                    {live && (
                      <motion.a
                        href={live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600/80 to-purple-600/80 border border-indigo-500/30 text-white text-sm font-medium hover:from-indigo-500/90 hover:to-purple-500/90 transition-all shadow-lg shadow-indigo-500/15"
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
              </div>
            </div>
          </div>

          {/* ── Thumbnail strip ─────────────────────────────── */}
          {screenshots.length > 1 && (
            <div className="shrink-0 border-t border-[#1e1e35] bg-[#07070e] px-5 py-3">
              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
                {screenshots.map((src, i) => (
                  <Thumb
                    key={i}
                    src={src}
                    index={i}
                    active={i === currentIdx}
                    category={category}
                    onClick={() => setCurrentIdx(i)}
                  />
                ))}
                {/* Spacer so last thumb isn't cut off */}
                <div className="w-1 shrink-0" />
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body,
  );
}
