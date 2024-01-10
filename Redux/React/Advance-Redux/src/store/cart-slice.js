import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalCartValue: 0,
    changed: false,
  },
  reducers: {
    replaceCart(state, action) {
      state.totalCartValue = action.payload.totalCartValue;
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      state.totalCartValue++;
      state.changed = true;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      state.totalCartValue--;
      state.changed = true;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem.quantity === 1)
        state.items = state.items.filter((item) => item.id !== id);
      else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
