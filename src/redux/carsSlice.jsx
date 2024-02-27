import { createSlice } from '@reduxjs/toolkit';
import { getCars, getCarsByPage } from './operations';

const initialState = {
  cars: [],
  status: 'idle',
  error: null,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getCars.pending, state => {
        state.status = 'loading';
      })
      .addCase(getCars.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cars = action.payload;
      })
      .addCase(getCars.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

const carsByPageSlice = createSlice({
  name: 'carsByPage',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getCarsByPage.pending, state => {
        state.status = 'loading';
      })
      .addCase(getCarsByPage.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.carsByPage = action.payload;
      })
      .addCase(getCarsByPage.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const carsReducer = carsSlice.reducer;
export const carsByPageReducer = carsByPageSlice.reducer;
