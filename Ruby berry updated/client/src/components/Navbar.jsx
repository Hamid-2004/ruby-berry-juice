import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import Button from './Button';
import useScrollPosition from '../hooks/useScrollPosition';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'Products', href: '#products' },
  { label: 'Our Story', href: '#story' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { scrolled, progress } = useScrollPosition(40);
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Scroll progress bar */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: 3,
          width: `${progress}%`,
          background: 'linear-gradient(90deg, var(--color-berry-red), var(--color-berry-purple))',
          zIndex: 1200,
          transition: 'width 0.1s linear',
        }}
      />

      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: scrolled ? '12px 0' : '20px 0',
          background: scrolled ? 'rgba(255,248,243,0.75)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px) saturate(160%)' : 'none',
          boxShadow: scrolled ? '0 8px 30px rgba(44,18,76,0.08)' : 'none',
          transition: 'all 0.4s cubic-bezier(.22,1,.36,1)',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="#home" aria-label="Ruby Berry home" style={{ color: scrolled ? 'var(--color-berry-purple)' : '#fff' }}>
            <Logo size={scrolled ? 38 : 44} />
          </a>

          <nav aria-label="Primary" style={{ display: 'none', gap: 34, alignItems: 'center' }} className="desktop-nav">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontSize: 14.5,
                  fontWeight: 600,
                  color: scrolled ? 'var(--color-ink)' : '#fff',
                  textShadow: scrolled ? 'none' : '0 1px 8px rgba(0,0,0,0.3)',
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ display: 'none' }} className="desktop-cta">
              <Button href="#menu" variant="primary">Order Now</Button>
            </div>
            <button
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className="mobile-toggle"
              style={{ color: scrolled ? 'var(--color-berry-purple)' : '#fff' }}
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile"
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'var(--color-berry-purple)',
              zIndex: 1100,
              display: 'flex',
              flexDirection: 'column',
              padding: '100px 32px 40px',
            }}
          >
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              style={{ position: 'absolute', top: 28, right: 28, color: 'var(--color-cream)' }}
            >
              <X size={30} />
            </button>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 28,
                  fontWeight: 600,
                  color: 'var(--color-cream)',
                  padding: '14px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                {link.label}
              </a>
            ))}
            <div style={{ marginTop: 28 }}>
              <Button href="#menu" variant="primary" onClick={() => setOpen(false)}>Order Now</Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: block !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </>
  );
}
