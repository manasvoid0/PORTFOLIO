import { skills } from '../data.js';

export default function About() {
  return (
    <section className="about" id="about">
      <h2 className="numbered-heading reveal"><span className="number">01.</span> About Me</h2>
      <div className="about-inner">
        <div className="about-text reveal">
          <p>
            Hello! My name is Manas and I enjoy creating things that live on the
            internet. My interest in web development started back in 2012 when I decided
            to try editing custom themes — turns out hacking together a custom reblog
            button taught me a lot about HTML &amp; CSS!
          </p>
          <p>
            Fast-forward to today, and I've had the privilege of working at
            <a href="#" className="inline-link"> an advertising agency</a>,
            <a href="#" className="inline-link"> a start-up</a>, and
            <a href="#" className="inline-link"> a huge corporation</a>. My main focus these
            days is building accessible, inclusive products and digital experiences for a
            variety of clients.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
          <ul className="skills-list">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="about-image reveal">
          <div className="image-wrapper">
            <div className="image-inner"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
