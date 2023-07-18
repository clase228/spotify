import { configureStore } from "@reduxjs/toolkit";
import { authApi } from '../services/login';
import { tracksApi } from '../services/tracks';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [tracksApi.reducerPath]: tracksApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tracksApi.middleware)

});