import { motion } from 'framer-motion';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

const skills = [
  { category: 'Frontend', items: ['React.js', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'] },
  { category: 'Tools & Architecture', items: ['REST APIs', 'Git / GitHub', 'Postman', 'PWA', 'IndexedDB', 'Vite'] },
  { category: 'Currently Learning', items: ['Next.js', 'System Design Basics', 'Advanced TypeScript'] },
];

export default function TechStack() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading index="03" label="Skills" title="What I work with" />
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((group, gi) => (
            <Reveal key={group.category} delay={gi * 0.08}>
              <div className="h-full rounded-2xl border border-stone-200 dark:border-stone-800 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-5 flex items-center gap-2">
                  {group.category === 'Currently Learning' && <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />}
                  {group.category}
                </h3>
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
                  className="flex flex-wrap gap-2"
                >
                  {group.items.map((item) => (
                    <motion.span
                      key={item}
                      variants={{ hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1 } }}
                      whileHover={{ y: -2 }}
                      className="px-3 py-1.5 rounded-full border border-stone-200 dark:border-stone-700 text-sm font-medium text-stone-700 dark:text-stone-300"
                    >
                      {item}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
