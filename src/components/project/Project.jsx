import "./project.scss";
import { useState, forwardRef, useImperativeHandle } from "react";
import ReactDom from "react-dom";

const projects = [
    {
      id: 1,
      title: "E-Commerce",
      img: "assets/ecom.jpg",
      site: "asdf",
    },
    {
      id: 2,
      title: "JDM Blog",
      img: "assets/jdmblog.jpg",
      site: "klşi",
    },
    {
      id: 3,
      title: "Portfolio",
      img: "assets/portfolio.jpg",
      site: "hjkl",
    },
    {
      id: 4,
      title: "Fobbo",
      img: "assets/fobbo.jpg",
      site: "fghj",
    },
  ];

const Project = forwardRef(ref => {
    const [display, setDisplay] = useState(false);

    const open = () => {
        setDisplay(true);
    };

    const close = () => {
        setDisplay(false);
    }

    useImperativeHandle(ref, () => {
        return {
            openProject: () => open(),
            close: () => close()
        }
    })

    if (display) {
        return ReactDom.createPortal(
            <div className={"projectWrapper"}>
                <div className={"projectBackdrop"} onClick={close} />
                <div className={"projectBox"}>
                    <h2>{projects.site}</h2>
                </div>
            </div>, document.getElementById("projectRoot"))
    }
    return null;
});

export default Project
