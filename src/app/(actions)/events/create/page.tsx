'use client';
import React, { useState } from 'react';

import { nopeResolver } from '@hookform/resolvers/nope';
import { IconArrowRight } from '@tabler/icons-react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import { useCreateEventMutation } from '@/api/event';
import useUploadDocument from '@/hooks/use-upload-document';
import { CreateEvent as TCreateEvent } from '@/models/event';
import { createEventSchema } from '@/schemas/event';
import { RootState } from '@/store';
import { Button, TextArea, TextField } from '@/ui';
import LoadingBar from '@/ui/loading-bar';

const CreateEvent = () => {
    const { user } = useSelector((state: RootState) => state.auth);
    const { register, formState, handleSubmit } = useForm<TCreateEvent>({
        resolver: nopeResolver(createEventSchema),
    });
    const [file, setFile] = useState<File | null>(null);

    const [createNewEvent] = useCreateEventMutation();
    const { status, url, uploadDocument } = useUploadDocument({
        bucket: 'event_thumbnails',
    });

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setFile(event.target.files[0]);
        }
    };

    const handleUpload = () => {
        console.log(file);
        if (file) {
            uploadDocument(file);
        }
    };

    const submitForm = async (values: TCreateEvent) => {
        try {
            if (user) {
                const res = await createNewEvent({
                    id: user.id,
                    data: values,
                });
                console.log(res.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            {' '}
            <LoadingBar loading={status === 'uploading'} />
            <TextField onChange={handleFileChange} label="Upload" type="file" />
            <Button
                label="Upload"
                onClick={() => handleUpload()}
                variant="outlined"
            />
            {url && <Image alt={''} src={`${url}`} width="100" height="100" />}
            <form
                onSubmit={handleSubmit(submitForm)}
                className="flex flex-col gap-1 mx-auto justify-center max-w-[600px] my-4 px-2"
            >
                <TextField
                    error={
                        formState.errors.name && formState.errors.name.message
                    }
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
        </div>
    );
};

export default CreateEvent;
