import { useProductsContext } from "../context/ProductsContext";

export default function CartItem({ product, amount, color, id }) {
  const { decreaseAmount, increaseAmount, deleteItem } = useProductsContext();

  return (
    <tr>
      <th scope="row">
        <img className="cart-img" src={product.images[0].url} alt="" />
      </th>
      <td>
        {" "}
        <h5 className="text-capitalize">{product.name}</h5>
        <p>
          <span>Color: </span>
          <button className="img-btn" style={{ background: color }}></button>
        </p>
      </td>
      <td>
        {" "}
        <h5 className="singleProductPrice">${product.price / 100}</h5>
      </td>
      <td>
        <div className="amount-btn font-weight-bold">
          <span onClick={() => decreaseAmount(id)}> - </span>
          <span cla>{amount}</span>
          <span onClick={() => increaseAmount(id)}> + </span>
        </div>
      </td>
      <td> ${amount * (product.price / 100)}</td>
      <td>
        <button onClick={() => deleteItem(id)}>Delete</button>
      </td>
    </tr>
  );
}
