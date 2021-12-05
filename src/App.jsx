import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
/* import Testimonials from "./components/testimonials/Testimonials" */
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Intro />
      <Portfolio />
      {/* <Testimonials /> */}
      <Footer />
    </div>
  );
}

export default App;
