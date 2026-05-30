import { useEffect, useRef, useState } from 'react';
import { jobs } from '../data.js';

const TAB_HEIGHT = 42;

export default function Experience() {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const tabRefs = useRef([]);
  const [highlightStyle, setHighlightStyle] = useState({});

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const btn = tabRefs.current[active];
    if (!btn) return;
    if (isMobile) {
      setHighlightStyle({ transform: `translateX(${btn.offsetLeft}px)`, width: `${btn.offsetWidth}px` });
    } else {
      setHighlightStyle({ transform: `translateY(${active * TAB_HEIGHT}px)`, width: '' });
    }
  }, [active, isMobile]);

  const onKeyDown = (e, index) => {
    let next = null;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = (index + 1) % jobs.length;
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') next = (index - 1 + jobs.length) % jobs.length;
    if (next !== null) {
      e.preventDefault();
      setActive(next);
      tabRefs.current[next]?.focus();
    }
  };

  return (
    <section className="experience" id="experience">
      <h2 className="numbered-heading reveal"><span className="number">02.</span> Where I've Worked</h2>
      <div className="experience-inner reveal">
        <div className="tab-list" role="tablist" aria-label="Job tabs">
          {jobs.map((job, i) => (
            <button
              key={job.company}
              ref={(el) => (tabRefs.current[i] = el)}
              className={`tab-button${active === i ? ' active' : ''}`}
              role="tab"
              aria-selected={active === i}
              tabIndex={active === i ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKeyDown(e, i)}
            >
              {job.company}
            </button>
          ))}
          <div className="tab-highlight" id="tab-highlight" style={highlightStyle}></div>
        </div>

        <div className="tab-panels">
          {jobs.map((job, i) => (
            <div
              key={job.company}
              className={`tab-panel${active === i ? ' active' : ''}`}
              role="tabpanel"
              hidden={active !== i}
            >
              <h3>
                {job.title}{' '}
                <span className="company">@ <a href={job.url} className="inline-link">{job.company}</a></span>
              </h3>
              <p className="range">{job.range}</p>
              <ul className="panel-list">
                {job.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
