import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import Header from "../header/Header";

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
        <Header />
        <h3>
          <span ref={textRef}></span>
        </h3>  
      </div>
    </div>
  );
}

export default Intro

