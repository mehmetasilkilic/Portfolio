import "./footer.scss";
import { Person, Mail } from "@material-ui/icons";
import { motion } from "framer-motion";

const Footer = () => {

  const footerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 4
      }
    }
  }

  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="left">
        <div className="itemContainer">
          <Person className="icon" />
          <span>+90 542 387 00 87</span>
        </div>
        <div className="itemContainer">
          <Mail className="icon" />
          <span>mehmetasil96@gmail.com</span>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer

