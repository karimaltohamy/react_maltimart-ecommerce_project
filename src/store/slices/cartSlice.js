import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: { cartItems: [], totalAmount: 0, totalQuantity: 0 },
  reducers: {
    addCart: (state, action) => {
      const newAction = action.payload;
      const comparison = state.cartItems.find(
        (item) => item.id === newAction.id
      );

      state.totalQuantity++;

      if (!comparison) {
        state.cartItems.push({
          id: newAction.id,
          productName: newAction.productName,
          imgUrl: newAction.imgUrl,
          category: newAction.category,
          price: newAction.price,
          quantity: 1,
          totalPice: newAction.price,
        });
      } else {
        comparison.quantity++;
        comparison.totalPice =
          Number(comparison.totalPice) + Number(newAction.price);
      }

      state.totalAmount = state.cartItems.reduce((total, item) => {
        return total + Number(item.price) * Number(item.quantity);
      }, 0);
    },
    deleteCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload
        );
        state.totalQuantity = state.totalQuantity - existingItem.quantity;
      }
      state.totalAmount = state.cartItems.reduce((total, item) => {
        return total + Number(item.price) * Number(item.quantity);
      }, 0);
    },
  },
});

export const { addCart, deleteCart } = cartSlice.actions;
export default cartSlice.reducer;
