export interface Experience {
  company: string;
  role: string;
  duration: string;
  achievements: string[];
}

export const experiences: Experience[] = [
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
