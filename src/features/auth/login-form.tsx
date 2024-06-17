import React from 'react';

import { nopeResolver } from '@hookform/resolvers/nope';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

import { LoginInput, loginSchema } from '@/schemas/auth';
import { useAppDispatch } from '@/store';
import { loginWithPassword } from '@/store/auth/thunks';
import { Button } from '@/ui/button';
import { InputGroup, TextField } from '@/ui/input';

export default function LoginForm() {
    const dispatch = useAppDispatch();
    const { register, handleSubmit, formState } = useForm<LoginInput>({
        resolver: nopeResolver(loginSchema),
    });

    const loginUser = (values: LoginInput) => {
        dispatch(loginWithPassword(values));
    };

    return (
        <form onSubmit={handleSubmit(loginUser)}>
            <h2 className="text-2xl mt-2 mb-4">Login </h2>
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
                <Link href="/forgot">
                    <span className="underline">Forgot Password?</span>
                </Link>
            </InputGroup>
            <InputGroup>
                <Button type="submit" fullWidth label="Continue" />
            </InputGroup>
            <InputGroup>
                <Link href="/register">
                    <span>
                        Don{"'"}t have an account?{' '}
                        <span className="underline"> Register </span>
                    </span>
                </Link>
            </InputGroup>
        </form>
    );
}
