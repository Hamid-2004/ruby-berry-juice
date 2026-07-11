import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function ProductCard({ product, index }) {
  const { name, description, price, calories, color, image } = product;

  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: 'var(--color-white)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(44,18,76,0.07)',
      }}
    >
      <div
        className="relative flex items-center justify-center overflow-hidden"
        style={{
          height: 288,
          background: `linear-gradient(135deg, ${color}18, ${color}30)`,
        }}
      >
        <img
          src={image}
          alt={name}
          className="h-60 object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div style={{ padding: '26px 26px 28px' }}>
        <h3 style={{ fontSize: 20, color: 'var(--color-berry-purple)' }}>{name}</h3>
        <p style={{ color: 'var(--color-ink-soft)', fontSize: 14, marginTop: 8, lineHeight: 1.6, minHeight: 44 }}>
          {description}
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
          <span
            style={{
              fontSize: 12.5,
              color: 'var(--color-sage)',
              fontWeight: 600,
              background: '#f2f5ee',
              padding: '5px 12px',
              borderRadius: 'var(--radius-pill)',
            }}
          >
            {calories} kcal
          </span>
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--color-berry-red)', fontSize: 19 }}>
            ${price.toFixed(2)}
          </span>
        </div>
      </div>
    </motion.article>
  );
}
