import { createSlice } from '@reduxjs/toolkit';

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: '',
  reducers: {
    filterSet(_, action) {
      return action.payload;
    },
  },
});

export const selectFilters = state => state.filters;

export const { filterSet } = filtersSlice.actions;
