import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { leadFlow, profile, stats } from '../data/profile';
import Reveal from '../components/Reveal';

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const line: Variants = {
  hidden: { y: '105%' },
  show: { y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const fade: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(2);

  // Walk the highlight down the lead flow so the panel reads as a moving pipeline.
  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => setActive((a) => (a + 1) % leadFlow.length), 1800);
    return () => clearInterval(id);
  }, [reduceMotion]);

  return (
    <section id="home" className="wrap">
      <motion.div variants={container} initial="hidden" animate="show" className="hero">
        <div>
          <motion.p variants={fade} className="mono">{profile.label}</motion.p>
          <h1 className="display">
            {profile.headline.map((text) => (
              <span key={text} className="line">
                <motion.span variants={line} style={{ display: 'block' }}>{text}</motion.span>
              </span>
            ))}
            <span className="line">
              <motion.span variants={line} style={{ display: 'block' }} className="accent">{profile.headlineAccent}</motion.span>
            </span>
          </h1>
          <motion.p variants={fade} className="lead">{profile.lead}</motion.p>
          <motion.div variants={fade} className="hero-cta">
            <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" className="btn">
              Discuss your project <ArrowRight size={18} />
            </a>
            <a href="#work" className="link">See the work</a>
          </motion.div>
        </div>

        <motion.div variants={fade} className="flow">
          <p className="mono">How a lead moves through the CRM I built</p>
          {leadFlow.map((row, i) => (
            <div key={row.step} className={`flow-row${i === active ? ' on' : ''}`}>
              <span>{row.step}</span>
              <small>{row.note}</small>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <Reveal className="stats">
        {stats.map((s) => (
          <div key={s.label} className="stat">
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
