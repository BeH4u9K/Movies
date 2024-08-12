import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = 'J50MSGV-F1CMCJN-M8A3EFF-N905D0R';

const notNullFields = 'notNullFields=description&notNullFields=shortDescription&notNullFields=year&notNullFields=rating.kp&notNullFields=poster.url';
const selectFields = 'selectFields=id&selectFields=externalId&selectFields=name&selectFields=enName&selectFields=alternativeName&selectFields=names&selectFields=description&selectFields=shortDescription&selectFields=slogan&selectFields=type&selectFields=typeNumber&selectFields=isSeries&selectFields=status&selectFields=year&selectFields=releaseYears&selectFields=rating&selectFields=ratingMpaa&selectFields=ageRating&selectFields=votes&selectFields=seasonsInfo&selectFields=budget&selectFields=audience&selectFields=movieLength&selectFields=seriesLength&selectFields=totalSeriesLength&selectFields=genres&selectFields=countries&selectFields=poster&selectFields=backdrop&selectFields=logo&selectFields=ticketsOnSale&selectFields=videos&selectFields=networks&selectFields=persons&selectFields=facts&selectFields=fees&selectFields=premiere&selectFields=similarMovies&selectFields=sequelsAndPrequels&selectFields=watchability&selectFields=lists&selectFields=top10&selectFields=top250&selectFields=updatedAt&selectFields=createdAt';

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
                    lists: 'top250',
                },
            }),
        }),
        getFilteredMovies: builder.query({
            query: (filters) => {
                const { category, genre, country, year, rating } = filters;
                const params = {
                    type: category,
                    'genres.name': genre ? [genre] : undefined,
                    'countries.name': country ? [country] : undefined,
                    year,
                   'rating.kp': rating ? [rating] : undefined,
                    limit: 100,
                };

                const filteredParams = Object.fromEntries(Object.entries(params).filter(([_, v]) => v != null));
                console.log('Filtered Params:', filteredParams); // Отладка

                return {
                    url: `movie?${selectFields}&${notNullFields}`,
                    params: filteredParams,
                };
            },
        }),

        getMoviestest: builder.query({
            query: ({ search, id }) => {
                if (id) {
                    return {
                        url: `movie/${id}`,
                        params: {},
                    };
                }
                return {
                    url: `movie/search?${notNullFields}`,
                    params: {
                        query: search,
                        limit: 20,
                    },
                };
            },
        }),
        
    }),
});

export const {
    useGetMoviesQuery,
    useGetFilteredMoviesQuery,
    useGetMoviestestQuery,
} = apiSlice;
