// ─── Portfolio Data ────────────────────────────────────────────────────────────
import { FaGlobe, FaShoppingCart, FaPlane, FaCog, FaLaptopCode, FaBolt, FaDatabase, FaPalette, FaTools, FaBrain, FaTrophy, FaRocket } from 'react-icons/fa';


export const PERSONAL = {
  name: 'Tekulapally Sai Rohan Reddy',
  shortName: 'Rohan Reddy',
  role: 'Full-Stack MERN Developer',
  college: "St. Martin's Engineering College, Telangana",
  graduation: 'B.Tech CS · Expected 2026',
  cgpa: '7.43',
  email: 'smecrohanreddy5p6@gmail.com',
  phone: '+91-7671856610',
  linkedin: 'https://www.linkedin.com/in/rohan-reddy-b775392b4/',
  github: 'https://github.com/Rohanreddy-dev-106',
  summary:
    "Full-Stack MERN Developer with hands-on experience building scalable backend systems, secure REST APIs, and performance-optimized web applications. I enjoy turning complex problems into clean, maintainable code — and I'm currently expanding into AI Engineering.",
  about: [
    "I'm a Computer Science graduate at St. Martin's Engineering College passionate about backend architecture and API design. My work focuses on building systems that are fast, secure, and production-ready.",
    "I've shipped projects spanning anonymous social platforms, e-commerce backends, flight booking systems, and even a custom Git-like version control tool — all engineered for real-world performance.",
    "Beyond MERN, I actively participate in hackathons, building AI-powered prototypes under time pressure. I'm now deepening my expertise in Machine Learning, Deep Learning, and NLP to grow into AI Engineering.",
  ],
  learning: 'Currently learning — AI Engineering: Machine Learning · Deep Learning · NLP',
}

export const STATS = [
  { num: '4+',   label: 'Full-Stack Projects' },
  { num: '3+',    label: 'Certifications' },
  { num: '2',    label: 'Hackathons' },
  { num: '7.43', label: 'B.Tech CGPA' },
]

export const PROJECTS = [
  {
    id: 1,
    name: 'WisperHub',
    emoji: <FaGlobe />,
    desc: 'Scalable anonymous social media REST API supporting posts, likes, comments, and a follow system — built with enterprise-grade auth and moderation tools.',
    bullets: [
      'MongoDB multi-document transactions ensuring 100% data consistency during follow/ban operations',
      'IP-based ban system with automated cron cleanup, reducing moderation overhead by 70%',
      'Rate limiting (100 req/hr/client) reducing brute-force & spam attacks by ~40%',
      'Swagger UI docs cutting API onboarding and testing time by 50%',
    ],
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Swagger UI', 'Cron Jobs', 'Rate Limiting'],
    github: 'https://github.com/Rohanreddy-dev-106',
    live: '#',
    highlight: '100% data consistency',
  },
  {
    id: 2,
    name: 'StoreFleet',
    emoji: <FaShoppingCart />,
    desc: 'Production-ready e-commerce backend covering product catalog, cart management, orders, and payment workflows with role-based security.',
    bullets: [
      'OTP-based registration + JWT access/refresh tokens, reducing unauthorized access by 60%',
      'Advanced filtering by category, price range, rating, and keyword — 45% faster product discovery',
      'Role-based access control (Admin/User) securing all critical endpoints',
    ],
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'OTP Auth', 'REST API'],
    github: 'https://github.com/Rohanreddy-dev-106',
    live: '#',
    highlight: '60% auth improvement',
  },
  {
    id: 3,
    name: 'Skyo',
    emoji: <FaPlane />,
    desc: 'Real-time flight booking backend with atomic seat availability tracking that prevents overbooking entirely through transactional guarantees.',
    bullets: [
      'Multi-filter flight search reducing avg API response time by 35%',
      'MVC + Repository pattern with centralized error handling for maintainability',
      'OTP email verification via Nodemailer, increasing successful verifications by 50%',
    ],
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'MVC', 'Nodemailer'],
    github: 'https://github.com/Rohanreddy-dev-106',
    live: '#',
    highlight: 'Zero overbooking',
  },
  {
    id: 4,
    name: 'Mingit',
    emoji: <FaCog />,
    desc: 'Git-inspired custom version control system built from scratch — SHA-1 content-addressable storage, cryptographic commit graphs, and Myers diff algorithm.',
    bullets: [
      'SHA-1 hashing for content-addressable storage, reducing duplicate data by 90%',
      'Cryptographic parent-hash commit graph enabling full history traversal',
      'Myers diff algorithm with color-coded terminal output for developer readability',
    ],
    tags: ['Node.js', 'SHA-1', 'File System', 'Crypto', 'Diff Algorithm'],
    github: 'https://github.com/Rohanreddy-dev-106',
    live: null,
    highlight: '90% deduplication',
  },
]

export const SKILLS = [
  {
    group: 'Languages',
    icon: <FaLaptopCode />,
    items: ['JavaScript (ES6+)', 'Java', 'Python', 'C'],
  },
  {
    group: 'Backend',
    icon: <FaBolt />,
    items: ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'OTP Authentication'],
  },
  {
    group: 'Database',
    icon: <FaDatabase />,
    items: ['MongoDB', 'Mongoose', 'Redis'],
  },
  {
    group: 'Frontend',
    icon: <FaPalette />,
    items: ['React', 'HTML5', 'CSS3', 'Bootstrap 5'],
  },
  {
    group: 'Tools & DevOps',
    icon: <FaTools />,
    items: ['Git', 'GitHub', 'Postman', 'Swagger UI', 'VS Code', 'Linux', 'Render'],
  },
  {
    group: 'Learning 🤖',
    icon: <FaBrain />,
    items: ['Machine Learning', 'Deep Learning', 'NLP', 'AI Engineering', 'GenAI'],
  },
]

export const CERTIFICATIONS = [
  {
    id: 1,
    icon: <FaBolt />,
    title: 'Advanced Backend Development with Node.js',
    issuer: 'Coding Ninjas',
    type: 'certification',
  },
  {
    id: 2,
    icon: <FaGlobe />,
    title: 'Frontend Web Development',
    issuer: 'Coding Ninjas',
    type: 'certification',
  },
  {
    id: 3,
    icon: <FaLaptopCode />,
    title: 'Java with Data Structures & Algorithms',
    issuer: 'Coding Ninjas',
    type: 'certification',
  },
]

export const ACHIEVEMENTS = [
  {
    id: 1,
    icon: <FaTrophy />,
    title: '6-Hour AI Hackathon — CMR College',
    desc: 'Built AI-Guru, an AI-powered diet and exercise advisor using GenAI and automation workflows.',
    type: 'hackathon',
  },
  {
    id: 2,
    icon: <FaRocket />,
    title: '24-Hour Hackathon — Mallareddy College',
    desc: 'Built AgriGo, a MERN-based crop guidance platform integrated with the Google Gemini API.',
    type: 'hackathon',
  },
]

export const NAV_LINKS = [
  { label: 'About',    href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Credentials', href: '#certifications' },
  { label: 'Contact',  href: '#contact' },
]
