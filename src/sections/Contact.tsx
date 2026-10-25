import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

const CONTACT_EMAIL = 'sandeepkumarbodapudi@gmail.com';
// Formspree / Web3Forms style endpoint that accepts a JSON POST. Set VITE_CONTACT_ENDPOINT at build time.
const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    if (!CONTACT_ENDPOINT) {
      const subject = encodeURIComponent(`Portfolio message from ${data.name}`);
      const body = encodeURIComponent(`${data.message}\n\n${data.name} (${data.email})`);
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus('submitting');
    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };


  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Get in touch</h2>
          <p className="text-slate-600 dark:text-slate-400">Have a project in mind or want to know more about my work? Send me a message and I'll get back to you.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <a href="mailto:sandeepkumarbodapudi@gmail.com" className="flex items-center gap-4 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">
                  <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-white">Email</p>
                    <p>sandeepkumarbodapudi@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name</label>
                <input required type="text" id="name" name="name" className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all dark:text-white" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
                <input required type="email" id="email" name="email" className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all dark:text-white" placeholder="john@company.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                <textarea required id="message" name="message" rows={4} className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none dark:text-white" placeholder="Let's build something..."></textarea>
              </div>
              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full py-3 px-4 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {status === 'idle' ? (
                  <><Send size={18} /> Send Message</>
                ) : status === 'submitting' ? (
                  'Sending...'
                ) : status === 'success' ? (
                  'Message Sent!'
                ) : (
                  <><Send size={18} /> Try Again</>
                )}
              </button>
              {status === 'error' && (
                <p role="alert" className="text-sm text-red-600 dark:text-red-400">
                  Couldn't send your message. Please try again or email {CONTACT_EMAIL} directly.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
