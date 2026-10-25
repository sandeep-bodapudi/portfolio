import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

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
