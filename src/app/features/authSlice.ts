import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';
import { PersonalDataType } from './personalData';

type TypeAuthData = {
  username: string;
  password: string;
};

interface authMeType {
  _id: string;
  username: string;
  password: string;
  roles: [];
  __v: 0;
}
export interface initialStateType {
  user: PersonalDataType[];
  token: null | string;
  status: string;
  registr: string;
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

export const authMe = createAsyncThunk('auth/fetchAuthMe', async (params, thunkApi) => {

  try {
    const { data } = await axios.get('/auth/me');
    return data;
  } catch (error) {
    return error;
  }

});



const initialState: initialStateType = {
  user: [],
  token: null,
  status: 'loading',
  registr: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //LOGIN
    builder.addCase(userLogin.pending, (state) => {
      state.user = [];
      state.status = 'loading';
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.user = action.payload;
      state.token = action.payload.token;
      state.status = 'success';
    });
    builder.addCase(userLogin.rejected, (state) => {
      state.user = [];
      state.status = 'error';
    });
    //Auth Me
    builder.addCase(authMe.pending, (state) => {
      state.user = [];
      state.status = 'loading';
    });
    builder.addCase(authMe.fulfilled, (state, action) => {
      state.user = action.payload;
      state.status = 'success';
    });
    builder.addCase(authMe.rejected, (state) => {
      state.user = [];
      state.status = 'error';
    });
  },
});


// export const isAuthMe = (state: initialStateType) => state.auth.token;


export default authSlice.reducer;
