import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Project from "./pages/project/Project";
import ScrollToTop from "./utils/scrollToTop"
import { AnimatePresence } from "framer-motion";
import { Switch, Route, useLocation } from "react-router-dom";

const Layout = () => {

    const location = useLocation();

    return (
        <AnimatePresence exitBeforeEnter >
            <Switch location={location} key={location.pathname} >
                <Route exact path="/">
                    <ScrollToTop />
                    <Home />
                </Route>
                <Route path="/project">
                    <ScrollToTop />
                    <Project />
                </Route>
            </Switch>
            <Footer />
        </AnimatePresence>
    )
}

export default Layout

