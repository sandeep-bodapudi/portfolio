import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
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

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Featured Work</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl">Real-world applications built to solve actual business problems and improve user workflows.</p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`glass-card overflow-hidden flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="w-full md:w-5/12 bg-slate-100 dark:bg-slate-800 flex items-center justify-center border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-700 relative group overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`${project.title} UI`}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback if image not found
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    e.currentTarget.nextElementSibling?.classList.add('flex');
                  }}
                />
                <div className="hidden absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 items-center justify-center p-8">
                   <span className="text-slate-400 dark:text-slate-500 font-medium text-lg text-center px-4">{project.title} Image Missing</span>
                </div>
              </div>
              
              <div className="w-full md:w-7/12 p-8 flex flex-col justify-center">
                {project.featured && <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-2">Client Project</span>}
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{project.title}</h3>
                
                <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-100 dark:border-slate-800">
                  <span className="text-sm font-semibold text-slate-900 dark:text-white block mb-1">Business Impact:</span>
                  <span className="text-sm text-slate-600 dark:text-slate-400">{project.impact}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map(tech => (
                    <span key={tech} className="text-xs font-medium px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors">
                    <Github size={18} /> View Code
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
