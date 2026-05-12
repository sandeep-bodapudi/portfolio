import { motion } from 'framer-motion';

const skills = [
  { category: 'Frontend', items: ['React.js', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'] },
  { category: 'Tools & Architecture', items: ['REST APIs', 'Git / GitHub', 'Postman', 'PWA', 'IndexedDB', 'Vite'] },
  { category: 'Currently Learning', items: ['Next.js', 'System Design Basics', 'Advanced TypeScript'] }
];

export default function TechStack() {
  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Technical Arsenal</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl">Technologies I use to build scalable, production-ready applications.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div 
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                {skillGroup.category === 'Currently Learning' && <span className="flex h-2 w-2 rounded-full bg-amber-500"></span>}
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map(item => (
                  <span key={item} className="px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md text-sm font-medium text-slate-700 dark:text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
