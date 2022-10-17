import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/common/Layout";
import About from "./pages/About";
import Products from "./pages/Products";
import Home from "./pages/Home";
import "./theme/scss/main.scss";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
