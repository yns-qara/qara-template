import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../../styles/hero/Hero.css';
import { useNavigate } from "react-router-dom";

import { MdKeyboardDoubleArrowRight } from "react-icons/md";
const Hero = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const navigate = useNavigate();

    return (
        <motion.section
            className="hero-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
        >
            <motion.div
                className="left-hero"
                ref={ref}
                initial={{ x: -50, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 1, ease: 'easeOut' }}
            >
                <h1>
                    Meet Your Smartest <span>AI Chatbot</span>
                </h1>
                <p>
                Where advanced AI meets <span>cloud technology</span> for fast, intelligent, and personalized conversations.
                </p>
                <div className="btns-hero">
                    <motion.button
                        className="hero-button hover-btn"
                        data-hover="Click me!"
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate("/chat")}
                    >
                        <span>Start Now</span>
                        {/* <MdKeyboardDoubleArrowRight /> */}
                    </motion.button>
                </div>
            </motion.div>
            <motion.div
                className="right-hero"
                ref={ref}
                initial={{ x: 50, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 1, ease: 'easeOut' }}
            >
                <img src="/images/hero-img1.png" alt="Hero Illustration" />

            </motion.div>
        </motion.section>
    );
};

export default Hero;
