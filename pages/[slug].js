import Image from 'next/image';
import React from 'react';
import styles from '../styles/pages/Post.module.css';
import { motion } from 'framer-motion';

import BlockContent from '@sanity/block-content-to-react';
import { getPostDataBySlug, getSlugs } from '../lib/sanity';
import { getBlurredImage } from '../lib/blurImages';
import { getImageSerializer } from '../lib/getImageSerializer';

const getDateString = (date) => {
  const d = new Date(date);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
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
        placeholder="blur"
        blurDataURL={post.blur.imgData}
        alt={post.title}
      />
      <div className={styles.ContentWrapper}>
        <div className={styles.Content}>
          <h1 className={styles.PostTitle}>{post.title}</h1>
          <p>Published on : {getDateString(post.publishedAt)}</p>
          <BlockContent
            blocks={post.body}
            className={styles.Text}
            projectId="mj5cd582"
            dataset="production"
            // imageOptions={{}}
            serializers={{ types: { image: getImageSerializer() } }}
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

  const {
    allPost: [post],
  } = await getPostDataBySlug(slug);

  post.blur = await getBlurredImage(
    post.mainImage.asset.url,
    post.mainImage.asset.originalFilename
  );

  return {
    props: {
      data: {
        post: post,
      },
    },
  };
};
