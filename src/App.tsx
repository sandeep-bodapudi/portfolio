import { useState, useEffect } from 'react';
import { MotionConfig } from 'framer-motion';
import ScrollProgress from './components/ScrollProgress';
import Marquee from './components/Marquee';
import { work } from './data/work';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import TechStack from './sections/TechStack';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import About from './sections/About';
import Contact from './sections/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <MotionConfig reducedMotion="user">
    <div className="min-h-screen overflow-x-hidden flex flex-col w-full relative">
      <ScrollProgress />
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <Marquee items={work.map((w) => w.title)} />
        <Projects />
        <Experience />
        <TechStack />
        <About />
        <Contact />
      </main>
      <footer className="py-8 text-center text-sm text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 mt-20">
        <p>© {new Date().getFullYear()} Sandeep Kumar Bodapudi</p>
      </footer>
    </div>
    </MotionConfig>
  );
}

export default App;
