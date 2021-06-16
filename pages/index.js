import Head from 'next/head';
import ExcerptPosts from '../components/ExcerptPosts';
import ImageCTA from '../components/ImageCTA';
import { motion } from 'framer-motion';

import { getBlurredImage } from '../lib/blurImages';
import { getTopPosts } from '../lib/sanity';

export default function Home({ posts }) {
  return (
    <motion.div
      style={{ width: '100%', height: '100%' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.6 } }}
      exit={{ opacity: 0 }}
    >
      <Head>
        <title>Kritivity | Home</title>
        <meta name="description" content="Kriti's Food Blog" />
      </Head>

      <ImageCTA posts={posts.slice(0, 3)} />
      <ExcerptPosts posts={posts.slice(3)} />
    </motion.div>
  );
}

export const getStaticProps = async () => {
  const { allPost: posts } = await getTopPosts();

  return {
    props: {
      posts: await Promise.all(
        posts.map(async (post) => {
          return {
            ...post,
            blur: await getBlurredImage(post.mainImage.asset.url),
            excerpt: post.bodyRaw[0].children[0].text,
          };
        })
      ),
    },
  };
};
