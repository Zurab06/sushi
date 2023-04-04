import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

type TypeAuthData = {
  login: string;
  password: string;
};

export const userLogin = createAsyncThunk(
  'authSlice/postLoginData',
  async (params: TypeAuthData, thunkApi) => {
    console.log(params);

    try {
      const { data } = await axios.post('/login', params);

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
