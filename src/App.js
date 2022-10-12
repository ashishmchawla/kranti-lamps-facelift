import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Categories from "./pages/Categories";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
