import { motion } from 'framer-motion';

export default function GalleryItem({ image, alt, height, index, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      style={{
        breakInside: 'avoid',
        marginBottom: 20,
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        position: 'relative',
        cursor: 'zoom-in',
        display: 'block',
        width: '100%',
        border: 'none',
      }}
      aria-label={`Open image: ${alt}`}
    >
      <motion.img
        src={image}
        alt={alt}
        style={{ width: '100%', height, objectFit: 'cover', display: 'block' }}
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.button>
  );
}
