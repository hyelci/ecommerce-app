import { Link } from "react-router-dom";

export default function Product({ product }) {
  return (
    <div className="card " style={{ width: "18rem" }}>
      <img className="card-img-top" src={product.image} alt="" />
      <div className="card-body">
        <h5 className="card-title justify-content-between">
          {product.name} <span>£{product.price / 100}</span>
        </h5>
        <div className="d-flex justify-content-center">
          <Link className="btn" to={`/products/${product.id}`}>
            more info
          </Link>
        </div>
      </div>
    </div>
  );
}
