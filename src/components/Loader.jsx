import { useEffect, useState } from 'react';

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hold the loader briefly so the logo animation can play, then fade out.
    const timer = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Lock scrolling while the loader is visible.
    document.body.style.overflow = loading ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [loading]);

  return (
    <div className={`loader ${loading ? '' : 'loader--hidden'}`} aria-hidden={!loading}>
      <svg
        className="loader__logo"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        role="img"
        aria-label="Loading"
      >
        <rect
          className="loader__border"
          x="2"
          y="2"
          width="96"
          height="96"
          rx="5"
          fill="none"
          stroke="var(--green)"
          strokeWidth="4"
        />
        <text
          x="50"
          y="76"
          textAnchor="middle"
          fontFamily="Arial, sans-serif"
          fontSize="70"
          fontWeight="700"
          fill="var(--green)"
        >
          M
        </text>
      </svg>
    </div>
  );
}
