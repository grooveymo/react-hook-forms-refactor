import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { BasicForm } from "./screens/BasicForm";
import { About } from "./screens/About";

export const App = () => {
  return (
    <Router>
      <div>
        <ul className="flex between">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/basic">Basic</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        <hr />

        <Routes>
          <Route path="/basic" element={<BasicForm />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};
