import React, { useState } from 'react';
import styles from '../styles/components/MobileMenu.module.css';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  let width = null;

  const handleClick = () => setOpen(!open);

  return (
    <div className={styles.MobileMenu}>
      <AnimatePresence>
        <motion.div
          key="top"
          className={styles.MobileNav}
          initial={{ x: 540 }}
          animate={{ x: open ? 0 : 540 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'circOut' }}
        ></motion.div>

        <button onClick={handleClick}>
          {!open && (
            <motion.svg
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
                  stroke-width="7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <line
                  id="middle"
                  x1="23.5"
                  y1="28.5"
                  x2="96.5"
                  y2="28.5"
                  stroke="black"
                  stroke-width="7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <line
                  id="top"
                  x1="3.5"
                  y1="3.5"
                  x2="96.5"
                  y2="3.5"
                  stroke="black"
                  stroke-width="7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </motion.svg>
          )}
          {open && (
            <motion.svg
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
                stroke-width="7"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <line
                x1="5.90897"
                y1="5.73835"
                x2="83.9053"
                y2="56.3898"
                stroke="black"
                stroke-width="7"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </motion.svg>
          )}
        </button>
      </AnimatePresence>
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
