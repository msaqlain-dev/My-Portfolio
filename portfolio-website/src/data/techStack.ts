export interface Tech {
  name: string;
  color: string;
  bg: string;
}

export interface TechCategory {
  id: string;
  label: string;
  gradient: string;
  textColor: string;
  techs: Tech[];
}

export const techCategories: TechCategory[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    gradient: 'from-blue-500 to-cyan-400',
    textColor: 'text-blue-400',
    techs: [
      { name: 'React.js',      color: '#61DAFB', bg: 'rgba(97,218,251,0.08)' },
      { name: 'Next.js',       color: '#ffffff', bg: 'rgba(255,255,255,0.06)' },
      { name: 'TypeScript',    color: '#3178C6', bg: 'rgba(49,120,198,0.12)' },
      { name: 'Tailwind CSS',  color: '#06B6D4', bg: 'rgba(6,182,212,0.10)' },
      { name: 'Redux',         color: '#764ABC', bg: 'rgba(118,74,188,0.12)' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    gradient: 'from-emerald-500 to-green-400',
    textColor: 'text-emerald-400',
    techs: [
      { name: 'Node.js',      color: '#68A063', bg: 'rgba(104,160,99,0.10)' },
      { name: 'Express.js',   color: '#b0b0b0', bg: 'rgba(176,176,176,0.06)' },
      { name: 'NestJS',       color: '#E0234E', bg: 'rgba(224,35,78,0.10)' },
      { name: 'REST APIs',    color: '#FF6B6B', bg: 'rgba(255,107,107,0.10)' },
      { name: 'JWT Auth',     color: '#F59E0B', bg: 'rgba(245,158,11,0.10)' },
      { name: 'MongoDB',      color: '#47A248', bg: 'rgba(71,162,72,0.10)' },
      { name: 'PostgreSQL',   color: '#336791', bg: 'rgba(51,103,145,0.12)' },
    ],
  },
  {
    id: 'mobile',
    label: 'Mobile',
    gradient: 'from-purple-500 to-pink-500',
    textColor: 'text-purple-400',
    techs: [
      { name: 'Flutter', color: '#54C5F8', bg: 'rgba(84,197,248,0.10)' },
      { name: 'Dart',    color: '#0175C2', bg: 'rgba(1,117,194,0.12)' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & DevOps',
    gradient: 'from-orange-500 to-rose-500',
    textColor: 'text-orange-400',
    techs: [
      { name: 'Git & GitHub', color: '#F05032', bg: 'rgba(240,80,50,0.10)' },
      { name: 'Docker',       color: '#2496ED', bg: 'rgba(36,150,237,0.10)' },
      { name: 'Firebase',     color: '#FFCA28', bg: 'rgba(255,202,40,0.10)' },
      { name: 'Vercel',       color: '#ffffff', bg: 'rgba(255,255,255,0.06)' },
      { name: 'Netlify',      color: '#00AD9F', bg: 'rgba(0,173,159,0.10)' },
      { name: 'CI/CD',        color: '#6366F1', bg: 'rgba(99,102,241,0.12)' },
    ],
  },
];
