import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ScreenshotSliderProps {
  screenshots: string[];
  title: string;
  category: 'web' | 'mobile';
  /** Controlled mode — when provided the parent owns the active index */
  controlledIndex?: number;
  onControlledChange?: (index: number, direction: number) => void;
}

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit:  (dir: number) => ({ x: dir < 0 ? '100%' : '-100%', opacity: 0 }),
};

const PLACEHOLDER_GRADIENTS: Record<string, string> = {
  web:    'linear-gradient(135deg, #1e1b4b 0%, #312e81 40%, #1e1b4b 100%)',
  mobile: 'linear-gradient(135deg, #1a0e2e 0%, #3b1960 40%, #1a0e2e 100%)',
};

function Placeholder({ title, category }: { title: string; category: 'web' | 'mobile' }) {
  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center gap-3"
      style={{ background: PLACEHOLDER_GRADIENTS[category] }}
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(99,102,241,0.4) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      />
      <div className="relative z-10 text-center px-4">
        <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
          <span className="text-indigo-400 text-lg">{category === 'mobile' ? '📱' : '🖥️'}</span>
        </div>
        <p className="text-slate-300 font-semibold text-sm leading-tight">{title}</p>
        <p className="text-slate-500 text-xs mt-1">Screenshot coming soon</p>
      </div>
    </div>
  );
}

export default function ScreenshotSlider({
  screenshots,
  title,
  category,
  controlledIndex,
  onControlledChange,
}: ScreenshotSliderProps) {
  const [internalCurrent, setInternalCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [errors, setErrors] = useState<Record<number, boolean>>({});

  const isControlled = controlledIndex !== undefined;
  const current = isControlled ? controlledIndex : internalCurrent;
  const count = screenshots.length;

  const paginate = useCallback((dir: number) => {
    const next = (current + dir + count) % count;
    setDirection(dir);
    if (isControlled) {
      onControlledChange?.(next, dir);
    } else {
      setInternalCurrent(next);
    }
  }, [current, count, isControlled, onControlledChange]);

  const hasError = errors[current];

  return (
    <div className="relative w-full h-full overflow-hidden bg-[#080810]">
      {/* Slides */}
      <AnimatePresence custom={direction} mode="wait" initial={false}>
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
        >
          {hasError ? (
            <Placeholder title={title} category={category} />
          ) : (
            <img
              src={screenshots[current]}
              alt={`${title} screenshot ${current + 1}`}
              className="w-full h-full object-cover object-top"
              onError={() => setErrors((e) => ({ ...e, [current]: true }))}
              draggable={false}
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation — only when more than 1 screenshot */}
      {count > 1 && (
        <>
          {/* Prev */}
          <motion.button
            onClick={() => paginate(-1)}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-white/80 hover:text-white hover:bg-black/70 flex items-center justify-center transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Previous screenshot"
          >
            <ChevronLeft size={14} />
          </motion.button>

          {/* Next */}
          <motion.button
            onClick={() => paginate(1)}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-white/80 hover:text-white hover:bg-black/70 flex items-center justify-center transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Next screenshot"
          >
            <ChevronRight size={14} />
          </motion.button>

          {/* Dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5">
            {Array.from({ length: count }).map((_, i) => (
              <motion.button
                key={i}
                onClick={() => {
                  const dir = i > current ? 1 : -1;
                  setDirection(dir);
                  if (isControlled) { onControlledChange?.(i, dir); }
                  else { setInternalCurrent(i); }
                }}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? 'w-5 h-1.5 bg-white'
                    : 'w-1.5 h-1.5 bg-white/35 hover:bg-white/60'
                }`}
                whileTap={{ scale: 0.85 }}
                aria-label={`Go to screenshot ${i + 1}`}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="absolute top-2 right-2 z-20 px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-sm text-white/60 text-[10px] font-medium">
            {current + 1}/{count}
          </div>
        </>
      )}
    </div>
  );
}
