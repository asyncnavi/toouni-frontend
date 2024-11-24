import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { client } from '@/api/client';
import { LoginUserParams, LoginUserResponse } from '@/models/auth';

export const loginUser = createAsyncThunk<
    LoginUserResponse,
    LoginUserParams,
    { rejectValue: string }
>('auth/loginWithPassword', async (params: LoginUserParams, thunkAPI) => {
    try {
        const response = await client.post<LoginUserResponse>(
            '/auth/login-user',
            params,
        );
        return response.data; // Return only the data
    } catch (err) {
        if (axios.isAxiosError(err) && err.response?.data) {
            return thunkAPI.rejectWithValue(err.response.data.message);
        }
        return thunkAPI.rejectWithValue('An unexpected error occurred.');
    }
});
