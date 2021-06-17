import Head from 'next/head';
import Header from '../components/Header';
import '../styles/globals.css';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <div className="container">
      <Head>
        <title>Kritivity</title>
        <meta name="description" content="Kriti's Food Blog" />
        <link rel="icon" href="/favicon.ico" />
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
