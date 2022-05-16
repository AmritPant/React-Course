import { useSelector } from "react-redux";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const requiredCartItems = cartItems.filter(
    (item) => item.payload.quantity > 0
  );
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {requiredCartItems.length === 0 && (
          <p>Your Cart is empty please add new items!</p>
        )}
        {cartItems.length > 0 &&
          requiredCartItems.map((item) => {
            const total = item.payload.price * item.payload.quantity;
            const { title, quantity, price } = item.payload;
            return (
              <CartItem
                key={title}
                item={{
                  title: title,
                  quantity: quantity,
                  total: total,
                  price: price,
                }}
              />
            );
          })}
      </ul>
    </Card>
  );
};

export default Cart;
