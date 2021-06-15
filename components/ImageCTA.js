import Image from 'next/image';
import React from 'react';
import styles from '../styles/components/ImageCTA.module.css';
export default function ImageCTA({ posts }) {
  return (
    <div className={styles.ImageCTA}>
      {posts &&
        posts.map((post) => (
          <div key={post._id} className={styles.ImageCTAPost}>
            <Image
              src={post.mainImage.asset.url}
              alt={post.title}
              className={styles.Image}
              width="427"
              height="500"
              layout="responsive"
            />
            <p className="Category">{post.categories[0].title}</p>
            <h1 className={styles.Title}>{post.title}</h1>
          </div>
        ))}
    </div>
  );
}
