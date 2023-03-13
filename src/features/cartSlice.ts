import { getCartLocalStorage } from './../utils/CartLocalStorage';
import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

export interface CartState {
    items: any,
    totalPrice: number,
    // cart: any,
}

const initialState: CartState = {
    totalPrice: 0,
    items: getCartLocalStorage(),
    // cart: [],
}
export const cartSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
   addItem(state, action) {
      const findItem = state.items.find((obj: any) => obj.id === action.payload.id);
      // console.log(action.payload, 'dfdsfdsf')
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = state.items.reduce((sum: any, obj: any) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    minusItem(state, action) {
      const findItem = state.items.find((obj:any) => obj.id === action.payload);
      if (findItem) {
        findItem.count--;
      }
      state.totalPrice = state.items.reduce((sum: any, obj: any) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    removeItem(state, action) {
      state.items = state.items.filter((obj: any) => obj.id !== action.payload);
      state.totalPrice = state.items.reduce((sum: any, obj: any) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
  },
})

// Action creators are generated for each case reducer function
export const {addItem, minusItem, removeItem} = cartSlice.actions

export default cartSlice.reducer