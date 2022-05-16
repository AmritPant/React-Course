import { useSelector } from "react-redux";
import classes from "./CartButton.module.css";

const CartButton = ({ onClick }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQuantity = cartItems.reduce(
    (prevValue, currentValue) => currentValue.payload.quantity + prevValue,
    0
  );

  return (
    <button className={classes.button} onClick={onClick}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
