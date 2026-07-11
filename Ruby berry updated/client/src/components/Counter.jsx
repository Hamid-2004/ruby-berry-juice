import useCountUp from '../hooks/useCountUp';

export default function Counter({ target, suffix = '', label }) {
  const { ref, value } = useCountUp(target);

  return (
    <div ref={ref}>
      <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(26px,3vw,38px)', fontWeight: 800, color: 'var(--color-berry-red)' }}>
        {value}
        {suffix}
      </div>
      <div style={{ fontSize: 12.5, color: 'var(--color-ink-soft)', marginTop: 4, fontWeight: 600 }}>{label}</div>
    </div>
  );
}
