import { createAsyncThunk } from '@reduxjs/toolkit';

import { supabase } from '@/lib/supabase';

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        await supabase.auth.signOut();
        localStorage.clear();
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.message);
    }
});
