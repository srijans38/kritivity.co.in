import React from 'react';
import Link from 'next/link';
import styles from '../styles/components/ExcerptPosts.module.css';
import Image from 'next/image';

export default function ExcerptPosts({ posts }) {
  return (
    <div className={styles.ExcerptPosts}>
      {posts.map((post) => (
        <div className={styles.ExcerptPost} key={post.title}>
          <Link href={`/${post.slug.current}`}>
            <a>
              <Image
                src={post.mainImage.asset.url}
                alt={post.title}
                className={styles.Image}
                width="625"
                height="250"
                placeholder="blur"
                blurDataURL={post.blur.imgData}
              />
            </a>
          </Link>
          <div className={styles.ExcerptPost_left}>
            <Link href={`/${post.slug.current}`}>
              <a>
                <h1 className={styles.Title}>{post.title}</h1>
              </a>
            </Link>
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
