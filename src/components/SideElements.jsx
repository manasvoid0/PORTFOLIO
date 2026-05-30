import { socials, email } from '../data.js';
import { GitHubIcon, LinkedInIcon } from './Icons.jsx';

const ICONS = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
};

export function SideSocial() {
  return (
    <div className="side-social" aria-hidden="false">
      <ul>
        {socials.map((s) => {
          const Icon = ICONS[s.icon];
          return (
            <li key={s.name}>
              <a href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.name}>
                <Icon />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function SideEmail() {
  return (
    <div className="side-email" aria-hidden="false">
      <div className="email-wrapper">
        <a href={`mailto:${email}`}>{email}</a>
      </div>
    </div>
  );
}
