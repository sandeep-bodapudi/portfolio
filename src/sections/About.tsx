import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { profile } from '../data/profile';

export default function About() {
  return (
    <section id="about" className="py-24 bg-stone-100/70 dark:bg-stone-900/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading index="04" label="About" title="A bit about me" />
        <Reveal>
          <p className="text-xl md:text-2xl text-stone-700 dark:text-stone-300 leading-relaxed max-w-3xl">{profile.about}</p>
        </Reveal>
      </div>
    </section>
  );
}
