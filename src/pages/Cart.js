import PageHeader from "../components/PageHeader";
import { useProductsContext } from "../context/ProductsContext";
import CartItem from "../components/CartItem";

export default function Cart() {
  const { cart } = useProductsContext();
  return (
    <div>
      <PageHeader title="Cart" />

      {cart.map((item) => {
        return <CartItem key={item.product.id} {...item} />;
      })}
    </div>
  );
}
