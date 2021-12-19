import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./Layout";

function App() {

  return (
    <div className="app">
      <Router>
        <Layout />
      </Router>
    </div>
  );
}

export default App;
