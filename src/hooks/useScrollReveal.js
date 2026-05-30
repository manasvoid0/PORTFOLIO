import { useEffect } from 'react';

// Ports the original main.js scroll-reveal: observes every .reveal element,
// adds .visible when it enters the viewport, with a small per-element stagger.
export default function useScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal'));

    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    els.forEach((el, i) => {
      el.style.transitionDelay = `${Math.min(i % 6, 5) * 0.05}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}
