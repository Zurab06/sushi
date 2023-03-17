import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../axios';

export interface PersonalData {
  dataUser: [];
}
export type PersonalDataType = {
  surname: string;
  name: string;
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
const createPersonalData = createAsyncThunk(
  'personalData/createPersonalData',
  async (data: PersonalDataType, thunkApi) => {
    const user = await axios;
  },
);

const initialState: PersonalData = {
  dataUser: [],
};

export const personalData = createSlice({
  name: 'personalData',
  initialState,
  reducers: {},
  extraReducers: {},
});

export const {} = personalData.actions;

export default personalData.reducer;
