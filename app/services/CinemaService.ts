import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IListCinema } from "../models/ICinema";
import { HYDRATE } from 'next-redux-wrapper'
import { Action, PayloadAction } from "@reduxjs/toolkit/react";
import { RootState } from "../store/store";

function isHydrateAction(action: Action): action is PayloadAction<RootState> {
    return action.type === HYDRATE
}

export const cinemaApi = createApi({
    reducerPath: 'cinemaApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.cineamo.com/'}),
    extractRehydrationInfo(action, { reducerPath }): any {
        if (isHydrateAction(action)) {
          return action.payload[reducerPath]
        }
    },
    endpoints: (builder) => ({
        fetchAllCinemas: builder.query<IListCinema, number>(
            {
                query: (page) => ({
                    url: `cinemas/${page}`
                }),
            }
        )
    })
});
