import { useEffect, useRef, useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import TestimonialCard from '../components/TestimonialCard';
import useApi from '../hooks/useApi';

const FALLBACK_TESTIMONIALS = [
  { id: 1, name: 'Amara K.', role: 'Regular Customer', quote: 'The Ruby Glow has genuinely become part of my morning routine. It tastes like real fruit because it is.', rating: 5 },
  { id: 2, name: 'Farhan S.', role: 'First-time Visitor', quote: 'Walked in for a juice, stayed for the interior. The Berry Bliss smoothie is unreal.', rating: 5 },
  { id: 3, name: 'Layla M.', role: 'Loyalty Member', quote: 'No artificial sweetness, no filler, just fruit. I can actually taste the difference.', rating: 5 },
  { id: 4, name: 'Zayn R.', role: 'Weekly Regular', quote: 'Consistently fresh, every single time. The Tropical Berry is my go-to after workouts.', rating: 5 },
];

function useSlidesPerView() {
  const [perView, setPerView] = useState(3);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setPerView(w >= 1100 ? 3 : w >= 768 ? 2 : 1);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return perView;
}

export default function Testimonials() {
  const { data: testimonials } = useApi('/testimonials', FALLBACK_TESTIMONIALS);
  const perView = useSlidesPerView();
  const slideCount = Math.max(1, Math.ceil(testimonials.length / perView));
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);

  useEffect(() => {
    if (index >= slideCount) setIndex(0);
  }, [slideCount, index]);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % slideCount), 4500);
    return () => clearInterval(timer);
  }, [slideCount]);

  return (
    <section className="section" style={{ background: 'linear-gradient(180deg,#fff8f3,#fdeef1)' }}>
      <div className="container">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved, Sip After Sip"
          description="Real words from regulars who stopped by for a juice and stayed for the ritual."
          centered
        />

        <div style={{ overflow: 'hidden' }}>
          <div
            ref={trackRef}
            style={{
              display: 'flex',
              gap: 26,
              transform: `translateX(-${index * 100}%)`,
              transition: 'transform 0.6s cubic-bezier(.22,1,.36,1)',
            }}
          >
            {Array.from({ length: slideCount }).map((_, slideIdx) => (
              <div
                key={slideIdx}
                style={{
                  minWidth: '100%',
                  display: 'grid',
                  gridTemplateColumns: `repeat(${perView}, 1fr)`,
                  gap: 26,
                }}
              >
                {testimonials.slice(slideIdx * perView, slideIdx * perView + perView).map((t) => (
                  <TestimonialCard key={t.id} testimonial={t} />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 36 }}>
          {Array.from({ length: slideCount }).map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              style={{
                width: i === index ? 26 : 9,
                height: 9,
                borderRadius: 6,
                background: i === index ? 'var(--color-berry-red)' : '#e2c9d3',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
