import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef, useState } from "react";
import About from "../about/About";

const Intro = () => {

  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  const textRef = useRef();

  const aboutRef = useRef();

  const openAbout = () => {
    aboutRef.current.openAbout();
  };

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Frontend Developer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="wrapper">
        <h1>Mehmet Asil Kılıç</h1>
        <h3>
          <span ref={textRef}></span>
        </h3>
        <button onClick={openAbout}>About Me</button>
        <About ref={aboutRef} className="aboutWrapper">
          <div className="left">
            <h2>About Me</h2>
            <p>I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Portfolio section.</p>
            <p>I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
            <h3>Competencies</h3>
            <p>HTML5, CSS3/SASS, JavaScript, TypeScript, ReactJS, Redux, NextJS, WebPack, Babel, Photoshop</p>
            <h4>Abou</h4>
          </div>
          <div className="right">
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
              <textarea placeholder="Message"></textarea>
              <button disabled type="submit">Send</button>
              {message && <span>Thanks, I'll reply ASAP</span>}
            </form>
            <button className="close" onClick={() => aboutRef.current.close()}>X</button>
            <h3>Contact</h3>
          </div>

        </About>
        <a href="#portfolio">
          <img src="assets/downWhite.png" alt="" />
        </a>
      </div>
    </div>
  );
}

export default Intro

