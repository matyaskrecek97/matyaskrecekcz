import { Footer } from '@/components/ui/Footer';
import Head from 'next/head';

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
      <Footer />
    </>
  );
};
