import Image from 'next/image';
import React from 'react';
import styles from '../styles/pages/Post.module.css';
import { motion } from 'framer-motion';

import BlockContent from '@sanity/block-content-to-react';
import { getPostDataBySlug, getSlugs } from '../lib/sanity';

const imageSerializer = (props) => {
  const {
    node: {
      asset: { _ref },
    },
    options: { projectId, dataset },
  } = props;

  const url = `https://cdn.sanity.io/images/${projectId}/${dataset}/${_ref
    .slice(6)
    .slice(0, -4)}.jpg`;

  return <Image src={url} width="960" height="640" layout="responsive"></Image>;
};

export default function Post({ data: { post } }) {
  return (
    <motion.div
      className={styles.PostPage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.6 } }}
      exit={{ opacity: 0 }}
    >
      <Image
        src={post.mainImage.asset.url}
        width="1280"
        height="500"
        layout="responsive"
        className={styles.Image}
        alt={post.title}
      />
      <div className={styles.ContentWrapper}>
        <div className={styles.Content}>
          <h1 className={styles.PostTitle}>{post.title}</h1>
          <BlockContent
            blocks={post.body}
            className={styles.Text}
            projectId="mj5cd582"
            dataset="production"
            // imageOptions={{}}
            serializers={{ types: { image: imageSerializer } }}
          />
        </div>
        <div className={styles.SideBar}></div>
      </div>
    </motion.div>
  );
}

export const getStaticPaths = async function () {
  const { allPost: paths } = await getSlugs();

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
