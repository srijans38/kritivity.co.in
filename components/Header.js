import React from 'react';
import styles from '../styles/components/Header.module.css';
import NavLink from './NavLink';
import Link from 'next/link';
import Facebook from './icons/Facebook';
import Instagram from './icons/Instagram';
import Twitter from './icons/Twitter';
import { AnimateSharedLayout } from 'framer-motion';

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
            <a
              href="https://www.instagram.com/cookingwithkritivity"
              target="social"
            >
              <Instagram />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/kritivity" target="social">
              <Twitter />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/kritivity.co.in" target="social">
              <Facebook />
            </a>
          </li>
        </ul>
      </div>
      <ul className={styles.NavLinks}>
        <li>
          <NavLink href="/">
            <a>HOME</a>
          </NavLink>
        </li>
        <li>
          <NavLink href="/posts">
            <a>ALL POSTS</a>
          </NavLink>
        </li>
        <li>
          <NavLink href="/gorsi">
            <a>GORSI</a>
          </NavLink>
        </li>
        <li>
          <NavLink href="/about-me">
            <a>ABOUT ME</a>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
