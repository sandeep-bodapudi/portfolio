export interface Project {
  title: string;
  description: string;
  impact: string;
  tech: string[];
  github: string;
  demo: string;
  image: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: 'Vyasthra Collections',
    description: 'A complete e-commerce solution for a clothing brand. Features product listings, cart, secure checkout, and a dedicated admin dashboard for inventory management.',
    impact: 'Improved mobile load times significantly and replaced manual spreadsheet commission tracking with a custom system.',
    tech: ['React.js', 'Tailwind CSS', 'JavaScript', 'REST API'],
    github: 'https://github.com/sandeep-bodapudi/ecommerce',
    demo: 'https://vyasthracollections.com',
    image: '/vyasthra.png',
    featured: true
  },
  {
    title: 'Employee Management System',
    description: 'An internal business tool built to streamline employee operations, track performance, and automate commission calculations that were previously done in spreadsheets.',
    impact: 'Saved hours of manual administrative work per week by centralizing data.',
    tech: ['React.js', 'Tailwind CSS', 'Context API'],
    github: 'https://github.com/sandeep-bodapudi/employee-system',
    demo: '',
    image: '/ems.png',
    featured: false
  },
  {
    title: 'Team Task Manager',
    description: 'A full-stack collaborative task management application for teams. Features user authentication, real-time updates, and project tracking dashboards.',
    impact: 'Deployed as a Progressive Web App (PWA) with Railway integration.',
    tech: ['MERN Stack', 'React', 'Node.js', 'MongoDB', 'PWA'],
    github: 'https://github.com/sandeep-bodapudi/TeamTaskManager',
    demo: 'https://teamtaskmanager-production-d5ab.up.railway.app',
    image: '/ttm.png',
    featured: false
  },
  {
    title: 'DailyMark',
    description: 'A minimalist, mobile-first personal finance tracker designed for daily usage. Built to solve a personal need for offline-capable expense tracking.',
    impact: 'Implemented PWA and IndexedDB for complete offline functionality without data loss.',
    tech: ['JavaScript', 'PWA', 'IndexedDB', 'HTML/CSS'],
    github: 'https://github.com/sandeep-bodapudi/DailyMark-Finance-Tracker',
    demo: 'https://dailymark.vercel.app',
    image: '/dailymark.png',
    featured: false
  }
];
