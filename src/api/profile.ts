import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query';

import { supabase } from '@/lib/supabase';
import { Profile } from '@/models/profile';

const profileApi = createApi({
    reducerPath: 'profileApi',
    baseQuery: fakeBaseQuery(),
    endpoints: (builder) => ({
        createProfile: builder.mutation<string, Profile>({
            queryFn: async (profile) => {
                const { error } = await supabase
                    .from('profiles')
                    .insert([profile]);

                if (error) {
                    return {
                        error: { status: 'CUSTOM_ERROR', error: error.message },
                    };
                }

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
                    return {
                        error: { status: 'CUSTOM_ERROR', error: error.message },
                    };
                }

                return { data: `Profile updated` };
            },
        }),
    }),
});

export default profileApi;
