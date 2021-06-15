import React from 'react';
import styles from '../styles/components/ExcerptPosts.module.css';

export default function ExcerptPosts({ posts }) {
  return (
    <div className={styles.ExcerptPosts}>
      {posts.map((post) => (
        <div className={styles.ExcerptPost} key={post.title}>
          <img src={post.mainImage.asset.url} className={styles.Image} />
          <div className={styles.ExcerptPost_left}>
            <h1 className={styles.Title}>{post.title}</h1>
            <p className="Category">{post.categories[0].title}</p>
            <p className={styles.Excerpt}>{post.excerpt}</p>
            <div className={styles.Tags}>
              {/* {post.tags.map((tag) => (
                <p className={styles.Tag}>{tag}</p>
              ))} */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
