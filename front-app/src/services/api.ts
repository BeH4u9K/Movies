import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = 'KC28QCW-X9F4NTB-GCBZPHV-CT1JEEH';

const notNullFields = 'notNullFields=name&notNullFields=poster.url';
const lists = 'top250'; 

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.kinopoisk.dev/v1.4/',
    prepareHeaders: (headers) => {
      headers.set('X-API-KEY', API_KEY);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => ({
        url: `movie?${notNullFields}`,
        params: {
          limit: 20, 
        },
      }),
    }),
    getFilteredMovies: builder.query({
      query: (filters) => {
        const { category, genre, countries, year, rating } = filters;
        const params = {
          limit: 100,
          type: category,
          genres: genre,
          year,
          rating,
          // не добавляем лимит, чтобы получить все доступные фильмы
        };
        const filteredParams = Object.fromEntries(Object.entries(params).filter(([_, v]) => v != null));
        return {
          url: `movie?${notNullFields}`,
          params: filteredParams,
        };
      },
    }),
  }),
});

export const { useGetMoviesQuery, useGetFilteredMoviesQuery } = apiSlice;
