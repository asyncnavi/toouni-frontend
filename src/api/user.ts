import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from '@/api/client';
import { APIResponse } from '@/api/index';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}/auth/` }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        verifyUserExists: builder.mutation<
            APIResponse<{ user_exists: boolean; identifier: string }>,
            { identifier: string }
        >({
            query: (body) => ({
                url: 'verify-existence',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['User'],
        }),
    }),
});

// Export hooks for using the endpoints
export const { useVerifyUserExistsMutation } = userApi;
