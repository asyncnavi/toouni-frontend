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
                console.log('User found');
                const userInfo: Record<string, boolean> = await JSON.parse(
                    localStorage.getItem('profileChecker') || '{}',
                );
                if (userInfo && userInfo.email) {
                    const hasProfile = userInfo[user.email];
                    return { user: user, hasProfile: hasProfile };
                } else {
                    console.log('Local storage not found');
                    const { data: profileData, error: profileError } =
                        await supabase
                            .from('profiles')
                            .select('*')
                            .eq('id', user?.id);

                    if (profileError) {
                        return thunkAPI.rejectWithValue(profileError.message);
                    }
                    const hasProfile = profileData?.length > 0;
                    return { user: user, hasProfile: hasProfile };
                }
            } else {
                return { user: user, hasProfile: false };
            }
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    },
);
