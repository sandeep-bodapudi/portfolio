import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { experiences } from '../data/experience';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 60%'] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section id="experience" className="py-24 bg-stone-100/70 dark:bg-stone-900/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading index="02" label="Experience" title="Where I've worked" />

        <div ref={ref} className="relative pl-8 md:pl-10">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-stone-200 dark:bg-stone-800" />
          <motion.div style={{ scaleY, originY: 0 }} className="absolute left-0 top-2 bottom-2 w-px bg-primary" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div key={`${exp.company}-${exp.duration}`} className="relative">
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                  className="absolute -left-8 md:-left-10 top-2 h-3 w-3 -transtone-x-1/2 rounded-full bg-primary ring-4 ring-stone-100 dark:ring-stone-950"
                />
                <Reveal delay={i * 0.05}>
                  <p className="text-sm font-mono text-stone-500 dark:text-stone-400 mb-1">{exp.duration}</p>
                  <h3 className="text-xl font-bold text-stone-900 dark:text-white">{exp.role}</h3>
                  <p className="text-primary font-medium mb-4">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((a, j) => (
                      <li key={j} className="flex gap-3 text-stone-600 dark:text-stone-400 leading-relaxed">
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-primary/60" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
