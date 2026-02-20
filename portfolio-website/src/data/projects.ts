export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'web' | 'mobile';
  techStack: string[];
  github: string;
  live?: string;
  screenshots: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce solution featuring product management, dynamic cart, Stripe checkout, and a powerful admin dashboard with real-time analytics.',
    category: 'web',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'JWT'],
    github: 'https://github.com/msaqlain-dev',
    live: 'https://example.com',
    screenshots: [
      '/images/ecommerce/screen1.png',
      '/images/ecommerce/screen2.png',
      '/images/ecommerce/screen3.png',
    ],
    featured: true,
  },
  {
    id: 'task-manager',
    title: 'Task Management App',
    description:
      'A collaborative project management tool with Kanban boards, drag-and-drop tasks, real-time team updates, and productivity analytics.',
    category: 'web',
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    github: 'https://github.com/msaqlain-dev',
    live: 'https://example.com',
    screenshots: [
      '/images/taskmanager/screen1.png',
      '/images/taskmanager/screen2.png',
    ],
    featured: true,
  },
  {
    id: 'blog-cms',
    title: 'Headless Blog CMS',
    description:
      'A headless content management system with a rich text editor, media library, SEO tools, role-based access, and a public-facing blog.',
    category: 'web',
    techStack: ['React', 'NestJS', 'MongoDB', 'JWT', 'Cloudinary'],
    github: 'https://github.com/msaqlain-dev',
    screenshots: [
      '/images/blogcms/screen1.png',
      '/images/blogcms/screen2.png',
    ],
  },
  {
    id: 'fitness-tracker',
    title: 'FitTrack — Fitness App',
    description:
      'A cross-platform fitness tracking app with workout logging, progress charts, calorie tracking, and social challenges. Built with Flutter for iOS & Android.',
    category: 'mobile',
    techStack: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'Provider'],
    github: 'https://github.com/msaqlain-dev',
    live: 'https://example.com',
    screenshots: [
      '/images/fitness/screen1.png',
      '/images/fitness/screen2.png',
      '/images/fitness/screen3.png',
    ],
    featured: true,
  },
  {
    id: 'food-delivery',
    title: 'QuickBite — Food Delivery',
    description:
      'A feature-rich food delivery app with real-time GPS tracking, restaurant discovery, reviews, secure payment integration, and push notifications.',
    category: 'mobile',
    techStack: ['Flutter', 'Dart', 'Node.js', 'MongoDB', 'Google Maps API'],
    github: 'https://github.com/msaqlain-dev',
    screenshots: [
      '/images/fooddelivery/screen1.png',
      '/images/fooddelivery/screen2.png',
      '/images/fooddelivery/screen3.png',
    ],
  },
  {
    id: 'rest-api-boilerplate',
    title: 'REST API Boilerplate',
    description:
      'A production-ready Node.js/Express REST API boilerplate with JWT auth, role-based access, rate limiting, OpenAPI docs, and Docker support.',
    category: 'web',
    techStack: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Docker', 'Swagger'],
    github: 'https://github.com/msaqlain-dev',
    screenshots: [
      '/images/api/screen1.png',
      '/images/api/screen2.png',
    ],
  },
];
