'use client';

import React from 'react';

import { nopeResolver } from '@hookform/resolvers/nope';
import { IconArrowRight } from '@tabler/icons-react';
import clsx from 'clsx';
import { useSearchParams } from 'next/navigation';
import * as Nope from 'nope-validator';
import { useForm } from 'react-hook-form';

import withoutAuth from '@/hoc/without-auth';
import { createUser } from '@/services/user';
import { CreateUserParams, UserType } from '@/types/user';
import { TextField } from '@/ui';

const formSchema = Nope.object().shape({
    username: Nope.string().required('Username is required'),
    name: Nope.string()
        .required('Name is required')
        .min(2, 'Name should be minimum of 2 characters')
        .max(48, 'Name cannot be greater than 48 character'),
    email: Nope.string()
        .email('Invalid Email Address')
        .required('Email is required'),
    password: Nope.string()
        .required('Password is required')
        .min(6, 'Password cannot be less than 6 characters')
        .max(256, 'Password must be greater than 256 characters'),
    user_type: Nope.string().required('Please select user type'),
});

const Page = () => {
    const searchParams = useSearchParams();
    const username: string = searchParams.get('username') ?? '';

    const { formState, register, watch, handleSubmit, setValue } =
        useForm<CreateUserParams>({
            resolver: nopeResolver(formSchema),
            defaultValues: {
                username: username,
                user_type: 'student',
            },
        });

    const handleFormSubmission = async (values: CreateUserParams) => {
        await createUser(values).then((result) => {});
    };

    return (
        <form onSubmit={handleSubmit(handleFormSubmission)}>
            <TextField
                label="Username"
                type="text"
                placeholder="Please choose a username."
                {...register('username')}
                disabled
                error={formState.errors.username?.message}
            />
            <TextField
                label="Email"
                type="text"
                placeholder="Enter your email."
                {...register('email')}
                error={formState.errors.email?.message}
            />
            <TextField
                label="Name"
                type="text"
                placeholder="Enter your name."
                {...register('name')}
                error={formState.errors.name?.message}
            />

            <TextField
                label="Password"
                type="password"
                placeholder="Enter your password."
                {...register('password')}
                error={formState.errors.password?.message}
            />

            <label className="text-xl font-bold my-2">Are you a/an ?</label>
            <div className="flex gap-2 my-2 ">
                {[
                    {
                        id: 'type-student',
                        value: 'student',
                    },
                    {
                        id: 'type-org',
                        value: 'organization',
                    },
                ].map((item) => {
                    return (
                        <button
                            key={item.id}
                            className={clsx(
                                'border-2 border-black p-2 rounded-md cursor-pointer',
                                watch('user_type') == item.value
                                    ? 'bg-black text-white'
                                    : 'bg-white',
                            )}
                            onClick={() =>
                                setValue('user_type', item.value as UserType)
                            }
                        >
                            {item.value}
                        </button>
                    );
                })}
            </div>
            <button
                type="submit"
                className="w-full border-2 rounded-md bg-amber-500 justify-center border-black text-xl p-2 flex items-center gap-2 shadow-[8px_8px_black] hover:shadow-none"
            >
                Continue
                <IconArrowRight />
            </button>
        </form>
    );
};

export default withoutAuth(Page);
