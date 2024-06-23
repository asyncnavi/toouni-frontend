import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';

import { supabase } from '@/lib/supabase';
import { CreateProfile, Profile } from '@/models/profile';

export const profileApi = createApi({
    reducerPath: 'profileApi',
    baseQuery: fakeBaseQuery(),
    tagTypes: ['Profile'],
    endpoints: (builder) => ({
        createProfile: builder.mutation<
            string,
            { id: string; data: CreateProfile }
        >({
            queryFn: async (profile) => {
                const data = { id: profile.id, ...profile.data };
                const { error } = await supabase
                    .from('profiles')
                    .insert([data]);

                if (error) {
                    return {
                        error: {
                            code: error.code,
                            error: error.message,
                        },
                    };
                }
                localStorage.clear();
                return { data: `Profile created` };
            },
        }),
        updateProfile: builder.mutation<string, Profile>({
            queryFn: async (profile) => {
                const { id, ...updates } = profile;
                const { error } = await supabase
                    .from('profiles')
                    .update(updates)
                    .eq('id', id);

                if (error) {
                    console.log(error);
                    return {
                        error: { status: 'CUSTOM_ERROR', error: error.message },
                    };
                }

                return { data: `Profile updated` };
            },
        }),
        getProfile: builder.query<Profile, { id: string }>({
            queryFn: async ({ id }) => {
                const { data, error } = await supabase
                    .from('profiles')
                    .select('*')
                    .eq('id', id);

                if (error) {
                    console.log(error);
                    return {
                        error: { status: 'CUSTOM_ERROR', error: error.message },
                    };
                }

                return { data: data[0] };
            },
        }),
    }),
});

export const { useCreateProfileMutation, useGetProfileQuery } = profileApi;
