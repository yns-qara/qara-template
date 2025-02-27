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
            <h1>Let's shape your business</h1>
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
                            title="Lightning-Fast Responses"
                            description="Precomputed queries and optimized execution ensure near-instant replies, making conversations seamless and engaging."
                        />
                    </motion.div>
                    <motion.div variants={cardVariants}>
                        <BenefitCard
                            img={<Benifit2 />}
                            title="AI-Driven Intelligence"
                            description="Powered by advanced deep learning, the chatbot understands context, adapts to user input, and provides human-like responses."
                        />
                    </motion.div>
                    <motion.div variants={cardVariants}>
                        <BenefitCard
                            img={<Benifit1 />}
                            title="Scalable & Database-Agnostic"
                            description="Supports SQL, NoSQL, JPA (Hibernate), and R2DBC, allowing smooth integration with any database architecture."
                        />
                    </motion.div>
                    <motion.div variants={cardVariants}>
                        <BenefitCard
                            img={<Benifit2 />}
                            title="Enterprise-Grade Security"
                            description="With Micronaut Security, your data is fully protected using authentication, authorization, and access control mechanisms."
                        />
                    </motion.div>
                    <motion.div variants={cardVariants}>
                        <BenefitCard
                            img={<Benifit1 />}
                            title="Advanced Logging & Monitoring"
                            description="Integrated with Logback and other logging frameworks, ensuring real-time insights and complete visibility into chatbot interactions."
                        />
                    </motion.div>
                    <motion.div variants={cardVariants}>
                        <BenefitCard
                            img={<Benifit2 />}
                            title="Full Tracing & Debugging Support"
                            description="Utilizes OpenTelemetry, Zipkin, and Jaeger, enabling in-depth tracking of user interactions and chatbot performance."
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
                            title="Multi-Cloud Storage Support"
                            description="Seamlessly integrates with AWS S3, Azure Blob Storage, Google Cloud Storage, and Oracle Object Storage, ensuring flexible data management."
                        />
                    </motion.div>
                    <motion.div variants={cardVariants}>
                        <BenefitCard
                            img={<Benifit4 />}
                            title="Cost-Efficient & Lightweight"
                            description="Built on Micronaut’s lightweight runtime, reducing infrastructure costs while maximizing performance."
                        />
                    </motion.div>
                    <motion.div variants={cardVariants}>
                        <BenefitCard
                            img={<Benifit3 />}
                            title="Customizable & Extendable"
                            description="Easily integrate new AI models, APIs, and custom workflows to meet your business-specific requirements."
                        />
                    </motion.div>
                    <motion.div variants={cardVariants}>
                        <BenefitCard
                            img={<Benifit4 />}
                            title="Multi-Channel Deployment"
                            description="Deploy across web apps, mobile apps, and messaging platforms like WhatsApp, Slack, or Facebook Messenger."
                        />
                    </motion.div>
                    <motion.div variants={cardVariants}>
                        <BenefitCard
                            img={<Benifit3 />}
                            title="Smart Analytics & Metrics"
                            description="Built-in Micrometer integration provides real-time performance tracking, user engagement insights, and chatbot efficiency reports."
                        />
                    </motion.div>
                    <motion.div variants={cardVariants}>
                        <BenefitCard
                            img={<Benifit4 />}
                            title="Hassle-Free Maintenance & Updates"
                            description="Modular architecture ensures effortless scaling, updates, and feature enhancements without downtime."
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Benifits;
