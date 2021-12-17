import Topbar from "./components/topbar/Topbar";
import { useState } from "react";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Project from "./pages/project/Project";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Router>
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/project">
            <Project />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
