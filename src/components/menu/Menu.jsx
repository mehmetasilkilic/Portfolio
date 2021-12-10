import "./menu.scss";
import { motion } from "framer-motion";

const Menu = ({ menuOpen, setMenuOpen }) => {

  const menuItem = {
    hover: {
      originX: 0,
      scale: 1.3,
      textShadow: "0px 0px 5px rgb(255,255,255)",
      transition: {
        type: 'spring',
        stiffness: 300,
      }
    }
  }

  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <motion.li
          variants={menuItem}
          whileHover="hover"
          onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </motion.li>
        <motion.li
          variants={menuItem}
          whileHover="hover"
          onClick={() => setMenuOpen(false)}>
          <a href="#portfolio">Portfolio</a>
        </motion.li>
      </ul>
    </div>
  );
}

export default Menu
