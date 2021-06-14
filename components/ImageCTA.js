import Image from 'next/image';
import React from 'react';
import styles from '../styles/components/ImageCTA.module.css';
export default function ImageCTA({ posts }) {
  let topPosts = [
    {
      title: 'The Best Ramen Noodles in Tokyo',
      src: '/ImageCTA1.png',
      category: 'recipes',
    },
    {
      title: 'How to make your own Pasta at Home',
      src: '/ImageCTA2.png',
      category: 'recipes',
    },
    {
      title: 'Learn the art of making Rotis',
      src: '/ImageCTA3.png',
      category: 'recipes',
    },
  ];

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
