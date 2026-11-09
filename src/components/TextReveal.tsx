import React from 'react';
import { motion } from 'framer-motion';

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  highlightWords?: string[];
  highlightClass?: string;
}

export const TextReveal: React.FC<TextRevealProps> = ({
  text,
  className = '',
  delay = 0,
  as: Component = 'h1',
  highlightWords = [],
  highlightClass = 'text-[#E87524]',
}) => {
  const words = text.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: {
      y: '120%',
      opacity: 0,
      rotateX: 30,
      filter: 'blur(8px)',
    },
    visible: {
      y: '0%',
      opacity: 1,
      rotateX: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <Component className={`${className} overflow-hidden`}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        className="inline-flex flex-wrap gap-x-[0.28em] gap-y-1"
      >
        {words.map((word, i) => {
          const isHighlighted = highlightWords.some((hw) =>
            word.toLowerCase().includes(hw.toLowerCase())
          );
          return (
            <span key={i} className="inline-block overflow-hidden py-0.5">
              <motion.span
                variants={wordVariants}
                className={`inline-block will-change-transform ${
                  isHighlighted ? highlightClass : ''
                }`}
              >
                {word}
              </motion.span>
            </span>
          );
        })}
      </motion.span>
    </Component>
  );
};
