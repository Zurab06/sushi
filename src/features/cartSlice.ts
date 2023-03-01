import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

export interface CartState {
    items: any,
  cart: any,
}

const initialState: CartState = {
    items: [],
    cart: [],
}
export const cartSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
   addItem(state, action) {
      const findItem = state.items.find((obj: any) => obj.id === action.payload.id);
      console.log(action.payload, 'dfdsfdsf')
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
    },
    minusItem(state, action) {
      const findItem = state.items.find((obj:any) => obj.id === action.payload);
      if (findItem) {
        findItem.count--;
      }
      
    },
    
  },
})

// Action creators are generated for each case reducer function
export const {addItem, minusItem} = cartSlice.actions

export default cartSlice.reducer