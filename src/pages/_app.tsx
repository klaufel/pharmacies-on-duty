import type { AppProps } from 'next/app';
import Head from 'next/head';
import LayoutMain from '../layouts/main';

import '@pod/theme';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutMain>
      <Head>
        <title>Listado de farmacias y farmacias de guardia en tu ciudad</title>
        <meta
          name="description"
          content="Podrás comprobar qué farmacia de guardia está abierta en tu ciudad. También verás los horarios, teléfono y la localización de todas las farmacias de tu ciudad."
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#3bbb8c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Component {...pageProps} />
    </LayoutMain>
  );
}
