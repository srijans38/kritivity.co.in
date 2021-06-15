import Image from 'next/image';
import React from 'react';
import styles from '../../styles/pages/Post.module.css';

import BlockContent from '@sanity/block-content-to-react';
import { getPostDataBySlug, getSlugs } from '../../lib/sanity';

export default function Post({ data: { post } }) {
  return (
    <div className={styles.PostPage}>
      <Image
        src={post.mainImage.asset.url}
        width="1280"
        height="500"
        className={styles.Image}
        alt={post.title}
      />
      <div className={styles.ContentWrapper}>
        <div className={styles.Content}>
          <h1 className={styles.PostTitle}>{post.title}</h1>
          <BlockContent blocks={post.body} className={styles.Text} />
        </div>
        <div className={styles.SideBar}></div>
      </div>
    </div>
  );
}

export const getStaticPaths = async function () {
  const { allPost: paths } = await getSlugs();

  console.log(paths);

  return {
    paths: paths.map((slug) => ({ params: { slug: slug.slug.current } })),
    fallback: false,
  };
};

export const getStaticProps = async function ({ params }) {
  const { slug } = params;

  const { allPost: post } = await getPostDataBySlug(slug);

  return {
    props: {
      data: {
        post: post[0],
      },
    },
  };
};
