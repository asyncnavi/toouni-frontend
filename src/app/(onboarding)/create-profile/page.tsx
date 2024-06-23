'use client';

import { useEffect } from 'react';

import { nopeResolver } from '@hookform/resolvers/nope';
import { IconX } from '@tabler/icons-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import { useCreateProfileMutation } from '@/api/profile';
import { CreateProfile } from '@/models/profile';
import { createProfileSchema } from '@/schemas/profile';
import { RootState } from '@/store';
import { Button, TextArea, TextField } from '@/ui';
import LoadingBar from '@/ui/loading-bar';

const CreateProfilePage = () => {
    const searchParams = useSearchParams();
    const profileType = searchParams.get('profile_type');
    const router = useRouter();
    const { user } = useSelector((state: RootState) => state.auth);
    const { register, handleSubmit, formState, setValue } =
        useForm<CreateProfile>({
            resolver: nopeResolver(createProfileSchema),
        });

    useEffect(() => {
        if (profileType) {
            setValue('type', profileType);
        } else {
            router.push('/select-type');
        }
    }, [profileType, router, setValue]);

    const [createProfile, { isLoading }] = useCreateProfileMutation();

    const submitForm = async (values: CreateProfile) => {
        if (user?.id) {
            await createProfile({
                id: user.id,
                data: values,
            })
                .unwrap()
                .then(() => {
                    router.push('/app');
                })
                .catch((err) => {
                    console.error(err);
                });
        }
    };

    return (
        <div>
            <LoadingBar loading={isLoading} />
            <div className="w-full border-b py-4 sticky top-0 bg-white">
                <div className="flex justify-between w-full max-w-[600px] mx-auto items-center px-2">
                    <h1 className="uppercase font-bold">Create profile</h1>
                    <div className="bg-green-400 rounded-full w-[30px] h-[30px] flex justify-center items-center shadow-[2px_2px_#000;]">
                        <IconX size={24} />
                    </div>
                </div>
            </div>
            <form
                onSubmit={handleSubmit(submitForm)}
                className="flex flex-col gap-1 mx-auto justify-center max-w-[600px] my-4 px-2"
            >
                <TextField
                    error={
                        formState.errors.name && formState.errors.name.message
                    }
                    {...register('name')}
                    label="Name"
                    placeholder="john"
                    type="text"
                />
                <TextField
                    error={
                        formState.errors.username &&
                        formState.errors.username.message
                    }
                    {...register('username')}
                    label="Username"
                    placeholder="john@sandhu"
                    type="text"
                />
                <TextArea
                    error={formState.errors.bio && formState.errors.bio.message}
                    {...register('bio')}
                    label="Bio "
                    placeholder="john@sandhu"
                    type="text"
                />
                <TextField
                    error={
                        formState.errors.university_or_college &&
                        formState.errors.university_or_college.message
                    }
                    {...register('university_or_college')}
                    label="University/College"
                    placeholder="Chandigarh University"
                    type="text"
                />
                <TextField
                    error={
                        formState.errors.date_of_birth &&
                        formState.errors.date_of_birth.message
                    }
                    {...register('date_of_birth')}
                    label="When were you born?"
                    type="date"
                />

                <TextField
                    error={
                        formState.errors.location &&
                        formState.errors.location.message
                    }
                    {...register('location')}
                    label="Location"
                    placeholder="Mohali"
                    type="text"
                />

                <Button label="Continue" type="submit" />
            </form>
        </div>
    );
};

export default CreateProfilePage;
