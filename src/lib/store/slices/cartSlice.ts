import { CartType } from "@/lib/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the cart state
interface CartState {
  cartItems: CartType[];
}

// Initial state with type
const initialState: CartState = {
  cartItems: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<Omit<CartType, "quantity">>
    ) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
    resetCart: (state) => {
      state.cartItems = [];
    },
    increaseQuantity: (state, action: PayloadAction<{ id: number }>) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0 && state.cartItems[itemIndex].quantity < 10) {
        state.cartItems[itemIndex].quantity += 1;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<{ id: number }>) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0 && state.cartItems[itemIndex].quantity > 1) {
        state.cartItems[itemIndex].quantity -= 1;
      } else if (itemIndex >= 0 && state.cartItems[itemIndex].quantity === 1) {
        state.cartItems.splice(itemIndex, 1);
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  resetCart,
  increaseQuantity,
  decreaseQuantity,
} = CartSlice.actions;
export default CartSlice.reducer;
