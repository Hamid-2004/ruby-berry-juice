import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [message, setMessage] = useState('');

  const API_URL = import.meta.env.VITE_API_URL || '';

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(`${API_URL}/newsletter`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.message || 'Something went wrong.');
      setStatus('success');
      setMessage(json.message);
      setEmail('');
    } catch (err) {
      setStatus('error');
      setMessage(err.message || 'Unable to subscribe right now.');
    } finally {
      setTimeout(() => setStatus('idle'), 3000);
    }
  }

  return (
    <section className="section" style={{ textAlign: 'center' }}>
      <div className="container">
        <span className="eyebrow" style={{ display: 'block' }}>Newsletter</span>
        <h2 style={{ fontSize: 'clamp(30px,4vw,48px)' }}>Stay Fresh.</h2>
        <p style={{ color: 'var(--color-ink-soft)', marginTop: 14 }}>
          New drops, seasonal berries, and the occasional discount, straight to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="newsletter-form">
          <label className="sr-only" htmlFor="nlEmail">Email address</label>
          <input
            id="nlEmail"
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <motion.button
            type="submit"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            disabled={status === 'loading'}
            style={{
              background: 'var(--color-berry-red)',
              color: '#fff',
              fontWeight: 600,
              fontSize: 14,
              padding: '15px 30px',
              borderRadius: 'var(--radius-pill)',
              boxShadow: '0 10px 24px rgba(200,29,79,0.35)',
            }}
          >
            {status === 'loading' ? 'Subscribing…' : status === 'success' ? 'Subscribed ✓' : 'Subscribe'}
          </motion.button>
        </form>

        {message && (
          <p style={{ marginTop: 14, fontSize: 13.5, color: status === 'error' ? '#c81d4f' : 'var(--color-sage)' }}>
            {message}
          </p>
        )}
      </div>

      <style>{`
        .newsletter-form { display: flex; flex-direction: column; gap: 12px; max-width: 440px; margin: 34px auto 0; }
        @media (min-width: 520px) { .newsletter-form { flex-direction: row; } }
        .newsletter-form input {
          flex: 1; padding: 15px 20px; border-radius: 999px; border: 1.5px solid #e6dcd4; font-size: 14.5px; background: #fff;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .newsletter-form input:focus { outline: none; border-color: var(--color-berry-red); box-shadow: 0 0 0 4px var(--focus-ring); }
      `}</style>
    </section>
  );
}
