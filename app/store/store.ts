import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { cinemaApi } from "../services/CinemaService";
import { movieApi } from "../services/MovieService";

const rootReducer = combineReducers({
  [cinemaApi.reducerPath]: cinemaApi.reducer,
  [movieApi.reducerPath]: movieApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({serializableCheck: false})
      .concat(cinemaApi.middleware)
      .concat(movieApi.middleware)
  });
}

export type RootState = ReturnType<AppStore['getState']>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']