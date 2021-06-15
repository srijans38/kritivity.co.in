import Head from 'next/head';
import ExcerptPosts from '../components/ExcerptPosts';
import ImageCTA from '../components/ImageCTA';

import { getTopPosts } from '../lib/sanity';

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Kritivity | Home</title>
        <meta name="description" content="Kriti's Food Blog" />
      </Head>

      <ImageCTA posts={posts.slice(0, 3)} />
      <ExcerptPosts posts={posts.slice(3)} />
    </>
  );
}

export const getStaticProps = async () => {
  const { allPost: posts } = await getTopPosts();

  return {
    props: {
      posts: posts.map((post) => {
        return {
          ...post,
          excerpt: post.bodyRaw[0].children[0].text,
        };
      }),
    },
  };
};
