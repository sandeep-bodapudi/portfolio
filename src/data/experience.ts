export interface Experience {
  company: string;
  role: string;
  duration: string;
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    company: 'Onebridge Infotech',
    role: 'Gen AI Developer Intern',
    duration: 'Sep 2026 – Oct 2026',
    achievements: [
      'Tested the company\'s AI-powered SaaS product and built three applications from scratch.',
      'FinOps: a multilingual financial management application.',
      'Internal business-data scraper: collects business listings from maps using free tools only, with no paid APIs.',
      'Onebridge Grid: prototype of a social platform for business professionals.'
    ]
  },
  {
    company: 'Radha Real Home Properties',
    role: 'Freelance Developer',
    duration: 'Aug 2026 – Sep 2026',
    achievements: [
      'Designed and built a custom CRM covering employee management and the full lead pipeline for a real estate company.',
      'Replaced scattered manual tracking with a single system for the whole sales team.'
    ]
  },
  {
    company: 'Vyasthra Collections Pvt Ltd',
    role: 'Web Developer',
    duration: 'Oct 2025 – Feb 2026',
    achievements: [
      'Built a complete e-commerce site from scratch including product pages, cart, checkout, and admin panel.',
      'Diagnosed and resolved critical mobile performance bottlenecks, noticeably improving load times.',
      'Developed a custom Employee Management System to replace spreadsheet-based commission tracking.'
    ]
  }
];
