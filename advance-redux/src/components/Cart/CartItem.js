import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, total, price } = props.item;

  const cartAddButtonHandler = (event) => {
    dispatch(cartActions.decreaseQuantity({ title: event.target.id }));
  };
  const cartRemoveButtonHandler = (event) => {
    dispatch(cartActions.increaseQuantity({ title: event.target.id }));
  };

  return (
    <li className={`${classes.item} ${title}`}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button id={title} onClick={cartAddButtonHandler}>
            -
          </button>
          <button id={title} onClick={cartRemoveButtonHandler}>
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
