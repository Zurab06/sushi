import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

type TypeAuthData = {
  login: string;
  password: string;
};

export const userLogin = createAsyncThunk(
  'authSlice/postLoginData',
  async (params: TypeAuthData, thunkApi) => {
    try {
      const { data } = await axios.post('/login', params);

      if (data.message) {
        return thunkApi.rejectWithValue(data.message);
      }
      localStorage.setItem('token', data.token);
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);

export const userRegistr = createAsyncThunk(
  'authSlice/postRegistrData',
  async (params: TypeAuthData, thunkApi) => {
    try {
      const { data } = await axios.post('/registration', params);
      if (data.message) {
        return thunkApi.rejectWithValue(data.message);
      }
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);

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
