import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { sendCartData, recieveData } from "./store/cart-slice";

let isInitial = true;

function App() {
  const showCart = useSelector(state => state.cart.showCart);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  useEffect(() => {
    dispatch(recieveData());
  }, [dispatch]);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
      <h1>Hello</h1>
    </Layout>
  );
}

export default App;
