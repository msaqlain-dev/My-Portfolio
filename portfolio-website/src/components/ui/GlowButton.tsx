import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface GlowButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  external?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export default function GlowButton({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  external = false,
  disabled = false,
  type = 'button',
}: GlowButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-indigo-600 to-purple-600 text-white border border-indigo-500/30 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40',
    outline:
      'bg-transparent text-slate-200 border border-slate-600/60 hover:border-indigo-500/60 hover:text-white hover:bg-indigo-500/5',
    ghost:
      'bg-transparent text-slate-400 border border-transparent hover:text-white hover:bg-white/5',
  };

  const baseClasses = `
    relative inline-flex items-center gap-2 font-medium rounded-xl
    transition-all duration-300 cursor-pointer select-none
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${disabled ? 'opacity-50 pointer-events-none' : ''}
    ${className}
  `;

  const content = (
    <motion.span
      className={baseClasses}
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className="inline-flex"
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className="inline-flex">
      {content}
    </button>
  );
}
