import { services } from '../data/profile';
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';

export default function Services() {
  return (
    <section id="services" className="wrap section">
      <SectionHead
        label="Services"
        title="What I build"
        text="One system instead of sheets, notebooks and WhatsApp groups. Each one is built for your business, not adapted from a template."
      />
      <div className="services">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.06} className="service">
            <p className="mono">0{i + 1}</p>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
