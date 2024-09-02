import { createSlice } from "@reduxjs/toolkit";
import { type CartItemType } from "../../schema";
import { RootStateType } from "../../store";

type InitialStateType = {
  cart: CartItemType[];
};

const initialState: InitialStateType = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem(state, action) {
      console.log(action.payload);
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      console.log(action.payload);
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    incrementItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (item) {
        item.quantity += 1;
        item.totalPrice = item.unitPrice * item.quantity;
      }
    },
    decrementItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (item) {
        item.quantity -= 1;
        item.totalPrice = item.unitPrice * item.quantity;
      }

      if (item?.quantity === 0)
        cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const getTotalPrice = (state: RootStateType) =>
  state.cart.cart.reduce((acc, item) => acc + item.totalPrice, 0);

export const getTotalQuantity = (state: RootStateType) =>
  state.cart.cart.reduce((acc, item) => acc + item.quantity, 0);

export const getCart = (state: RootStateType) => state.cart.cart;
export const getCartItemQuantityById =
  (id: number) => (state: RootStateType) => {
    const item = state.cart.cart.find((item) => item.pizzaId === id);
    return item ? item.quantity : 0;
  };

export const {
  addItem,
  deleteItem,
  incrementItemQuantity,
  decrementItemQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
