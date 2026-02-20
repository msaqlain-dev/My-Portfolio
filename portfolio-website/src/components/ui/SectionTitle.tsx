import { motion } from 'framer-motion';

interface SectionTitleProps {
  label: string;
  title: string;
  highlight?: string;
  description?: string;
  centered?: boolean;
}

export default function SectionTitle({
  label,
  title,
  highlight,
  description,
  centered = true,
}: SectionTitleProps) {
  return (
    <motion.div
      className={`mb-16 ${centered ? 'text-center' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Label chip */}
      <div className={`flex items-center gap-2 mb-4 ${centered ? 'justify-center' : ''}`}>
        <div className="h-px w-8 bg-gradient-to-r from-transparent to-indigo-500" />
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-indigo-400">
          {label}
        </span>
        <div className="h-px w-8 bg-gradient-to-l from-transparent to-indigo-500" />
      </div>

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100 leading-tight">
        {title}{' '}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>

      {/* Description */}
      {description && (
        <p className={`mt-4 text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed ${centered ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
