import IsoGraphic from './IsoGraphic.jsx';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <IsoGraphic />
      <h1 className="hero-overline reveal">Hi, my name is</h1>
      <h2 className="hero-title big-heading reveal">Manas Ranjan Barik.</h2>
      <h3 className="hero-subtitle big-heading reveal">I build things for the web.</h3>
      <p className="hero-text reveal">
        I'm a software engineer specializing in building (and occasionally designing)
        exceptional digital experiences. Currently, I'm focused on building accessible,
        human-centered products at <a href="#" className="inline-link">Your Company</a>.
      </p>
      <div className="reveal">
        <a href="#contact" className="button hero-button">Get In Touch</a>
      </div>
    </section>
  );
}
