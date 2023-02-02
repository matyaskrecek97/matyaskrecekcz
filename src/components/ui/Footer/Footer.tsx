import { LINKS } from '@/constants/links';
import { ROUTES } from '@/constants/routes';
import Link from 'next/link';
import { FooterQuote } from './FooterQuote';
import useQuote from './useQuote';

export const Footer = () => {
  const { quote } = useQuote();

  return (
    <footer className="container">
      <hr />
      <FooterQuote />
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
