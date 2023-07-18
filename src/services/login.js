import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const DATA_TAG = { type: "Todos", id: "LIST" };

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://painassasin.online/user",
  }),
  endpoints: (builder) => ({
   

    LoginUser: builder.mutation({
      query: (body) => ({
        url: "login/",
        method: "POST",
        body,
      }),
    }),
    RegisterUser: builder.mutation({
      query: (body) => ({
        url: "signup/",
        method: "POST",
        body,
      }),
      invalidatesTags: (result, error, id) => {},

    }),

    
  }),
});


export const { useLoginUserMutation, useRegisterUserMutation } = authApi;