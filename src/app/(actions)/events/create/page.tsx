'use client';
import React, { useState } from 'react';

import { nopeResolver } from '@hookform/resolvers/nope';
import { IconArrowRight } from '@tabler/icons-react';
import { useParams, useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import { useCreateEventMutation } from '@/api/event';
import { CreateEvent as TCreateEvent } from '@/models/event';
import { createEventSchema } from '@/schemas/event';
import { RootState } from '@/store';
import { Button, TextArea, TextField } from '@/ui';

const CreateEvent = () => {
    const { user } = useSelector((state: RootState) => state.auth);
    const { register, formState, handleSubmit } = useForm<TCreateEvent>({
        resolver: nopeResolver(createEventSchema),
    });
    const router = useRouter();
    const [createNewEvent] = useCreateEventMutation();

    const submitForm = async (values: TCreateEvent) => {
        try {
            if (user) {
                const res = await createNewEvent({
                    id: user.id,
                    data: values,
                });
                router.push('/events/create/attachment?id=' + res.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(submitForm)}
            className="flex flex-col gap-1 mx-auto justify-center max-w-[600px] my-4 px-2"
        >
            <TextField
                error={formState.errors.name && formState.errors.name.message}
                {...register('name')}
                label="Event Name"
                placeholder="e.g. Spring Fest 2024"
                type="text"
            />
            <TextArea
                error={
                    formState.errors.description &&
                    formState.errors.description.message
                }
                {...register('description')}
                label="Description"
                placeholder="Describe your event. Include details like date, time, location, activities, and any other relevant information."
                type="text"
            />
            <TextField
                error={
                    formState.errors.location &&
                    formState.errors.location.message
                }
                {...register('location')}
                label="Location"
                placeholder="e.g. Main Auditorium, Building A"
                type="text"
            />
            <Button
                label="Continue"
                type="submit"
                rightIcon={<IconArrowRight />}
            />
        </form>
    );
};

export default CreateEvent;
