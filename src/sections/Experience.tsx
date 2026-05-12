import { motion } from 'framer-motion';

const experiences = [
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

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Work Experience</h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700 transform translate-x-32 mt-2"></div>
              
              <div className="md:flex gap-12 items-start">
                <div className="md:w-32 flex-shrink-0 pt-1 hidden md:block text-right">
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{exp.duration}</span>
                </div>
                
                <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-primary md:hidden"></div>
                <div className="hidden md:block absolute left-32 top-2 w-2 h-2 rounded-full bg-primary transform -translate-x-1/2"></div>
                
                <div className="glass-card p-6 flex-grow">
                  <div className="md:hidden mb-2">
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{exp.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                  <h4 className="text-lg text-primary font-medium mb-4">{exp.company}</h4>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-slate-600 dark:text-slate-400 text-sm flex gap-2">
                        <span className="text-primary/60 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
