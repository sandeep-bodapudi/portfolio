import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { profile } from '../data/profile';
import Reveal from '../components/Reveal';

// Formspree / Web3Forms style endpoint that accepts a JSON POST. Set VITE_CONTACT_ENDPOINT at build time.
const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    if (!CONTACT_ENDPOINT) {
      const subject = encodeURIComponent(`Project enquiry from ${data.name}`);
      const body = encodeURIComponent(`${data.message}\n\n${data.name} (${data.contact})`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
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
    <section id="contact" className="wrap">
      <div className="contact">
        <Reveal>
          <p className="mono">Contact</p>
          <h2 className="display">
            Tell me what your business <span className="accent">needs.</span>
          </h2>
          <p className="lead">Send a WhatsApp message with a line about your business. I will reply with a time to talk.</p>
          <div className="contact-links">
            <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" className="btn">
              WhatsApp {profile.phoneDisplay} <ArrowRight size={18} />
            </a>
            <a href={`mailto:${profile.email}`} className="link">{profile.email}</a>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <form onSubmit={handleSubmit} className="form">
            <div>
              <label htmlFor="name">Your name</label>
              <input required type="text" id="name" name="name" autoComplete="name" />
            </div>
            <div>
              <label htmlFor="contact">Phone or email</label>
              <input required type="text" id="contact" name="contact" />
            </div>
            <div>
              <label htmlFor="message">What do you need built?</label>
              <textarea required id="message" name="message" />
            </div>
            <button type="submit" disabled={status === 'submitting'} className="btn" style={{ justifyContent: 'center' }}>
              {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Message sent' : status === 'error' ? 'Try again' : 'Send message'}
            </button>
            {status === 'error' && (
              <p role="alert" className="form-error">
                Couldn't send your message. Please try again or message me on WhatsApp.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
