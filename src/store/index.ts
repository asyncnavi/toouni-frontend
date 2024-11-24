import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { thunk } from 'redux-thunk';

import { eventApi } from '@/api/event';
import { userApi } from '@/api/user';
import { authSlice } from '@/store/auth';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [eventApi.reducerPath]: eventApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(thunk, userApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
