import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useProductsContext } from "../context/ProductsContext";
import SingleProductImages from "../components/SingleProductImages";
import PageHeader from "../components/PageHeader";

const SingleURL = "https://course-api.com/react-store-single-product?id=";

const SingleProduct = () => {
  const [color, setColor] = useState(null);
  const [amount, setAmount] = useState(1);

  const { id } = useParams();
  const {
    fetchSingleProduct,
    singleProduct,
    singleProductLoading: loading,
    addToCart,
    product,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(`${SingleURL}${id}`);
  }, []);

  const {
    price,
    images,
    name,
    description,
    stock,
    id: sku,
    company,
    colors,
  } = singleProduct;

  const decreaseAmount = () => {
    if (amount === 1) {
      return;
    }
    return setAmount(amount - 1);
  };

  const increaseAmount = () => {
    if (amount === stock) {
      return (amount = stock);
    }
    return setAmount(amount + 1);
  };

  if (loading) {
    return <p>Loading</p>;
  }

  return (
    <div className="">
      <PageHeader title={name} />
      <div className="row m-5 pb-5">
        <div className="col-6">
          <SingleProductImages />
        </div>
        <div className="col-6">
          <h2 className="text-capitalize font-weight-bold">{name}</h2>
          <h5 className="singleProductPrice font-weight-bold">
            ${price / 100}
          </h5>
          <p className="lh-lg">{description}</p>
          <p>
            <span className="font-weight-bold">Available : </span>{" "}
            {stock > 0 ? "In stock" : "Out of stock"}
          </p>
          <p>
            <span className="font-weight-bold"> SKU : </span> {sku}
          </p>
          <p>
            <span className="font-weight-bold">Brand : </span> {company}
          </p>
          <p>
            <span className="font-weight-bold">Colors: </span>{" "}
          </p>
          <div className="ml-5">
            {colors.map((color, index) => {
              return (
                <button
                  className="img-btn"
                  key={index}
                  style={{ background: color }}
                  onClick={() => setColor(color)}
                ></button>
              );
            })}
          </div>
          <div className="amount-btn row m-5">
            <h2 onClick={decreaseAmount}>-</h2>
            <h2>{amount}</h2>
            <h2 onClick={increaseAmount}>+</h2>
          </div>
          <button
            className="btn ml-5"
            onClick={() => addToCart({ product, amount: amount, color: color })}
          >
            ADD TO CART
          </button>
        </div>
        {/* <Link to={"/"}>Back to Products</Link> */}
      </div>
    </div>
  );
};

export default SingleProduct;
