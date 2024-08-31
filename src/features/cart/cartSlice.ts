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
      state.cart = state.cart.filter(
        (item) => item.pizzaId !== action.payload.pizzaId,
      );
    },
    incrementItemQuantity(state, action) {
      const item = state.cart.find(
        (item) => item.pizzaId === action.payload.pizzaId,
      );
      if (item) {
        item.quantity += 1;
        item.totalPrice = item.unitPrice * item.quantity;
      }
    },
    decrementItemQuantity(state, action) {
      const item = state.cart.find(
        (item) => item.pizzaId === action.payload.pizzaId,
      );
      if (item) {
        item.quantity -= 1;
        item.totalPrice = item.unitPrice * item.quantity;
      }
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

export const {
  addItem,
  deleteItem,
  incrementItemQuantity,
  decrementItemQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
