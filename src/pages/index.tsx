import { LINKS } from '@/constants/links';

export default function Home() {
  return (
    <>
      <div>
        <hgroup>
          <h1>Matyáš Křeček</h1>
          <h2>Programátor, lezec a milovník knih.</h2>
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
      </div>
      <div>
        <figure>
          <p>
            <b>Náhodný citát pro (snad) lepší den:</b>
          </p>
          {/* implement https://zenquotes.io/ */}
          <blockquote>
            <p>
              It was a bright cold day in April, and the clocks were striking
              thirteen.
            </p>
          </blockquote>
          <figcaption>
            First sentence in{' '}
            <cite>
              <a
                href="http://www.george-orwell.org/1984/0.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nineteen Eighty-Four
              </a>
            </cite>{' '}
            by George Orwell (Part 1, Chapter 1).
          </figcaption>
          <p>
            Zdroj -{' '}
            <a
              href={LINKS.EXTERNAL.ZENQUOTES}
              target="_blank"
              rel="noopener noreferrer"
            >
              Zenquotes.
            </a>
          </p>
        </figure>
      </div>
    </>
  );
}
