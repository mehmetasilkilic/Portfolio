import Intro from "../../components/intro/Intro"
import Portfolio from "../../components/portfolio/Portfolio"
import { motion } from "framer-motion";


// a

const Home = () => {

    const pageTransitions = {
        hidden: {
            x: "-100vw",
            transition: {
                type: 'tween',
                ease: "linear",
                duration: 0.5,
            }
        },
        visible: {
            x: 0,
            transition: {
                type: 'tween',
                ease: "linear",
                duration: 0.5,
                delay: 0.1
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

