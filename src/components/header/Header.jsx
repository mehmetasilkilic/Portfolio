import { motion } from "framer-motion";
import "./header.scss";

const M = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)"
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)"
  }
};

const A = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)"
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)"
  }
};

const K = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)"
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)"
  }
};

const Header = () => {
  return (
    <div className="wrapperH">
      <motion.div className="containerM">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="itemM"
        >
          <motion.path
            d="M 0 0 L 16.016 0 L 36.523 54.492 L 56.982 0 L 72.949 0 L 72.949 71.094 L 60.645 71.094 L 60.645 47.656 L 61.865 16.309 L 40.869 71.094 L 32.031 71.094 L 11.084 16.357 L 12.305 47.656 L 12.305 71.094 L 0 71.094 L 0 0 Z"
            variants={M}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { delay: 2, duration: 1, ease: [1, 0, 0.8, 1] }
            }}
          />
        </motion.svg>
        <motion.h1
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 1,
              delay: 3.5
            }
          }}
        >ehmet</motion.h1>
      </motion.div>
      <motion.div
        initial={{
          x: 0,
        }}
        animate={{
          x: 150,
          transition: {
            duration: 1,
            delay: 3
          }
        }}
        className="containerA">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="itemA"
        >
          <motion.path
            d="M 51.953 71.094 L 46.143 54.541 L 18.604 54.541 L 12.842 71.094 L 0 71.094 L 26.855 0 L 37.939 0 L 64.844 71.094 L 51.953 71.094 Z M 32.373 15.088 L 22.07 44.58 L 42.676 44.58 L 32.373 15.088 Z"
            variants={A}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { delay: 2, duration: 1, ease: [1, 0, 0.8, 1] }
            }}
          />
        </motion.svg>
        <motion.h1
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 1,
              delay: 3.5
            }
          }}
        >sil</motion.h1>
      </motion.div>
      <motion.div
        initial={{
          x: 0,
        }}
        animate={{
          x: 200,
          transition: {
            duration: 1,
            delay: 3
          }
        }}
        className="containerK">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="itemK"
        >
          <motion.path
            d="M 41.797 71.094 L 20.41 40.381 L 12.354 48.926 L 12.354 71.094 L 0 71.094 L 0 0 L 12.354 0 L 12.354 33.35 L 19.189 24.902 L 39.99 0 L 54.932 0 L 28.516 31.494 L 56.445 71.094 L 41.797 71.094 Z"
            variants={K}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { delay: 2, duration: 1, ease: [1, 0, 0.8, 1] }
            }}
          />
        </motion.svg>
        <motion.h1
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 1,
              delay: 3.5
            }
          }}
        >ılıç</motion.h1>
      </motion.div>
    </div>
  )
}

export default Header

