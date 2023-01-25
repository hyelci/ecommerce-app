import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleProduct from "./pages/SingleProduct";
import "./App.css";
import HeaderNavigation from "./components/HeaderNavigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
      <div className="page-wrapper">
        <div>
          <HeaderNavigation />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/products/:id" element={<SingleProduct />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
