import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import heroBcg from "../assets/hero-bcg.jpeg";
import { useProductsContext } from "../context/ProductsContext";

import Product from "../components/Product";

export default function Home() {
  const { featuredProducts } = useProductsContext();

  return (
    <div>
      <div className="row">
        <div className="col m-5 align-self-center">
          <h1>Design Your Comfort Zone</h1>
          <p className="home-text mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
            aut accusamus dolores nulla rem ex? Itaque tempore maiores
            distinctio, rerum est voluptatibus et numquam hic sequi qui odit
            eius nesciunt.
          </p>
          <Link to="/products">
            {" "}
            <button className="btn mt-5">Shop Now</button>
          </Link>
        </div>
        <div className="col">
          <img src={heroBcg} className="img-hero  m-5" alt="" />
        </div>
      </div>

      <div className="middle-container mt-5">
        <h2 className="title text-center font-weight-bold">
          Featured Products
        </h2>
        <div>
          {featuredProducts.slice(0, 3).map((product) => {
            return <Product product={product} key={product.id} />;
          })}
        </div>
      </div>
    </div>
  );
}
