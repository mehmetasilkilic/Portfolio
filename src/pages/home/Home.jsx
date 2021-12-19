import Intro from "../../components/intro/Intro"
import Portfolio from "../../components/portfolio/Portfolio"
import { motion } from "framer-motion";

const Home = () => {

    const pageTransitions = {
        hidden: {
            opacity: 0,
            x: "-100vw",
            transition: {
                type: 'tween',
                ease: "linear",
                duration: 0.4
            }
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'tween',
                ease: "linear",
                duration: 0.4
            }
        }
    }

    return (
        <motion.div
            variants={pageTransitions}
            initial="hidden"
            animate="visible"
            exit="hidden"
        >
            <Intro />
            <Portfolio />
        </motion.div>
    )
}

export default Home

