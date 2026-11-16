import { useEffect, useState } from 'react';
import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Work from './sections/Work';
import Process from './sections/Process';
import About from './sections/About';
import Contact from './sections/Contact';
import { profile } from './data/profile';

function storedTheme(): string | null {
  try {
    return localStorage.getItem('theme');
  } catch {
    return null;
  }
}

function App() {
  // index.html sets the class before first paint; read it back so state matches.
  const [darkMode, setDarkMode] = useState(() => document.documentElement.classList.contains('dark'));

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  // Follow the device setting until the visitor picks a theme themselves.
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (e: MediaQueryListEvent) => {
      if (!storedTheme()) setDarkMode(e.matches);
    };
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  const toggleDarkMode = () => {
    const next = !darkMode;
    setDarkMode(next);
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch {
      // Storage can be blocked; the toggle still works for this visit.
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <Services />
        <Work />
        <Process />
        <About />
        <Contact />
      </main>
      <footer className="wrap">
        <div className="footer">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            {' · '}
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </span>
        </div>
      </footer>
    </MotionConfig>
  );
}

export default App;
