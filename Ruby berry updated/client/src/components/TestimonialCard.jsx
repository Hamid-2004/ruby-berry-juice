import { Star } from 'lucide-react';

export default function TestimonialCard({ testimonial }) {
  const { name, role, quote, rating } = testimonial;
  const initials = name.split(' ').map((n) => n[0]).join('').slice(0, 2);

  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.6)',
        backdropFilter: 'blur(14px)',
        border: '1px solid rgba(255,255,255,0.5)',
        borderRadius: 'var(--radius-lg)',
        padding: 40,
        boxShadow: '0 20px 40px rgba(44,18,76,0.08)',
        height: '100%',
      }}
    >
      <div style={{ display: 'flex', gap: 3 }} aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={16} fill="#f5a623" color="#f5a623" />
        ))}
      </div>
      <p style={{ color: '#4a4a4a', margin: '18px 0 22px', lineHeight: 1.7, fontSize: 15 }}>"{quote}"</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            color: '#fff',
            background: 'var(--color-berry-red)',
          }}
        >
          {initials}
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 14.5, color: 'var(--color-berry-purple)' }}>{name}</div>
          <div style={{ fontSize: 12.5, color: '#8a8a8a' }}>{role}</div>
        </div>
      </div>
    </div>
  );
}
