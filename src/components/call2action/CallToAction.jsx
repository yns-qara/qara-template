import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../../styles/call2action/CallToAction.css';
import { useNavigate } from 'react-router-dom';
// import WomanPhone from '../svg/WomanPhone';

const CallToAction = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });
  const navigate = useNavigate();
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [inView, controls]);

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <motion.section
      className="call-to-action"
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={controls}
    >
      {/* Animated WomanPhone Image */}
      <motion.div className='call-img' variants={imageVariants}>
        {/* <WomanPhone /> */}
        <img src="/images/b-man.png" alt="" />
      </motion.div>

      {/* Animated Right Content */}
      <motion.div className="cta-right">
        <motion.h1 variants={textVariants}>
        Engage More Users with Your AI-Powered Chatbot
        </motion.h1>
        <motion.p variants={textVariants}>
          Don't settle for an ordinary chatbot. Upgrade to an AI assistant that truly understands, interacts, and adapts.
        </motion.p>
        <motion.button
        
        onClick={() => navigate('/chat')}
        variants={textVariants}>Start Now</motion.button>
      </motion.div>
    </motion.section>
  );
};

export default CallToAction;
