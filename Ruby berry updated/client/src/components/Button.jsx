import { motion } from 'framer-motion';

/**
 * Premium pill button. Two variants: primary (solid berry red) and
 * ghost (outlined, for use on dark/hero backgrounds).
 */
export default function Button({
  children,
  variant = 'primary',
  as = 'a',
  href = '#',
  onClick,
  type = 'button',
  className = '',
  ...rest
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    fontWeight: 600,
    fontSize: 14.5,
    padding: '14px 30px',
    borderRadius: 'var(--radius-pill)',
  };

  const variants = {
    primary: {
      background: 'var(--color-berry-red)',
      color: 'var(--color-white)',
      boxShadow: '0 10px 24px rgba(200,29,79,0.35)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-white)',
      border: '1.5px solid rgba(255,255,255,0.7)',
    },
    'ghost-dark': {
      background: 'transparent',
      color: 'var(--color-berry-purple)',
      border: '1.5px solid var(--color-berry-purple)',
    },
  };

  const style = { ...base, ...variants[variant] };
  const Component = motion[as] || motion.a;

  return (
    <Component
      href={as === 'a' ? href : undefined}
      type={as === 'button' ? type : undefined}
      onClick={onClick}
      style={style}
      className={className}
      whileHover={{ y: -3, boxShadow: '0 16px 30px rgba(200,29,79,0.4)' }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Component>
  );
}
