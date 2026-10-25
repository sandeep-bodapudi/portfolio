import { motion } from 'framer-motion';
import Reveal from './Reveal';

export default function SectionHeading({ index, label, title }: { index: string; label: string; title: string }) {
  return (
    <Reveal className="mb-14">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-sm font-mono text-primary">{index}</span>
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ originX: 0 }}
          className="h-px w-12 bg-primary"
        />
        <span className="text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">{label}</span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">{title}</h2>
    </Reveal>
  );
}
