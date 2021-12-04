import "./about.scss";
import { useState, forwardRef, useImperativeHandle } from "react";
import ReactDom from "react-dom";

const About = forwardRef((props, ref) => {
    const [display, setDisplay] = useState(false);

    const open = () => {
        setDisplay(true);
    };

    const close = () => {
        setDisplay(false);
    }

    useImperativeHandle(ref, () => {
        return {
            openAbout: () => open(),
            close: () => close()
        }
    })

    if (display) {
        return ReactDom.createPortal(
            <div className={"modalWrapper"}>
                <div className={"modalBackdrop"} onClick={close} />
                <div className={"modalBox"}>
                    {props.children}
                </div>
            </div>, document.getElementById("aboutRoot"))
    }
    return null;
});

export default About
