import { Moon, Sun } from 'lucide-react';
import { profile } from '../data/profile';

const links = [
  { name: 'Work', href: '#work' },
  { name: 'Services', href: '#services' },
  { name: 'Process', href: '#process' },
  { name: 'About', href: '#about' },
];

export default function Navbar({ darkMode, toggleDarkMode }: { darkMode: boolean; toggleDarkMode: () => void }) {
  return (
    <header className="nav">
      <div className="wrap">
        <div className="nav-inner">
          <a href="#home" className="brand">{profile.name}</a>
          <nav className="nav-links mono" aria-label="Sections">
            {links.map((link) => (
              <a key={link.name} href={link.href}>{link.name}</a>
            ))}
          </nav>
          <div className="nav-actions">
            <button onClick={toggleDarkMode} className="icon-btn" aria-label={darkMode ? 'Switch to light theme' : 'Switch to dark theme'}>
              {darkMode ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" className="pill">WhatsApp me</a>
          </div>
        </div>
      </div>
    </header>
  );
}
