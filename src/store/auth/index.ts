import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initializeSession } from '@/store/auth/initliaze-session';
import { LoginUserResponse, User } from '@/types';

interface AuthState {
    user?: User | null;
    status: 'idle' | 'pending' | 'fulfilled' | 'rejected';
    error?: string | null;
    isInitialized: boolean;
}

const initialAuthState: AuthState = {
    user: null,
    status: 'idle',
    error: null,
    isInitialized: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        saveUser: (
            state: AuthState,
            action: PayloadAction<LoginUserResponse>,
        ) => {
            state.user = action.payload.user;
            state.status = 'fulfilled';
            state.error = undefined;
        },
        removeUser: (state: AuthState) => {
            state.user = null;
            state.status = 'idle';
            state.error = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(initializeSession.pending, (state) => {
                state.status = 'pending';
                state.error = null;
            })
            .addCase(initializeSession.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.user = action.payload as User;
                state.error = null;
                state.isInitialized = true;
            })
            .addCase(initializeSession.rejected, (state, action) => {
                state.status = 'rejected';
                state.user = null;
                state.error = action.payload as string;
                state.isInitialized = true;
            });
    },
});

export const { saveUser } = authSlice.actions;
