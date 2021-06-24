import React, { useState } from 'react';
import styles from '../styles/components/MobileMenu.module.css';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import NavLink from './NavLink';

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  let width = null;

  const handleClick = () => setOpen(!open);

  return (
    <div className={styles.MobileMenu}>
      <motion.div
        key="top"
        className={styles.MobileNav}
        // initial={{ y: -10, opacity: 0, pointerEvents: 'none' }}
        animate={{
          y: open ? 0 : -10,
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          skew: open ? 0 : 2,
        }}
        transition={{ ease: 'circOut' }}
        onClick={handleClick}
      >
        <ul initial="initial" animate="animate" className={styles.NavLinks}>
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
      </motion.div>

      <button onClick={handleClick}>
        {!open && (
          <motion.svg
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            layout
            width="1em"
            height="1em"
            viewBox="0 0 100 57"
            fill="none"
            aria-hidden="true"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="menu">
              <line
                id="bottom"
                x1="3.5"
                y1="53.5"
                x2="96.5"
                y2="53.5"
                stroke="black"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line
                id="middle"
                x1="23.5"
                y1="28.5"
                x2="96.5"
                y2="28.5"
                stroke="black"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line
                id="top"
                x1="3.5"
                y1="3.5"
                x2="96.5"
                y2="3.5"
                stroke="black"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </motion.svg>
        )}
        {open && (
          <motion.svg
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            layout
            width="1em"
            height="1em"
            viewBox="0 0 89 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="5.09649"
              y1="56.3906"
              x2="83.0929"
              y2="5.73919"
              stroke="black"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line
              x1="5.90897"
              y1="5.73835"
              x2="83.9053"
              y2="56.3898"
              stroke="black"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        )}
      </button>
      {open && (
        <style jsx global>
          {`
            body {
              overflow-y: hidden;
            }
          `}
        </style>
      )}
    </div>
  );
}
