import IsoGraphic from './IsoGraphic.jsx';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <IsoGraphic />
      <h1 className="hero-overline reveal">Hi, my name is</h1>
      <h2 className="hero-title big-heading reveal">Manas Ranjan Barik.</h2>
      <h4 className="hero-subtitle big-heading reveal">Building reliable systems behind great products.</h4>
      <p className="hero-text reveal">
        Software developer with experience designing APIs, optimizing databases, and developing reliable backend services. I enjoy solving complex problems, improving system performance, and building products that can scale from thousands to millions of requests. Currently building scalable applications at{' '}
        <span style={{ whiteSpace: 'nowrap' }}><a href="https://datacaffe.ai" target="_blank" rel="noopener noreferrer" className="inline-link">DataCaffe.ai</a>.</span>
      </p>
      <div className="reveal">
        <a href="#contact" className="button hero-button">Get In Touch</a>
      </div>
    </section>
  );
}
