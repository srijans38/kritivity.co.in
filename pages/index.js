import Head from 'next/head';
import Image from 'next/image';
import ExcerptPosts from '../components/ExcerptPosts';
import Header from '../components/Header';
import ImageCTA from '../components/ImageCTA';

const topPostsQuery = `query {
  allPost(where: {_ : {is_draft: false}}, sort: {_createdAt: DESC}, limit: 6) {
    _id
    title
    categories {
      title
    }
    bodyRaw
    slug {
      current
    }
    mainImage {
      asset {
        url
      }
    }
  }
}`;

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
  const res = await fetch(
    'https://mj5cd582.api.sanity.io/v1/graphql/production/default',
    {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        query: topPostsQuery,
      }),
    }
  );

  const {
    data: { allPost: posts },
  } = await res.json();

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
