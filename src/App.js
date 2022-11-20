import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Work from "./Components/Work";
import Play from "./Components/Play";
import Code from "./Components/Code";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/play" element={<Play />} />
          <Route path="/code" element={<Code />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
