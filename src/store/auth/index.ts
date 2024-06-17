import { createSlice } from '@reduxjs/toolkit';
import { User } from '@supabase/supabase-js';

import {
    forgotPassword,
    loginWithPassword,
    logout,
    registerWithPassword,
} from './thunks';

interface AuthState {
    user?: User | null;
    status: 'idle' | 'pending' | 'fulfilled' | 'rejected';
    error?: string | null;
}

const initialAuthState: AuthState = {
    user: null,
    status: 'idle',
    error: null,
};

export const authSlice = createSlice({
    selectors: undefined,
    name: 'auth',
    initialState: initialAuthState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginWithPassword.pending, (state) => {
                state.status = 'pending';
                state.error = null;
            })
            .addCase(loginWithPassword.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.user = action.payload;
                state.error = null;
            })
            .addCase(loginWithPassword.rejected, (state, action) => {
                state.status = 'rejected';
                state.user = null;
                state.error = action.payload as string;
            })
            .addCase(registerWithPassword.pending, (state) => {
                state.status = 'pending';
                state.error = null;
            })
            .addCase(registerWithPassword.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.user = action.payload;
                state.error = null;
            })
            .addCase(registerWithPassword.rejected, (state, action) => {
                state.status = 'rejected';
                state.user = null;
                state.error = action.payload as string;
            })
            .addCase(forgotPassword.pending, (state) => {
                state.status = 'pending';
                state.error = null;
            })
            .addCase(forgotPassword.fulfilled, (state) => {
                state.status = 'fulfilled';
                state.error = null;
            })
            .addCase(forgotPassword.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload as string;
            })
            .addCase(logout.pending, (state) => {
                state.status = 'pending';
                state.error = null;
            })
            .addCase(logout.fulfilled, (state) => {
                state.status = 'fulfilled';
                state.user = null;
                state.error = null;
            })
            .addCase(logout.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload as string;
            });
    },
});
