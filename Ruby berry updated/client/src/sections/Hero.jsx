import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Button from '../components/Button';
import heroImage from '../assets/hero-cafe.jpg';

const PARTICLE_COUNT = 14;

export default function Hero() {
  const [particles, setParticles] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setParticles(
      Array.from({ length: PARTICLE_COUNT }).map(() => ({
        size: 6 + Math.random() * 9,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 8 + Math.random() * 8,
        delay: Math.random() * 6,
      }))
    );

    const handleScroll = () => setOffset(window.scrollY * 0.25);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" style={{ position: 'relative', minHeight: '100svh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `scale(1.08) translateY(${offset}px)`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(44,18,76,0.55) 0%, rgba(31,15,26,0.55) 45%, rgba(20,9,16,0.78) 100%)',
        }}
      />

      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {particles.map((p, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: p.size,
              height: p.size * 1.25,
              borderRadius: '50% 50% 50% 0',
              background: 'var(--color-berry-red)',
              opacity: 0.55,
              transform: 'rotate(40deg)',
            }}
          />
        ))}
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: 80 }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(255,255,255,0.12)',
            border: '1px solid rgba(255,255,255,0.25)',
            backdropFilter: 'blur(6px)',
            color: '#fff',
            padding: '8px 18px',
            borderRadius: 'var(--radius-pill)',
            fontSize: 12.5,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}
        >
          Handcrafted daily, since day one
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontSize: 'clamp(42px, 7vw, 84px)', color: '#fff', lineHeight: 1.02, marginTop: 22 }}
        >
          Fresh Juice,
          <br />
          <span style={{ color: '#ff8fae' }}>Pure Happiness.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{ color: 'rgba(255,248,243,0.85)', fontSize: 'clamp(16px,2vw,19px)', maxWidth: 560, marginTop: 22, lineHeight: 1.6 }}
        >
          Crafted from hand-picked berries and real fruit to deliver freshness in every sip.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginTop: 38 }}
        >
          <Button href="#menu" variant="primary">Explore Menu</Button>
          <Button href="#contact" variant="ghost">Order Online</Button>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: 34,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          color: 'rgba(255,255,255,0.8)',
        }}
      >
        <div style={{ width: 24, height: 38, border: '2px solid rgba(255,255,255,0.7)', borderRadius: 14 }} />
        <span style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Scroll</span>
      </motion.div>
    </section>
  );
}
