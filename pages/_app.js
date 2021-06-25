import Head from 'next/head';
import Header from '../components/Header';
import '../styles/globals.css';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

import * as ga from '../lib/analytics';
import IconMetas from '../lib/icons';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <div className="container">
      <Head>
        <title>Kritivity</title>
        <meta name="description" content="Kriti's Food Blog" />
        <IconMetas />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <AnimatePresence exitBeforeEnter>
        <AnimateSharedLayout>
          <motion.main
            className="main"
            initial="initial"
            animate="animate"
            variants={variants}
          >
            <Header />
            <Component {...pageProps} key={router.route} />
          </motion.main>
        </AnimateSharedLayout>
      </AnimatePresence>

      <div className="footer">
        <div></div>
      </div>
    </div>
  );
}

export default MyApp;

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};
