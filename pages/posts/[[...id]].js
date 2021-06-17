import React from 'react';
import {
  getAllPostsCount,
  getPostsByLimitAndOffset,
  perPageLimit,
} from '../../lib/sanity';
import styles from '../../styles/pages/PostList.module.css';
import Image from 'next/image';
import Link from 'next/link';
import PageIndicator from '../../components/PageIndicator';
import { motion } from 'framer-motion';
import PostCard from '../../components/PostCard';
import { getBlurredImage } from '../../lib/blurImages';

export default function PostList({ pageNum, posts, pageCount }) {
  return (
    <div className={styles.PostContainer}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.6 } }}
        exit={{ opacity: 0 }}
        className={styles.PostGrid}
      >
        {posts.map((post) => (
          <PostCard post={post} />
        ))}
      </motion.div>
      <PageIndicator currPage={pageNum} pageCount={pageCount} />
    </div>
  );
}

export const getStaticPaths = async () => {
  const postCount = await getAllPostsCount();

  const pageCount = Math.ceil(postCount / perPageLimit);

  let paths = [];

  for (let i = 0; i < pageCount; i++) {
    paths.push({
      params: {
        id: i == 0 ? [] : [`${i + 1}`],
      },
    });
  }

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { id } = params;

  const offset = id ? perPageLimit * (parseInt(id[0]) - 1) : 0;

  let { allPost } = await getPostsByLimitAndOffset({
    limit: perPageLimit,
    offset,
  });

  const postCount = await getAllPostsCount();
  const pageCount = Math.ceil(postCount / perPageLimit);

  allPost = await Promise.all(
    allPost.map(async (post) => {
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
      posts: allPost,
      pageNum: id ? id[0] : 1,
      pageCount,
    },
  };
};
