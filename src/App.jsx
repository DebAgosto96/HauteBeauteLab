import React from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import "./AppStyles.css";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./Home";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <div>
      <NavBar />

      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

const Root = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<Root />);