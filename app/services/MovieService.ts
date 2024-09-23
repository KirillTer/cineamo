import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { IMovie } from "../models/IMovie";

export const movieApi = createApi({
    reducerPath: 'movies',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.cineamo.com/'}),
    endpoints: build => ({
        getCinemas: build.query<IMovie, number>({query: (page = 1) => `movies?page=${page}`})
    })
});
