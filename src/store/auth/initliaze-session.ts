import { createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

import { authorizedClient } from '@/services/client'; // Ensure Cookies is imported
import { APIErrorResponse, APIResult, GetUserResponse } from '@/types';

export const initializeSession = createAsyncThunk(
    'auth/initialize-session',
    async (_, thunkAPI): Promise<APIResult<GetUserResponse> | null> => {
        try {
            const response = await authorizedClient('/auth/get-user'); // Make API request
            return response.data.data.user;
        } catch (error) {
            if (
                typeof error === 'object' &&
                error !== null &&
                'error' in error &&
                typeof (error as APIErrorResponse).error?.message === 'string'
            ) {
                const apiError = error as APIErrorResponse;
                Cookies.remove('Authorization');
                thunkAPI.rejectWithValue(apiError.error.message);

                return null;
            }
            return null;
        }
    },
);
