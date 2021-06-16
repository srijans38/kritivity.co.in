import React from 'react';
import styles from '../styles/components/NavLink.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

export default function NavLink({ href, path, children }) {
  const router = useRouter();

  return (
    <div className={styles.NavLink}>
      <Link href={href}>{children}</Link>
      {router.asPath === href ? (
        <motion.div
          layoutId="navIndicator"
          // style={{ opacity: router.asPath === href ? 1 : 0 }}
        ></motion.div>
      ) : null}
    </div>
  );
}
