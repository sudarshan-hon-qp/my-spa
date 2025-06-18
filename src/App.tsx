import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";
import Contact from "./pages/Contact";
import Settings from "./pages/Settings";
import Readme from "./pages/services/Readme";
import Help from "./pages/services/Help";

const App = () => {
  return (
    <div>
      <nav style={{ padding: "10px", display:'flex' }}>
        <Link to="/" style={{ marginRight: "10px" }}>
          Home
        </Link>
        <Link to="/about" style={{ marginRight: "10px" }}>
          About
        </Link>
        <Link to="/contact" style={{ marginRight: "10px" }}>
          Contact
        </Link>
        <Link to="/settings" style={{ marginRight: "10px" }}>
          Settings
        </Link>
        <div className="dropdown">
          <span>Services ▼</span>
          <div className="dropdown-content">
            <Link to="services/readme" style={{ marginRight: "10px" }}>
              Readme
            </Link>
            <Link to="services/readme/help" style={{ marginRight: "10px" }}>
              Help
            </Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/services/readme" element={<Readme />} />
        <Route path="/services/readme/help" element={<Help />} />
      </Routes>
    </div>
  );
};

export default App;
