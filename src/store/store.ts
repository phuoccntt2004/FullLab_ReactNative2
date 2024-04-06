import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import { pokemonApi } from './pokemon-api-slice';
import { setupListeners } from '@reduxjs/toolkit/query';
import userReducer from './userSlice';
const rootReducer = combineReducers({
  Counter: counterReducer,
  User: userReducer,
  [pokemonApi.reducerPath]: pokemonApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof rootReducer>;