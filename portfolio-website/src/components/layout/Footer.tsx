import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code2, Heart } from 'lucide-react';

const NAV_LINKS = [
  { label: 'About',    href: '#about'     },
  { label: 'Skills',   href: '#tech-stack' },
  { label: 'Projects', href: '#projects'   },
  { label: 'Services', href: '#services'   },
  { label: 'Contact',  href: '#contact'    },
];

const SOCIAL_LINKS = [
  { icon: Github,   href: 'https://github.com/msaqlain-dev',                    label: 'GitHub'   },
  { icon: Linkedin, href: 'https://linkedin.com/in/msaqlain',                   label: 'LinkedIn' },
  { icon: Mail,     href: 'mailto:saqlain.dev@gmail.com',                       label: 'Email'    },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#07070e] border-t border-[#1e1e35]/60 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-indigo-600/8 blur-[80px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <Code2 size={16} className="text-white" />
              </div>
              <span className="font-bold text-slate-100 text-lg">
                M<span className="gradient-text">.</span>Saqlain
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Full Stack Developer crafting modern web & mobile experiences that are fast, scalable, and beautifully designed.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-[#111120] border border-[#1e1e35] flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/40 hover:bg-indigo-500/10 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-slate-200 font-semibold text-sm mb-4">Navigation</h4>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-slate-400 hover:text-indigo-400 text-sm transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-slate-200 font-semibold text-sm mb-4">Get In Touch</h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:saqlain.dev@gmail.com"
                className="text-slate-400 hover:text-indigo-400 text-sm transition-colors duration-200"
              >
                saqlain.dev@gmail.com
              </a>
              <a
                href="https://github.com/msaqlain-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-indigo-400 text-sm transition-colors duration-200"
              >
                github.com/msaqlain-dev
              </a>
              <span className="text-slate-400 text-sm">Based in Pakistan 🇵🇰</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1e1e35]/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs flex items-center gap-1">
            © {new Date().getFullYear()} Muhammad Saqlain. Built with{' '}
            <Heart size={12} className="text-rose-500 fill-rose-500 mx-0.5" /> and lots of ☕
          </p>
          <p className="text-slate-600 text-xs">
            React · Vite · Tailwind CSS · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
