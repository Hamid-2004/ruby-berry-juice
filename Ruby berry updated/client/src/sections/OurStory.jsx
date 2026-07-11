import { motion } from 'framer-motion';
import Counter from '../components/Counter';
import bottleImage from '../assets/bottle-mockup.jpg';

export default function OurStory() {
  return (
    <section id="story" className="section">
      <div className="container">
        <div className="story-grid">
          <motion.div
            className="story-image"
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.img
              src={bottleImage}
              alt="Ruby Berry glass bottle six-pack, made with real fruit"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div className="story-badge">
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 26, lineHeight: 1 }}>2019</div>
              <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.9, marginTop: 4 }}>Est.</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="eyebrow">Our Story</span>
            <h2 style={{ fontSize: 'clamp(30px,4vw,48px)', lineHeight: 1.1 }}>Real Fruit, No Shortcuts.</h2>
            <p style={{ color: 'var(--color-ink-soft)', lineHeight: 1.75, fontSize: 16, marginTop: 20 }}>
              Ruby Berry was born from a passion for creating refreshing beverages made from real fruit and
              premium ingredients. Every bottle reflects our commitment to freshness, quality, and unforgettable
              taste.
            </p>

            <div className="counters">
              <Counter target={15} suffix="+" label="Signature Drinks" />
              <Counter target={10} suffix="K+" label="Happy Customers" />
              <Counter target={5} suffix="★" label="Customer Rating" />
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .story-grid { display: grid; grid-template-columns: 1fr; gap: 52px; align-items: center; }
        @media (min-width: 960px) { .story-grid { grid-template-columns: 1fr 1fr; } }
        .story-image { position: relative; border-radius: 32px; overflow: hidden; aspect-ratio: 4/5; box-shadow: 0 24px 50px rgba(44,18,76,0.18); }
        .story-badge {
          position: absolute; bottom: -26px; right: -18px; background: var(--color-berry-red); color: #fff;
          border-radius: 22px; padding: 20px 24px; box-shadow: 0 16px 30px rgba(200,29,79,0.35); font-family: var(--font-heading);
        }
        @media (min-width: 960px) { .story-badge { right: -30px; } }
        .counters { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 44px; }
      `}</style>
    </section>
  );
}
