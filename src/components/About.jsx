import { skills } from '../data.js';
import aboutImage from '../assets/about-me.jpg';

export default function About() {
  return (
    <section className="about" id="about">
      <h2 className="numbered-heading reveal"><span className="number">01.</span> About Me</h2>
      <div className="about-inner">
        <div className="about-text reveal">
          <p>
            I'm a Software Developer with experience building scalable web applications,
            APIs, and backend systems. My primary focus is on designing reliable,
            high-performance solutions using Node.js, Express.js, TypeScript, PostgreSQL,
            and modern JavaScript technologies.
          </p>
          <p>
            Over the past few years, I've worked on developing REST APIs, optimizing
            database operations, integrating third-party services, and building systems
            that support data-driven business workflows. I enjoy solving complex technical
            challenges and creating software that is both maintainable and scalable.
          </p>
          <p>
            Currently, I'm building scalable applications at{' '}
            <a href="https://datacaffe.ai" target="_blank" rel="noopener noreferrer" className="inline-link">DataCaffe.ai</a>,
            where I contribute to backend architecture, system integrations, and
            performance-focused development. I'm passionate about clean code, system design,
            and continuously improving my engineering skills to build products that deliver
            real business value.
          </p>
        </div>
        <div className="about-image reveal">
          <div className="image-wrapper">
            <div
              className="image-inner"
              style={{ backgroundImage: `url(${aboutImage})` }}
            ></div>
          </div>
          <p className="skills-intro">Here are a few technologies I've been working with recently:</p>
          <ul className="skills-list">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
