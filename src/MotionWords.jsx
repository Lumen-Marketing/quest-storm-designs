import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

// The same quiet word reveal is used at section entrances on both concepts.
export default function MotionWords({ text, className = '', delay = 0 }) {
  const reduced = useReducedMotion();
  return <motion.span
    className={`motion-words ${className}`}
    initial={reduced ? false : 'hidden'}
    whileInView="shown"
    viewport={{ once: true, amount: 0.35 }}
    variants={{ hidden: {}, shown: { transition: { delayChildren: delay, staggerChildren: 0.055 } } }}
    aria-label={text}
  >{text.split(/\s+/).map((word, index) => <motion.span
      key={`${word}-${index}`}
      aria-hidden="true"
      className="motion-word"
      variants={{ hidden: { opacity: 0.16, y: 18, filter: 'blur(6px)' }, shown: { opacity: 1, y: 0, filter: 'blur(0px)' } }}
      transition={{ duration: 0.62, ease: [0.23, 1, 0.32, 1] }}
    >{word}</motion.span>)}</motion.span>;
}
