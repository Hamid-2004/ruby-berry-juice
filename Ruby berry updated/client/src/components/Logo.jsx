import logo from '../assets/logo.png';

/**
 * Renders the official Ruby Berry logo asset. Used in the navbar and footer.
 * Never redraw or recreate this mark — always reference the source file.
 */
export default function Logo({ withWordmark = true, size = 44 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <img
        src={logo}
        alt="Ruby Berry logo"
        width={size}
        height={size}
        style={{ borderRadius: '50%', height: size, width: size }}
      />
      {withWordmark && (
        <div style={{ lineHeight: 1 }}>
          <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 19 }}>
            Ruby Berry
          </div>
          <div
            style={{
              fontSize: 10,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-berry-red)',
              fontWeight: 600,
            }}
          >
            Pure Berry Goodness
          </div>
        </div>
      )}
    </div>
  );
}
