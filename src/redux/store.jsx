import { configureStore } from '@reduxjs/toolkit';
import { filtersSlice } from './filtersSlice';
import { carsReducer } from './carsSlice';
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    filters: filtersSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// import { configureStore } from '@reduxjs/toolkit';
// import { getCarsByPage, getAdverts } from './operations';
// import { apiReducer } from './carsSlice';

// export const store = configureStore({
//   reducer: {
//     api: apiReducer,
//   },
// });

// export const fetchCarsByPage = page => store.dispatch(getCarsByPage(page));
// export const fetchAdverts = () => store.dispatch(getAdverts);
