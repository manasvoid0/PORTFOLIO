import { GitHubIcon, LinkedInIcon } from './Icons.jsx';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-social">
        <a href="https://github.com/manasvoid0" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GitHubIcon /></a>
        <a href="https://www.linkedin.com/in/manas-ranjan-barik-a2917927a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
      </div>
      <p className="footer-credit">Designed &amp; Built by Manas Ranjan Barik</p>
    </footer>
  );
}
