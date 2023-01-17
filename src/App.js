import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import "./App.css";
import HeaderNavigation from "./components/HeaderNavigation";

function App() {
  return (
    <div className="container">
      <HeaderNavigation />
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/products/:id" element={<SingleProduct />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}
export default App;
