import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { showCart: false, cartItems: [] },
  reducers: {
    showCart(state) {
      state.showCart = true;
    },
    hideCart(state) {
      state.showCart = false;
    },
    togleCart(state) {
      state.showCart = !state.showCart;
    },
    addToCart(state, dispatchedItem) {
      const alreadyExistItem = state.cartItems.find(
        (item) => item.payload.title === dispatchedItem.payload.title
      );
      if (!alreadyExistItem) {
        state.cartItems.push(dispatchedItem);
        return;
      }
      alreadyExistItem.payload.quantity++;
    },
    decreaseQuantity(state, dispatchedItem) {
      const removeItem = state.cartItems
        .filter((item) => item.payload.title === dispatchedItem.payload.title)
        .at(0);

      removeItem.payload.quantity--;
    },
    increaseQuantity(state, dispatchedItem) {
      const increaseItem = state.cartItems
        .filter((item) => item.payload.title === dispatchedItem.payload.title)
        .at(0);
      increaseItem.payload.quantity++;
    },
    replaceCart(state, action) {
      state.cartItems = action.payload.cartItems;
    },
  },
});
export const cartActions = cartSlice.actions;

// Thunks
export const sendCartData = (cart) => {
  return async () => {
    const sendData = async () => {
      const reponse = await fetch(
        "https://react-store-e4046-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",

          body: JSON.stringify(cart),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!reponse.ok) throw new Error("Something Went Wrong");
    };
    try {
      await sendData();
    } catch (err) {}
  };
};

export const recieveData = () => {
  return async (dispatch) => {
    const getData = async () => {
      const reponse = await fetch(
        "https://react-store-e4046-default-rtdb.firebaseio.com/cart.json"
      );

      if (!reponse.ok) throw new Error("Error while fetching Data");
      const data = await reponse.json();

      await dispatch(cartActions.replaceCart(data));
    };
    try {
      getData();
    } catch (err) {}
  };
};

export default cartSlice;
