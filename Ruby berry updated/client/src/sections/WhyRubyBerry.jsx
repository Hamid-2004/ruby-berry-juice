import { Apple, ShieldCheck, Clock, Sparkles } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import WhyCard from '../components/WhyCard';

const REASONS = [
  { icon: Apple, title: 'Real Fruit', description: 'Sourced daily from local growers, nothing frozen, nothing pre-mixed.' },
  { icon: ShieldCheck, title: 'No Preservatives', description: 'Sweetness comes from the fruit itself, never from syrups or additives.' },
  { icon: Clock, title: 'Made Fresh Daily', description: 'Every batch is prepared each morning and never held overnight.' },
  { icon: Sparkles, title: 'Premium Ingredients', description: 'From the berries to the water we use, every input is chosen with care.' },
];

export default function WhyRubyBerry() {
  return (
    <section style={{ background: 'var(--color-berry-purple)', color: 'var(--color-cream)', padding: '110px 0' }}>
      <div className="container">
        <div style={{ maxWidth: 640, marginBottom: 56 }}>
          <span className="eyebrow" style={{ color: '#ff8fae' }}>Why Ruby Berry</span>
          <h2 style={{ color: '#fff', fontSize: 'clamp(30px,4vw,48px)', lineHeight: 1.1 }}>
            Freshness Isn't Optional. It's the Whole Point.
          </h2>
          <p style={{ color: 'rgba(255,248,243,0.72)', marginTop: 18, fontSize: 16.5, lineHeight: 1.7 }}>
            Four promises that shape everything we pour, no exceptions, no shortcuts.
          </p>
        </div>

        <div className="why-grid">
          {REASONS.map((reason, i) => (
            <WhyCard key={reason.title} {...reason} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        .why-grid { display: grid; grid-template-columns: 1fr; gap: 22px; }
        @media (min-width: 640px) { .why-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1100px) { .why-grid { grid-template-columns: repeat(4, 1fr); } }
      `}</style>
    </section>
  );
}
