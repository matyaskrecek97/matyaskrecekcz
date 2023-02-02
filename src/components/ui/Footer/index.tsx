import { LINKS } from '@/constants/links';
import { ROUTES } from '@/constants/routes';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="container">
      <hr />
      <div>
        <p>Matyáš Křeček s. r. o.</p>
      </div>
      <div>
        <ul>
          <li>
            <a
              href={LINKS.SOCIAL.GITHUB}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href={LINKS.SOCIAL.TWITTER}
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href={LINKS.SOCIAL.LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={LINKS.SOCIAL.GOODREADS}
              target="_blank"
              rel="noopener noreferrer"
            >
              Goodreads
            </a>
          </li>

          <li>
            <a
              href={LINKS.COMPANY.MATYAS_KRECEK_SRO}
              target="_blank"
              rel="noopener noreferrer"
            >
              Matyáš Křeček s. r. o.
            </a>
          </li>
        </ul>
      </div>
      <Link href={ROUTES.ADMIN}>Admin area</Link>
    </footer>
  );
};
