import Head from 'next/head';
import Image from 'next/image';
import ExcerptPosts from '../components/ExcerptPosts';
import Header from '../components/Header';
import ImageCTA from '../components/ImageCTA';

export default function Home() {
  return (
    <>
      <Head>
        <title>Kritivity | Home</title>
        <meta name="description" content="Kriti's Food Blog" />
      </Head>

      <ImageCTA />
      <ExcerptPosts />
    </>
  );
}
