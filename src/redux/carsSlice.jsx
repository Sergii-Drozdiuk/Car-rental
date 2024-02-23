import { createSlice } from '@reduxjs/toolkit';

export const carsSlice = createSlice({
  name: 'cars',
  initialState: '',
  reducers: {
    carsSet(_, action) {
      return action.payload;
    },
  },
});

export const selectCars = state => state.cars;

export const { carsSet } = carsSlice.actions;
