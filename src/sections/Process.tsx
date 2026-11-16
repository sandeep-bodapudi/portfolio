import { process } from '../data/profile';
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';

export default function Process() {
  return (
    <section id="process" className="wrap section">
      <SectionHead label="Process" title="How we work together" text="Four steps from the first conversation to a system your staff use every day." />
      <div className="steps">
        {process.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.06} className="step">
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
