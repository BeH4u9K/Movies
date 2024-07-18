import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = 'J50MSGV-F1CMCJN-M8A3EFF-N905D0R';

const notNullFields = ['description', 'shortDescription', 'year', 'rating.kp', 'poster.url'].join('&notNullFields=');

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
                url: `movie?notNullFields=${notNullFields}`,
                params: {
                    limit: 20,
                    lists: 'top250',
                },
            }),
        }),
        getFilteredMovies: builder.query({
            query: (filters) => {
                const { category, genre, countries, year, rating } = filters;
                const params = {
                    type: category,
                    genres: genre,
                    countries,
                    year,
                    rating,
                    limit: 100,
                };
                const filteredParams = Object.fromEntries(Object.entries(params).filter(([_, v]) => v != null));
                return {
                    url: `movie?notNullFields=${notNullFields}`,
                    params: filteredParams,
                };
            },
        }),
        getMoviestest: builder.query({
            query: ({ search, id }) => {
                if (id) {
                    return {
                        url: `movie/${id}`,
                        params: {
                            notNullFields: 'description,shortDescription,year,rating.kp,poster.url', // Замените на реальные поля
                        },
                    };
                }
                return {
                    url: 'movie/search',
                    params: {
                        query: search,
                        limit: 20,
                        notNullFields: 'description,shortDescription,year,rating.kp,poster.url', // Замените на реальные поля
                    },
                };
            },
        }),
    }),
});

export const { useGetMoviesQuery, useGetFilteredMoviesQuery, useGetMoviestestQuery } = apiSlice;
