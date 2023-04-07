import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';
import { PersonalDataType } from './personalData';

type TypeAuthData = {
  username: string;
  password: string;
};

export interface initialStateType {
  user: PersonalDataType[];
  token: string;
  status: string;
}
export const userLogin = createAsyncThunk(
  'authSlice/postLoginData',
  async (params: TypeAuthData, thunkApi) => {
    try {
      const { data } = await axios.post('/login', {
        username: params.username,
        password: params.password,
      });

      if (data.message) {
        return thunkApi.rejectWithValue(data.message);
      }

      localStorage.setItem('token', data.token);

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

const initialState: initialStateType = {
  user: [],
  token: '',
  status: 'loading',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //LOGIN
    builder.addCase(userLogin.pending, (state, action) => {
      state.user = [];
      state.status = 'loading';
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.user = action.payload;
      state.status = 'success';
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.user = [];
      state.status = 'error';
    });
  },
});

export default authSlice.reducer;
