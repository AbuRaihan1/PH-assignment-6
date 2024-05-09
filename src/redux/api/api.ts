import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import {useGetSuppliesQuery} from '@/redux/api/api'

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    getSupllies: builder.query({
      query: () => ({
        url: "/supplies",
        method: "GET",
      }),
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
    }),
  }),
});

export const { useGetSuplliesQuery, usePostSuplliesMutation } = baseApi;
