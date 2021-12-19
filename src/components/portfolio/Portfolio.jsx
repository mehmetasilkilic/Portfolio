import "./portfolio.scss"
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import About from "../about/About";
import { Link } from 'react-router-dom'
import { Close } from "@material-ui/icons";

const projects = [
  {
    id: 1,
    title: "E-Commerce",
    img: "assets/ecom.jpg",
  },
  {
    id: 2,
    title: "JDM Blog",
    img: "assets/jdmblog.jpg",
  },
  {
    id: 3,
    title: "Portfolio",
    img: "assets/portfolio.jpg",
  },
  {
    id: 4,
    title: "Fobbo",
    img: "assets/fobbo.jpg",
  },
];


const Portfolio = () => {

  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  const aboutRef = useRef();

  const openAbout = () => {
    aboutRef.current.openAbout();
  };

  const leftVariants = {
    hidden: {
      y: 200,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 0.3
      }
    },
    close: {
      y: 200,
      opacity: 0,
      transition: {
        duration: 0.3,
      }
    }
  }

  const rightVariants = {
    hidden: {
      y: -200,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 0.6
      }
    },
    close: {
      y: -200,
      opacity: 0,
      transition: {
        duration: 0.3,
      }
    }
  }

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <div className="container">
        {projects.map((project, id) => (
          <div className="wrapper" key={id}>
            <div className="imgWrapper">
              <img src={project.img} alt="" />
            </div>
            <div className="titleWrapper">
              <h3>{project.title}</h3>
            </div>
            <div className="buttonWrapper">
              <Link to={`/project`}><button>Learn More</button></Link>
            </div>
          </div>
        ))}
      </div>
      <div className="portfolioBottom">
        <div className="kbWrapper">
          <img src="assets/kb.png" alt="" />
          <button onClick={openAbout}>About Me</button>
        </div>
      </div>
      <About ref={aboutRef}>
        <AnimatePresence>
          <motion.div
            variants={leftVariants}
            initial="hidden"
            animate="visible"
            exit="close"
            className="left">
            <h2>About Me</h2>
            <p>I'm a Frontend Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Portfolio section.</p>
            <p>I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
            <h3>Competencies</h3>
            <p>HTML5, CSS3/SASS, JavaScript, ReactJS, Redux, NextJS, NodeJS, Photoshop</p>
            <h4>Abou</h4>
          </motion.div>
        </AnimatePresence>
        <AnimatePresence>
          <motion.div
            variants={rightVariants}
            initial="hidden"
            animate="visible"
            exit="close"
            className="right">
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
              <textarea placeholder="Message"></textarea>
              <button disabled type="submit">Send</button>
              {message && <span>Thanks, I'll reply ASAP</span>}
            </form>
            <Close className="close" onClick={() => aboutRef.current.close()} />
            <h3>Contact</h3>
          </motion.div>
        </AnimatePresence>
      </About>
    </div>
  )
}

export default Portfolio
