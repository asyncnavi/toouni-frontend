import { createAsyncThunk } from '@reduxjs/toolkit';

import { supabase } from '@/lib/supabase';

export const initializeSession = createAsyncThunk(
    'auth/initializeSession',
    async (_, thunkAPI) => {
        try {
            const { data, error } = await supabase.auth.getSession();
            if (error) {
                return thunkAPI.rejectWithValue(error.message);
            }
            return data.session?.user ?? null;
        } catch (error: any) {
            thunkAPI.rejectWithValue(error.message);
        }
    },
);

export const loginWithPassword = createAsyncThunk(
    'auth/loginWithPassword',
    async (
        { email, password }: { email: string; password: string },
        thunkAPI,
    ) => {
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            });
            if (error) {
                thunkAPI.rejectWithValue(error.message);
            }
            return data.user;
        } catch (e: any) {
            thunkAPI.rejectWithValue(e?.message);
        }
    },
);

export const registerWithPassword = createAsyncThunk(
    'auth/registerWithPassword',
    async (
        { email, password }: { email: string; password: string },
        thunkAPI,
    ) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        try {
            const { data, error } = await supabase.auth.signUp({
                email: email,
                password: password,
            });
            if (error) {
                thunkAPI.rejectWithValue(error.message);
            }
            return data.user;
        } catch (e: any) {
            thunkAPI.rejectWithValue(e?.message);
        }
    },
);

export const forgotPassword = createAsyncThunk(
    'auth/forgotPassword',
    async ({ email }: { email: string }, thunkAPI) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        try {
            const { data, error } = await supabase.auth.resetPasswordForEmail(
                email,
                {
                    redirectTo: 'localhost:3000/login',
                },
            );
            if (error) {
                thunkAPI.rejectWithValue(error.message);
            }
            return data;
        } catch (e: any) {
            thunkAPI.rejectWithValue(e?.message);
        }
    },
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        await supabase.auth.signOut();
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.message);
    }
});
