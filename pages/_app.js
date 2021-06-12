import Head from 'next/head';
import Header from '../components/Header';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <Head>
        <title>Kritivity</title>
        <meta name="description" content="Kriti's Food Blog" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className="main">
        <Header />
        <Component {...pageProps} />
      </main>

      <footer className="footer"></footer>
    </div>
  );
}

export default MyApp;
