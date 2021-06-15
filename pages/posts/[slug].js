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
        src={post.mainImage.asset.url}
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

const slugQuery = `
  query {
          allPost(where: {_ : {is_draft: false}}) {
            slug {
              current
            }
          }
        }
`;

const postQuery = `
  query($slug: StringFilter!) {
  allPost(where: { _: { is_draft: false },  slug: { current : $slug }}, limit: 1) {
    _id
    title
    body: bodyRaw
    mainImage {
      asset {
        url
      }
    }
    categories {
      title
    }
    slug {
      current
    }
  }
}`;

export const getStaticPaths = async function () {
  const res = await fetch(
    'https://mj5cd582.api.sanity.io/v1/graphql/production/default',
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        query: slugQuery,
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
  const { slug } = params;

  const res = await fetch(
    'https://mj5cd582.api.sanity.io/v1/graphql/production/default',
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        query: postQuery,
        variables: {
          slug: {
            eq: slug,
          },
        },
      }),
    }
  );

  const {
    data: { allPost: post },
  } = await res.json();

  return {
    props: {
      data: {
        post: post[0],
      },
    },
  };
};
