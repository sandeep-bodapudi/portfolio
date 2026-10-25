import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/profile';

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const word: Variants = {
  hidden: { y: '110%' },
  show: { y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const [phrase, setPhrase] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setPhrase((p) => (p + 1) % profile.building.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary rounded-full filter blur-[140px] opacity-25 dark:opacity-20 animate-blob pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-amber-400 rounded-full filter blur-[140px] opacity-25 dark:opacity-15 animate-blob animation-delay-2000 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern [mask-image:linear-gradient(180deg,white,transparent)] opacity-50 dark:opacity-30 pointer-events-none" />

      <motion.div variants={container} initial="hidden" animate="show" className="relative max-w-6xl mx-auto w-full pt-28 pb-20">
        <motion.p variants={fadeUp} className="text-sm md:text-base font-medium text-primary mb-6">
          {profile.title}
        </motion.p>

        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter text-stone-900 dark:text-white leading-[0.95] mb-8">
          {profile.name.map((line) => (
            <span key={line} className="block overflow-hidden pb-2">
              <motion.span variants={word} className="block">{line}</motion.span>
            </span>
          ))}
        </h1>

        <motion.p variants={fadeUp} className="text-xl md:text-2xl text-stone-600 dark:text-stone-400 max-w-2xl leading-relaxed mb-6">
          {profile.intro}
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-lg md:text-xl font-semibold text-stone-900 dark:text-white mb-12">
          <span className="text-stone-400 dark:text-stone-500 font-normal">Currently thinking about</span>
          <span className="relative inline-flex overflow-hidden h-8 items-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={phrase}
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -24, opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="text-primary whitespace-nowrap"
              >
                {profile.building[phrase]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.div>

        <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
          <a href="#work" className="group px-6 py-3 bg-primary text-white dark:text-stone-950 font-medium rounded-full hover:bg-primary/90 shadow-lg shadow-primary/30 transition-all flex items-center gap-2">
            See my work <ArrowDown size={18} className="transition-transform group-hover:transtone-y-1" />
          </a>
          {[
            { href: profile.github, label: 'GitHub profile', Icon: Github },
            { href: profile.linkedin, label: 'LinkedIn profile', Icon: Linkedin },
            { href: `mailto:${profile.email}`, label: 'Email me', Icon: Mail },
          ].map(({ href, label, Icon }) => (
            <motion.a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="p-3 rounded-full border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-300 hover:text-primary hover:border-primary transition-colors"
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
