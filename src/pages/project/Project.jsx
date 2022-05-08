import { useEffect, useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import "../../sass/main.scss"

// Components
import Header from "../../components/project/Header";
import Banner from "../../components/project/Banner";
import Loader from "../../components/project/Loader";
import ProjectMain from "../../components/project/ProjectMain";

function App() {
    const [loading, setLoading] = useState(true);
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const projectId = urlParams.get('id')

    useEffect(() => {
        loading
            ? document.querySelector("body").classList.add("loading")
            : document.querySelector("body").classList.remove("loading");
    }, [loading]);

    return (
        <AnimateSharedLayout type='crossfade'>
            <AnimatePresence>
                {loading ? (
                    <motion.div key='loader'>
                        <Loader setLoading={setLoading} />
                    </motion.div>
                ) : (
                    <>
                        <Header />
                        <Banner />
                        {!loading && (
                            <div className='transition-image final'>
                                <motion.img
                                    transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
                                    src={process.env.PUBLIC_URL + projectId == 0 ? `/images/AuWallet-1.jpg` : projectId == 1 ? `/images/TimeEX-1.jpg` : projectId == 2 ? `/images/Admin-Panel-1.jpg` : projectId == 3 ? `/images/image-2.jpg` : ""}
                                    layoutId='main-image-1'
                                />
                            </div>
                        )}
                        <ProjectMain />
                    </>
                )}
            </AnimatePresence>
        </AnimateSharedLayout>
    );
}

export default App;
