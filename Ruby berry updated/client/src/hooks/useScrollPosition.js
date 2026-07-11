import { useEffect, useState } from 'react';

/**
 * Tracks vertical scroll progress (0-100) and whether the page has
 * scrolled past a given threshold. Used to drive the glass navbar
 * and the top scroll-progress bar.
 */
export default function useScrollPosition(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      setScrolled(scrollTop > threshold);
      setProgress(scrollable > 0 ? (scrollTop / scrollable) * 100 : 0);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return { scrolled, progress };
}
