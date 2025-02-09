'use client';

import React, { useEffect } from 'react';

import { nopeResolver } from '@hookform/resolvers/nope';
import { IconArrowRight } from '@tabler/icons-react';
import { useSearchParams } from 'next/navigation';
import * as Nope from 'nope-validator';
import { useForm } from 'react-hook-form';

import withoutAuth from '@/hoc/without-auth';
import { TextField } from '@/ui';

import { loginUser } from '@/api/user';
import { LoginUserParams } from '@/models/auth';

const formSchema = Nope.object().shape({
    identifier: Nope.string().required('Please provide a username or Email'),
    password: Nope.string().required('Password is required'),
});
const Page = () => {
    const searchParams = useSearchParams();

    const identifier: string = searchParams.get('identifier') ?? '';

    const { formState, register, handleSubmit } = useForm<LoginUserParams>({
        resolver: nopeResolver(formSchema),
        defaultValues: {
            identifier: identifier,
        },
    });

    // Debug :

    useEffect(() => {
        console.log(formState.errors);
    }, [formState.errors]);

    const handleFormSubmission = async (values: LoginUserParams) => {
        await loginUser(values)
            .then((result) => {
                // console.log(result);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <form onSubmit={handleSubmit(handleFormSubmission)}>
            <TextField
                label="Username or email"
                type="text"
                placeholder="Enter your username."
                {...register('identifier')}
                error={formState.errors.identifier?.message}
            />
            <TextField
                label="Password"
                type="password"
                placeholder="Enter your password."
                {...register('password')}
                error={formState.errors.password?.message}
            />
            <button
                type="submit"
                className="w-full border-2 rounded-md bg-amber-500 justify-center border-black text-2xl p-2 flex items-center gap-2 shadow-[8px_8px_black] hover:shadow-none"
            >
                Continue
                <IconArrowRight />
            </button>
        </form>
    );
};
export default withoutAuth(Page);
