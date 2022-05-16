import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { authSliceActons } from "../store/index";

const Header = () => {
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const btnClickHandler = () => {
    dispatch(authSliceActons.logOut());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          {isLoggedIn && (
            <li>
              <a href="/">My Products</a>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <a href="/">My Products</a>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={btnClickHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
