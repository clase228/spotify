import { configureStore } from "@reduxjs/toolkit";
import { authApi } from '../services/login';
import { tracksApi } from '../services/tracks';
import { catalogApi } from '../services/catalog';
import authReducer from "./reduserc/auth";


export const store = configureStore({
  reducer: {
   [catalogApi.reducerPath]: catalogApi.reducer,
   [authApi.reducerPath]: authApi.reducer,
   [tracksApi.reducerPath]: tracksApi.reducer,
   auth: authReducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tracksApi.middleware, authApi.middleware, catalogApi.middleware),

});
