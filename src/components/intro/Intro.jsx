import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

const Intro = () => {
  const textRef = useRef();

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
        <button>About Me</button>
        <a href="#portfolio">
          <img src="assets/downWhite.png" alt="" />
        </a>
      </div>
    </div>
  );
}

export default Intro

