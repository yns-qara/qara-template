import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../../styles/benefits/benifits.css';
import BenefitCard from './BenefitCard';

import Benifit1 from '../../svg/Benifit1';
import Benifit2 from '../../svg/Benifit2';
import Benifit3 from '../../svg/Benifit3';
import Benifit4 from '../../svg/Benifit4';

const Benifits = () => {
    const middleControls = useAnimation();
    const leftControls = useAnimation();
    const rightControls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.1 });
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        if (inView) {
            setSticky(true);
            middleControls.start({
                scale: 1,
                opacity: 1,
                transition: { duration: 0.5, ease: 'easeOut' },
            });

            leftControls.start('visible');
            rightControls.start('visible');
        } else {
            setSticky(false);
            middleControls.start({ scale: 0.8, opacity: 0 });
            leftControls.start('hidden');
            rightControls.start('hidden');
        }
    }, [inView, middleControls, leftControls, rightControls]);

    const staggerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section className="benifits-container" ref={ref}>
            <h1>Let's optimize your business</h1>
            <div className="benifits-items">
                {/* Left Section */}
                <motion.div
                    className="benifits-left"
                    variants={staggerVariants}
                    initial="hidden"
                    animate={leftControls}
                >
                    <motion.div variants={cardVariants}>
                        <BenefitCard
                            img={<Benifit1 />}
                            title="Pushes the brand"
                            description="Increase chances for double impressions with a dual approach plus coverage of all CSS markets."
                        />
                    </motion.div>
                    <motion.div variants={cardVariants}>
                        <BenefitCard
                            img={<Benifit2 />}
                            title="Reduces costs"
                            description="Up to 20% bid discount to either reinvest or just save on ad spend."
                        />
                    </motion.div>
                    <motion.div variants={cardVariants}>
                        <BenefitCard
                            img={<Benifit1 />}
                            title="Pushes the brand"
                            description="Increase chances for double impressions with a dual approach plus coverage of all CSS markets."
                        />
                    </motion.div>
                    <motion.div variants={cardVariants}>
                        <BenefitCard
                            img={<Benifit2 />}
                            title="Reduces costs"
                            description="Up to 20% bid discount to either reinvest or just save on ad spend."
                        />
                    </motion.div>
                    <motion.div variants={cardVariants}>
                        <BenefitCard
                            img={<Benifit1 />}
                            title="Pushes the brand"
                            description="Increase chances for double impressions with a dual approach plus coverage of all CSS markets."
                        />
                    </motion.div>
                    <motion.div variants={cardVariants}>
                        <BenefitCard
                            img={<Benifit2 />}
                            title="Reduces costs"
                            description="Up to 20% bid discount to either reinvest or just save on ad spend."
                        />
                    </motion.div>
                </motion.div>
                {/* Middle Section */}
                <motion.div
                    className={`benifits-middle ${sticky ? 'sticky' : ''}`}
                    animate={middleControls}
                    initial={{ scale: 0.8, opacity: 0 }}
                >
                    <video
                        className="animated-video"
                        src="/young-man.webm"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        Your browser does not support the video tag.
                    </video>
                </motion.div>
                {/* Right Section */}
                <motion.div
                    className="benifits-right"
                    variants={staggerVariants}
                    initial="hidden"
                    animate={rightControls}
                >
                    <motion.div variants={cardVariants}>
                        <BenefitCard
                            img={<Benifit3 />}
                            title="Increases traffic"
                            description="Added visibility from placement of products on one of Europe's largest CSS networks."
                        />
                    </motion.div>
                    <motion.div variants={cardVariants}>
                        <BenefitCard
                            img={<Benifit4 />}
                            title="Enhances efficiency"
                            description="Higher bids with the same amount of advertisement expenses."
                        />
                    </motion.div>
                    <motion.div variants={cardVariants}>
                        <BenefitCard
                            img={<Benifit3 />}
                            title="Increases traffic"
                            description="Added visibility from placement of products on one of Europe's largest CSS networks."
                        />
                    </motion.div>
                    <motion.div variants={cardVariants}>
                        <BenefitCard
                            img={<Benifit4 />}
                            title="Enhances efficiency"
                            description="Higher bids with the same amount of advertisement expenses."
                        />
                    </motion.div>
                    <motion.div variants={cardVariants}>
                        <BenefitCard
                            img={<Benifit3 />}
                            title="Increases traffic"
                            description="Added visibility from placement of products on one of Europe's largest CSS networks."
                        />
                    </motion.div>
                    <motion.div variants={cardVariants}>
                        <BenefitCard
                            img={<Benifit4 />}
                            title="Enhances efficiency"
                            description="Higher bids with the same amount of advertisement expenses."
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Benifits;
