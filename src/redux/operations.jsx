import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65d5298a3f1ab8c634369b59.mockapi.io';

export const getCars = createAsyncThunk('cars/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/advert');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getCarsByPage = createAsyncThunk('cars/fetchByPage', async ({ page, limit }, thunkAPI) => {
  try {
    const response = await axios.get('/advert', {
      params: {
        page: page,
        limit: limit,
      },
    });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const api = createApi({
//   reducerPath: 'api',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://65d5298a3f1ab8c634369b59.mockapi.io/',
//   }),
//   tagTypes: ['advert'],
//   endpoints: builder => ({
//     getCarsByPage: builder.query({
//       query: (page = 1) => `car-rental?page=${page}&limit=12`,
//     }),
//     getAdverts: builder.query({
//       query: () => '/car-rental',
//       providesTags: ['advert'],
//     }),
//   }),
// });

// export const { useGetCarsByPageQuery, useGetAdvertsQuery } = api;
