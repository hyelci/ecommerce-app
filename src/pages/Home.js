import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import heroBcg from "../assets/hero-bcg.jpeg";
import { useProductsContext } from "../context/ProductsContext";

import Product from "../components/Product";
import Services from "../components/Services";
import Newsletter from "../components/Newsletter";
import FeaturedProducts from "../components/FeaturedProducts";

export default function Home() {
  return (
    <div>
      <FeaturedProducts />
      <Services />
      <Newsletter />
    </div>
  );
}
