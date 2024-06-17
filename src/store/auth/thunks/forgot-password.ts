import { createAsyncThunk } from '@reduxjs/toolkit';

import { supabase } from '@/lib/supabase';

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
                return thunkAPI.rejectWithValue(error.message);
            }
            return data;
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.message);
        }
    },
);
