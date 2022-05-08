import "./portfolio.scss"
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import About from "../about/About";
import { Link } from 'react-router-dom'
import { Close } from "@material-ui/icons";

const projects = [
  {
    id: 1,
    title: "AuWallet",
    img: "images/AuWallet-1.jpg",
  },
  {
    id: 2,
    title: "TimeEX",
    img: "images/TimeEX-1.jpg",
  },
  {
    id: 3,
    title: "TimeEX-Admin-Panel",
    img: "images/Admin-Panel-1.jpg",
  },
  {
    id: 4,
    title: "E-commerce",
    img: "assets/ecom.jpg",
  },
];


const Portfolio = () => {

  const refreshPage = () => {
    setTimeout(()=>{
        window.location.reload(false);
    }, 500);
}

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
              <Link to={`/project?id=${id}`}><button onClick={refreshPage}>Learn More</button></Link>
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
        <motion.div
          variants={leftVariants}
          initial="hidden"
          animate="visible"
          className="left">
          <h2>About Me</h2>
          <p>I'm a Frontend Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Portfolio section.</p>
          <p>I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
          <h3>Competencies</h3>
          <p>HTML5, CSS3/SASS, JavaScript, ReactJS, Redux, NextJS, Vue, Photoshop</p>
          <h4>Abou</h4>
        </motion.div>
        <motion.div
          variants={rightVariants}
          initial="hidden"
          animate="visible"
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
      </About>
    </div>
  )
}

export default Portfolio
