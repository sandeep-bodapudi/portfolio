import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowRight, Code2, Terminal, MonitorSmartphone } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen flex items-center overflow-hidden">
      
      {/* Background Animated Gradients */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-blob dark:opacity-20 pointer-events-none"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-blob animation-delay-2000 dark:opacity-20 pointer-events-none"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-blob animation-delay-4000 dark:opacity-20 pointer-events-none"></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-50 dark:opacity-20 -z-10 pointer-events-none"></div>

      <div className="w-full flex flex-col lg:flex-row items-center gap-12 relative z-10">
        
        {/* Left Column: Text & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 flex flex-col justify-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 dark:bg-primary/20 text-primary mb-6 border border-primary/20">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-semibold tracking-wide uppercase">Available for work</span>
            </div>
            <h2 className="text-slate-500 dark:text-slate-400 font-semibold tracking-wide uppercase text-sm mb-4">Sandeep Kumar Bodapudi</h2>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
              Frontend Developer Building <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Real-World Web Apps</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-xl">
              Focused on responsive interfaces, scalable frontend systems, and business-driven applications. I build products that solve actual problems, not just templates.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a href="#projects" className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 flex items-center gap-2">
                View Projects <ArrowRight size={18} />
              </a>
              <a href="/Sandeep_Resume.pdf" download className="px-6 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-medium rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center gap-2 shadow-sm">
                Resume
              </a>
              <div className="flex items-center gap-2 ml-2">
                <a href="https://github.com/sandeep-bodapudi" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg border border-slate-200 dark:border-slate-700 hover:text-slate-900 dark:hover:text-white transition-colors shadow-sm">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/sandeepkumarbodapudi" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg border border-slate-200 dark:border-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-sm">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Visual Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full lg:w-1/2 hidden md:block"
        >
          <div className="relative w-full max-w-lg mx-auto">
            {/* Main Code Window */}
            <div className="glass-card overflow-hidden shadow-2xl shadow-slate-200/50 dark:shadow-black/50 border-slate-200 dark:border-slate-700/50 z-20 relative bg-white/80 dark:bg-slate-900/80">
              <div className="flex items-center px-4 py-3 border-b border-slate-200 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-950/50">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                </div>
                <div className="mx-auto flex items-center gap-2 text-xs text-slate-400 font-medium">
                  <Terminal size={14} /> <span>App.tsx</span>
                </div>
              </div>
              <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto text-slate-700 dark:text-slate-300">
                <div className="flex">
                  <span className="text-slate-300 dark:text-slate-600 select-none pr-4 text-right w-8">1</span>
                  <span><span className="text-primary dark:text-blue-400">import</span> React <span className="text-primary dark:text-blue-400">from</span> <span className="text-emerald-500 dark:text-emerald-400">'react'</span>;</span>
                </div>
                <div className="flex">
                  <span className="text-slate-300 dark:text-slate-600 select-none pr-4 text-right w-8">2</span>
                  <span><span className="text-primary dark:text-blue-400">import</span> {'{'} <span className="text-amber-500 dark:text-amber-300">Build</span> {'}'} <span className="text-primary dark:text-blue-400">from</span> <span className="text-emerald-500 dark:text-emerald-400">'@sandeep/skills'</span>;</span>
                </div>
                <div className="flex">
                  <span className="text-slate-300 dark:text-slate-600 select-none pr-4 text-right w-8">3</span>
                  <span></span>
                </div>
                <div className="flex">
                  <span className="text-slate-300 dark:text-slate-600 select-none pr-4 text-right w-8">4</span>
                  <span><span className="text-primary dark:text-blue-400">export default function</span> <span className="text-amber-500 dark:text-amber-300 font-semibold">Developer</span>() {'{'}</span>
                </div>
                <div className="flex">
                  <span className="text-slate-300 dark:text-slate-600 select-none pr-4 text-right w-8">5</span>
                  <span className="pl-4"><span className="text-primary dark:text-blue-400">return</span> (</span>
                </div>
                <div className="flex">
                  <span className="text-slate-300 dark:text-slate-600 select-none pr-4 text-right w-8">6</span>
                  <span className="pl-8">&lt;<span className="text-indigo-500 dark:text-indigo-400">Build</span></span>
                </div>
                <div className="flex">
                  <span className="text-slate-300 dark:text-slate-600 select-none pr-4 text-right w-8">7</span>
                  <span className="pl-12 text-slate-500 dark:text-slate-400">focus=<span className="text-emerald-500 dark:text-emerald-400">"Frontend Architecture"</span></span>
                </div>
                <div className="flex">
                  <span className="text-slate-300 dark:text-slate-600 select-none pr-4 text-right w-8">8</span>
                  <span className="pl-12 text-slate-500 dark:text-slate-400">performance=<span className="text-primary dark:text-blue-400">{'{true}'}</span></span>
                </div>
                <div className="flex">
                  <span className="text-slate-300 dark:text-slate-600 select-none pr-4 text-right w-8">9</span>
                  <span className="pl-12 text-slate-500 dark:text-slate-400">responsive=<span className="text-primary dark:text-blue-400">{'{true}'}</span></span>
                </div>
                <div className="flex">
                  <span className="text-slate-300 dark:text-slate-600 select-none pr-4 text-right w-8">10</span>
                  <span className="pl-8">/&gt;</span>
                </div>
                <div className="flex">
                  <span className="text-slate-300 dark:text-slate-600 select-none pr-4 text-right w-8">11</span>
                  <span className="pl-4">);</span>
                </div>
                <div className="flex">
                  <span className="text-slate-300 dark:text-slate-600 select-none pr-4 text-right w-8">12</span>
                  <span>{'}'}</span>
                </div>
              </div>
            </div>

            {/* Floating Element 1 */}
            <motion.div 
              animate={{ y: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -right-8 -top-8 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 z-30 flex items-center gap-3 hidden sm:flex"
            >
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">
                <Code2 size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Clean Code</p>
                <p className="text-sm font-bold text-slate-900 dark:text-white">React & TS</p>
              </div>
            </motion.div>

            {/* Floating Element 2 */}
            <motion.div 
              animate={{ y: [5, -5, 5] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -left-10 bottom-10 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 z-30 flex items-center gap-3 hidden sm:flex"
            >
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg">
                <MonitorSmartphone size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Responsive</p>
                <p className="text-sm font-bold text-slate-900 dark:text-white">Mobile Ready</p>
              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
