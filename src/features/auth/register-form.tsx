import React from 'react';

import { nopeResolver } from '@hookform/resolvers/nope';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

import { RegisterInput, registerSchema } from '@/schemas/auth';
import { useAppDispatch } from '@/store';
import { registerWithPassword } from '@/store/auth/thunks';
import { Button, InputGroup, TextField } from '@/ui';

const LoginPage = () => {
    const dispatch = useAppDispatch();
    const { register, handleSubmit, formState } = useForm<RegisterInput>({
        resolver: nopeResolver(registerSchema),
    });

    const registerUser = (values: RegisterInput) => {
        dispatch(registerWithPassword(values));
    };

    return (
        <form onSubmit={handleSubmit(registerUser)}>
            <h2 className="text-2xl mt-2 mb-4">Let{"'"}s get started</h2>
            <TextField
                label="Email"
                placeholder="username123@hotmail.com"
                type="text"
                {...register('email')}
                error={formState.errors.email && formState.errors.email.message}
            />
            <TextField
                label="Password"
                placeholder="*******"
                type="password"
                {...register('password')}
                error={
                    formState.errors.password &&
                    formState.errors.password.message
                }
            />

            <InputGroup>
                <Button type="submit" fullWidth label="Continue" />
            </InputGroup>
            <InputGroup>
                <Link href="/login">
                    <span>
                        Already have an account?{' '}
                        <span className="underline">Login</span>
                    </span>
                </Link>
            </InputGroup>
        </form>
    );
};

export default LoginPage;
