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

    const modalBackdropVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.3
            }
        },
        close: {
            opacity: 0,
            transition: {
                duration: 0.3,
                delay: 0.3
            }
        }
    }

    if (display) {
        return ReactDom.createPortal(
            <AnimatePresence>
                <div className={"modalWrapper"}>
                    <motion.div
                        variants={modalBackdropVariants}
                        initial="hidden"
                        animate="visible"
                        exit="close"
                        className={"modalBackdrop"} onClick={close} />
                    <div className={"modalBox"}>
                        {props.children}
                    </div>
                </div>
            </AnimatePresence>, document.getElementById("aboutRoot"))
    }
    return null;
});

export default About
