import React from 'react';

import { nopeResolver } from '@hookform/resolvers/nope';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

import { LoginInput, loginSchema } from '@/schemas/auth';
import { Button } from '@/ui/button';
import { InputGroup, TextField } from '@/ui/input';

const ForgotPasswordForm = () => {
    const { register, handleSubmit, formState } = useForm<LoginInput>({
        resolver: nopeResolver(loginSchema),
    });

    return (
        <form onSubmit={handleSubmit(() => {})}>
            <h2 className="text-2xl mt-2 mb-4">Forgot password?</h2>
            <TextField
                label="Email"
                placeholder="username123@hotmail.com"
                type="text"
                {...register('email')}
                error={formState.errors.email && formState.errors.email.message}
            />

            <InputGroup>
                <Button type="submit" fullWidth label="Continue" />
            </InputGroup>
            <InputGroup>
                <Link href="/login">
                    <span>
                        Get back to <span className="underline">Login</span>
                    </span>
                </Link>
            </InputGroup>
        </form>
    );
};

export default ForgotPasswordForm;
