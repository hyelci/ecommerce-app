import PageHeader from "../components/PageHeader";
import { useProductsContext } from "../context/ProductsContext";
import CartItem from "../components/CartItem";

export default function Cart() {
  const { cart } = useProductsContext();
  return (
    <div>
      <PageHeader title="Cart" />

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
            {cart.map((item) => {
              return <CartItem key={item.id} {...item} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
