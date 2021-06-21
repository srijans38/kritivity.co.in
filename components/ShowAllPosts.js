import React from 'react';
import Link from 'next/link';
import styles from '../styles/components/ShowAllPosts.module.css';

export default function ShowAllPosts() {
  return (
    <div className={styles.ShowAllPosts}>
      <Link href="/posts">
        <a>Show All Posts</a>
      </Link>
    </div>
  );
}
