import { createAsyncThunk } from '@reduxjs/toolkit';

import { supabase } from '@/lib/supabase';

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
                return thunkAPI.rejectWithValue(error.message);
            }
            /*
             * Note: Supabase does not return an error if the email already exists.
             * Instead, the `user.identities` array will be empty in such cases.
             */
            if (data?.user?.identities?.length === 0) {
                return thunkAPI.rejectWithValue(
                    'A user with this email already exists.',
                );
            }
            if (data.session) return data.user;
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e?.message);
        }
    },
);
