import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/components/PostCard.module.css';

export default function PostCard({ post }) {
  return (
    <motion.div className={styles.PostCard} key={post._id}>
      <Link href={`/${post.slug.current}`}>
        <a>
          <Image
            src={post.mainImage.asset.url}
            layout="responsive"
            height="200"
            width="400"
          ></Image>
        </a>
      </Link>
      <div className={styles.Content}>
        <h1>{post.title}</h1>
        <p>{post.bodyRaw[0].children[0].text.slice(0, 200)}</p>
      </div>
    </motion.div>
  );
}
