import {
  Figma,
  Github,
  Layout,
  Palette,
  PenTool,
  Server,
  Smartphone,
  Sparkles,
  Terminal,
  Zap,
  Code2,
  Boxes,
  LineChart,
  Layers,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const profile = {
  name: 'Alex Rivera',
  firstName: 'Alex',
  initials: 'AR',
  roles: ['Product Designer', 'Frontend Engineer', 'Design Systems Lead', 'Creative Technologist'],
  location: 'San Francisco, CA',
  email: 'hello@alexrivera.design',
  available: true,
  avatar:
    'https://images.pexels.com/photos/8483811/pexels-photo-8483811.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
  summary:
    'I design and build digital products that people actually want to use. For the past 8 years I have shaped interfaces, design systems, and frontend architectures for startups and global brands.',
  stats: [
    { label: 'Years experience', value: '8+' },
    { label: 'Projects shipped', value: '60+' },
    { label: 'Happy clients', value: '30+' },
    { label: 'Design awards', value: '4' },
  ],
  social: [
    { label: 'GitHub', href: 'https://github.com', icon: Github },
    { label: 'Dribbble', href: 'https://dribbble.com', icon: Sparkles },
    { label: 'Figma', href: 'https://figma.com', icon: Figma },
  ],
};

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  blurb: string;
  skills: { name: string; level: number }[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Design',
    icon: Palette,
    blurb: 'Turning ambiguity into clear, usable, beautiful interfaces.',
    skills: [
      { name: 'UI / UX Design', level: 95 },
      { name: 'Design Systems', level: 92 },
      { name: 'Prototyping', level: 88 },
      { name: 'Motion Design', level: 80 },
    ],
  },
  {
    title: 'Frontend Engineering',
    icon: Code2,
    blurb: 'Building fast, accessible, and resilient interfaces with modern tooling.',
    skills: [
      { name: 'React / Next.js', level: 94 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 96 },
      { name: 'Web Performance', level: 85 },
    ],
  },
  {
    title: 'Creative Tech',
    icon: Zap,
    blurb: 'Where code meets craft — interactions, 3D, and generative work.',
    skills: [
      { name: 'Framer Motion', level: 88 },
      { name: 'Three.js / WebGL', level: 75 },
      { name: 'GSAP', level: 82 },
      { name: 'Generative Art', level: 70 },
    ],
  },
];

export type Project = {
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;
  tags: string[];
  featured?: boolean;
  github: string;
  demo: string;
  problem: string;
  solution: string;
  challenges: string;
  results: string;
  features: string[];
  metrics: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    title: 'Nimbus Analytics',
    category: 'SaaS Dashboard',
    year: '2024',
    description:
      'A real-time analytics platform handling 2M+ events per day. I led the dashboard redesign that lifted daily active usage by 38%.',
    image: 'https://images.pexels.com/photos/12969403/pexels-photo-12969403.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Product Design', 'React', 'Data Viz'],
    featured: true,
    github: 'https://github.com/alexrivera',
    demo: 'https://nimbus.example.com',
    problem:
      'Operations teams were drowning in raw event streams with no way to spot anomalies before they snowballed into incidents.',
    solution:
      'A real-time analytics suite with composable widgets, smart anomaly detection, and one-click shareable reports.',
    challenges: 'Rendering 2M+ daily events at a steady 60fps without ever blocking the main thread.',
    results:
      'Daily active usage rose 38%, and mean time to detect incidents dropped from hours to minutes.',
    features: [
      'Composable drag-and-drop widget grid',
      'Real-time anomaly detection alerts',
      'One-click shareable report snapshots',
      'Dark, calm UI tuned for long sessions',
    ],
    metrics: [
      { label: 'Daily active usage', value: '+38%' },
      { label: 'Events / day', value: '2M+' },
      { label: 'MTTD', value: '-87%' },
    ],
  },
  {
    title: 'Wavelength Commerce',
    category: 'E-commerce',
    year: '2023',
    description:
      'Headless storefront for a lifestyle brand. Checkout flow rebuilt from the ground up — conversion rose 24% in the first quarter.',
    image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['UX', 'Next.js', 'Stripe'],
    featured: true,
    github: 'https://github.com/alexrivera',
    demo: 'https://wavelength.example.com',
    problem: 'A growing lifestyle brand was losing shoppers at a clunky, multi-page checkout.',
    solution:
      'A headless storefront with a single-page checkout, instant search, and personalized recommendations.',
    challenges: 'Keeping the storefront fast under flash-sale traffic spikes of 10x normal load.',
    results: 'Checkout conversion climbed 24% in the first quarter; bounce rate fell 31%.',
    features: [
      'Single-page accelerated checkout',
      'Instant search with live suggestions',
      'Personalized product recommendations',
      'Flash-sale ready headless storefront',
    ],
    metrics: [
      { label: 'Conversion', value: '+24%' },
      { label: 'Bounce rate', value: '-31%' },
      { label: 'Page speed', value: '0.9s' },
    ],
  },
  {
    title: 'Pulse Health',
    category: 'Mobile App',
    year: '2023',
    description:
      'A patient-facing health companion app. Designed the full flow from onboarding through daily check-ins across iOS and Android.',
    image: 'https://images.pexels.com/photos/6406691/pexels-photo-6406691.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Mobile', 'Design System', 'Prototyping'],
    github: 'https://github.com/alexrivera',
    demo: 'https://pulse.example.com',
    problem: 'Patients struggled to keep up with care plans between appointments.',
    solution:
      'A friendly companion app with daily check-ins, reminders, and a clean timeline of progress.',
    challenges: 'Designing an accessible experience for users aged 18 to 80 on both iOS and Android.',
    results: '90% of pilot users completed daily check-ins; medication adherence improved 27%.',
    features: [
      'Guided daily check-in flow',
      'Smart reminders and care-plan timeline',
      'Accessibility-first large-touch UI',
      'Progress streaks and gentle nudges',
    ],
    metrics: [
      { label: 'Check-in rate', value: '90%' },
      { label: 'Adherence', value: '+27%' },
      { label: 'App rating', value: '4.8' },
    ],
  },
  {
    title: 'Atlas Design System',
    category: 'Design System',
    year: '2022',
    description:
      'A unified component library and documentation portal adopted by 40+ engineers across three product teams.',
    image: 'https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Design System', 'Storybook', 'Tokens'],
    github: 'https://github.com/alexrivera',
    demo: 'https://atlas.example.com',
    problem: 'Three product teams were shipping inconsistent UIs and duplicating component work.',
    solution: 'A unified component library, token pipeline, and living documentation portal.',
    challenges: 'Getting buy-in across teams with different stacks and release cadences.',
    results: 'Adopted by 40+ engineers; UI bugs dropped 42% and new screens shipped 2x faster.',
    features: [
      'Token-driven theming pipeline',
      'Living component documentation portal',
      'Automated visual regression testing',
      'Cross-framework adoption guides',
    ],
    metrics: [
      { label: 'Engineers', value: '40+' },
      { label: 'UI bugs', value: '-42%' },
      { label: 'Ship speed', value: '2x' },
    ],
  },
  {
    title: 'Vertex Trading',
    category: 'Fintech',
    year: '2022',
    description:
      'A pro-grade trading interface with customizable workspaces and real-time market visualization for a Series B fintech.',
    image: 'https://images.pexels.com/photos/97080/pexels-photo-97080.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Fintech', 'Data Viz', 'React'],
    github: 'https://github.com/alexrivera',
    demo: 'https://vertex.example.com',
    problem: 'Traders were juggling five disconnected tools to read the markets.',
    solution:
      'A pro-grade trading workspace with customizable layouts and real-time market visualization.',
    challenges: 'Displaying live order-book data with sub-100ms perceived latency.',
    results: 'Onboarded 1,200 power users in the first month; daily session time grew 35%.',
    features: [
      'Drag-to-arrange customizable workspaces',
      'Live order-book visualization',
      'Sub-100ms perceived-latency rendering',
      'Keyboard-first power-user shortcuts',
    ],
    metrics: [
      { label: 'Power users', value: '1.2K' },
      { label: 'Session time', value: '+35%' },
      { label: 'Latency', value: '<100ms' },
    ],
  },
  {
    title: 'Bloom Marketplace',
    category: 'Marketplace',
    year: '2021',
    description:
      'A two-sided marketplace for independent makers. Built the seller onboarding flow and trust-and-safety review tools.',
    image: 'https://images.pexels.com/photos/5632391/pexels-photo-5632391.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Marketplace', 'UX Research', 'Frontend'],
    github: 'https://github.com/alexrivera',
    demo: 'https://bloom.example.com',
    problem: 'Independent makers had no trusted place to reach buyers directly.',
    solution:
      'A two-sided marketplace with guided seller onboarding and trust-and-safety review tools.',
    challenges: 'Balancing seller friction with the safety checks buyers expected.',
    results: '5,000 sellers onboarded in six months; dispute rate held under 0.4%.',
    features: [
      'Guided seller onboarding wizard',
      'Trust-and-safety review dashboard',
      'Buyer protection and escrow flow',
      'Ratings and review moderation tools',
    ],
    metrics: [
      { label: 'Sellers', value: '5K' },
      { label: 'Disputes', value: '<0.4%' },
      { label: 'GMV / mo', value: '$1.2M' },
    ],
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  icon: LucideIcon;
};

export const experiences: Experience[] = [
  {
    role: 'Senior Product Designer',
    company: 'Helix Labs',
    period: '2022 — Present',
    description: 'Leading design for the flagship analytics suite and the in-house design system.',
    highlights: [
      'Shipped Nimbus Analytics 2.0, growing weekly active users 38%',
      'Built Atlas design system adopted across 3 product teams',
      'Mentored 4 designers and established the design review process',
    ],
    icon: LineChart,
  },
  {
    role: 'Frontend Engineer',
    company: 'Northwind Studio',
    period: '2019 — 2022',
    description: 'Built production React apps for client engagements across fintech and commerce.',
    highlights: [
      'Led frontend for 6 client projects from kickoff to launch',
      'Introduced a shared component starter that cut kickoff time by 30%',
      'Championed accessibility audits resulting in 95+ Lighthouse scores',
    ],
    icon: Code2,
  },
  {
    role: 'UI Designer',
    company: 'Brightwave Agency',
    period: '2017 — 2019',
    description: 'Designed marketing sites and product interfaces for early-stage startups.',
    highlights: [
      'Delivered 20+ landing pages with conversion-focused design',
      'Created brand systems for 8 startup clients',
      'Collaborated with engineers to ensure pixel-perfect handoff',
    ],
    icon: Layout,
  },
];

export const services = [
  { title: 'Product Design', icon: PenTool, desc: 'End-to-end product thinking — from research to pixel-perfect UI.' },
  { title: 'Frontend Development', icon: Code2, desc: 'Production-grade React apps that are fast, accessible, and maintainable.' },
  { title: 'Design Systems', icon: Boxes, desc: 'Scalable component libraries and token-driven design infrastructure.' },
  { title: 'Creative Direction', icon: Layers, desc: 'Brand-aligned visual language and motion that makes products feel alive.' },
];

export const tools = [
  { name: 'Figma', icon: Figma },
  { name: 'React', icon: Code2 },
  { name: 'TypeScript', icon: Terminal },
  { name: 'Tailwind', icon: Sparkles },
  { name: 'Next.js', icon: Server },
  { name: 'Framer', icon: Smartphone },
];

export type Achievement = {
  year: string;
  title: string;
  category: string;
  org: string;
};

export const achievements: Achievement[] = [
  { year: '2024', title: 'Site of the Day', category: 'Design Excellence', org: 'Awwwards' },
  { year: '2023', title: 'Best UI Innovation', category: 'Innovation', org: 'CSS Design Awards' },
  { year: '2023', title: 'Framer Showcase', category: 'Motion Design', org: 'Framer' },
  { year: '2022', title: 'Webby Honoree', category: 'Best Portfolio', org: 'The Webby Awards' },
];

export type Research = {
  type: string;
  year: string;
  title: string;
  summary: string;
  meta: string;
  tags: string[];
  href: string;
};

export const research: Research[] = [
  {
    type: 'Case Study',
    year: '2024',
    title: 'Designing for Real-Time Data Density',
    summary: 'How we built a dashboard that makes 2M daily events feel calm instead of chaotic.',
    meta: '12 min read',
    tags: ['Data Viz', 'UX'],
    href: '#',
  },
  {
    type: 'Talk',
    year: '2023',
    title: 'The Component Is the Canvas',
    summary: 'A talk on treating component libraries as a medium for creative expression.',
    meta: 'Config 2023',
    tags: ['Design Systems'],
    href: '#',
  },
  {
    type: 'Article',
    year: '2023',
    title: 'Tokens Beyond Design Systems',
    summary: 'Why design tokens should power documentation, marketing, and code alike.',
    meta: '8 min read',
    tags: ['Design Systems', 'Engineering'],
    href: '#',
  },
  {
    type: 'Research',
    year: '2022',
    title: 'Trust Patterns in Fintech Onboarding',
    summary: 'A field study of what makes new users feel safe during financial onboarding.',
    meta: '15 min read',
    tags: ['Fintech', 'Research'],
    href: '#',
  },
  {
    type: 'Talk',
    year: '2022',
    title: 'Motion as Meaning',
    summary: 'On using animation to communicate state, hierarchy, and causality.',
    meta: 'Awwwards Conf',
    tags: ['Motion'],
    href: '#',
  },
  {
    type: 'Article',
    year: '2021',
    title: 'Performance Is a Design Problem',
    summary: 'Why load times belong in the design brief, not just the engineering backlog.',
    meta: '6 min read',
    tags: ['Performance'],
    href: '#',
  },
];
