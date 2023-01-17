import { Link } from "react-router-dom";

export default function Product({ product }) {
  return (
    <div>
      <img src={product.image} alt="" />
      <p>
        {product.name} <span>{product.price / 100}</span>
      </p>
      <Link to={`/products/${product.id}`}>more info</Link>
    </div>
  );
}
