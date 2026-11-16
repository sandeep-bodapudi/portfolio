import Reveal from './Reveal';

export default function SectionHead({ label, title, text }: { label: string; title: string; text?: string }) {
  return (
    <Reveal className="section-head">
      <div>
        <p className="mono">{label}</p>
        <h2 className="display">{title}</h2>
      </div>
      {text && <p>{text}</p>}
    </Reveal>
  );
}
