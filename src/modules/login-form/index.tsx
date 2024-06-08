import React from 'react';

import { nopeResolver } from '@hookform/resolvers/nope';
import { useForm } from 'react-hook-form';

import { useAuth } from '@/providers/auth';
import { LoginInput, loginSchema } from '@/schemas/auth';
import { Button } from '@/ui/button';
import { InputGroup, TextField } from '@/ui/input';

const LoginForm = () => {
    const { login } = useAuth();

    const { register, handleSubmit, formState } = useForm<LoginInput>({
        resolver: nopeResolver(loginSchema),
    });

    return (
        <form onSubmit={handleSubmit((values) => login().withPassword(values))}>
            <h2 className="text-2xl mt-2 mb-4">Login to UNIARC</h2>
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
                <span className="underline">Forgot Password?</span>
            </InputGroup>
            <InputGroup>
                <Button type="submit" fullWidth label="Continue" />
            </InputGroup>
            <InputGroup>
                <span>
                    Don{"'"}t have an account?{' '}
                    <span className="underline"> Register </span>
                </span>
            </InputGroup>
        </form>
    );
};

export default LoginForm;
