import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../axios';

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
  oddMoney: string;
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
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);

export const getUserData = createAsyncThunk(
  'personalData/getUserData',
  async (data, thunkApi) => {},
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
    builder.addCase(createPersonalData.pending, (state) => {
      state.dataUser = [];
      state.status = 'loading';
    });
    builder.addCase(createPersonalData.fulfilled, (state, action) => {
      state.dataUser = action.payload;
      state.status = 'succes';
    });
    builder.addCase(createPersonalData.rejected, (state) => {
      state.dataUser = [];
      state.status = 'error';
    });
  },
});

export default personalData.reducer;
