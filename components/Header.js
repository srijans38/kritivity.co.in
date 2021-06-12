import React from 'react';
import styles from '../styles/components/Header.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <div className={styles.Header}>
      <div className={styles.Header_top}>
        <Link href="/">
          <a>
            <img
              src="/Kritivity-logo.svg"
              alt="Kritivity Logo"
              className={styles.Logo}
            />
          </a>
        </Link>
        <ul className={styles.SocialIcons}>
          <li>
            <a href="https://youtube.com/">Instagram</a>
          </li>
          <li>
            <a href="https://youtube.com/">Twitter</a>
          </li>
          <li>
            <a href="https://youtube.com/">Facebook</a>
          </li>
        </ul>
      </div>
      <ul className={styles.NavLinks}>
        <li>
          <Link href="/">
            <a>HOME</a>
          </Link>
        </li>
        <li>
          <Link href="/cat/recipes">
            <a>RECIPES</a>
          </Link>
        </li>
        <li>
          <Link href="/cat/food-reviews">
            <a>FOOD RECIPES</a>
          </Link>
        </li>
        <li>
          <Link href="/gorsi">
            <a>GORSI</a>
          </Link>
        </li>
        <li>
          <Link href="/about-me">
            <a>ABOUT ME</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
