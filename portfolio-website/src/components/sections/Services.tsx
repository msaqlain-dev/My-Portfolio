import { motion } from 'framer-motion';
import {
  Monitor, Server, Smartphone, Layers, Zap, MessageSquare,
} from 'lucide-react';
import { services } from '../../data/services';
import SectionTitle from '../ui/SectionTitle';

const ICON_MAP: Record<string, React.ElementType> = {
  Monitor,
  Server,
  Smartphone,
  Layers,
  Zap,
  MessageSquare,
};

export default function Services() {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* BG glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-600/4 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Services"
          title="What I"
          highlight="Offer"
          description="From concept to production, I provide end-to-end development services tailored to your needs."
        />

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = ICON_MAP[service.iconName] ?? Monitor;

            return (
              <motion.div
                key={service.id}
                className="group relative p-6 rounded-2xl border transition-all duration-500 overflow-hidden cursor-default"
                style={{
                  background: 'rgba(13,13,24,0.8)',
                  borderColor: service.borderColor,
                  boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -5, borderColor: service.iconColor + '50' }}
              >
                {/* Hover gradient fill */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                {/* Glow dot top-right */}
                <div
                  className="absolute top-0 right-0 w-24 h-24 rounded-full blur-[40px] opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"
                  style={{ background: service.iconColor }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 border transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: service.iconBg,
                      borderColor: service.borderColor,
                    }}
                  >
                    <Icon size={22} style={{ color: service.iconColor }} />
                  </div>

                  {/* Title */}
                  <h3 className="text-slate-100 font-bold text-lg mb-2 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2.5 text-sm text-slate-400 group-hover:text-slate-300 transition-colors"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ background: service.iconColor }}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA strip */}
        <motion.div
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border border-indigo-500/15 flex flex-col sm:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ boxShadow: '0 0 60px rgba(99,102,241,0.06)' }}
        >
          <div>
            <h3 className="text-slate-100 font-bold text-xl mb-1">
              Ready to build something great?
            </h3>
            <p className="text-slate-400 text-sm">
              Let's discuss your project and bring your vision to life.
            </p>
          </div>
          <motion.a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-sm border border-indigo-500/20 shadow-lg shadow-indigo-500/20"
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.97 }}
          >
            Start a Conversation
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
