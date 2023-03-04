import { Link } from "react-router-dom";
import heroBcg from "../assets/hero-bcg.jpeg";
import Product from "./Product";
import { useProductsContext } from "../context/ProductsContext";

export default function FeaturedProducts() {
  const { featuredProducts } = useProductsContext();

  return (
    <div>
      <div className="row m-5">
        <div className="col justify-content-around m-5">
          <h1>Design Your Comfort Zone</h1>
          <p className="home-text mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
            aut accusamus dolores nulla rem ex? Itaque tempore maiores
            distinctio, rerum est voluptatibus et numquam hic sequi qui odit
            eius nesciunt.
          </p>
          <Link to="/products">
            <button className="btn mt-5">Shop Now</button>
          </Link>
        </div>
        <div className="col justify-content-around">
          <img src={heroBcg} className="img-hero  m-5" alt="" />
        </div>
      </div>

      <div className="middle-container-fluid mt-5">
        <h2 className="title text-center font-weight-bold pt-5">
          Featured Products
        </h2>
        <div className="row justify-content-around mt-5">
          {featuredProducts.slice(0, 3).map((product) => {
            return <Product product={product} key={product.id} />;
          })}
        </div>
        <Link to="/products">
          <div className="d-flex justify-content-center">
            <button className="btn mt-5 mb-5">All Products</button>
          </div>
        </Link>
      </div>
    </div>
  );
}
