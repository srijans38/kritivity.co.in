import groq from 'groq';
import Image from 'next/image';
import React from 'react';
import { PortableText } from '../../lib/sanity';
import { getClient } from '../../lib/sanity.server';
import styles from '../../styles/pages/Post.module.css';

export default function Post({ data: { post } }) {
  return (
    <div className={styles.PostPage}>
      <Image
        src="/food.jpg"
        width="1280"
        height="500"
        className={styles.Image}
      />
      <div className={styles.ContentWrapper}>
        <div className={styles.Content}>
          <h1 className={styles.PostTitle}>{post.title}</h1>
          <PortableText blocks={post.body} className={styles.Text} />
        </div>
        <div className={styles.SideBar}></div>
      </div>
    </div>
  );
}

const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    body,
    mainImage,
    categories[]->{
      _id,
      title
    },
    "slug": slug.current
  }
`;

export const getStaticPaths = async function () {
  // const paths = await getClient.fetch(
  //   groq`*[_type == "post" && defined(slug.current)][].slug.current`
  // );

  const res = await fetch(
    'https://mj5cd582.api.sanity.io/v1/graphql/production/default',
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        query: `query {
          allPost(where: {_ : {is_draft: false}}) {
            slug {
              current
            }
          }
        }`,
      }),
    }
  );

  const {
    data: { allPost: paths },
  } = await res.json();

  console.log(paths);

  return {
    paths: paths.map((slug) => ({ params: { slug: slug.slug.current } })),
    fallback: false,
  };
};

export const getStaticProps = async function ({ params }) {
  const post = await getClient.fetch(postQuery, {
    slug: params.slug,
  });

  return {
    props: {
      data: { post },
    },
  };
};
