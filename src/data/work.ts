export interface Work {
  title: string;
  context: string;
  description: string;
  impact?: string;
  note?: string;
  tech: string[];
  github?: string;
  demo?: string;
  image?: string;
}

export const work: Work[] = [
  {
    title: 'Radha CRM',
    context: 'Radha Real Home Properties · 2026',
    description: 'A custom CRM for a real estate company that manages every employee, the full lead flow and day-to-day operations in one system. I now run it as the company\'s technology lead and train the team to use it daily.',
    note: 'Private client system. Code and details available on request.',
    tech: [],
  },
  {
    title: 'FinOps',
    context: 'Onebridge Infotech · 2026',
    description: 'A financial management application that works across multiple languages. Built from scratch during my Gen AI developer internship.',
    note: 'Internal company product.',
    tech: [],
  },
  {
    title: 'Business Data Scraper',
    context: 'Onebridge Infotech · 2026',
    description: 'An internal tool that gathers business data from maps using free tools only, with no paid APIs.',
    note: 'Internal company tool.',
    tech: [],
  },
  {
    title: 'Onebridge Grid',
    context: 'Onebridge Infotech · 2026',
    description: 'A prototype for a social media platform aimed at business professionals.',
    note: 'Prototype for an internal company product.',
    tech: [],
  },
  {
    title: 'Vyasthra Collections',
    context: 'Client project · 2025–26',
    description: 'A complete e-commerce solution for a clothing brand. Features product listings, cart, secure checkout, and a dedicated admin dashboard for inventory management.',
    impact: 'Improved mobile load times significantly and replaced manual spreadsheet commission tracking with a custom system.',
    tech: ['React.js', 'Tailwind CSS', 'JavaScript', 'REST API'],
    github: 'https://github.com/sandeep-bodapudi/ecommerce',
    demo: 'https://vyasthracollections.com',
    image: '/vyasthra.png',
  },
  {
    title: 'Employee Management System',
    context: 'Vyasthra Collections · internal tool',
    description: 'An internal business tool built to streamline employee operations, track performance, and automate commission calculations that were previously done in spreadsheets.',
    impact: 'Saved hours of manual administrative work per week by centralizing data.',
    tech: ['React.js', 'Tailwind CSS', 'Context API'],
    github: 'https://github.com/sandeep-bodapudi/employee-system',
    image: '/ems.png',
  },
  {
    title: 'Team Task Manager',
    context: 'Full-stack project',
    description: 'A full-stack collaborative task management application for teams. Features user authentication, real-time updates, and project tracking dashboards.',
    impact: 'Deployed as a Progressive Web App (PWA) with Railway integration.',
    tech: ['MERN Stack', 'React', 'Node.js', 'MongoDB', 'PWA'],
    github: 'https://github.com/sandeep-bodapudi/TeamTaskManager',
    demo: 'https://teamtaskmanager-production-d5ab.up.railway.app',
    image: '/ttm.png',
  },
  {
    title: 'DailyMark',
    context: 'Personal project',
    description: 'A minimalist, mobile-first personal finance tracker designed for daily usage. Built to solve a personal need for offline-capable expense tracking.',
    impact: 'Implemented PWA and IndexedDB for complete offline functionality without data loss.',
    tech: ['JavaScript', 'PWA', 'IndexedDB', 'HTML/CSS'],
    github: 'https://github.com/sandeep-bodapudi/DailyMark-Finance-Tracker',
    demo: 'https://dailymark.vercel.app',
    image: '/dailymark.png',
  },
];
