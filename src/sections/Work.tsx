import { ArrowUpRight } from 'lucide-react';
import { caseStudies, moreWork } from '../data/work';
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';

export default function Work() {
  return (
    <section id="work" className="wrap section">
      <SectionHead
        label="Work"
        title="Systems in use"
        text="Client projects, described by what they do for the business. Ask me for a walkthrough of any of them."
      />

      {caseStudies.map((c, i) => (
        <Reveal key={c.title}>
          <article className="case">
            <div className="case-num" aria-hidden="true">0{i + 1}</div>
            <div>
              <p className="mono">{c.context}</p>
              <h3 className="display">{c.title}</h3>
              <p>{c.story}</p>
              <p className="mono stack">{c.stack}</p>
            </div>
            <ul className="facts">
              {c.facts.map((f) => (
                <li key={f.label}>
                  <span>{f.label}</span>
                  <span>{f.detail}</span>
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      ))}

      <div className="more">
        {moreWork.map((m, i) => (
          <Reveal key={m.title} delay={(i % 3) * 0.06} className="more-item">
            <p className="mono">{m.context}</p>
            <h4>{m.title}</h4>
            <p>{m.text}</p>
            {m.link && (
              <a href={m.link} target="_blank" rel="noopener noreferrer" className="link">
                Visit site <ArrowUpRight size={14} style={{ display: 'inline', verticalAlign: '-2px' }} />
              </a>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
