import { useDispatch } from "react-redux";
import CartButton from "../Cart/CartButton";
import classes from "./MainHeader.module.css";
import { cartActions } from "../../store/cart-slice";

const MainHeader = (props) => {
  const dispatch = useDispatch();

  const CartButtonClickHandler = () => {
    dispatch(cartActions.togleCart());
  };

  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton onClick={CartButtonClickHandler} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
