import React from 'react';
import styles from '../styles/components/PageIndicator.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function PageIndicator({ currPage, pageCount }) {
  const router = useRouter();
  let prev = null,
    next = null;

  if (currPage == 2) {
    prev = '';
  } else if (currPage != 1) {
    prev = `${currPage - 1}`;
  }

  if (currPage != pageCount) {
    next = `${currPage + 1}`;
  }

  return (
    <motion.div layout className={styles.PageIndicator}>
      {prev !== null && (
        <Link href={`/posts/${prev}`}>
          <a disabled={currPage == 1}>Previous</a>
        </Link>
      )}
      <p>1</p>
      {next !== null && (
        <Link href={`/posts/${next}`}>
          <a disabled={currPage == pageCount}>Next</a>
        </Link>
      )}
    </motion.div>
  );
}
