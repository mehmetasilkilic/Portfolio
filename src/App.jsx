import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Project from "./pages/project/Project";
import ScrollToTop from "./utils/scrollToTop"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  return (
    <div className="app">
      <Router>
        <Switch>
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
      </Router>
    </div>
  );
}

export default App;
