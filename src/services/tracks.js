import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const DATA_TAG = { type: "all", id: "LIST" };

export const tracksApi = createApi({
  reducerPath: "tracksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://painassasin.online/catalog/track/",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.access
      console.log(token);
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
  
      return headers
    },
  }),
  endpoints: (builder) => ({
   

    getTracks: builder.query({
      query: () => "all",
      providesTags: (result = []) => [DATA_TAG,],
    }),
    likeTrack: builder.mutation({
      query(data) {
         const {id} = data
         return {
           url: `${id}/favorite/`,
           method: "POST",
            headers: {
               'content-type': 'text/plain',
         },
         };
       },
       invalidatesTags: [DATA_TAG],
    }),
    unLikeTrack: builder.mutation({
      query(data) {
         const {id} = data
         return {
           url: `${id}/favorite/`,
           method: "DELETE",
            headers: {
               'content-type': 'text/plain',
         },
         };
       },
       invalidatesTags: [DATA_TAG],

    }),


    
  }),
});


export const { useGetTracksQuery, useLikeTrackMutation,useUnLikeTrackMutation } = tracksApi;