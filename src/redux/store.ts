
import { configureStore } from '@reduxjs/toolkit';
import githubReducer from './slices/github/githubSlice';
import apiReducer from './slices/api/apiSlice';

export const store = configureStore({
  reducer: {
    github: githubReducer,
    api: apiReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch