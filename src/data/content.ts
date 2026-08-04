import {
  Figma,
  Github,
  Linkedin,
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
  Brain,
  Cpu,
  GraduationCap,
  Briefcase,
  Award,
  BookOpen,
  FileText,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const profile = {
  name: 'Khushbu Dewangan',
  firstName: 'Khushbu',
  initials: 'KD',
  roles: [
    'Software Developer',
    'AI & Machine Learning Specialist',
    'NLP & RAG Engineer',
    'Backend Developer',
  ],
  location: 'Raipur, Chhattisgarh, India',
  email: 'khushbudewangan139@gmail.com',
  phone: '9302474642',
  available: true,
  avatar: '/avatar.jpeg',
  summary:
    'Computer Science graduate (B.Tech CGPA: 8.87/10) with strong expertise in Artificial Intelligence, NLP, and scalable backend systems. Experienced in building real-world AI applications using LLMs, RAG, and TensorFlow Lite, including research automation systems, intelligent chatbots, and real-time gesture recognition.',
  stats: [
    { label: 'B.Tech CGPA', value: '8.87 / 10' },
    { label: 'Projects Built', value: '5+' },
    { label: 'Awards & Hackathons', value: '4+' },
    { label: 'Research Papers', value: '1 Published' },
  ],
  social: [
    { label: 'GitHub', href: 'https://github.com/Khushbu874', icon: Github },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/khushbu-dewangan-a85540310/', icon: Linkedin },
  ],
  education: [
    {
      degree: 'B.Tech in Computer Science & Engineering',
      institution: 'Shri Rawatpura Sarkar University, Raipur (C.G.)',
      score: 'CGPA: 8.87 / 10',
      period: 'Sep 2022 — 2026',
    },
    {
      degree: 'Higher Secondary (12th)',
      institution: 'Sun Rise Model School, Kurud, Dhamtari (C.G.)',
      score: '71.4%',
      period: 'Jun 2021 — May 2022',
    },
    {
      degree: 'High School (10th)',
      institution: 'Sun Rise Model School, Kurud, Dhamtari (C.G.)',
      score: '84.83%',
      period: 'Jun 2019 — May 2020',
    },
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
    title: 'AI & Machine Learning',
    icon: Brain,
    blurb: 'Building LLM pipelines, RAG systems, and on-device computer vision models.',
    skills: [
      { name: 'Machine Learning & NLP', level: 92 },
      { name: 'Large Language Models (LLMs)', level: 90 },
      { name: 'Retrieval-Augmented Gen (RAG)', level: 88 },
      { name: 'PyTorch & TensorFlow Lite', level: 85 },
      { name: 'MediaPipe & Computer Vision', level: 85 },
    ],
  },
  {
    title: 'Backend & System Architecture',
    icon: Server,
    blurb: 'Designing scalable APIs, vector searching, and clean object-oriented architecture.',
    skills: [
      { name: 'Python (FastAPI)', level: 94 },
      { name: 'Java & OOP', level: 88 },
      { name: 'ChromaDB (Vector DB)', level: 86 },
      { name: 'MySQL & Firebase', level: 90 },
      { name: 'REST APIs & Systems Design', level: 92 },
    ],
  },
  {
    title: 'Web & Mobile Engineering',
    icon: Code2,
    blurb: 'Crafting responsive user interfaces and native mobile applications.',
    skills: [
      { name: 'Android SDK (Java, XML)', level: 88 },
      { name: 'HTML5, CSS3 & JavaScript', level: 90 },
      { name: 'Flutter Development', level: 80 },
      { name: 'Git & GitHub Workflows', level: 92 },
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
    title: 'HYPOTH AI',
    category: 'AI Research & RAG System',
    year: '2026',
    description:
      'HYPOTH AI is an LLM-powered RAG research platform that parses academic PDFs and synthesizes interactive knowledge graphs to cut literature review time by over 90%.',
    image: '/hypothai.png',
    tags: ['Python', 'FastAPI', 'LLaMA-3', 'RAG', 'ChromaDB', 'vis.js', 'Firebase'],
    featured: true,
    github: 'https://github.com/Khushbu874/HypothAI',
    demo: 'https://hypothai.onrender.com/',
    problem:
      'Researchers and academics spend days manually reviewing dense literature to discover knowledge gaps and generate valid hypotheses.',
    solution:
      'An end-to-end LLM RAG engine that parses academic papers, builds interactive knowledge graphs, and synthesizes structured research hypotheses.',
    challenges: 'Optimizing high-density PDF parsing and embedding retrieval with zero hallucination for academic citations.',
    results:
      'Cut literature synthesis time by over 90% and deployed live on Render.',
    features: [
      'Live deployed production RAG web platform',
      'LLM-driven RAG pipeline for academic PDF processing',
      'Interactive knowledge graph visualization using vis.js',
      'FastAPI scalable backend with low-latency endpoints',
    ],
    metrics: [
      { label: 'Review Speedup', value: '10x Faster' },
      { label: 'Live Deployment', value: 'Render' },
      { label: 'Architecture', value: 'RAG + Graph' },
    ],
  },
  {
    title: 'OperandOS',
    category: 'Autonomous AI ERP System',
    year: '2026',
    description:
      'OperandOS is an autonomous AI ERP platform using Groq LLaMA 3.3 70B for conversational business onboarding, real-time dynamic schema evolution, and multi-tenant management.',
    image: '/operandos.png',
    tags: ['FastAPI', 'React 19', 'Groq LLaMA-3.3 70B', 'MongoDB', 'TailwindCSS', 'PyJWT'],
    featured: true,
    github: 'https://github.com/Khushbu874/OperandOS',
    demo: 'https://operandos.onrender.com/',
    problem:
      'Traditional ERP software requires rigid schemas and long manual setup processes tailored for complex business structures.',
    solution:
      'An autonomous ERP system conducting AI business interviews using LLaMA 3.3 70B to automatically synthesize, evolve, and manage multi-tenant dynamic schemas.',
    challenges: 'Handling real-time schema evolution and multi-tenant isolation without breaking existing business data records.',
    results:
      'Automated end-to-end business onboarding and dynamic schema generation in real-time.',
    features: [
      'Live deployed autonomous operations & ERP platform',
      'Automated AI Business Interview Agent powered by Groq LLaMA 3.3 70B',
      'Dynamic ERP schema generation and evolution via natural language',
      'Multi-tenant dynamic CRUD record management and analytics',
    ],
    metrics: [
      { label: 'Live Deployment', value: 'Render' },
      { label: 'AI Model', value: 'LLaMA 3.3 70B' },
      { label: 'Backend', value: 'FastAPI + Mongo' },
    ],
  },
  {
    title: 'RM ADS MAKER',
    category: 'Android App & Marketing Creator',
    year: '2026',
    description:
      'RM Ads Maker is a published Android application on Google Play Store for creating professional posters, promotional banners, and customized marketing graphics effortlessly.',
    image: '/rm_ads_maker.png',
    tags: ['Android SDK', 'Java', 'XML', 'Google Play', 'Graphic Design Engine'],
    featured: true,
    github: 'https://github.com/Khushbu874/RMAdsMaker',
    demo: 'https://play.google.com/store/apps/details?id=com.rmads.maker&pli=1',
    problem:
      'Small businesses and content creators often lack simple mobile-first tools to build high-impact poster ads and promotional graphics on the go.',
    solution:
      'A dedicated Android app providing customizable templates, quick text & overlay editing, and instant high-resolution export for marketing campaigns.',
    challenges: 'Optimizing dynamic layout rendering, memory-efficient graphic composition, and responsive canvas controls across diverse Android devices.',
    results:
      'Live published app on Google Play Store providing an accessible mobile platform for instant ad poster creation.',
    features: [
      'Published live application on Google Play Store',
      'Intuitive mobile template editor for poster & ad creation',
      'Rich typography, background styling, stickers, and graphic overlay tools',
      'High-resolution export for social media marketing and printing',
    ],
    metrics: [
      { label: 'Store Status', value: 'Live on Play Store' },
      { label: 'Platform', value: 'Android SDK' },
      { label: 'Primary Use', value: 'Ad & Banner Design' },
    ],
  },
  {
    title: 'SILENT TALK AI',
    category: '3D Avatar & Sign AI Architecture',
    year: '2025',
    description:
      'SILENT TALK AI is a 3-module 3D Sign Language HCI platform: Learn (3D avatar simulations), Convert (Text/Voice to 3D signs via ChromaDB <50ms cache & gpt-4o-mini), and Recognize (Webcam sign-to-voice via MediaPipe & TFLite).',
    image: '/silenttalk_robot.png',
    tags: ['FastAPI', 'Three.js', 'MediaPipe JS', 'TensorFlow Lite', 'ChromaDB', 'OpenAI gpt-4o-mini', 'Gemini NLP', 'Web Speech API'],
    featured: true,
    github: 'https://github.com/Khushbu874/SilentTalk',
    demo: '',
    problem:
      'Communication barriers between sign language users and non-signers due to lack of accessible bidirectional sign recognition, 3D gesture translation, and interactive learning tools.',
    solution:
      'A 3-module system: (1) Learn Page with 3D GLTF avatar simulations, (2) Convert Page with Speech API, ChromaDB vector caching (<50ms HIT), and gpt-4o-mini joint generation, (3) Recognize Page with webcam MediaPipe 3D bone tracking, TFLite offline inference, Gemini NLP sentence synthesis, and Web Speech TTS.',
    challenges: 'Achieving sub-50ms vector similarity cache lookups for 3D bone joint coordinates and running real-time hand-tracking TFLite inference in the browser.',
    results:
      'Achieved ≥95% vector cache match precision, sub-50ms 3D avatar joint rendering, and end-to-end bidirectional sign-to-voice communication.',
    features: [
      'Interactive ISL Learn Page with 3D avatar GLTF bone simulations (Three.js)',
      'Text/Voice to 3D Sign Generation with ChromaDB vector cache (<50ms HIT) & gpt-4o-mini fallback',
      'Webcam Sign-to-Voice Speech via MediaPipe JS 3D bone tracking & TFLite local inference',
      'Gemini / T5 NLP sentence synthesis converting raw gesture keywords into fluent spoken English',
      'Unified Async FastAPI Gateway (Port 5000) managing concurrent sign generation & recognition routers',
    ],
    metrics: [
      { label: 'Cache Lookup', value: '<50ms' },
      { label: 'Cache Precision', value: '≥95%' },
      { label: 'Architecture', value: '3 Modules + FastAPI' },
    ],
  },
  {
    title: 'CAMPUSCARE AI',
    category: 'Android & Smart Campus AI',
    year: '2025',
    description:
      'CAMPUSCARE AI is a smart Android application for campus complaint management, featuring multimodal reporting (photo, voice, text) and automated Groq LLaMA-3 ticket triage.',
    image: '/campuscare.png',
    tags: ['Java', 'Android SDK', 'XML', 'Firebase', 'Groq LLaMA-3 API'],
    featured: true,
    github: 'https://github.com/Khushbu874',
    demo: '',
    problem:
      'Slow, paper-based or unorganized ticket resolution for campus infrastructure issues and student complaints.',
    solution:
      'A mobile app enabling multimodal reporting (text, photo, audio) integrated with Groq LLaMA-3 for automated triage and response.',
    challenges: 'Automating issue urgency scoring and routing complaints instantly to administrative departments.',
    results:
      'Automated over 80% of issue category sorting and drastically reduced incident response turnarounds.',
    features: [
      'Multimodal complaint submission (Photo, Voice, Text)',
      'Automated classification and response via Groq LLaMA-3 API',
      'Real-time status tracking with Firebase Cloud Firestore',
      'Role-based access control for students and administrators',
    ],
    metrics: [
      { label: 'Auto-Classification', value: '80%+' },
      { label: 'Response Time', value: 'Instant' },
      { label: 'Platform', value: 'Android SDK' },
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
    role: 'Software Developer',
    company: 'Trinity Solutions, Raipur (C.G.)',
    period: 'Apr 2026 — Present',
    description: 'Contributing to real-time software projects by developing, testing, and maintaining scalable and efficient solutions.',
    highlights: [
      'Developing production-grade software applications and optimizing backend architecture',
      'Ensuring high code quality through modular testing, refactoring, and peer reviews',
      'Collaborating with cross-functional teams to deliver scalable software solutions',
    ],
    icon: Code2,
  },
  {
    role: 'Software Development Intern',
    company: 'Trinity Solutions, Raipur (C.G.)',
    period: 'Jan 2026 — Mar 2026',
    description: 'Worked on software development, backend module testing, and system enhancements prior to transitioning into full-time Software Developer role.',
    highlights: [
      'Assisted in building and optimizing core backend features and API integrations',
      'Participated in code reviews, bug fixes, and unit test execution for real-world software applications',
      'Collaborated closely with senior developers to adopt production engineering best practices',
    ],
    icon: Code2,
  },
  {
    role: 'President - Developers Club',
    company: 'Shri Rawatpura Sarkar University, Raipur (C.G.)',
    period: 'Jun 2025 — Mar 2026',
    description: 'Led and mentored 40+ members, managed technical projects, and organized tech events.',
    highlights: [
      'Led technical initiatives and mentored over 40+ student developers',
      'Successfully organized and hosted a Google Developer Groups (GDG) event on campus',
      'Won First Prize in Idea Execution (2026) for outstanding project execution and leadership',
    ],
    icon: Briefcase,
  },
  {
    role: 'Artificial Intelligence Intern',
    company: 'Edunet Foundation (IBM SkillsBuild & AICTE)',
    period: 'Aug 2025 — Sep 2025',
    description: 'Gained hands-on experience developing ML models and building data preprocessing pipelines.',
    highlights: [
      'Developed data preprocessing and feature engineering pipelines using real-world datasets',
      'Trained and evaluated machine learning models using IBM SkillsBuild platform',
      'Earned official certification under the AICTE internship program',
    ],
    icon: Sparkles,
  },
  {
    role: 'Python Development Intern',
    company: 'Octanet Services Pvt. Ltd',
    period: 'Jan 2025 — Feb 2025',
    description: 'Strengthened core Python skills, object-oriented programming (OOP), and algorithmic problem solving.',
    highlights: [
      'Designed modular Python scripts using OOP concepts and design patterns',
      'Implemented clean algorithmic solutions for data manipulation tasks',
      'Enhanced software development practices and version control workflows',
    ],
    icon: Terminal,
  },
];

export type Mentorship = {
  title: string;
  organization: string;
  period: string;
  description: string;
  skills: string[];
  icon: LucideIcon;
};

export const mentorships: Mentorship[] = [
  {
    title: 'Girls In Engineering Mentorship & Self Development Program',
    organization: 'ACCENTURE',
    period: 'Aug 2024 – Jan 2025',
    description:
      'Selected for Accenture mentorship, gaining practical exposure to Core Java and OOP concepts through professional guidance.',
    skills: ['Core Java', 'OOP Concepts', 'Professional Guidance', 'Self Development'],
    icon: Award,
  },
  {
    title: 'Minimal Viable Product Mentorship',
    organization: 'HACK4PURPOSE',
    period: 'Aug 2024 – Nov 2024',
    description:
      'Enhanced understanding of MVP development, product planning, and problem solving under expert mentorship.',
    skills: ['MVP Development', 'Product Planning', 'Problem Solving', 'Expert Mentorship'],
    icon: BookOpen,
  },
];

export const services = [
  { title: 'AI & ML Solutions', icon: Brain, desc: 'Custom LLM pipelines, RAG systems, and computer vision models tailored for production.' },
  { title: 'Backend Development', icon: Server, desc: 'High-performance REST APIs built with Python, FastAPI, and robust database architectures.' },
  { title: 'Mobile App Development', icon: Smartphone, desc: 'Native Android applications with smart AI feature integration and responsive UIs.' },
  { title: 'Technical Leadership', icon: Layers, desc: 'Leading developer teams, mentoring talent, and orchestrating tech community events.' },
];

export const tools = [
  { name: 'Python', icon: Terminal },
  { name: 'FastAPI', icon: Server },
  { name: 'Java', icon: Code2 },
  { name: 'PyTorch / TF', icon: Brain },
  { name: 'Android SDK', icon: Smartphone },
  { name: 'Firebase', icon: Sparkles },
];

export type Achievement = {
  year: string;
  title: string;
  category: string;
  org: string;
};

export const achievements: Achievement[] = [
  { year: '2026', title: 'First Prize in Idea Execution', category: 'Innovation & Execution', org: 'Developers Club, Shri Rawatpura Sarkar University Raipur (SRU)' },
  { year: '2025', title: 'Runner-Up & Domain Winner', category: 'Hackathon', org: 'Algostrom 1.0 Hackathon' },
  { year: '2025', title: 'Published Research Paper', category: 'AI & BCI Research', org: 'IJSREM Journal (NeuroNav)' },
  { year: '2025', title: 'Second Prize in Tech Quiz', category: 'Technical Competition', org: 'Dept of CSE, Shri Rawatpura Sarkar University Raipur (SRU)' },
  { year: '2024', title: 'Special Award', category: 'Hackathon Innovation', org: 'Hack4Purpose Hackathon' },
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
    type: 'Journal Publication',
    year: '2025',
    title: 'NeuroNav: Brainwave Controlled Smart Assistant',
    summary:
      'Published research paper proposing a low-cost, brainwave-inspired Human-Computer Interface (HCI). It captures physiological and neuromuscular signals via EMG & pulse sensors, processed through Arduino hardware and machine learning models (Random Forest, SVM, and CNN) for accessible hands-free smart assistant control.',
    meta: 'International Journal of Scientific Research in Engineering and Management (IJSREM) · Vol 09, Issue 11',
    tags: ['BCI / HCI', 'Signal Processing', 'EMG & Pulse AI', 'Random Forest & CNN', 'IJSREM'],
    href: 'https://www.researchgate.net/publication/397458645_NeuroNav_Brainwave_Controlled_Smart_Assistant',
  },
];
