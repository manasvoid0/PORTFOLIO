import Header from './components/Header.jsx';
import { SideSocial, SideEmail } from './components/SideElements.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import FeaturedProjects from './components/FeaturedProjects.jsx';
import OtherProjects from './components/OtherProjects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import useScrollReveal from './hooks/useScrollReveal.js';

export default function App() {
  useScrollReveal();

  return (
    <>
      <a className="skip-link" href="#content">Skip to Content</a>

      <Header />
      <SideSocial />
      <SideEmail />

      <main id="content">
        <Hero />
        <About />
        <Experience />
        <FeaturedProjects />
        <OtherProjects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
