import { createAsyncThunk } from '@reduxjs/toolkit';

import { supabase } from '@/lib/supabase';

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
                return thunkAPI.rejectWithValue(error.message);
            }
            const user = data.user;
            const { data: profileData, error: profileError } = await supabase
                .from('profiles')
                .select('*')
                .eq('id', user?.id);

            if (profileError) {
                return thunkAPI.rejectWithValue(profileError.message);
            }
            const hasProfile = profileData?.length > 0;

            localStorage.setItem(
                'profileChecker',
                JSON.stringify({ [user.email as string]: hasProfile }),
            );
            return { user, hasProfile: hasProfile };
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e?.message);
        }
    },
);
