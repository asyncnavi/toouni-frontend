import React from 'react';

import { nopeResolver } from '@hookform/resolvers/nope';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

import { useAuth } from '@/providers/auth';
import { LoginInput, loginSchema } from '@/schemas/auth';
import { Button, InputGroup, TextField } from '@/ui';

const LoginPage = () => {
    const { register: registerUser } = useAuth();

    const { register, handleSubmit, formState } = useForm<LoginInput>({
        resolver: nopeResolver(loginSchema),
    });

    return (
        <form
            onSubmit={handleSubmit((values) =>
                registerUser().withPassword(values),
            )}
        >
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
