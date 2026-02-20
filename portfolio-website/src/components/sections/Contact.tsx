import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const CONTACT_INFO = [
  {
    icon: Mail,
    label: 'Email',
    value: 'saqlain.dev@gmail.com',
    href: 'mailto:saqlain.dev@gmail.com',
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/8',
    border: 'border-indigo-500/20',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/msaqlain-dev',
    href: 'https://github.com/msaqlain-dev',
    color: 'text-slate-400',
    bg: 'bg-slate-500/8',
    border: 'border-slate-500/20',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/msaqlain',
    href: 'https://linkedin.com/in/msaqlain',
    color: 'text-blue-400',
    bg: 'bg-blue-500/8',
    border: 'border-blue-500/20',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Pakistan 🇵🇰 (Remote available)',
    href: null,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/8',
    border: 'border-emerald-500/20',
  },
];

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '', email: '', subject: '', message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus('sending');

    // Replace with your preferred form service (Formspree, EmailJS, etc.)
    // Example: await fetch('https://formspree.io/f/YOUR_ID', { method: 'POST', body: JSON.stringify(form), headers: { 'Content-Type': 'application/json' } })
    await new Promise((res) => setTimeout(res, 1200)); // simulate network

    // For demo, always succeed — wire up real service for production
    setStatus('success');
    setForm({ name: '', email: '', subject: '', message: '' });

    setTimeout(() => setStatus('idle'), 5000);
  };

  const inputClasses =
    'w-full px-4 py-3 rounded-xl bg-[#0a0a14] border border-[#1e1e35] text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all duration-200';

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* BG glows */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-600/6 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/5 blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Contact"
          title="Let's Work"
          highlight="Together"
          description="Have a project in mind or want to collaborate? I'd love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* ── Left: Info ──────────────────────────────── */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div>
              <h3 className="text-slate-100 font-bold text-xl mb-3">
                Open to opportunities
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Whether you have a full project, a quick freelance gig, or just want to say hi —
                my inbox is always open. I'll get back to you as soon as possible.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {CONTACT_INFO.map(({ icon: Icon, label, value, href, color, bg, border }) => (
                <motion.div
                  key={label}
                  className={`flex items-center gap-4 p-4 rounded-xl ${bg} border ${border} group`}
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                >
                  <div className={`w-10 h-10 rounded-xl ${bg} border ${border} flex items-center justify-center shrink-0`}>
                    <Icon size={18} className={color} />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-medium">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className={`${color} text-sm font-medium hover:underline underline-offset-2`}
                      >
                        {value}
                      </a>
                    ) : (
                      <p className={`${color} text-sm font-medium`}>{value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Availability badge */}
            <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-emerald-500/6 border border-emerald-500/20">
              <span className="relative flex w-2.5 h-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-emerald-400 text-sm font-medium">
                Available for new projects
              </span>
            </div>
          </motion.div>

          {/* ── Right: Form ─────────────────────────────── */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div
              className="p-8 rounded-2xl bg-[#0d0d18] border border-[#1e1e35]"
              style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.4)' }}
            >
              {status === 'success' ? (
                <motion.div
                  className="flex flex-col items-center justify-center py-12 text-center gap-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <CheckCircle size={32} className="text-emerald-400" />
                  </div>
                  <h4 className="text-slate-100 font-bold text-xl">Message Sent!</h4>
                  <p className="text-slate-400 text-sm max-w-xs">
                    Thanks for reaching out. I'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
                        Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="John Doe"
                        value={form.name}
                        onChange={handleChange}
                        className={inputClasses}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
                        Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={handleChange}
                        className={inputClasses}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="subject" className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Project Inquiry"
                      value={form.subject}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell me about your project..."
                      value={form.message}
                      onChange={handleChange}
                      className={`${inputClasses} resize-none`}
                    />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 p-3 rounded-xl bg-rose-500/8 border border-rose-500/20 text-rose-400 text-sm">
                      <AlertCircle size={16} />
                      Something went wrong. Please try again or email directly.
                    </div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-base border border-indigo-500/20 shadow-lg shadow-indigo-500/20 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
                    whileHover={status !== 'sending' ? { scale: 1.02, y: -1 } : {}}
                    whileTap={status !== 'sending' ? { scale: 0.98 } : {}}
                  >
                    {status === 'sending' ? (
                      <>
                        <motion.span
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  <p className="text-slate-600 text-xs text-center">
                    Or reach me directly at{' '}
                    <a href="mailto:saqlain.dev@gmail.com" className="text-indigo-400 hover:underline">
                      saqlain.dev@gmail.com
                    </a>
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
