import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function WhyCard({ icon: Icon, title, description, index }) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      whileHover={{ y: -8 }}
      style={{
        background: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.12)',
        borderRadius: 'var(--radius-md)',
        padding: '32px 26px',
      }}
    >
      <div
        style={{
          width: 52,
          height: 52,
          borderRadius: 16,
          background: 'var(--color-berry-red)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 20,
        }}
      >
        <Icon size={24} color="#fff" strokeWidth={1.8} />
      </div>
      <h3 style={{ fontSize: 17, color: '#fff', marginBottom: 10 }}>{title}</h3>
      <p style={{ fontSize: 13.5, color: 'rgba(255,248,243,0.65)', lineHeight: 1.6 }}>{description}</p>
    </motion.div>
  );
}
