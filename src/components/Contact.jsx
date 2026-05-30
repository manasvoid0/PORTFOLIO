import { email } from '../data.js';

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="contact-overline reveal">04. What's Next?</h2>
      <h2 className="contact-title reveal">Get In Touch</h2>
      <p className="contact-text reveal">
        I'm currently looking for new opportunities and my inbox is always open. Whether you
        have a question or just want to say hi, I'll try my best to get back to you!
      </p>
      <a href={`mailto:${email}`} className="button contact-button reveal">Say Hello</a>
    </section>
  );
}
