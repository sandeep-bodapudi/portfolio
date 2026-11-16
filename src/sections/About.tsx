import { profile } from '../data/profile';
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';

export default function About() {
  return (
    <section id="about" className="wrap section">
      <SectionHead label="About" title="Who you will work with" />
      <div className="about">
        <Reveal>
          {profile.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mono">Tools I build with</p>
          <div className="tools">
            {profile.tools.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
