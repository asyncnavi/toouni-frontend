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
            /**
             * To minimize the number of database queries to check if the user has a profile,
             * we store this information in localStorage. This way, we can quickly retrieve
             * the user's profile status during subsequent sessions without querying the database
             * every time the user logs in.
             */
            const user = data.session?.user ?? null;
            if (user?.email) {
                const userInfo: Record<string, boolean> = await JSON.parse(
                    localStorage.getItem('profileChecker') || '{}',
                );

                if (userInfo) {
                    const hasProfile = userInfo[user.email];
                    return { user: user, hasProfile: hasProfile };
                }
                return { user: user, hasProfile: false };
            } else {
                return { user: user, hasProfile: false };
            }
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    },
);
