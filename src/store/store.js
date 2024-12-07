import {configureStore} from '@reduxjs/toolkit';
import {NewsAPI} from './features/ApiCalls';

export const store = configureStore({
  reducer: {
    [NewsAPI.reducerPath]: NewsAPI.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([NewsAPI.middleware]),
});
