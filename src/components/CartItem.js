import { useProductsContext } from "../context/ProductsContext";

export default function CartItem({ product, amount, price }) {
  const { decreaseAmount, increaseAmount, deleteItem } = useProductsContext();

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col" className="cart-title">
              Item
            </th>
            <th scope="col" className="cart-title">
              Price
            </th>
            <th scope="col" className="cart-title">
              Quantity
            </th>
            <th scope="col" className="cart-title">
              Subtotal
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              <img className="cart-img" src={product.images[0].url} alt="" />
            </th>
            <td>
              {" "}
              <h5 className="text-capitalize">{product.name}</h5>
              <p>
                <span>Color:</span>{" "}
                <button
                  className="img-btn"
                  style={{ background: product.color }}
                ></button>
              </p>
            </td>
            <td>
              {" "}
              <h5 className="singleProductPrice">${product.price / 100}</h5>
            </td>
            <td>
              <div className="amount-btn font-weight-bold">
                <span onClick={() => decreaseAmount(product.id)}> - </span>
                <span cla>{amount}</span>
                <span onClick={() => increaseAmount(product.id)}> + </span>
              </div>
            </td>
            <td> ${amount * (product.price / 100)}</td>
            <td>
              <button onClick={() => deleteItem(product.id)}>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
