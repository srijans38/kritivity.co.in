import Head from 'next/head';
import ExcerptPosts from '../components/ExcerptPosts';
import ImageCTA from '../components/ImageCTA';
import ShowAllPosts from '../components/ShowAllPosts';
import { motion } from 'framer-motion';

import { getBlurredImage } from '../lib/blurImages';
import { getTopPosts } from '../lib/sanity';
import SEO from '../components/SEO';

export default function Home({ posts }) {
  return (
    <>
      <SEO
        title="Home"
        description="Kriti's Food Blog"
        type="website"
        image="https:/kritivity.co.in/Kritivity-logo.svg"
      />
      <motion.div
        style={{ width: '100%', height: '100%' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.2 } }}
        exit={{ opacity: 0 }}
      >
        <ImageCTA posts={posts.slice(0, 3)} />
        <ExcerptPosts posts={posts.slice(3)} />
        <ShowAllPosts />
      </motion.div>
    </>
  );
}

export const getStaticProps = async () => {
  let { allPost: posts } = await getTopPosts();

  posts = await Promise.all(
    posts.map(async (post) => {
      const blur = await getBlurredImage(
        post.mainImage.asset.url,
        post.mainImage.asset.originalFilename
      );
      const excerpt = post.bodyRaw[0].children[0].text.slice(0, 200);
      return {
        ...post,
        blur,
        excerpt,
      };
    })
  );

  return {
    props: {
      posts,
    },
  };
};
