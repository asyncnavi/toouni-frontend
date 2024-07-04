import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';

import { supabase } from '@/lib/supabase';
import { CreateEvent } from '@/models/event';
import { CreateProfile, Profile } from '@/models/profile';

export const eventApi = createApi({
    reducerPath: 'eventApi',
    baseQuery: fakeBaseQuery(),
    tagTypes: ['Event'],
    endpoints: (builder) => ({
        createEvent: builder.mutation<
            string,
            { id: string; data: CreateEvent }
        >({
            queryFn: async (event) => {
                const data = { profile_id: event.id, ...event.data };
                const { data: res, error } = await supabase
                    .from('events')
                    .insert([data])
                    .select('id')
                    .single();

                if (error) {
                    return {
                        error: {
                            code: error.code,
                            error: error.message,
                        },
                    };
                }
                return { data: res.id };
            },
        }),
    }),
});
export const { useCreateEventMutation } = eventApi;
