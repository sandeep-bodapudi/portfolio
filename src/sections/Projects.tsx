import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Github, ExternalLink, Lock } from 'lucide-react';
import { work } from '../data/work';
import type { Work } from '../data/work';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

function WorkCard({ item, index }: { item: Work; index: number }) {
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const glow = useMotionTemplate`radial-gradient(420px circle at ${x}px ${y}px, rgb(var(--primary) / 0.16), transparent 70%)`;

  return (
    <Reveal>
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          x.set(e.clientX - r.left);
          y.set(e.clientY - r.top);
        }}
        className="group relative overflow-hidden rounded-2xl border border-stone-200 dark:border-stone-800 bg-white/60 dark:bg-stone-900/40 p-6 md:p-8"
      >
        <motion.div style={{ background: glow }} className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="relative flex flex-col md:flex-row gap-8">
          <span className="font-mono text-sm text-primary md:w-12 shrink-0">{String(index + 1).padStart(2, '0')}</span>

          <div className="flex-1 min-w-0">
            <p className="text-sm text-stone-500 dark:text-stone-400 mb-2">{item.context}</p>
            <h3 className="text-2xl font-bold text-stone-900 dark:text-white mb-4">{item.title}</h3>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed mb-4">{item.description}</p>

            {item.impact && (
              <p className="text-sm text-stone-700 dark:text-stone-300 border-l-2 border-primary pl-4 mb-4">{item.impact}</p>
            )}
            {item.note && (
              <p className="flex items-center gap-2 text-sm text-stone-500 dark:text-stone-400 mb-4">
                <Lock size={14} /> {item.note}
              </p>
            )}

            {item.tech.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-5">
                {item.tech.map((t) => (
                  <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300">{t}</span>
                ))}
              </div>
            )}

            {(item.github || item.demo) && (
              <div className="flex items-center gap-5">
                {item.github && (
                  <a href={item.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-stone-700 dark:text-stone-300 hover:text-primary transition-colors">
                    <Github size={16} /> Code
                  </a>
                )}
                {item.demo && (
                  <a href={item.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                    <ExternalLink size={16} /> Live demo
                  </a>
                )}
              </div>
            )}
          </div>

          {item.image && (
            <div className="md:w-72 shrink-0 overflow-hidden rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-800 self-start">
              <img
                src={item.image}
                alt={`${item.title} screenshot`}
                loading="lazy"
                className="w-full h-48 object-cover object-top transition-transform duration-700 group-hover:scale-105"
                onError={(e) => { e.currentTarget.parentElement!.style.display = 'none'; }}
              />
            </div>
          )}
        </div>
      </motion.article>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="work" className="py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading index="01" label="Work" title="Things I've built" />
        <div className="space-y-6">
          {work.map((item, i) => (
            <WorkCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
