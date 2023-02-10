import { LINKS } from '@/constants/links';
import useQuote from './useQuote';

export const FooterQuote = () => {
  const { quote } = useQuote();

  return (
    <div>
      {quote && (
        <figure>
          <blockquote>
            <cite>
              {quote.text} - {quote.author}
            </cite>
          </blockquote>
          <span>
            {
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={LINKS.IMAGES.EXTERNAL.THEYSAIDSO}
                height="20"
                width="20"
                alt="theysaidso.com"
              />
            }
            <a
              href={LINKS.EXTERNAL.THEYSAIDSO}
              title="Powered by quotes from theysaidso.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              They Said So®
            </a>
          </span>
        </figure>
      )}
    </div>
  );
};
