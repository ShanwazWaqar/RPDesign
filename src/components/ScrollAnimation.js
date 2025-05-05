// src/components/ScrollAnimation.js
import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const ScrollAnimation = ({ 
  children, 
  className,
  animationType = 'fadeInUp', // 'fadeInUp', 'fadeIn', 'slideInLeft', 'slideInRight'
  delay = 0, 
  duration = 0.6,
  threshold = 0.1, // Fraction of element that needs to be visible to trigger animation
  once = true, // Once animation is played, it doesn't reset when scrolling away
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    amount: threshold,
    once: once 
  });
  const controls = useAnimation();
  
  // Define animation variants
  const variants = {
    fadeInUp: {
      hidden: { opacity: 0, y: 30 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: duration, 
          delay: delay,
          ease: "easeOut"
        }
      },
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { 
          duration: duration, 
          delay: delay,
          ease: "easeOut"
        }
      },
    },
    slideInLeft: {
      hidden: { opacity: 0, x: -50 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { 
          duration: duration, 
          delay: delay,
          ease: "easeOut"
        }
      },
    },
    slideInRight: {
      hidden: { opacity: 0, x: 50 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { 
          duration: duration, 
          delay: delay,
          ease: "easeOut"
        }
      },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: { 
          duration: duration, 
          delay: delay,
          ease: "easeOut"
        }
      },
    },
  };
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [isInView, controls, once]);
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants[animationType]}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;