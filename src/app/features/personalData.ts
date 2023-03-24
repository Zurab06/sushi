import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../axios';
import { RootState } from '../store';

export type PersonalDataType = {
  surname: string;
  name: string;
  courier: string;
  street: string;
  flat: string;
  entrance: string;
  floor: string;
  code: string;
  cash: string;
  oddMoney: boolean;
  sum: string;
  email: string;
  comment: string;
};
export interface PersonalData {
  dataUser: [] | PersonalDataType;
  status: string;
}
export const createPersonalData = createAsyncThunk(
  'personalData/createPersonalData',
  async (params: object | PersonalDataType, thunkApi) => {
    try {
      const { data } = await axios.post('/personalData', params);

      if (data.message) {
        return thunkApi.rejectWithValue(data.message);
      }
      alert('Данные пользователя успешно созданы');
      return data;
    } catch (error) {
      alert('create Error');
      return thunkApi.rejectWithValue(error);
    }
  },
);

export const getUserData = createAsyncThunk(
  'personalData/getUserData',
  async (_: object, thunkApi) => {
    try {
      const { data } = await axios.get('/personalData');
      if (data.message) {
        return thunkApi.rejectWithValue(data.message);
      }
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);

const initialState: PersonalData = {
  dataUser: [],
  status: 'loading',
};

export const personalData = createSlice({
  name: 'personalData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // CREATE PERSONAL DATA
    builder.addCase(createPersonalData.pending, (state) => {
      state.dataUser = [];
      state.status = 'loading';
    });
    builder.addCase(createPersonalData.fulfilled, (state, action) => {
      state.dataUser = action.payload;
      state.status = 'success';
    });
    builder.addCase(createPersonalData.rejected, (state) => {
      state.dataUser = [];
      state.status = 'error';
    });

    // GET PERSONAL DATA ONE
    builder.addCase(getUserData.pending, (state) => {
      state.dataUser = [];
      state.status = 'loading';
    });
    builder.addCase(getUserData.fulfilled, (state, action) => {
      state.dataUser = action.payload;
      state.status = 'success';
    });
    builder.addCase(getUserData.rejected, (state) => {
      state.dataUser = [];
      state.status = 'error';
    });
  },
});

// export const addUserData = (state: PersonalDataType) => state.personalData.dataUser;
export const addUserData = (state: RootState) => state.personalData.dataUser;
export default personalData.reducer;
