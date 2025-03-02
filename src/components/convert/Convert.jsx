import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../../styles/convert/Convert.css';

const Convert = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [inView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const listItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <motion.section
      className="convert-container"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      {/* Animated Left Section */}
      <motion.div className="convert-left" variants={leftVariants}>
        <h2>Enhance Conversations with AI</h2>
        <motion.ul>
          <motion.li variants={listItemVariants}>
            Experience real-time, intelligent responses
          </motion.li>
          <motion.li variants={listItemVariants}>
            Automate customer interactions with precision
          </motion.li>
          <motion.li variants={listItemVariants}>
            Ensure secure and seamless AI-driven support
          </motion.li>
        </motion.ul>
      </motion.div>

      {/* Animated Right Section */}
      <motion.div className="convert-right" variants={rightVariants}>
        {/* <img src="/images/3d-stand.png" alt="Conversion Illustration" /> */}
        <img src="/images/chatbot.png" alt="Conversion Illustration" />
      </motion.div>
    </motion.section>
  );
};

export default Convert;
