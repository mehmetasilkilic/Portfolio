import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const projectId = urlParams.get('id')


const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAni = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const Banner = () => {
  const [playMarquee, setPlayMarquee] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true);
    }, 2000);
  }, []);
  return (
    <motion.div className='banner' variants={banner}>
      <BannerRowTop title={projectId == 0 ? "AuWallet" : projectId == 1 ? "TimeEX" : projectId == 2 ? "TimeEX" : projectId == 3 ? "App" : ""} />
      <BannerRowCenter title={projectId == 0 ? "Crypto-Wallet" : projectId == 1 ? "Exchange-App" : projectId == 2 ? "Admin-Panel" : projectId == 3 ? "E-commerce" : ""} playMarquee={playMarquee} />
      <BannerRowBottom title={projectId == 0 ? "Mobile-App" : projectId == 1 ? "Mobile-App" : projectId == 2 ? "Web-App" : projectId == 3 ? "Mobile-App" : ""} />
    </motion.div>
  );
};

const AnimatedLetters = ({ title, disabled }) => (
  <motion.span
    className='row-title'
    variants={disabled ? null : banner}
    initial='initial'
    animate='animate'>
    {[...title].map((letter,index) => (
      <motion.span
        className='row-letter'
        key={index}
        variants={disabled ? null : letterAni}>
        {letter}
      </motion.span>
    ))}
  </motion.span>
);

const BannerRowTop = ({ title }) => {
  return (
    <div className={"banner-row"}>
      <div className='row-col'>
        <AnimatedLetters title={title} />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 0.4,
        }}
        className='row-col'>
        {
          projectId === 0 ?
            <ul className="stripeWrapper">
              <li>
                <span className="stripeLeft">CONTEXT</span>
                <span className="stripeRight">AU WALLET</span>
              </li>
              <li>
                <span className="stripeLeft">SERVICES</span>
                <span className="stripeRight">FRONTEND DEVELOPMENT</span>
              </li>
              <li>
                <span className="stripeLeft">PERIOD</span>
                <span className="stripeRight">2022</span>
              </li>
            </ul> :
            projectId === 1 ?
              <ul className="stripeWrapper">
                <li>
                  <span className="stripeLeft">CONTEXT</span>
                  <span className="stripeRight">TIMEEX</span>
                </li>
                <li>
                  <span className="stripeLeft">SERVICES</span>
                  <span className="stripeRight">FRONTEND DEVELOPMENT</span>
                </li>
                <li>
                  <span className="stripeLeft">PERIOD</span>
                  <span className="stripeRight">2021</span>
                </li>
              </ul> :
              projectId === 2 ?
                <ul className="stripeWrapper">
                  <li>
                    <span className="stripeLeft">CONTEXT</span>
                    <span className="stripeRight">TIMEEX ADMIN PANEL</span>
                  </li>
                  <li>
                    <span className="stripeLeft">SERVICES</span>
                    <span className="stripeRight">FRONTEND DEVELOPMENT</span>
                  </li>
                  <li>
                    <span className="stripeLeft">PERIOD</span>
                    <span className="stripeRight">2022</span>
                  </li>
                </ul> :
                projectId === 3 ?
                  <ul className="stripeWrapper">
                    <li>
                      <span className="stripeLeft">CONTEXT</span>
                      <span className="stripeRight">E-COMMERCE PROJECT</span>
                    </li>
                    <li>
                      <span className="stripeLeft">SERVICES</span>
                      <span className="stripeRight">FRONTEND DEVELOPMENT / BACKEND DEVELOPMENT</span>
                    </li>
                    <li>
                      <span className="stripeLeft">PERIOD</span>
                      <span className="stripeRight">2021</span>
                    </li>
                  </ul> : ""
        }
      </motion.div>
    </div>
  );
};

const BannerRowBottom = ({ title }) => {
  return (
    <div className={"banner-row center"}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: 1 }}
        className='scroll'>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 1.8,
          }}>
          scroll
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 1.8,
          }}>
          down
        </motion.span>
      </motion.div>
      <AnimatedLetters title={title} />
    </div>
  );
};

const BannerRowCenter = ({ title, playMarquee }) => {
  return (
    <div className={`banner-row marquee  ${playMarquee && "animate"}`}>
      <motion.div
        initial={{ y: 310 }}
        animate={{ y: 0 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
        className='marquee__inner'>
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} disabled />
      </motion.div>
    </div>
  );
};

export default Banner;
