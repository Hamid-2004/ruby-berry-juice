import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import GalleryItem from '../components/GalleryItem';
import heroCafe from "../assets/hero-cafe.jpg";
import counterImage from "../assets/counter.png";
import fruitImage from "../assets/fruit.png";
import bottleHero from "../assets/bottle-mockup.png";
import bottleCloseup from "../assets/closeup.png";
import bottlemockupHero from "../assets/bottle-mockup.png";


const GALLERY_ITEMS = [
  { image: heroCafe, alt: "Ruby Berry Café Interior", height: 340 },
  { image: bottleHero, alt: "Ruby Berry Premium Bottle", height: 300 },
  { image: counterImage, alt: "Ruby Berry Juice Counter", height: 260 },
  { image: bottleCloseup, alt: "Ruby Berry Bottle Close-up", height: 320 },
  { image: fruitImage, alt: "Fresh Ingredients", height: 260 },
  {
  image: bottlemockupHero,
  alt: "Bottle Test",
  height: 340,
  }
];

export default function Gallery() {
  const [active, setActive] = useState(null);

  return (
    <section id="gallery" className="section" style={{ background: 'var(--color-white)' }}>
      <div className="container">
        <SectionHeading
          eyebrow="Gallery"
          title="Inside Ruby Berry"
          description="A look at our space, our bottles, and the details we obsess over."
        />
        <div className="masonry">
          {GALLERY_ITEMS.map((item, i) => (
            <GalleryItem key={i} {...item} index={i} onClick={() => setActive(item)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            style={{
              position: 'fixed', inset: 0, background: 'rgba(20,9,16,0.92)', zIndex: 2000,
              display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 40,
            }}
          >
            <button
              aria-label="Close"
              onClick={() => setActive(null)}
              style={{ position: 'absolute', top: 28, right: 36, color: '#fff' }}
            >
              <X size={30} />
            </button>
            <motion.img
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              src={active.image}
              alt={active.alt}
              onClick={(e) => e.stopPropagation()}
              style={{ maxWidth: '90vw', maxHeight: '85vh', borderRadius: 20, objectFit: 'cover' }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .masonry { column-count: 1; column-gap: 20px; }
        @media (min-width: 640px) { .masonry { column-count: 2; } }
        @media (min-width: 1024px) { .masonry { column-count: 3; } }
      `}</style>
    </section>
  );
}
