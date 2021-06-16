import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../styles/components/ImageCTA.module.css';
import { motion } from 'framer-motion';

const container = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.8 },
  },
};

const image = {
  hover: {},
};

export default function ImageCTA({ posts }) {
  return (
    <motion.div
      className={styles.ImageCTA}
      initial="initial"
      animate="animate"
      variants={container}
    >
      {posts &&
        posts.map((post) => (
          <motion.div key={post._id} className={styles.ImageCTAPost}>
            <Link href={`/posts/${post.slug.current}`}>
              <motion.a
                className={styles.a}
                whileHover={{
                  boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                  cursor: 'pointer',
                  scale: 1.02,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <Image
                  src={post.mainImage.asset.url}
                  alt={post.title}
                  className={styles.Image}
                  width="427"
                  height="500"
                  layout="responsive"
                  placeholder="blur"
                  blurDataURL={post.blur.imgData}
                />
              </motion.a>
            </Link>
            <p className="Category">{post.categories[0].title}</p>
            <Link href={`/posts/${post.slug.current}`}>
              <a>
                <h1 className={styles.Title}>{post.title}</h1>
              </a>
            </Link>
          </motion.div>
        ))}
    </motion.div>
  );
}
