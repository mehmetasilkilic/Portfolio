import React from "react";
import { motion } from "framer-motion";

import Image from "./Image";

// Import images

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const projectId = urlParams.get('id')

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const itemMain = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
};

const Loader = ({ setLoading }) => {
  return (
    <motion.div className="loader">
      <motion.div
        variants={container}
        onAnimationComplete={() => setLoading(false)}
        initial="hidden"
        animate="show"
        exit="exit"
        className="loader-inner"
      >
        <ImageBlock variants={item} id={projectId == 0 ? "AuWallet-2" : projectId == 1 ? "TimeEX-2" : projectId == 2 ? "Admin-Panel-2" : projectId == 3 ? "image-1" : ""}/>
        <motion.div variants={itemMain} className="transition-image">
          <motion.img
            layoutId="main-image-1"
            src={process.env.PUBLIC_URL + projectId == 0 ? `/images/AuWallet-1.jpg` : projectId == 1 ? `/images/TimeEX-1.jpg` : projectId == 2 ? `/images/Admin-Panel-1.jpg` : projectId == 3 ? `/images/image-2.jpg` : ""}
          />
        </motion.div>
        <ImageBlock variants={item} id={projectId == 0 ? "AuWallet-3" : projectId == 1 ? "TimeEX-3" : projectId == 2 ? "Admin-Panel-3" : projectId == 3 ? "image-3" : ""} />
        <ImageBlock variants={item} id={projectId == 0 ? "AuWallet-4" : projectId == 1 ? "TimeEX-4" : projectId == 2 ? "Admin-Panel-4" : projectId == 3 ? "image-4" : ""} />
        <ImageBlock variants={item} id={projectId == 0 ? "AuWallet-5" : projectId == 1 ? "TimeEX-5" : projectId == 2 ? "Admin-Panel-5" : projectId == 3 ? "image-5" : ""} />
      </motion.div>
    </motion.div>
  );
};

export const ImageBlock = ({ posX, posY, variants, id }) => {
  return (
    <motion.div
      variants={variants}
      className={`image-block ${id}`}
      style={{
        top: `${posY}vh`,
        left: `${posX}vw `,
      }}
    >
      <Image
        src={process.env.PUBLIC_URL + `/images/${id}.webp`}
        fallback={process.env.PUBLIC_URL + `/images/${id}.jpg`}
        alt={id}
      />
    </motion.div>
  );
};
export default Loader;
