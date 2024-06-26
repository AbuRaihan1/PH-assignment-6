import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import {useGetSuppliesQuery} from '@/redux/api/api'

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["supplies", "donate"],
  endpoints: (builder) => ({
    getSupllies: builder.query({
      query: () => ({
        url: "/supplies",
        method: "GET",
      }),
      providesTags: ["supplies"],
    }),

    postSupllies: builder.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: "/supply",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["supplies"],
    }),

    deleteSupllies: builder.mutation({
      query: (options) => {
        console.log(options);
        return {
          url: `/supplies/${options.id}`,
          method: "DELETE",
          body: options,
        };
      },
      invalidatesTags: ["supplies"],
    }),

    // doner data
    donatePost: builder.mutation({
      query: (donate) => {
        return {
          url: "/donate",
          method: "POST",
          body: donate,
        };
      },
      invalidatesTags: ["donate"],
    }),

    getDonarsData: builder.query({
      query: () => ({
        url: "/donate",
        method: "GET",
      }),
      providesTags: ["donate"],
    }),
  }),
});

export const {
  useGetSuplliesQuery,
  usePostSuplliesMutation,
  useDeleteSuplliesMutation,
  useDonatePostMutation,
  useGetDonarsDataQuery,
} = baseApi;
