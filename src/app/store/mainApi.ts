import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "./endpoints";

export const tags = {
  products: "products",
};

const fetchQuery = fetchBaseQuery({
  baseUrl: API_URL,
  prepareHeaders: (headers) => {
    const access_token = localStorage.getItem("access_token");

    if (access_token) {
      headers.set("authorization", `Bearer ${access_token}`);
    }
  },
});

export const mainApi = createApi({
  reducerPath: "mainApi",
  baseQuery: fetchQuery,
  endpoints: () => ({}),
  tagTypes: Object.keys(tags),
});

export const mainApiReducer = mainApi.reducer;
