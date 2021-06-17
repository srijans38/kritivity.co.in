import React from 'react';
import styles from '../styles/components/PageIndicator.module.css';
import { useRouter } from 'next/router';

export default function PageIndicator({ currPage, pageCount }) {
  const router = useRouter();

  const handlePrevious = () => {
    if (currPage == 2) {
      router.push('/posts');
    } else if (currPage != 1) {
      router.push(`${currPage - 1}`);
    }
  };

  const handleNext = () => {
    if (currPage == pageCount) {
      return;
    } else {
      router.push(`${currPage + 1}`);
    }
  };

  return (
    <div className={styles.PageIndicator}>
      <button disabled={currPage == 1} onClick={handlePrevious}>
        Previous
      </button>
      <p>1</p>
      <button disabled={currPage == pageCount} onClick={handleNext}>
        Next
      </button>
    </div>
  );
}
