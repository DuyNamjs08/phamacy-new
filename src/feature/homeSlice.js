import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  value: 0,
  cartItems: [],
  showMess: false,
  message: "",
  type: "",
};
export const fetchUserById = createAsyncThunk(
  "users/fetchByIdStatus",
  async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    handleAddToCart: (state, action) => {
      const { _id } = action.payload;
      const existingItem = state.cartItems.find((item) => item._id === _id);
      if (existingItem) {
        const updatedCart = state.cartItems.map((cart) => {
          return cart._id === _id
            ? { ...cart, quantity: cart.quantity + 1 }
            : cart;
        });
        state.cartItems = updatedCart;
      } else {
        state.cartItems = [
          ...state.cartItems,
          { ...action.payload, quantity: 1 },
        ];
      }
    },
    handleRemoveFromCart: (state, action) => {
      const { _id } = action.payload;
      const updatedCart = state.cartItems.map((cart) =>
        cart._id === _id && cart.quantity > 0
          ? { ...cart, quantity: cart.quantity - 1 }
          : cart
      );
      state.cartItems = updatedCart.filter((cart) => cart.quantity > 0);
    },
    handleDeleteFromCart: (state, action) => {
      const { _id } = action.payload;
      state.cartItems = state.cartItems.filter((cart) => cart._id !== _id);
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    showMessageSuccesss: (state, action) => {
      state.showMess = true;
      state.message = action.payload;
      state.type = "success";
    },
    showMessageError: (state, action) => {
      state.showMess = true;
      state.message = action.payload;
      state.type = "error";
    },

    resetMessage: (state) => {
      state.showMess = false;
      state.message = "";
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  handleAddToCart,
  handleRemoveFromCart,
  handleDeleteFromCart,
  clearCart,
  showMessageSuccesss,
  showMessageError,
  resetMessage,
} = counterSlice.actions;

export default counterSlice.reducer;
