import { Lightbulb } from '@/components/ui/LightBulb';
import { LINKS } from '@/constants/links';
import { ROUTES } from '@/constants/routes';
import Head from 'next/head';
import Link from 'next/link';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Matyáš Křeček</title>
        <meta
          name="description"
          content="Vítejte na mém webu, který je takovým rozcestníkem pro moje digitální aktivity."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/@picocss/pico@latest/css/pico.min.css"
        ></link>
      </Head>
      <main className="container">{children}</main>
      <footer className="container">
        <div>
          <p>Matyáš Křeček s.r.o</p>
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
          </ul>
        </div>
        <Link href={ROUTES.ADMIN}>Admin</Link>
        <div>
          <Lightbulb />
        </div>
      </footer>
    </>
  );
};
