import React from 'react';
import { motion, type Variants } from 'framer-motion';

export type AnimationType = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'blur-in';

interface MotionRevealProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  viewportAmount?: number;
}

export const MotionReveal: React.FC<MotionRevealProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 0.7,
  className = '',
  viewportAmount = 0.15,
}) => {
  const getVariants = (): Variants => {
    switch (animation) {
      case 'fade-up':
        return {
          hidden: { opacity: 0, y: 50, filter: 'blur(8px)' },
          visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
          },
        };
      case 'fade-down':
        return {
          hidden: { opacity: 0, y: -40, filter: 'blur(6px)' },
          visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
          },
        };
      case 'fade-left':
        return {
          hidden: { opacity: 0, x: -50, filter: 'blur(6px)' },
          visible: {
            opacity: 1,
            x: 0,
            filter: 'blur(0px)',
            transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
          },
        };
      case 'fade-right':
        return {
          hidden: { opacity: 0, x: 50, filter: 'blur(6px)' },
          visible: {
            opacity: 1,
            x: 0,
            filter: 'blur(0px)',
            transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
          },
        };
      case 'zoom-in':
        return {
          hidden: { opacity: 0, scale: 0.9, filter: 'blur(6px)' },
          visible: {
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)',
            transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
          },
        };
      case 'blur-in':
        return {
          hidden: { opacity: 0, filter: 'blur(16px)' },
          visible: {
            opacity: 1,
            filter: 'blur(0px)',
            transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
          },
        };
      default:
        return {
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { duration, delay } },
        };
    }
  };

  return (
    <motion.div
      variants={getVariants()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: viewportAmount }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Composant Conteneur de Stagger (Anime chaque enfant les uns après les autres)
interface StaggerContainerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  initialDelay?: number;
  className?: string;
  viewportAmount?: number;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  staggerDelay = 0.1,
  initialDelay = 0.1,
  className = '',
  viewportAmount = 0.1,
}) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: initialDelay,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: viewportAmount }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Enfant animé au sein d'un StaggerContainer
export const StaggerItem: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 45, filter: 'blur(6px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
};

