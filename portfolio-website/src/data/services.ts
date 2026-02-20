export interface Service {
  id: string;
  iconName: string;
  title: string;
  description: string;
  features: string[];
  gradient: string;
  borderColor: string;
  iconBg: string;
  iconColor: string;
}

export const services: Service[] = [
  {
    id: 'frontend',
    iconName: 'Monitor',
    title: 'Frontend Development',
    description:
      'Crafting pixel-perfect, blazing-fast web interfaces with React & Next.js. Focused on performance, accessibility, and exceptional user experience.',
    features: [
      'React / Next.js Applications',
      'TypeScript & Modern JS',
      'Responsive & Accessible UI',
      'State Management (Redux)',
    ],
    gradient: 'from-blue-500/10 to-cyan-500/10',
    borderColor: 'rgba(59,130,246,0.2)',
    iconBg: 'rgba(59,130,246,0.12)',
    iconColor: '#60a5fa',
  },
  {
    id: 'backend',
    iconName: 'Server',
    title: 'Backend Development',
    description:
      'Building robust, scalable server-side architectures with Node.js. REST APIs, authentication systems, and database design that powers modern apps.',
    features: [
      'Node.js / Express / NestJS',
      'RESTful API Design',
      'JWT & OAuth Authentication',
      'MongoDB & PostgreSQL',
    ],
    gradient: 'from-emerald-500/10 to-green-500/10',
    borderColor: 'rgba(16,185,129,0.2)',
    iconBg: 'rgba(16,185,129,0.12)',
    iconColor: '#34d399',
  },
  {
    id: 'mobile',
    iconName: 'Smartphone',
    title: 'Mobile Development',
    description:
      'Delivering beautiful, high-performance cross-platform apps with Flutter. One codebase, native experience on both iOS and Android.',
    features: [
      'Flutter (iOS & Android)',
      'Firebase Integration',
      'State Management (Provider / Riverpod)',
      'Play Store & App Store Deployment',
    ],
    gradient: 'from-purple-500/10 to-pink-500/10',
    borderColor: 'rgba(168,85,247,0.2)',
    iconBg: 'rgba(168,85,247,0.12)',
    iconColor: '#c084fc',
  },
  {
    id: 'fullstack',
    iconName: 'Layers',
    title: 'Full Stack Solutions',
    description:
      'End-to-end product development from database schema to deployed UI. I own the entire stack and deliver complete, production-ready solutions.',
    features: [
      'End-to-End Architecture',
      'CI/CD Pipeline Setup',
      'Docker Containerization',
      'Vercel / Netlify Deployment',
    ],
    gradient: 'from-indigo-500/10 to-violet-500/10',
    borderColor: 'rgba(99,102,241,0.2)',
    iconBg: 'rgba(99,102,241,0.12)',
    iconColor: '#818cf8',
  },
  {
    id: 'api',
    iconName: 'Zap',
    title: 'API Integration',
    description:
      'Seamlessly connecting third-party services, payment gateways, maps, and cloud platforms to extend application capabilities.',
    features: [
      'Third-party API Integration',
      'Payment Gateways (Stripe)',
      'Google Maps / Firebase',
      'Webhooks & Event Systems',
    ],
    gradient: 'from-amber-500/10 to-orange-500/10',
    borderColor: 'rgba(245,158,11,0.2)',
    iconBg: 'rgba(245,158,11,0.12)',
    iconColor: '#fbbf24',
  },
  {
    id: 'consulting',
    iconName: 'MessageSquare',
    title: 'Tech Consulting',
    description:
      'Helping teams choose the right tech stack, architect scalable systems, review code, and establish engineering best practices.',
    features: [
      'Architecture Review',
      'Tech Stack Guidance',
      'Code Review & Refactoring',
      'Performance Optimization',
    ],
    gradient: 'from-rose-500/10 to-pink-500/10',
    borderColor: 'rgba(244,63,94,0.2)',
    iconBg: 'rgba(244,63,94,0.12)',
    iconColor: '#fb7185',
  },
];
