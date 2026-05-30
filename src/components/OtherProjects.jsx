import { otherProjects } from '../data.js';
import { GitHubIcon, ExternalIcon, FolderIcon } from './Icons.jsx';

export default function OtherProjects() {
  return (
    <section className="other-projects">
      <h2 className="other-projects-title reveal">Other Noteworthy Projects</h2>
      <a href="#" className="archive-link reveal">view the archive</a>

      <ul className="projects-grid">
        {otherProjects.map((project) => (
          <li key={project.title} className="project-card reveal">
            <div className="card-inner">
              <header>
                <div className="card-top">
                  <div className="folder">
                    <FolderIcon />
                  </div>
                  <div className="card-links">
                    {project.github && (
                      <a href={project.github} aria-label="GitHub Link"><GitHubIcon /></a>
                    )}
                    {project.external && (
                      <a href={project.external} aria-label="External Link"><ExternalIcon /></a>
                    )}
                  </div>
                </div>
                <h3 className="card-title"><a href={project.external || project.github}>{project.title}</a></h3>
                <p className="card-description">{project.description}</p>
              </header>
              <footer>
                <ul className="card-tech-list">
                  {project.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </footer>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
