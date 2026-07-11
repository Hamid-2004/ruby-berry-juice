import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer id="contact" style={{ background: '#170b21', color: 'rgba(255,248,243,0.75)', padding: '80px 0 30px' }}>
      <div className="container">
        <div className="footer-grid">
          <div>
            <div style={{ color: '#fff', marginBottom: 16 }}>
              <Logo size={38} />
            </div>
            <p style={{ fontSize: 14, maxWidth: 280, lineHeight: 1.7 }}>
              Pure berry goodness, poured fresh every day. Real fruit, no shortcuts.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 18 }}>
              <a href="#" aria-label="Instagram" className="social-icon"><Instagram size={17} /></a>
              <a href="#" aria-label="Facebook" className="social-icon"><Facebook size={17} /></a>
            </div>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#story">Our Story</a></li>
              <li><a href="#gallery">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4>Opening Hours</h4>
            <ul>
              <li>Mon – Fri: 8:00 – 21:00</li>
              <li>Saturday: 9:00 – 22:00</li>
              <li>Sunday: 9:00 – 20:00</li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}><MapPin size={15} /> 12 Berry Lane, Karachi</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Phone size={15} /> +92 300 000 0000</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Mail size={15} /> hello@rubyberry.co</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Ruby Berry. All rights reserved.</span>
          <span>Crafted with real fruit and real care.</span>
        </div>
      </div>

      <style>{`
        .footer-grid { display: grid; grid-template-columns: 1fr; gap: 44px; }
        @media (min-width: 768px) { .footer-grid { grid-template-columns: 1.4fr 1fr 1fr 1.2fr; } }
        footer h4 { color: #fff; font-family: var(--font-heading); font-size: 14px; margin-bottom: 18px; letter-spacing: 0.04em; text-transform: uppercase; }
        footer ul { list-style: none; display: flex; flex-direction: column; gap: 11px; }
        footer ul a, footer ul li { font-size: 14px; }
        footer ul a:hover { color: #fff; }
        .social-icon { width: 38px; height: 38px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.18); display: flex; align-items: center; justify-content: center; transition: all 0.3s ease; color: inherit; }
        .social-icon:hover { background: var(--color-berry-red); border-color: var(--color-berry-red); transform: translateY(-3px); }
        .footer-bottom { border-top: 1px solid rgba(255,255,255,0.1); margin-top: 60px; padding-top: 26px; display: flex; flex-direction: column; gap: 10px; text-align: center; font-size: 12.5px; }
        @media (min-width: 768px) { .footer-bottom { flex-direction: row; justify-content: space-between; text-align: left; } }
      `}</style>
    </footer>
  );
}
