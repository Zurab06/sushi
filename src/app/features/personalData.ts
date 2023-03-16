import { createSlice } from '@reduxjs/toolkit';

export interface PersonalData {
  dataUser: [] | null;
}

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
