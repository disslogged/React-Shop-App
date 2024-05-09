import { Product } from "../shared/types";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

type BasketProduct = Product & {
  quantity: number;
  subTotal: number;
};

type InitialState = {
  basket: BasketProduct[];
  totalPrice: number;
};

const initialState: InitialState = {
  basket: [],
  totalPrice: 0,
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    addToBasket(state, action: PayloadAction<BasketProduct>) {
      const existItem = state.basket.find((p) => p.id === action.payload.id);

      if (existItem) {
        existItem.quantity += action.payload.quantity;
        existItem.subTotal += action.payload.quantity * action.payload.price;
        state.totalPrice += action.payload.quantity * action.payload.price;
      }

      if (!existItem) {
        state.basket.unshift(action.payload);
        state.totalPrice += action.payload.quantity * action.payload.price;
      }
    },
    removeFromBasket(state, action: PayloadAction<number>) {
      const productIdToRemove = action.payload;
      const index = state.basket.findIndex((p) => p.id === productIdToRemove);

      if (index === -1) return;

      const productToRemove = state.basket[index];
      if (productToRemove.quantity > 1) {
        productToRemove.quantity--;
        productToRemove.subTotal -= productToRemove.price;
      } else {
        state.basket.splice(index, 1);
      }

      state.totalPrice -= productToRemove.price; // Adjust totalPrice
    },
  },
});

export const { addToBasket, removeFromBasket } = checkoutSlice.actions;

export default checkoutSlice;
