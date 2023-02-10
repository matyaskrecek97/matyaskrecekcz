import { LINKS } from '@/constants/links';
import Image from 'next/image';
import { ROUTES } from '@/constants/routes';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div>
        <Image
          src={LINKS.IMAGES.HOMEPAGE_PERSONAL.SRC}
          alt={LINKS.IMAGES.HOMEPAGE_PERSONAL.ALT}
          width={150}
          height={150}
        />
        <hgroup>
          <h1>Matyáš Křeček</h1>
          <h2>
            <code>Programátor</code>, lezec a milovník knih 📚.
          </h2>
        </hgroup>
        <p>
          Repozitář obsahující zdrojový kód mého osobního webu. Používám ho
          především pro testování nových technologí a &quot;design
          patterns&quot;, abych se zlepšil v programování jako takovém. V plánu
          mám i blog. Líbí se mi představa interaktivního obsahu, který jako
          autor např. na Medium nemůžu vytvářet.
        </p>
        <p>
          Budu rád za jakoukoliv zpětnou vazbu k mému kódu a technologií, které
          jsem implementoval, takže neváhejte mě kontaktovat nebo rovnou otevřít
          issue/pull request.
        </p>
        <div>
          <ul>
            <li>
              <a
                href={LINKS.SOCIAL.LINKTREE}
                target="_blank"
                rel="noopener noreferrer"
              >
                Linktree
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
                href={LINKS.SOCIAL.YOUTUBE}
                target="_blank"
                rel="noopener noreferrer"
              >
                Youtube
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
                href={LINKS.SOCIAL.GITHUB}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
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
                href={LINKS.SOCIAL.MATYAS_KRECEK_SRO}
                target="_blank"
                rel="noopener noreferrer"
              >
                Matyáš Křeček s. r. o.
              </a>
            </li>
          </ul>
        </div>
        <Link href={ROUTES.ADMIN}>Admin area</Link>
      </div>
    </>
  );
}
