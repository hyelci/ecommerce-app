import PageHeader from "../components/PageHeader";
import { useProductsContext } from "../context/ProductsContext";
import Filters from "../components/Filters";
import { Link } from "react-router-dom";

export default function Products() {
  const { visibleProducts } = useProductsContext();
  return (
    <div>
      <PageHeader title="Products" />
      <div className="row">
        <div className="col-3">
          <Filters />
        </div>

        <div className="col-9 mt-5">
          <div className="productList row justify-content-around">
            {visibleProducts &&
              visibleProducts.map((product) => {
                return (
                  <div key={product.id} className="p-3">
                    <img className="products-img " src={product.image} alt="" />
                    <div className="">
                      <p className="text-capitalize mt-3 d-flex justify-content-between">
                        {product.name}
                        <span className="product-price d-flex justify-content-between">
                          ${product.price / 100}
                        </span>
                        <Link to={`/products/${product.id}`}>
                          <button>more</button>
                        </Link>
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
