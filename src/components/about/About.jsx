import "./about.scss";
import { useState, forwardRef, useImperativeHandle } from "react";
import ReactDom from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

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
                <AnimatePresence>
                    {open && (
                        <>
                            <motion.div
                                initial={{
                                    opacity: 0
                                }}
                                animate={{
                                    opacity: 1,
                                    transition: {
                                        duration: 0.3
                                    }
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: {
                                        duration: 0.3,
                                        delay: 0.3
                                    }
                                }}
                                className={"modalBackdrop"} onClick={close} />
                            <div className={"modalBox"}>
                                {props.children}
                            </div>
                        </>
                    )}
                </AnimatePresence>
            </div>, document.getElementById("aboutRoot"))
    }
    return null;
});

export default About
