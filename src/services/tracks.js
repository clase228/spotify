import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const tracksApi = createApi({
  reducerPath: "tracksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://painassasin.online/catalog/track/",
  }),
  endpoints: (builder) => ({
   

    getTracks: builder.query({
      query: () => "all"
    }),
    likeTrack: builder.mutation({
      query(data) {
         return {
           url: `${data}/favorite/`,
           method: "GET",
         };
       },
    }),
    getTrack: builder.mutation({
      query(data) {
         return {
           url: `${data}/favorite/`,
           method: "GET",
         };
       },
    }),

    
  }),
});


export const { useGetTracksQuery, useLikeTrackMutation,useGetTrackMutation } = tracksApi;