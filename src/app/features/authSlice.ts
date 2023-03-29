import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: [],
  token: '',
  status: 'loading',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {},
});


export default authSlice.reducer