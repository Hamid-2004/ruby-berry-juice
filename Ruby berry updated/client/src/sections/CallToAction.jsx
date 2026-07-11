import { motion } from 'framer-motion';
import Button from '../components/Button';

export default function CallToAction() {
  return (
    <section style={{ padding: '0 24px' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          background: 'linear-gradient(120deg, var(--color-berry-purple) 0%, #4a1c5e 55%, var(--color-berry-red) 130%)',
          borderRadius: 40,
          padding: '80px 40px',
          textAlign: 'center',
        }}
      >
        <h2 style={{ color: '#fff', fontSize: 'clamp(28px,4vw,44px)', lineHeight: 1.15, maxWidth: 640, margin: '0 auto' }}>
          Ready for Your Next Refreshment?
        </h2>
        <p style={{ color: 'rgba(255,248,243,0.78)', marginTop: 16, fontSize: 15.5, maxWidth: 440, marginLeft: 'auto', marginRight: 'auto' }}>
          Order online for pickup or delivery, or stop by and taste it fresh from the counter.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginTop: 34 }}>
          <Button href="#menu" variant="primary">Order Now</Button>
          <Button href="#contact" variant="ghost">Visit Our Store</Button>
        </div>
      </motion.div>
    </section>
  );
}
