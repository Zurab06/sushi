import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const userLogin = createAsyncThunk('authSlice/postLoginData', async (params, thunkApi) => {
  try {
    const { data } = axios.post('/login', params);
    if (data.message) {
      return thunkApi.rejectWithValue(data.message);
    }
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

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

export default authSlice.reducer;
