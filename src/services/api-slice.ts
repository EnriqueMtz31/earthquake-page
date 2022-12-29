import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../data";
import { ApiEarthquake, ApiEarthquakeDetail } from "../interfaces";

export const apiSlice = createApi({
  reducerPath: "earthquakes",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getEarthquakes: builder.query<ApiEarthquake, void>({
      query: () => "/summary/all_day.geojson",
    }),
    getEarthquake: builder.query<ApiEarthquakeDetail, string>({
      query: (selectedEarthquakeID) =>
        `/detail/${selectedEarthquakeID}.geojson`,
    }),
  }),
  refetchOnMountOrArgChange: 60000,
});

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useGetEarthquakesQuery, useGetEarthquakeQuery } = apiSlice;
