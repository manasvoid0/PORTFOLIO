import { useEffect, useRef, useState } from 'react';
import { navLinks } from '../data.js';

const DELTA = 5;
const SCROLL_THRESHOLD = 50;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScroll = useRef(0);
  const menuOpenRef = useRef(false);

  useEffect(() => {
    menuOpenRef.current = menuOpen;
    document.body.classList.toggle('blur', menuOpen);
  }, [menuOpen]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      setScrolled(scrollTop > SCROLL_THRESHOLD);

      if (Math.abs(lastScroll.current - scrollTop) <= DELTA) return;
      if (menuOpenRef.current) return;

      if (scrollTop > lastScroll.current && scrollTop > SCROLL_THRESHOLD) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScroll.current = scrollTop;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const headerClass = `header${scrolled ? ' scrolled' : ''}${hidden ? ' hide' : ''}`;

  return (
    <header className={headerClass} id="header">
      <nav className="nav">
        <a href="#" className="logo" aria-label="home">
          <div className="logo-hex">
            <img src={`${import.meta.env.BASE_URL}logo_m_s.png`} alt="Manas Ranjan Barik" />
          </div>
        </a>

        <div className={`nav-menu${menuOpen ? ' open' : ''}`} id="nav-menu">
          <ol className="nav-list">
            {navLinks.map((link) => (
              <li key={link.text}>
                <a href={link.href} onClick={() => setMenuOpen(false)}>
                  <span>{link.num}</span> {link.text}
                </a>
              </li>
            ))}
          </ol>
          <a
            href="#"
            className="button resume-button"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            Resume
          </a>
        </div>

        <button
          className={`hamburger${menuOpen ? ' active' : ''}`}
          id="hamburger"
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <div className="hamburger-box">
            <div className="hamburger-inner"></div>
          </div>
        </button>
      </nav>
    </header>
  );
}
