import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.classList.add('blur');
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.classList.remove('blur');
    };
  }, [onClose]);

  if (!project) return null;

  return createPortal(
    <div className="project-modal-overlay" onClick={onClose}>
      <div
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          className="project-modal__close"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>

        <p className="project-overline">Featured Project</p>
        <h3 id="project-modal-title" className="project-modal__title">{project.title}</h3>

        <div className="project-modal__body">
          {project.details.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <ul className="project-tech-list project-modal__tech">
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        {project.github && (
          <a
            className="button project-modal__link"
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        )}
      </div>
    </div>,
    document.body
  );
}
