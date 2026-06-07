import { useState } from 'react';
import { featuredProjects } from '../data.js';
import { GitHubIcon, ExternalIcon } from './Icons.jsx';
import ProjectModal from './ProjectModal.jsx';

export default function FeaturedProjects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section className="work" id="work">
      <h2 className="numbered-heading reveal"><span className="number">03.</span> Some Things I've Built</h2>

      <ul className="featured-list">
        {featuredProjects.map((project, i) => {
          const openModal = project.details
            ? (e) => {
                e.preventDefault();
                setActiveProject(project);
              }
            : undefined;

          return (
            <li
              key={project.title}
              className={`featured-project reveal${i % 2 === 1 ? ' featured-project-reversed' : ''}`}
            >
              <div className="project-content">
                <p className="project-overline">Featured Project</p>
                <h3 className="project-title">
                  <a href={project.external || project.github} onClick={openModal}>{project.title}</a>
                </h3>
                <div className="project-description">
                  <p>{project.description}</p>
                </div>
                <ul className="project-tech-list">
                  {project.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Link"><GitHubIcon /></a>
                  )}
                  {project.external && (
                    <a href={project.external} aria-label="External Link"><ExternalIcon /></a>
                  )}
                </div>
              </div>
              <div className="project-image">
                <a href={project.external || project.github} onClick={openModal}><div className="img"></div></a>
              </div>
            </li>
          );
        })}
      </ul>

      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </section>
  );
}
