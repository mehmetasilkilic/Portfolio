import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.6,
      }}
      className='header'>
      <div className='header-inner'>
        <div className='logo'>MAK</div>
        <nav className='nav'>
          <li>
            <a href='/design'>The Project</a>
          </li>
          <li>
            <a href='/strategy'>Analysis</a>
          </li>
          <li>
            <a href='/cases'>UI and Components</a>
          </li>
        </nav>
        <div className='hamburger-menu'>
          <span></span>
          <span></span>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
