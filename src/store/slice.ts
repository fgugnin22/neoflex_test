import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../types";

export type State = {
  favorites: Product[];
  addedToCart: {
    product: Product;
    amount: number;
  }[];
  totalSum: number;
};

const initialState: State = {
  favorites: [],
  addedToCart: [],
  totalSum: 0
};

export const slice = createSlice({
  name: "main",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{ product: Product; amount: number }>
    ) => {
      const productIndex = state.addedToCart.findIndex(
        (value) => value.product.id === action.payload.product.id
      );

      if (productIndex === -1) {
        state.addedToCart.push(action.payload);
      } else {
        state.addedToCart[productIndex].amount += action.payload.amount;
      }

      state.totalSum += action.payload.product.price * action.payload.amount;
    },
    removeFromCart: (
      state,
      action: PayloadAction<{ id: number; amount: number }>
    ) => {
      const productIndex = state.addedToCart.findIndex(
        (value) => value.product.id === action.payload.id
      );

      if (productIndex === -1) {
        return;
      }

      state.totalSum -=
        state.addedToCart[productIndex].product.price * action.payload.amount;

      if (state.addedToCart[productIndex].amount === action.payload.amount) {
        state.addedToCart = state.addedToCart.filter(
          (value) => value.product.id !== action.payload.id
        );
        return;
      }

      state.addedToCart[productIndex].amount -= action.payload.amount;
    },
    addToFavorites: (state, action: PayloadAction<Product>) => {
      state.favorites.push(action.payload);
    },
    removeFromFavorites: (state, action: PayloadAction<{ id: number }>) => {
      state.favorites = state.favorites.filter(
        (product) => product.id !== action.payload.id
      );
    }
  }
});
