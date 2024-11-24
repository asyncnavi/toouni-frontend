import { createSlice } from '@reduxjs/toolkit';

import { User } from '@/models/auth';

import { loginUser } from './thunks';

interface AuthState {
    user?: User | null;
    hasProfile: boolean;
    status: 'idle' | 'pending' | 'fulfilled' | 'rejected';
    error?: string | null;
}

const initialAuthState: AuthState = {
    user: null,
    status: 'idle',
    error: null,
    hasProfile: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.status = 'pending';
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.user = action.payload.data;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = 'rejected';
                state.user = null;
                state.error = action.payload || 'Unknown error';
            });
    },
});

export default authSlice.reducer;
